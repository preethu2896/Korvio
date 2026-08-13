"use client";

import {
  useLayoutEffect,
  useRef,
  useCallback,
  type ReactNode,
} from "react";
import Lenis from "lenis";
import "./ScrollStack.css";

/* ─── ScrollStackItem ──────────────────────────────────── */
export function ScrollStackItem({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`scroll-stack-card ${className}`.trim()}>{children}</div>
  );
}

/* ─── Props ────────────────────────────────────────────── */
interface ScrollStackProps {
  children: ReactNode;
  className?: string;
  /** Vertical distance (px) between card tops before stacking */
  itemDistance?: number;
  /** Scale reduction per card when stacked */
  itemScale?: number;
  /** Vertical offset between stacked cards (px) */
  itemStackDistance?: number;
  /** Viewport-relative position where cards stick (e.g. "18%") */
  stackPosition?: string;
  /** Viewport-relative position where scale animation ends */
  scaleEndPosition?: string;
  /** Minimum scale for the furthest-back card */
  baseScale?: number;
  /** Rotation in degrees applied per card (0 = none) */
  rotationAmount?: number;
  /** Max blur in px applied per card (0 = none) */
  blurAmount?: number;
  /** Use window scroll instead of an internal scroller */
  useWindowScroll?: boolean;
  /** Fired once when the last card stacks */
  onStackComplete?: () => void;
}

/* ─── ScrollStack ──────────────────────────────────────── */
export default function ScrollStack({
  children,
  className = "",
  itemDistance = 100,
  itemScale = 0.03,
  itemStackDistance = 30,
  stackPosition = "18%",
  scaleEndPosition = "10%",
  baseScale = 0.85,
  rotationAmount = 0,
  blurAmount = 0,
  useWindowScroll = false,
  onStackComplete,
}: ScrollStackProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const stackCompletedRef = useRef(false);
  const animationFrameRef = useRef<number | null>(null);
  const lenisRef = useRef<Lenis | null>(null);
  const cardsRef = useRef<HTMLElement[]>([]);
  const lastTransformsRef = useRef(new Map<HTMLElement, string>());
  const isUpdatingRef = useRef(false);

  /* ── helpers ──────────────────────────────────────────── */
  const clamp = (v: number, min: number, max: number) =>
    Math.min(Math.max(v, min), max);

  const calculateProgress = useCallback(
    (scrollTop: number, start: number, end: number) => {
      if (scrollTop < start) return 0;
      if (scrollTop > end) return 1;
      return (scrollTop - start) / (end - start);
    },
    []
  );

  const parsePercentage = useCallback(
    (value: string | number, containerHeight: number) => {
      if (typeof value === "string" && value.includes("%")) {
        return (parseFloat(value) / 100) * containerHeight;
      }
      return parseFloat(value as string);
    },
    []
  );

  const getScrollData = useCallback(() => {
    if (useWindowScroll) {
      return {
        scrollTop: window.scrollY,
        containerHeight: window.innerHeight,
      };
    }
    const scroller = scrollerRef.current!;
    return {
      scrollTop: scroller.scrollTop,
      containerHeight: scroller.clientHeight,
    };
  }, [useWindowScroll]);

  const getElementOffset = useCallback(
    (element: HTMLElement) => {
      if (useWindowScroll) {
        const rect = element.getBoundingClientRect();
        return rect.top + window.scrollY;
      }
      return element.offsetTop;
    },
    [useWindowScroll]
  );

  /* ── core animation loop ─────────────────────────────── */
  const updateCardTransforms = useCallback(() => {
    if (!cardsRef.current.length || isUpdatingRef.current) return;

    isUpdatingRef.current = true;

    const { scrollTop, containerHeight } = getScrollData();
    const stackPositionPx = parsePercentage(stackPosition, containerHeight);
    const scaleEndPositionPx = parsePercentage(scaleEndPosition, containerHeight);

    const totalCards = cardsRef.current.length;
    let allStacked = true;

    cardsRef.current.forEach((card, index) => {
      const cardOffset = getElementOffset(card);
      const triggerStart = cardOffset - stackPositionPx;
      const triggerEnd = triggerStart + itemDistance;
      const progress = calculateProgress(scrollTop, triggerStart, triggerEnd);

      if (progress < 1) allStacked = false;

      /* scale: shrink as stacked deeper */
      const scaleStart = cardOffset - containerHeight + scaleEndPositionPx;
      const scaleEnd = triggerEnd;
      const scaleProgress = calculateProgress(scrollTop, scaleStart, scaleEnd);
      const maxScaleReduction = (totalCards - 1 - index) * itemScale;
      const targetScale = 1 - maxScaleReduction * scaleProgress;
      const scale = clamp(targetScale, baseScale, 1);

      /* translateY: stack offset */
      const stackOffset = index * itemStackDistance * progress;
      const translateY = -stackOffset;

      /* rotation + blur (optional) */
      const rotation = rotationAmount * progress * (index % 2 === 0 ? 1 : -1);
      const blur = blurAmount * scaleProgress * (totalCards - 1 - index);

      const transform = `translate3d(0, ${translateY}px, 0) scale(${scale}) rotate(${rotation}deg)`;
      const filter = blurAmount > 0 ? `blur(${blur}px)` : "";

      /* only write to DOM if changed */
      const prev = lastTransformsRef.current.get(card);
      const key = `${transform}|${filter}`;
      if (prev !== key) {
        card.style.transform = transform;
        if (blurAmount > 0) card.style.filter = filter;
        lastTransformsRef.current.set(card, key);
      }
    });

    if (allStacked && !stackCompletedRef.current) {
      stackCompletedRef.current = true;
      onStackComplete?.();
    } else if (!allStacked) {
      stackCompletedRef.current = false;
    }

    isUpdatingRef.current = false;
  }, [
    getScrollData,
    parsePercentage,
    stackPosition,
    scaleEndPosition,
    getElementOffset,
    itemDistance,
    calculateProgress,
    itemScale,
    itemStackDistance,
    baseScale,
    rotationAmount,
    blurAmount,
    onStackComplete,
  ]);

  /* ── lifecycle ───────────────────────────────────────── */
  useLayoutEffect(() => {
    /* Respect reduced-motion */
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;

    const scroller = scrollerRef.current;
    if (!scroller) return;

    /* Collect .scroll-stack-card elements */
    cardsRef.current = Array.from(
      scroller.querySelectorAll<HTMLElement>(".scroll-stack-card")
    );

    /* RAF-based render loop */
    const raf = () => {
      updateCardTransforms();
      animationFrameRef.current = requestAnimationFrame(raf);
    };

    if (useWindowScroll) {
      /* Just start the RAF loop; no Lenis needed for window mode
         unless we want the smooth-scroll niceties. */
      const lenis = new Lenis({ autoRaf: true });
      lenisRef.current = lenis;
      animationFrameRef.current = requestAnimationFrame(raf);
    } else {
      /* Internal scroller with Lenis */
      const lenis = new Lenis({
        wrapper: scroller,
        content: scroller.firstElementChild as HTMLElement,
        autoRaf: true,
      });
      lenisRef.current = lenis;
      animationFrameRef.current = requestAnimationFrame(raf);
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      lenisRef.current?.destroy();
      lenisRef.current = null;
    };
  }, [useWindowScroll, updateCardTransforms]);

  /* ── render ──────────────────────────────────────────── */
  if (useWindowScroll) {
    return (
      <div ref={scrollerRef} className={className}>
        <div className="scroll-stack-inner">{children}</div>
      </div>
    );
  }

  return (
    <div
      ref={scrollerRef}
      className={`scroll-stack-scroller ${className}`.trim()}
    >
      <div className="scroll-stack-inner">{children}</div>
    </div>
  );
}
