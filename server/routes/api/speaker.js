import express from 'express';
import Speaker from '../../models/Speaker.js';

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const speaker = new Speaker(req.body);
        await speaker.save();
        res.status(201).json(speaker);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Support deleting a speaker via API to align with tests
router.post('/delete/:id', async (req, res) => {
    try {
        await Speaker.findByIdAndDelete(req.params.id);
        // tests expect a redirect (302)
        res.redirect(302, '/admin/speakers');
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

export default router;
