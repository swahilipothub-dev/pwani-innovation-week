import express from 'express';
import Volunteer from '../../models/Volunteer.js';

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const volunteer = new Volunteer(req.body);
        await volunteer.save();
        res.status(201).json(volunteer);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
})

export default router;