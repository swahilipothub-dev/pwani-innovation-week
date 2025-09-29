// API Configuration
export const API_BASE_URL = 'http://localhost:3000';

// API Endpoints
export const API_ENDPOINTS = {
  VOLUNTEERS: `${API_BASE_URL}/api/attendees/volunteers`,
  MENTEE_ATTENDEES: `${API_BASE_URL}/api/attendees/management`,
  TICKET_TYPES: 'https://piw-express.onrender.com/api/api/ticket-types',
} as const;
