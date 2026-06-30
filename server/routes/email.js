import express from "express";
import { sendMail } from "../utils/mailer.js";
import { requireAdmin } from "../middleware/auth.js";

const router = express.Router();

router.get("/form", requireAdmin, (req, res) => {
  res.render("admin/send-email"); // looks for views/send-email.ejs
});

router.get("/test-email", async (req, res) => {
  try {
    await sendMail({
      to: "recipient@gmail.com",
      cc: "dev@swahilipothub.co.ke",
      subject: "Test Email from Express",
      text: "<h1>Hello from Resend + Express 🚀</h1><p>This is a test email.</p>",
    });

    res.json({ success: true, message: "Email sent!" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.post("/send-email", requireAdmin, async (req, res) => {
  const { to, subject, text, html, cc } = req.body;

  try {
    const response = await sendMail({ to, subject, text, html, cc });
    res.json({ success: true, response });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

export default router;