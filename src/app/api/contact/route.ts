import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// Add or remove recipient emails here directly
const ENQUIRY_RECIPIENTS = [
  "jewels.renora@gmail.com"
];

// CC recipients for every enquiry email
const ENQUIRY_CC: string[] = [
  "amish.renorajewels@gmail.com",
  "renish.renorajewels@gmail.com",
  "umang.renorajewels@gmail.com"
];

let resend: Resend | null = null;
function getResend() {
  if (!resend) resend = new Resend(process.env.RESEND_API_KEY);
  return resend;
}

function escapeHtml(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function buildEnquiryHtml(name: string, email: string, subject: string, message: string) {
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
          <tr>
            <td style="background:#1a1a1a;padding:32px 40px;text-align:center;">
              <p style="margin:0;color:#c9a96e;font-size:10px;letter-spacing:0.4em;text-transform:uppercase;font-family:Arial,sans-serif;font-weight:600;">Renora Jewels</p>
              <p style="margin:6px 0 0;color:#ffffff;font-size:22px;letter-spacing:0.15em;font-family:'Georgia',serif;">New Enquiry</p>
              <div style="width:40px;height:1px;background:#c9a96e;margin:14px auto 0;"></div>
            </td>
          </tr>
          <tr><td style="height:3px;background:linear-gradient(to right,#c9a96e,#e8c98a,#c9a96e);"></td></tr>
          <tr>
            <td style="padding:36px 40px 20px;">
              <p style="margin:0;font-size:13px;color:#666;font-family:Arial,sans-serif;line-height:1.7;">
                A new enquiry has been submitted through the Renora Jewels website. Details are below.
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding:0 40px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding:12px 0;border-bottom:1px solid #f0ebe5;">
                    <p style="margin:0 0 3px;font-size:9px;letter-spacing:0.25em;text-transform:uppercase;color:#c9a96e;font-family:Arial,sans-serif;font-weight:700;">Customer Name</p>
                    <p style="margin:0;font-size:15px;color:#1a1a1a;font-family:'Georgia',serif;">${escapeHtml(name)}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:12px 0;border-bottom:1px solid #f0ebe5;">
                    <p style="margin:0 0 3px;font-size:9px;letter-spacing:0.25em;text-transform:uppercase;color:#c9a96e;font-family:Arial,sans-serif;font-weight:700;">Email Address</p>
                    <p style="margin:0;font-size:14px;color:#1a1a1a;font-family:Arial,sans-serif;">
                      <a href="mailto:${escapeHtml(email)}" style="color:#7B3030;text-decoration:none;">${escapeHtml(email)}</a>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:12px 0;border-bottom:1px solid #f0ebe5;">
                    <p style="margin:0 0 3px;font-size:9px;letter-spacing:0.25em;text-transform:uppercase;color:#c9a96e;font-family:Arial,sans-serif;font-weight:700;">Subject</p>
                    <p style="margin:0;font-size:14px;color:#1a1a1a;font-family:'Georgia',serif;">${escapeHtml(subject)}</p>
                  </td>
                </tr>
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
          <tr>
            <td style="padding:32px 40px;text-align:center;">
              <a href="https://mail.hostinger.com/?_task=mail&amp;_action=compose&amp;_to=${encodeURIComponent(email)}&amp;_subject=Re%3A%20${encodeURIComponent(subject)}"
                 style="display:inline-block;background:#7B3030;color:#ffffff;text-decoration:none;font-size:10px;letter-spacing:0.25em;font-family:Arial,sans-serif;font-weight:700;padding:14px 32px;">
                REPLY TO CUSTOMER
              </a>
            </td>
          </tr>
          <tr><td style="height:3px;background:linear-gradient(to right,#c9a96e,#e8c98a,#c9a96e);"></td></tr>
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

function buildThankYouHtml(name: string, subject: string) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Thank You — Renora Jewels</title>
</head>
<body style="margin:0;padding:0;background:#FAF8F5;font-family:'Georgia',serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#FAF8F5;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border:1px solid #e8ddd4;">
          <tr>
            <td style="background:#1a1a1a;padding:36px 40px;text-align:center;">
              <p style="margin:0;color:#c9a96e;font-size:10px;letter-spacing:0.4em;text-transform:uppercase;font-family:Arial,sans-serif;font-weight:600;">Renora Jewels</p>
              <p style="margin:8px 0 0;color:#ffffff;font-size:24px;letter-spacing:0.15em;font-family:'Georgia',serif;">Thank You</p>
              <div style="width:40px;height:1px;background:#c9a96e;margin:14px auto 0;"></div>
            </td>
          </tr>
          <tr><td style="height:3px;background:linear-gradient(to right,#c9a96e,#e8c98a,#c9a96e);"></td></tr>
          <tr>
            <td style="padding:44px 40px 32px;text-align:center;">
              <img src="https://www.renorajewels.in/logo/logo.png" alt="Renora Jewels" width="110" style="display:block;margin:0 auto 28px;width:110px;height:auto;" />
              <p style="margin:0 0 12px;font-size:20px;color:#1a1a1a;font-family:'Georgia',serif;letter-spacing:0.05em;">
                Dear ${escapeHtml(name)},
              </p>
              <p style="margin:0 0 20px;font-size:13px;color:#666;font-family:Arial,sans-serif;line-height:1.8;">
                Thank you for reaching out to Renora Jewels. We have received your enquiry regarding
                <strong style="color:#1a1a1a;">&ldquo;${escapeHtml(subject)}&rdquo;</strong>
                and our team will get back to you as soon as possible.
              </p>
              <p style="margin:0;font-size:13px;color:#666;font-family:Arial,sans-serif;line-height:1.8;">
                In the meantime, feel free to browse our latest collections or reach us directly at
                <a href="mailto:info@renorajewels.in" style="color:#7B3030;text-decoration:none;">info@renorajewels.in</a>
                or on WhatsApp at <strong>+91 8160149309</strong>.
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding:0 40px 40px;text-align:center;">
              <a href="https://renorajewels.in/collections"
                 style="display:inline-block;background:#7B3030;color:#ffffff;text-decoration:none;font-size:10px;letter-spacing:0.25em;font-family:Arial,sans-serif;font-weight:700;padding:14px 32px;">
                EXPLORE COLLECTIONS
              </a>
            </td>
          </tr>
          <tr>
            <td style="padding:0 40px 36px;text-align:center;">
              <div style="border-top:1px solid #f0ebe5;padding-top:24px;">
                <p style="margin:0;font-size:11px;color:#aaa;font-family:'Georgia',serif;font-style:italic;letter-spacing:0.05em;">
                  Timeless elegance crafted with passion and perfection.
                </p>
              </div>
            </td>
          </tr>
          <tr><td style="height:3px;background:linear-gradient(to right,#c9a96e,#e8c98a,#c9a96e);"></td></tr>
          <tr>
            <td style="background:#1a1a1a;padding:24px 40px;text-align:center;">
              <p style="margin:0 0 6px;color:#c9a96e;font-size:9px;letter-spacing:0.3em;font-family:Arial,sans-serif;text-transform:uppercase;">Follow Us</p>
              <p style="margin:0 0 12px;font-size:11px;font-family:Arial,sans-serif;">
                <a href="https://instagram.com/renora.jewels" style="color:#888;text-decoration:none;">@renora.jewels</a>
              </p>
              <p style="margin:0;color:#555;font-size:9px;font-family:Arial,sans-serif;letter-spacing:0.05em;">
                © ${new Date().getFullYear()} Renora Jewels &nbsp;·&nbsp; Surat, Gujarat, India
              </p>
              <p style="margin:6px 0 0;color:#444;font-size:9px;font-family:Arial,sans-serif;">
                You received this email because you contacted us via our website.
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

export async function POST(req: NextRequest) {
  if (!process.env.RESEND_API_KEY) {
    console.error("[contact] RESEND_API_KEY missing");
    return NextResponse.json({ error: "Email service not configured." }, { status: 503 });
  }

  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }

    const from = "Renora Jewels <info@renorajewels.in>";

    await Promise.all([
      getResend().emails.send({
        from,
        to: ENQUIRY_RECIPIENTS,
        cc: ENQUIRY_CC,
        replyTo: email,
        subject: `New Enquiry: ${subject}`,
        html: buildEnquiryHtml(name, email, subject, message),
      }),
      getResend().emails.send({
        from,
        to: [email],
        subject: `Thank you for contacting Renora Jewels`,
        html: buildThankYouHtml(name, subject),
      }),
    ]);

    return NextResponse.json({ success: true });
  } catch (err) {
    const detail = err instanceof Error ? err.message : String(err);
    console.error("[contact] email send failed:", err);
    return NextResponse.json({ error: "Failed to send message.", detail }, { status: 500 });
  }
}
