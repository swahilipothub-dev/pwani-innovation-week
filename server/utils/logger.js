import winston from 'winston';

const { combine, timestamp, errors, json, colorize, printf } = winston.format;

const isProduction = process.env.NODE_ENV === 'production';

const developmentFormat = combine(
  colorize(),
  timestamp(),
  errors({ stack: true }),
  printf(({ timestamp: ts, level, message, stack, ...meta }) => {
    const rest = Object.keys(meta).length ? ` ${JSON.stringify(meta)}` : '';
    return stack
      ? `[${ts}] ${level}: ${message}\n${stack}${rest}`
      : `[${ts}] ${level}: ${message}${rest}`;
  })
);

const productionFormat = combine(timestamp(), errors({ stack: true }), json());

const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: isProduction ? productionFormat : developmentFormat,
  transports: [
    new winston.transports.Console({
      handleExceptions: true
    })
  ]
});

export default logger;
