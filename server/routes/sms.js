import express from "express";
import { sendSMS } from "../routes/sms.js";

const router = express.Router();

router.post("send-sms/", async (req, res) => {
	const { phone, message } = req.body;

	try {
		const result = await sendSMS(phone, message);
		res.json({ success: true, result});
	} catch (error) {
    		res.status(500).json({ success: false, error: error.message });
	}
});

export default router;
