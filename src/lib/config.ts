// API Configuration
export const API_BASE_URL = 'https://piw-express.onrender.com';
// export const API_BASE_URL = 'http://localhost:3000';

// API Endpoints
export const API_ENDPOINTS = {
  VOLUNTEERS: `${API_BASE_URL}/api/attendees/volunteers`,
  MANAGEMENT_ATTENDEES: `${API_BASE_URL}/api/attendees/management`,
  MENTEE_ATTENDEES: `${API_BASE_URL}/api/attendees/mentees`,
  TICKET_TYPES: `${API_BASE_URL}/api/ticket-types`,
  SCHEDULES: `${API_BASE_URL}/api/schedules`,
} as const;

