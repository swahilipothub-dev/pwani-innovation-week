import express from 'express';
import {
  ManagementAttendee,
  VolunteerAttendee,
  MenteeAttendee,
  buildManagementPayload,
  buildVolunteerPayload,
  buildMenteePayload,
  handleAttendeeCreation
} from '../../utils/attendeeHelpers.js';

const router = express.Router();

const respondWithResult = async (res, createPromise) => {
  try {
    const result = await createPromise;
    if (result.error) {
      const status = result.status || 400;
      return res.status(status).json({ success: false, error: result.error });
    }
    const doc = result.doc.toObject({ versionKey: false });
    return res.status(201).json({ success: true, data: doc });
  } catch (err) {
    console.error('Attendee API error:', err);
    return res.status(500).json({ success: false, error: 'Server error' });
  }
};

router.post('/management', async (req, res) => {
  await respondWithResult(
    res,
    handleAttendeeCreation(ManagementAttendee, buildManagementPayload, req.body)
  );
});

router.post('/volunteers', async (req, res) => {
  await respondWithResult(
    res,
    handleAttendeeCreation(VolunteerAttendee, buildVolunteerPayload, req.body)
  );
});

router.post('/mentees', async (req, res) => {
  await respondWithResult(
    res,
    handleAttendeeCreation(MenteeAttendee, buildMenteePayload, req.body)
  );
});

export default router;
