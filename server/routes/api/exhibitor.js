import express from 'express';
import Exhibitor from '../../models/Exhibitor.js';

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const exhibitor = new Exhibitor(req.body);
        await exhibitor.save();
        res.status(201).json(exhibitor);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
})

export default router;