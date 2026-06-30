import express from 'express';
import { Schedule, normalizeScheduleSpeakers } from '../../models/Schedule.js';

const router = express.Router();

const formatSchedule = (schedule) => {
  const scheduleId = schedule._id?.toString?.() ?? schedule._id ?? schedule.id ?? '';
  const speakers = normalizeScheduleSpeakers(schedule.speakers).map((speaker, index) => ({
    id: `${scheduleId}:speaker:${index}`,
    name: speaker?.name || null,
    title: speaker?.title || null,
    speakerType: speaker?.speakerType || null,
    organization: speaker?.organization || null
  }));

  const track = schedule.track
    ? {
        id: schedule.track._id?.toString?.() ?? schedule.track.id ?? schedule.track._id,
        _id: schedule.track._id?.toString?.() ?? schedule.track._id ?? schedule.track.id,
        name: schedule.track.name ?? null,
        slug: schedule.track.slug ?? null,
        description: schedule.track.description ?? null
      }
    : null;

  const toIso = (value) => (value instanceof Date ? value.toISOString() : value ?? null);

  return {
    id: scheduleId,
    _id: scheduleId,
    title: schedule.title ?? null,
    description: schedule.description ?? null,
    session_rsvp_link: schedule.session_rsvp_link ?? null,
    day: schedule.day ?? null,
    date: toIso(schedule.date),
    start_time: schedule.start_time ?? null,
    end_time: schedule.end_time ?? null,
    moderator: schedule.moderator ?? null,
    venue: schedule.venue ?? null,
    type: schedule.type ?? null,
    speakers,
    track,
    createdAt: toIso(schedule.createdAt),
    updatedAt: toIso(schedule.updatedAt)
  };
};

// GET all schedules or filter by date
router.get('/', async (req, res) => {
  try {
    const { date } = req.query;

    let filter = {};
    if (date) {
      const start = new Date(date);
      start.setUTCHours(0, 0, 0, 0);
      const end = new Date(date);
      end.setUTCHours(23, 59, 59, 999);
      filter.date = { $gte: start, $lte: end };
    }

    const schedules = await Schedule.find(filter)
      .populate('track')
      .sort({ date: 1, start_time: 1, title: 1 })
      .lean();

    const formatted = schedules.map(formatSchedule);
    res.status(200).json(formatted);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
