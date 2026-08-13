import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

function buildHtml(name: string, email: string, subject: string, message: string) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Enquiry — Renora Jewels</title>
</head>
<body style="margin:0;padding:0;background:#FAF8F5;font-family:'Georgia',serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#FAF8F5;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border:1px solid #e8ddd4;">

          <!-- Header -->
          <tr>
            <td style="background:#1a1a1a;padding:32px 40px;text-align:center;">
              <p style="margin:0;color:#c9a96e;font-size:10px;letter-spacing:0.4em;text-transform:uppercase;font-family:Arial,sans-serif;font-weight:600;">Renora Jewels</p>
              <p style="margin:6px 0 0;color:#ffffff;font-size:22px;letter-spacing:0.15em;font-family:'Georgia',serif;">New Enquiry</p>
              <div style="width:40px;height:1px;background:#c9a96e;margin:14px auto 0;"></div>
            </td>
          </tr>

          <!-- Gold accent bar -->
          <tr>
            <td style="height:3px;background:linear-gradient(to right,#c9a96e,#e8c98a,#c9a96e);"></td>
          </tr>

          <!-- Intro -->
          <tr>
            <td style="padding:36px 40px 20px;">
              <p style="margin:0;font-size:13px;color:#666;font-family:Arial,sans-serif;line-height:1.7;">
                A new enquiry has been submitted through the Renora Jewels website. Details are below.
              </p>
            </td>
          </tr>

          <!-- Detail Cards -->
          <tr>
            <td style="padding:0 40px;">
              <table width="100%" cellpadding="0" cellspacing="0">

                <!-- Name -->
                <tr>
                  <td style="padding:12px 0;border-bottom:1px solid #f0ebe5;">
                    <p style="margin:0 0 3px;font-size:9px;letter-spacing:0.25em;text-transform:uppercase;color:#c9a96e;font-family:Arial,sans-serif;font-weight:700;">Customer Name</p>
                    <p style="margin:0;font-size:15px;color:#1a1a1a;font-family:'Georgia',serif;">${escapeHtml(name)}</p>
                  </td>
                </tr>

                <!-- Email -->
                <tr>
                  <td style="padding:12px 0;border-bottom:1px solid #f0ebe5;">
                    <p style="margin:0 0 3px;font-size:9px;letter-spacing:0.25em;text-transform:uppercase;color:#c9a96e;font-family:Arial,sans-serif;font-weight:700;">Email Address</p>
                    <p style="margin:0;font-size:14px;color:#1a1a1a;font-family:Arial,sans-serif;">
                      <a href="mailto:${escapeHtml(email)}" style="color:#7B3030;text-decoration:none;">${escapeHtml(email)}</a>
                    </p>
                  </td>
                </tr>

                <!-- Subject -->
                <tr>
                  <td style="padding:12px 0;border-bottom:1px solid #f0ebe5;">
                    <p style="margin:0 0 3px;font-size:9px;letter-spacing:0.25em;text-transform:uppercase;color:#c9a96e;font-family:Arial,sans-serif;font-weight:700;">Subject</p>
                    <p style="margin:0;font-size:14px;color:#1a1a1a;font-family:'Georgia',serif;">${escapeHtml(subject)}</p>
                  </td>
                </tr>

                <!-- Message -->
                <tr>
                  <td style="padding:12px 0 0;">
                    <p style="margin:0 0 8px;font-size:9px;letter-spacing:0.25em;text-transform:uppercase;color:#c9a96e;font-family:Arial,sans-serif;font-weight:700;">Message</p>
                    <div style="background:#FAF8F5;border-left:3px solid #c9a96e;padding:16px 20px;">
                      <p style="margin:0;font-size:14px;color:#444;font-family:Arial,sans-serif;line-height:1.8;white-space:pre-wrap;">${escapeHtml(message)}</p>
                    </div>
                  </td>
                </tr>

              </table>
            </td>
          </tr>

          <!-- Reply CTA -->
          <tr>
            <td style="padding:32px 40px;text-align:center;">
              <a href="mailto:${escapeHtml(email)}?subject=Re: ${escapeHtml(subject)}"
                 style="display:inline-block;background:#7B3030;color:#ffffff;text-decoration:none;font-size:10px;letter-spacing:0.25em;font-family:Arial,sans-serif;font-weight:700;padding:14px 32px;">
                REPLY TO CUSTOMER
              </a>
            </td>
          </tr>

          <!-- Gold accent bar -->
          <tr>
            <td style="height:3px;background:linear-gradient(to right,#c9a96e,#e8c98a,#c9a96e);"></td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#1a1a1a;padding:24px 40px;text-align:center;">
              <p style="margin:0;color:#888;font-size:10px;font-family:Arial,sans-serif;letter-spacing:0.1em;">
                © ${new Date().getFullYear()} Renora Jewels &nbsp;·&nbsp; info@renorajewels.in &nbsp;·&nbsp; +91 8160149309
              </p>
              <p style="margin:6px 0 0;color:#555;font-size:9px;font-family:Arial,sans-serif;">
                This email was sent automatically from the Renora Jewels contact form.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function escapeHtml(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }

    await transporter.sendMail({
      from: `"Renora Jewels" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_RECIPIENT,
      replyTo: email,
      subject: `New Enquiry: ${subject}`,
      html: buildHtml(name, email, subject, message),
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[contact] email send failed:", err);
    return NextResponse.json({ error: "Failed to send message. Please try again." }, { status: 500 });
  }
}
