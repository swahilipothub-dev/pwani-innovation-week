import express from 'express';
import cors from 'cors';
import expressLayouts from 'express-ejs-layouts';
import cookieParser from 'cookie-parser';
import methodOverride from 'method-override';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import connectDB from './config/db.js';

import speakerRoutes from './routes/api/speaker.js';
import waitlistRoutes from './routes/api/waitlist.js';
import vendorRoutes from './routes/api/vendor.js';
import inquiryRoutes from './routes/api/inquiry.js';
import volunteerRoutes from './routes/api/volunteer.js';
import exhibitorRoutes from './routes/api/exhibitor.js';
import attendeeApiRoutes from './routes/api/attendees.js';
import ticketTypeRoutes from './routes/api/tickets.js';

import adminRoutes from './routes/admin.js';
import userRoutes from './routes/users.js';
import schedulesRouter from './routes/api/schedules.js';
import authRoutes from './routes/auth.js';
import emailRoutes from './routes/email.js';

import { createRouteHandler } from "uploadthing/express";
import { uploadRouter } from "./config/uploadthing.js";
import imageRoutes from "./routes/images.js";

import { attachUser, requireAuth, requireAdmin, requireUser } from "./middleware/auth.js";
import requestLogger from './middleware/requestLogger.js';
import { seedAdmin } from "./utils/seedAdmin.js";
import logger from './utils/logger.js';

// Load env
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

connectDB().then(() => {
  seedAdmin();
});

app.set("trust proxy", 1);

// Parse allowed origins from .env
const allowedOrigins = process.env.ALLOWED_ORIGINS
  ? process.env.ALLOWED_ORIGINS.split(",")
  : [];

const corsOptions = {
    origin: ["http://localhost:3000", "http://localhost:8080", "https://piw-express.onrender.com", "https://admin.pwaniinnovationweek.com", "https://pwaniinnovationweek.com", "https://www.pwaniinnovationweek.com"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true
};

app.use(cors(corsOptions));
app.use(cookieParser());
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(attachUser);
app.use(requestLogger);

// API Docs (OpenAPI/Swagger via static page)
app.get('/openapi.json', (req, res) => {
  res.sendFile(path.join(__dirname, 'openapi', 'openapi.json'));
});
app.get('/api-docs', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'swagger.html'));
});

// Routes
app.use("/api/images", imageRoutes);
app.use("/images", imageRoutes);
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.set('layout', 'layout');
app.set('views', path.join(__dirname, 'views'));

app.use('/admin', requireAuth, requireAdmin, adminRoutes);
app.use('/users', requireUser, userRoutes);

app.use('/api/speakers', speakerRoutes);
app.use('/api/waitlist', waitlistRoutes);
app.use('/api/vendors', vendorRoutes);
app.use('/api/inquiries', inquiryRoutes);
app.use('/api/exhibitors', exhibitorRoutes);
app.use('/api/schedules', schedulesRouter);
app.use('/api/volunteers', volunteerRoutes);
app.use('/api/attendees', attendeeApiRoutes);
app.use('/api/ticket-types', ticketTypeRoutes);
// app.use('/api/sms', smsRoutes);

app.use(
  "/api/uploadthing",
  createRouteHandler({
    router: uploadRouter,
    config: {
      uploadthingId: process.env.UPLOADTHING_APP_ID,
      uploadthingSecret: process.env.UPLOADTHING_SECRET,
    },
  })
);

app.use('/email', emailRoutes);
app.use("/", authRoutes);
app.use("/auth", authRoutes);

// 404 Handler
app.use((req, res, next) => {
  if (req.originalUrl.startsWith('/api')) {
    logger.warn('API route not found', {
      requestId: req.requestId,
      method: req.method,
      path: req.originalUrl
    });
    return res.status(404).json({
      success: false,
      error: 'Not Found',
      message: `The requested resource ${req.originalUrl} was not found`,
      statusCode: 404,
      requestId: req.requestId
    });
  }

  logger.warn('Route not found', {
    method: req.method,
    path: req.originalUrl
  });
  res.status(404).send('Not Found');
});

// Error handling middleware
app.use((err, req, res, next) => {
  logger.error('Unhandled error', {
    requestId: req.requestId,
    message: err.message,
    stack: err.stack,
    path: req.originalUrl,
    method: req.method
  });

  const respond = (code, error, message, extra = {}) => {
    const body = {
      success: false,
      error,
      message,
      statusCode: code,
      requestId: req.requestId,
      ...extra
    };

    if (req.originalUrl.startsWith('/api')) {
      if (process.env.NODE_ENV === 'development' && err.stack) {
        body.stack = err.stack;
      }
      return res.status(code).json(body);
    }

    const nonApiMessage = code >= 500 ? 'An unexpected error occurred' : message;
    return res.status(code).send(nonApiMessage);
  };

  if (err.name === 'ValidationError') {
    const messages = Object.values(err.errors || {}).map((val) => val.message);
    return respond(
      400,
      'Validation Error',
      messages.length > 0 ? messages : 'Validation failed',
      { details: messages }
    );
  }

  if (err.name === 'JsonWebTokenError') {
    return respond(401, 'Authentication Error', 'Invalid or missing token');
  }

  if (err.code === 11000) {
    const field = Object.keys(err.keyValue || { field: 'field' })[0];
    return respond(400, 'Duplicate Field Error', `${field} already exists`);
  }

  if (err.name === 'MulterError') {
    return respond(400, 'File Upload Error', err.message);
  }

  const statusCode = err.statusCode || 500;
  return respond(statusCode, err.name || 'Server Error', err.message || 'Internal Server Error');
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
  logger.error('Unhandled Rejection', {
    message: err?.message,
    stack: err?.stack
  });
  server.close(() => process.exit(1));
});

process.on('uncaughtException', (err) => {
  logger.error('Uncaught Exception', {
    message: err?.message,
    stack: err?.stack
  });
  server.close(() => process.exit(1));
});

// Start server
const server = app.listen(port, '0.0.0.0', () => {
  logger.info('Server started', {
    port,
    mode: process.env.NODE_ENV,
    docs: `http://localhost:${port}/api-docs`
  });
}).on('error', (err) => {
  logger.error('Server failed to start', {
    message: err?.message,
    stack: err?.stack
  });
  process.exit(1);
});

export default app;
