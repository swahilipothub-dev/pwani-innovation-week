import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

/**
 * Send an email via Resend
 * @param {Object} options
 * @param {string} options.to - Recipient email(s) (string or array)
 * @param {string} options.subject - Email subject
 * @param {string} options.html - HTML content
 * @param {string} [options.from] - Sender email (default: data@swahilipothub.co.ke)
 */

export async function sendMail({ to, subject, cc, text, html, from }) {
  try {
    const response = await resend.emails.send({
      from: from || "data@swahilipothub.co.ke",
      to,
      cc,
      subject,
      text,
      html, // optional for HTML content
    });

    console.log("Email sent:", response);
    return response;
  } catch (error) {
    console.error("Failed to send email:", error);
    throw error;
  }
}