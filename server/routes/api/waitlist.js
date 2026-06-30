import express from 'express';
import Waitlist from '../../models/Waitlist.js';

const router = express.Router();

// Get all waitlist entries with pagination and search
router.get('/', async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const search = req.query.search || '';
        const skip = (page - 1) * limit;

        const query = {};
        if (search) {
            query.$or = [
                { first_name: { $regex: search, $options: 'i' } },
                { last_name: { $regex: search, $options: 'i' } },
                { email: { $regex: search, $options: 'i' } },
                { phone_number: { $regex: search, $options: 'i' } }
            ];
        }

        const total = await Waitlist.countDocuments(query);
        const entries = await Waitlist.find(query)
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(limit);

        res.json({
            data: entries,
            pagination: {
                total,
                page,
                totalPages: Math.ceil(total / limit),
                limit
            }
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get single waitlist entry
router.get('/:id', async (req, res) => {
    try {
        const entry = await Waitlist.findById(req.params.id);
        if (!entry) {
            return res.status(404).json({ error: 'Entry not found' });
        }
        res.json(entry);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Create new waitlist entry
router.post('/', async (req, res) => {
    try {
        const waitlistEntry = new Waitlist(req.body);
        await waitlistEntry.save();
        res.status(201).json(waitlistEntry);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Delete waitlist entry
router.delete('/:id', async (req, res) => {
    try {
        const entry = await Waitlist.findByIdAndDelete(req.params.id);
        if (!entry) {
            return res.status(404).json({ error: 'Entry not found' });
        }
        res.json({ message: 'Entry deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export default router;