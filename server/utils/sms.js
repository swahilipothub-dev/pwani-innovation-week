const africastalking = require('africastalking');
const winston = require('winston');

const { AFRICASTALKING_API_KEY, AFRICASTALKING_USERNAME, AFRICASTALKING_SMS_FROM } = process.env;

const logger = winston.createLogger({
  transports: [new winston.transports.Console()]
});

const at = africastalking({
  apiKey: AFRICASTALKING_API_KEY,
  username: AFRICASTALKING_USERNAME
});

const sms = at.SMS;

/**
 * Send SMS via Africa's Talking
 * @param {Object} params
 * @param {string|string[]} params.to - Recipient phone number(s)
 * @param {string} params.message - Message body
 * @param {string} [params.from] - Sender ID (optional)
 */
async function sendSms({ to, message, from }) {
  try {
    const options = {
      to: Array.isArray(to) ? to : [to],
      message,
      from: from || AFRICASTALKING_SMS_FROM
    };
    const response = await sms.send(options);
    logger.info('SMS sent', { to, message, response });
    return response;
  } catch (error) {
    logger.error('SMS send failed', { to, message, error });
    throw error;
  }
}

module.exports = { sendSms };
