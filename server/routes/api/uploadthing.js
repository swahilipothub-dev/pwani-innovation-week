import express from 'express';
import { createRouteHandler } from 'uploadthing/express';
import { uploadRouter } from '../../uploadthing.js';

const router = express.Router();

router.use(
  '/',
  createRouteHandler({
    router: uploadRouter,
    config: {
      callbackUrl: 'http://localhost:3000/api/uploadthing', // adjust to your deployment URL
    },
  })
);

export default router;