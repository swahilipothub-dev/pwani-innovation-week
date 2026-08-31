// API Configuration
export const API_BASE_URL = 'https://piw-express.onrender.com';
// export const API_BASE_URL = 'http://localhost:3000';

// External application forms (ERP surveys)
export const SURVEY_LINKS = {
  DEALS_DEN_INNOVATORS: 'https://erp.swahilipothub.co.ke/survey/3f321b30-2d8b-4a60-830c-81b3b5940aa2',
  DEALS_DEN_INVESTORS: 'https://erp.swahilipothub.co.ke/survey/823ce533-4c5a-488f-8c7b-ed41c722f206',
  CALL_FOR_SPEAKERS: 'https://erp.swahilipothub.co.ke/survey/5a33c8ff-aaa4-4e34-85a9-85a1ec9e4b9b',
} as const;

// API Endpoints
export const API_ENDPOINTS = {
  VOLUNTEERS: `${API_BASE_URL}/api/attendees/volunteers`,
  MANAGEMENT_ATTENDEES: `${API_BASE_URL}/api/attendees/management`,
  MENTEE_ATTENDEES: `${API_BASE_URL}/api/attendees/mentees`,
  TICKET_TYPES: `${API_BASE_URL}/api/ticket-types`,
  SCHEDULES: `${API_BASE_URL}/api/schedules`,
} as const;

