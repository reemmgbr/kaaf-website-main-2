import { NextResponse } from "next/server";
import { Resend } from "resend";

// ── In-Memory Rate Limiter ───────────────────────────────────────────────────
// Allows 5 requests per 10 minutes per IP address.
interface RateLimitRecord {
  count: number;
  resetTime: number;
}

const rateLimitStore = new Map<string, RateLimitRecord>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS_PER_WINDOW = 5;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitStore.get(ip);

  // Clean expired entries periodically
  if (rateLimitStore.size > 10000) {
    for (const [key, value] of rateLimitStore.entries()) {
      if (now > value.resetTime) {
        rateLimitStore.delete(key);
      }
    }
  }

  if (!record || now > record.resetTime) {
    rateLimitStore.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
    return true;
  }

  if (record.count >= MAX_REQUESTS_PER_WINDOW) {
    return false;
  }

  record.count += 1;
  return true;
}

// ── HTML Sanitization Helper ────────────────────────────────────────────────
function escapeHtml(unsafe: string): string {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// ── Email Validation Regex ──────────────────────────────────────────────────
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  try {
    // 1. IP extraction & rate limiting check
    const forwardedFor = req.headers.get("x-forwarded-for");
    const realIp = req.headers.get("x-real-ip");
    const clientIp = forwardedFor ? forwardedFor.split(",")[0].trim() : realIp || "127.0.0.1";

    if (!checkRateLimit(clientIp)) {
      return NextResponse.json(
        {
          success: false,
          error: "تم تجاوز الحد المسموح من الطلبات. يرجى المحاولة بعد بضع دقائق.",
        },
        { status: 429 }
      );
    }

    // 2. Parse JSON body safely
    let body: unknown;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json(
        { success: false, error: "صيغة البيانات غير صحيحة." },
        { status: 400 }
      );
    }

    if (!body || typeof body !== "object") {
      return NextResponse.json(
        { success: false, error: "البيانات المرسلة غير صحيحة." },
        { status: 400 }
      );
    }

    const { name, email, message } = body as Record<string, unknown>;

    // 3. Validation
    if (typeof name !== "string" || name.trim().length < 2 || name.trim().length > 100) {
      return NextResponse.json(
        { success: false, error: "يرجى إدخال اسم صحيح (بين 2 و 100 حرف)." },
        { status: 400 }
      );
    }

    if (
      typeof email !== "string" ||
      email.trim().length > 255 ||
      !EMAIL_REGEX.test(email.trim())
    ) {
      return NextResponse.json(
        { success: false, error: "يرجى إدخال بريد إلكتروني صحيح." },
        { status: 400 }
      );
    }

    if (
      typeof message !== "string" ||
      message.trim().length < 5 ||
      message.trim().length > 5000
    ) {
      return NextResponse.json(
        { success: false, error: "يرجى إدخال رسالة لا تقل عن 5 أحرف ولا تزيد عن 5000 حرف." },
        { status: 400 }
      );
    }

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();

    // 4. Verify Resend Configuration
    const apiKey = process.env.RESEND_API_KEY;
    const recipientEmail = process.env.CONTACT_EMAIL || "mohammedxdev20@gmail.com";
    const senderEmail = process.env.RESEND_FROM_EMAIL || "Kaaf Contact <onboarding@resend.dev>";

    if (!apiKey) {
      console.error("Missing RESEND_API_KEY environment variable.");
      return NextResponse.json(
        {
          success: false,
          error: "حدث خطأ في إعدادات الخادم، يرجى المحاولة لاحقاً أو التواصل معنا مباشرة.",
        },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    // 5. Escape values for secure HTML rendering
    const safeName = escapeHtml(trimmedName);
    const safeEmail = escapeHtml(trimmedEmail);
    const safeMessage = escapeHtml(trimmedMessage).replace(/\n/g, "<br />");

    // 6. Send Email via Resend
    const { error: resendError } = await resend.emails.send({
      from: senderEmail,
      to: [recipientEmail],
      replyTo: trimmedEmail,
      subject: `رسالة جديدة من نموذج التواصل: ${trimmedName}`,
      text: `رسالة جديدة من موقع كاف:\n\nالاسم: ${trimmedName}\nالبريد الإلكتروني: ${trimmedEmail}\n\nالرسالة:\n${trimmedMessage}`,
      html: `
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="utf-8">
  <title>رسالة جديدة من الموقع</title>
</head>
<body style="margin: 0; padding: 24px; background-color: #03111F; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #FFF7E6; direction: rtl;">
  <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width: 600px; margin: 0 auto; background-color: #03111F; border: 1px solid #D2BB79; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
    <!-- Header -->
    <tr>
      <td style="padding: 32px 24px 20px 24px; text-align: center; border-bottom: 1px solid rgba(210, 187, 121, 0.2);">
        <h1 style="margin: 0; color: #D2BB79; font-size: 24px; font-weight: bold; letter-spacing: 0.5px;">كاف | رسالة جديدة من الموقع</h1>
        <p style="margin: 8px 0 0 0; color: #E9EDF3; font-size: 14px;">تم استلام استفسار جديد عبر نموذج التواصل</p>
      </td>
    </tr>
    <!-- Content -->
    <tr>
      <td style="padding: 28px 24px;">
        <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
          <tr>
            <td style="padding-bottom: 16px;">
              <strong style="color: #D2BB79; font-size: 14px; display: block; margin-bottom: 4px;">الاسم:</strong>
              <span style="color: #FFF7E6; font-size: 16px;">${safeName}</span>
            </td>
          </tr>
          <tr>
            <td style="padding-bottom: 16px;">
              <strong style="color: #D2BB79; font-size: 14px; display: block; margin-bottom: 4px;">البريد الإلكتروني:</strong>
              <a href="mailto:${safeEmail}" style="color: #5E96B7; font-size: 16px; text-decoration: none;">${safeEmail}</a>
            </td>
          </tr>
          <tr>
            <td style="padding-top: 12px; border-top: 1px solid rgba(233, 237, 243, 0.1);">
              <strong style="color: #D2BB79; font-size: 14px; display: block; margin-bottom: 8px;">الرسالة:</strong>
              <div style="background-color: #0B0B0B; border: 1px solid rgba(94, 150, 183, 0.3); border-radius: 10px; padding: 16px; color: #FFF7E6; font-size: 15px; line-height: 1.7; white-space: pre-wrap;">${safeMessage}</div>
            </td>
          </tr>
        </table>
      </td>
    </tr>
    <!-- Footer -->
    <tr>
      <td style="padding: 16px 24px; background-color: #0B0B0B; text-align: center; border-top: 1px solid rgba(210, 187, 121, 0.2); font-size: 12px; color: #E9EDF3;">
        تم الإرسال تلقائياً من موقع كاف &copy; ${new Date().getFullYear()}
      </td>
    </tr>
  </table>
</body>
</html>
      `,
    });

    if (resendError) {
      console.error("Resend API Error:", resendError);
      return NextResponse.json(
        {
          success: false,
          error: "تعذر إرسال الرسالة في الوقت الحالي. يرجى المحاولة لاحقاً.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "تم إرسال رسالتك بنجاح!",
    });
  } catch (error) {
    console.error("Unexpected error in contact API:", error);
    return NextResponse.json(
      {
        success: false,
        error: "حدث خطأ غير متوقع. يرجى المحاولة مرة أخرى لاحقاً.",
      },
      { status: 500 }
    );
  }
}
