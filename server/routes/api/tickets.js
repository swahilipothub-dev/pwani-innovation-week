import express from 'express';
import TicketType from '../../models/TicketType.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const tickets = await TicketType.find().sort({ amount: 1, name: 1 });
    res.json(tickets);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch ticket types' });
  }
});

export default router;
