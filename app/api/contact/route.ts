import { NextResponse, type NextRequest } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const MAX_MESSAGES_PER_MINUTE = 4;
const WINDOW_MS = 60_000;

const rateLimitStore = new Map<string, number[]>();
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => {
    switch (character) {
      case "&":
        return "&amp;";
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case '"':
        return "&quot;";
      case "'":
        return "&#39;";
      default:
        return character;
    }
  });
}

function getIpAddress(request: NextRequest) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  const realIp = request.headers.get("x-real-ip");

  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim() || "unknown";
  }

  return realIp || "unknown";
}

function validatePayload(payload: {
  email?: string;
  subject?: string;
  message?: string;
  honeypot?: string;
}) {
  const errors: string[] = [];
  const email = (payload.email || "").trim();
  const subject = (payload.subject || "").trim();
  const message = (payload.message || "").trim();

  if (payload.honeypot) {
    errors.push("Blocked as spam");
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.push("Invalid email");
  }

  if (!subject) {
    errors.push("Subject is required");
  }

  if (subject.length > 140) {
    errors.push("Subject is too long");
  }

  if (!message) {
    errors.push("Message is required");
  }

  if (message.length < 8) {
    errors.push("Message is too short");
  }

  if (message.length > 4000) {
    errors.push("Message is too long");
  }

  return {
    isValid: errors.length === 0,
    errors,
    email,
    subject,
    message,
  };
}

function isRateLimited(ip: string) {
  const now = Date.now();
  const seen = rateLimitStore.get(ip) ?? [];
  const trimmed = seen.filter((ts) => now - ts < WINDOW_MS);

  trimmed.push(now);
  rateLimitStore.set(ip, trimmed);

  return trimmed.length > MAX_MESSAGES_PER_MINUTE;
}

export async function POST(request: NextRequest) {
  try {
    const ip = getIpAddress(request);

    if (isRateLimited(ip)) {
      return NextResponse.json({ error: "Too many requests. Please wait a minute and try again." }, { status: 429 });
    }

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json({ error: "Email delivery is not configured." }, { status: 500 });
    }

    if (!resend) {
      return NextResponse.json({ error: "Email provider is not available." }, { status: 500 });
    }

    const payload = await request.json();
    const validation = validatePayload(payload);

    if (!validation.isValid) {
      return NextResponse.json({ error: validation.errors[0] }, { status: 400 });
    }

    const { email, subject, message } = validation;

    await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL || "Portfolio Contact <onboarding@resend.dev>",
      to: process.env.CONTACT_TO_EMAIL || "stha.rht028@gmail.com",
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      text: `${message}\n\nFrom: ${email}`,
      html: `<p>${escapeHtml(message).replace(/\n/g, "<br />")}</p><p><strong>From:</strong> ${escapeHtml(email)}</p>`,
    });

    return NextResponse.json({ ok: true });
  } catch (_error) {
    return NextResponse.json({ error: "Could not send your message. Please try again later." }, { status: 500 });
  }
}
