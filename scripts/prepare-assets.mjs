/**
 * Korvio asset pipeline — derives brand assets from the original logo.
 *
 * The source file (`logo.png` at the repo root) is READ ONLY. It is never
 * modified, re-coloured, re-drawn or non-uniformly scaled. Derivatives are
 * produced by two lossless-in-spirit operations only:
 *   1. cropping away fully transparent padding (geometry untouched)
 *   2. uniform area-average downscale (aspect ratio preserved exactly)
 *
 * Run: node scripts/prepare-assets.mjs
 */
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { inflateSync, deflateSync } from "node:zlib";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const SOURCE = join(ROOT, "logo.png");

/* ---------------------------------- CRC32 --------------------------------- */

const CRC_TABLE = (() => {
  const table = new Int32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    table[n] = c;
  }
  return table;
})();

function crc32(buf) {
  let c = 0xffffffff;
  for (let i = 0; i < buf.length; i++) c = CRC_TABLE[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
}

/* --------------------------------- Decode --------------------------------- */

/** Decode an 8-bit RGBA (colour type 6) PNG into { width, height, data }. */
function decodePng(buffer) {
  if (buffer.readUInt32BE(0) !== 0x89504e47) throw new Error("not a PNG");

  const width = buffer.readUInt32BE(16);
  const height = buffer.readUInt32BE(20);
  const bitDepth = buffer[24];
  const colorType = buffer[25];
  if (bitDepth !== 8 || colorType !== 6) {
    throw new Error(`unsupported PNG: bitDepth=${bitDepth} colorType=${colorType}`);
  }

  const idat = [];
  let offset = 8;
  while (offset < buffer.length) {
    const length = buffer.readUInt32BE(offset);
    const type = buffer.toString("ascii", offset + 4, offset + 8);
    if (type === "IDAT") idat.push(buffer.subarray(offset + 8, offset + 8 + length));
    offset += 12 + length;
    if (type === "IEND") break;
  }

  const raw = inflateSync(Buffer.concat(idat));
  const bpp = 4;
  const stride = width * bpp;
  const data = Buffer.alloc(height * stride);
  let previous = Buffer.alloc(stride);

  for (let y = 0; y < height; y++) {
    const filter = raw[y * (stride + 1)];
    const line = raw.subarray(y * (stride + 1) + 1, y * (stride + 1) + 1 + stride);
    const current = Buffer.alloc(stride);

    for (let i = 0; i < stride; i++) {
      const a = i >= bpp ? current[i - bpp] : 0;
      const b = previous[i];
      const c = i >= bpp ? previous[i - bpp] : 0;
      let value = line[i];
      switch (filter) {
        case 0: break;
        case 1: value += a; break;
        case 2: value += b; break;
        case 3: value += (a + b) >> 1; break;
        case 4: {
          const p = a + b - c;
          const pa = Math.abs(p - a);
          const pb = Math.abs(p - b);
          const pc = Math.abs(p - c);
          value += pa <= pb && pa <= pc ? a : pb <= pc ? b : c;
          break;
        }
        default: throw new Error(`unknown filter ${filter}`);
      }
      current[i] = value & 0xff;
    }

    current.copy(data, y * stride);
    previous = current;
  }

  return { width, height, data };
}

/* --------------------------------- Encode --------------------------------- */

function chunk(type, payload) {
  const length = Buffer.alloc(4);
  length.writeUInt32BE(payload.length);
  const body = Buffer.concat([Buffer.from(type, "ascii"), payload]);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(body));
  return Buffer.concat([length, body, crc]);
}

function encodePng({ width, height, data }) {
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8; // bit depth
  ihdr[9] = 6; // RGBA
  const stride = width * 4;
  const raw = Buffer.alloc(height * (stride + 1));
  for (let y = 0; y < height; y++) {
    raw[y * (stride + 1)] = 0; // filter: none
    data.copy(raw, y * (stride + 1) + 1, y * stride, (y + 1) * stride);
  }
  return Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    chunk("IHDR", ihdr),
    chunk("IDAT", deflateSync(raw, { level: 9 })),
    chunk("IEND", Buffer.alloc(0)),
  ]);
}

/* -------------------------------- Transforms ------------------------------- */

/** Bounding box of every pixel with meaningful alpha. */
function inkBounds(image, alphaThreshold = 8) {
  let minX = image.width;
  let minY = image.height;
  let maxX = -1;
  let maxY = -1;
  for (let y = 0; y < image.height; y++) {
    for (let x = 0; x < image.width; x++) {
      if (image.data[(y * image.width + x) * 4 + 3] > alphaThreshold) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }
  if (maxX < 0) throw new Error("image is fully transparent");
  return { minX, minY, maxX, maxY, width: maxX - minX + 1, height: maxY - minY + 1 };
}

function crop(image, x0, y0, width, height) {
  const data = Buffer.alloc(width * height * 4);
  for (let y = 0; y < height; y++) {
    const sourceY = Math.min(Math.max(y0 + y, 0), image.height - 1);
    for (let x = 0; x < width; x++) {
      const sourceX = x0 + x;
      const target = (y * width + x) * 4;
      if (sourceX < 0 || sourceX >= image.width || y0 + y < 0 || y0 + y >= image.height) continue;
      image.data.copy(data, target, (sourceY * image.width + sourceX) * 4, (sourceY * image.width + sourceX) * 4 + 4);
    }
  }
  return { width, height, data };
}

/**
 * Uniform box-filter downscale. Averages in premultiplied space so that
 * transparent padding never bleeds dark fringes into the artwork.
 */
function resize(image, width, height) {
  const data = Buffer.alloc(width * height * 4);
  const xRatio = image.width / width;
  const yRatio = image.height / height;

  for (let y = 0; y < height; y++) {
    const y0 = Math.floor(y * yRatio);
    const y1 = Math.max(y0 + 1, Math.min(Math.ceil((y + 1) * yRatio), image.height));
    for (let x = 0; x < width; x++) {
      const x0 = Math.floor(x * xRatio);
      const x1 = Math.max(x0 + 1, Math.min(Math.ceil((x + 1) * xRatio), image.width));

      let r = 0, g = 0, b = 0, a = 0, count = 0;
      for (let sy = y0; sy < y1; sy++) {
        for (let sx = x0; sx < x1; sx++) {
          const i = (sy * image.width + sx) * 4;
          const alpha = image.data[i + 3] / 255;
          r += image.data[i] * alpha;
          g += image.data[i + 1] * alpha;
          b += image.data[i + 2] * alpha;
          a += image.data[i + 3];
          count++;
        }
      }

      const target = (y * width + x) * 4;
      const alphaAverage = a / count;
      // Un-premultiply back to straight alpha; guard against divide-by-zero on
      // fully transparent blocks.
      const unpremultiply = alphaAverage > 0 ? 255 / alphaAverage : 0;
      data[target] = Math.round(Math.min(255, (r / count) * unpremultiply));
      data[target + 1] = Math.round(Math.min(255, (g / count) * unpremultiply));
      data[target + 2] = Math.round(Math.min(255, (b / count) * unpremultiply));
      data[target + 3] = Math.round(alphaAverage);
    }
  }

  return { width, height, data };
}

/** Composite `image` centred onto an opaque rounded-rect canvas. */
function onRoundedCanvas(image, size, padding, radius, background) {
  const data = Buffer.alloc(size * size * 4);
  const [bgR, bgG, bgB] = background;

  const inside = (x, y) => {
    const rx = Math.min(x, size - 1 - x);
    const ry = Math.min(y, size - 1 - y);
    if (rx >= radius || ry >= radius) return true;
    const dx = radius - rx;
    const dy = radius - ry;
    return dx * dx + dy * dy <= radius * radius;
  };

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const i = (y * size + x) * 4;
      if (!inside(x, y)) continue;
      data[i] = bgR;
      data[i + 1] = bgG;
      data[i + 2] = bgB;
      data[i + 3] = 255;
    }
  }

  const inner = size - padding * 2;
  const scale = Math.min(inner / image.width, inner / image.height);
  const scaled = resize(image, Math.round(image.width * scale), Math.round(image.height * scale));
  const offsetX = Math.round((size - scaled.width) / 2);
  const offsetY = Math.round((size - scaled.height) / 2);

  for (let y = 0; y < scaled.height; y++) {
    for (let x = 0; x < scaled.width; x++) {
      const source = (y * scaled.width + x) * 4;
      const alpha = scaled.data[source + 3] / 255;
      if (alpha === 0) continue;
      const target = ((offsetY + y) * size + offsetX + x) * 4;
      if (target < 0 || target + 3 >= data.length) continue;
      for (let c = 0; c < 3; c++) {
        data[target + c] = Math.round(scaled.data[source + c] * alpha + data[target + c] * (1 - alpha));
      }
      data[target + 3] = 255;
    }
  }

  return { width: size, height: size, data };
}

/* ----------------------------------- Run ---------------------------------- */

const source = decodePng(readFileSync(SOURCE));
const bounds = inkBounds(source);

console.log(`source        ${source.width}x${source.height}`);
console.log(`ink bounds    ${bounds.width}x${bounds.height} at (${bounds.minX},${bounds.minY})`);

mkdirSync(join(ROOT, "public", "brand"), { recursive: true });

// 1. Untouched copy for <Image> use — identical bytes to the source.
writeFileSync(join(ROOT, "public", "brand", "logo.png"), readFileSync(SOURCE));

// 2. Tight crop (2px transparent safety margin) so the mark is optically large
//    in the navbar and footer instead of floating in dead space.
const margin = 2;
const mark = crop(
  source,
  bounds.minX - margin,
  bounds.minY - margin,
  bounds.width + margin * 2,
  bounds.height + margin * 2,
);
writeFileSync(join(ROOT, "public", "brand", "logo-mark.png"), encodePng(mark));
console.log(`logo-mark     ${mark.width}x${mark.height}`);

// 3. Square, transparent crop for favicon / icon use. Centred on the ink so
//    the K stays optically centred; no scaling, so geometry is exact.
const squareSize = Math.max(bounds.width, bounds.height) + 24;
const square = crop(
  source,
  Math.round(bounds.minX + bounds.width / 2 - squareSize / 2),
  Math.round(bounds.minY + bounds.height / 2 - squareSize / 2),
  squareSize,
  squareSize,
);
writeFileSync(join(ROOT, "app", "icon.png"), encodePng(square));
console.log(`app/icon.png  ${square.width}x${square.height}`);

// 4. Apple touch icon — Apple does not honour transparency, so the mark is
//    composited onto Korvio's deep navy at 180x180.
const appleIcon = onRoundedCanvas(square, 180, 18, 40, [0x07, 0x08, 0x1a]);
writeFileSync(join(ROOT, "app", "apple-icon.png"), encodePng(appleIcon));
console.log(`apple-icon    ${appleIcon.width}x${appleIcon.height}`);

console.log("done — source logo.png untouched");
