import express from 'express';
import Speaker from '../models/Speaker.js';
import Vendor from '../models/Vendor.js';
import Waitlist from '../models/Waitlist.js';
import Inquiry from '../models/Inquiry.js';
import { Schedule } from '../models/Schedule.js';

const router = express.Router();

router.get('/', async (req, res) => {
  const [speakerCount, vendorCount, waitlistCount, inquiryCount, scheduleCount] = await Promise.all([
    Speaker.countDocuments(),
    Vendor.countDocuments(),
    Waitlist.countDocuments(),
    Inquiry.countDocuments(),
    Schedule.countDocuments()
  ]);

  res.render('users/dashboard', {
    title: 'User Dashboard',
    layout: 'layouts/userLayout',
    speakerCount,
    vendorCount,
    waitlistCount,
    inquiryCount,
    scheduleCount,
    user: req.user
  });
});

router.get('/speakers', async (req, res) => {
  const speakers = await Speaker.find();
  res.render('users/speakers', { title: 'Speakers', speakers, layout: 'layouts/userLayout' });
});

router.get('/vendors', async (req, res) => {
  const vendors = await Vendor.find();
  res.render('users/vendors', { vendors, layout: 'layouts/userLayout' });
});

router.get('/waitlist', async (req, res) => {
  const waitlist = await Waitlist.find();
  res.render('users/waitlist', { waitlist, layout: 'layouts/userLayout' });
});

router.get('/inquiries', async (req, res) => {
  const inquiries = await Inquiry.find();
  res.render('users/inquiries', { inquiries, layout: 'layouts/userLayout' });
});

router.get('/schedules', async (req, res) => {
  const schedules = await Schedule.find().populate('track');
  res.render('users/schedules', { schedules, layout: 'layouts/userLayout' });
});

router.get('/schedules/:id', async (req, res) => {
  const schedule = await Schedule.findById(req.params.id).populate('track');
  if (!schedule) return res.status(404).send('Schedule not found');
  res.render('users/schedule-view', { schedule, layout: 'layouts/userLayout' });
});

export default router;
