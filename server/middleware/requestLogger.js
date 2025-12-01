import { randomUUID } from 'node:crypto';
import logger from '../utils/logger.js';

const SENSITIVE_KEYS = new Set([
  'password',
  'confirm_password',
  'current_password',
  'new_password',
  'token',
  'secret',
  'apiKey',
  'api_key'
]);

const redact = (value) => {
  if (!value || typeof value !== 'object') {
    return value;
  }

  if (Array.isArray(value)) {
    return value.slice(0, 10).map(redact);
  }

  return Object.entries(value).reduce((acc, [key, val]) => {
    const normalizedKey = key.toLowerCase();
    acc[key] = SENSITIVE_KEYS.has(normalizedKey) ? '[REDACTED]' : redact(val);
    return acc;
  }, {});
};

const requestLogger = (req, res, next) => {
  if (!req.originalUrl.startsWith('/api')) {
    return next();
  }

  const requestId = randomUUID();
  req.requestId = requestId;
  res.locals.requestId = requestId;

  const start = process.hrtime.bigint();
  const metadata = {
    requestId,
    method: req.method,
    path: req.originalUrl,
    query: Object.keys(req.query || {}).length ? req.query : undefined,
    userId: req.user?._id?.toString?.()
  };

  logger.info('API request started', metadata);

  res.on('finish', () => {
    const durationMs = Number(process.hrtime.bigint() - start) / 1e6;
    const responsePayload = {
      ...metadata,
      status: res.statusCode,
      durationMs: Number(durationMs.toFixed(2)),
      contentLength: res.get('content-length')
        ? parseInt(res.get('content-length'), 10)
        : undefined,
      body:
        req.method === 'GET' || !req.body || Object.keys(req.body).length === 0
          ? undefined
          : redact(req.body)
    };

    const level =
      res.statusCode >= 500
        ? 'error'
        : res.statusCode >= 400
        ? 'warn'
        : 'info';

    logger.log(level, 'API request completed', responsePayload);
  });

  res.on('close', () => {
    if (!res.writableEnded) {
      const durationMs = Number(process.hrtime.bigint() - start) / 1e6;
      logger.warn('API connection closed before response completed', {
        ...metadata,
        durationMs: Number(durationMs.toFixed(2))
      });
    }
  });

  next();
};

export default requestLogger;
