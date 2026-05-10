import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, message, type } = body;

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 }
    );
  }

  const RESEND_API_KEY = process.env.RESEND_API_KEY;

  if (!RESEND_API_KEY) {
    return NextResponse.json(
      { error: "Email service not configured." },
      { status: 500 }
    );
  }

  const subject = type
    ? `HelioStack: ${type} inquiry from ${name}`
    : `HelioStack: New message from ${name}`;

  const textBody = [
    `Name: ${name}`,
    `Email: ${email}`,
    type ? `Type: ${type}` : "",
    "",
    message,
  ]
    .filter(Boolean)
    .join("\n");

  const htmlBody = [
    `<h2>New ${type || "general"} inquiry</h2>`,
    `<p><strong>Name:</strong> ${name}</p>`,
    `<p><strong>Email:</strong> ${email}</p>`,
    type ? `<p><strong>Type:</strong> ${type}</p>` : "",
    `<hr />`,
    `<p>${message.replace(/\n/g, "<br />")}</p>`,
  ]
    .filter(Boolean)
    .join("\n");

  const resendResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "SplatChain <onboarding@resend.dev>",
      to: ["mattshekwork@gmail.com"],
      reply_to: email,
      subject,
      text: textBody,
      html: htmlBody,
    }),
  });

  if (!resendResponse.ok) {
    const error = await resendResponse.text();
    console.error("Resend error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true });
}