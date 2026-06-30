import express from 'express';
import Inquiry from '../../models/Inquiry.js';

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const inquiry = new Inquiry(req.body);
        await inquiry.save();
        res.status(201).json(inquiry);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

export default router;