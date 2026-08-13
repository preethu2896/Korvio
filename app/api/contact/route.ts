import { NextResponse } from "next/server";

const DEFAULT_WEB3FORMS_KEY = "dbd23e29-0325-4391-9837-a7da5a4ac004";

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({}));
    const { name, email, brand, phone, looking_for, message, botcheck } = body;

    // Honeypot spam protection
    if (botcheck) {
      return NextResponse.json({ success: true, message: "Submission successful" });
    }

    // Required fields validation
    if (!name?.trim() || !email?.trim() || !brand?.trim() || !message?.trim()) {
      return NextResponse.json(
        { success: false, message: "Missing required fields." },
        { status: 400 }
      );
    }

    const accessKey =
      process.env.WEB3FORMS_ACCESS_KEY ||
      process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ||
      DEFAULT_WEB3FORMS_KEY;

    const payload = {
      access_key: accessKey,
      subject: `New Korvio Brand Inquiry — ${brand.trim()}`,
      from_name: "Korvio Website",
      name: name.trim(),
      email: email.trim(),
      brand: brand.trim(),
      phone: phone?.trim() || "N/A",
      looking_for: looking_for || "Creator Campaign",
      message: message.trim(),
    };

    const formEndpoint =
      process.env.NEXT_PUBLIC_FORM_ENDPOINT || "https://api.web3forms.com/submit";

    const response = await fetch(formEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json().catch(() => ({}));

    if (response.ok && data?.success) {
      return NextResponse.json({ success: true, message: "Message sent successfully!" });
    }

    console.error("Web3Forms Backend Submission Error:", {
      status: response.status,
      success: data?.success ?? false,
      message: data?.message || "Web3Forms request rejected",
    });

    return NextResponse.json(
      {
        success: false,
        message: data?.message || "Failed to submit inquiry to provider.",
      },
      { status: response.status || 500 }
    );
  } catch (error) {
    console.error("Contact API exception:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error occurred." },
      { status: 500 }
    );
  }
}
