# PIW Express API Documentation

This document provides comprehensive documentation for the PIW Express API endpoints, including request/response formats, data structures, and frontend integration examples.

## Base URL

```
http://localhost:3000/api
```

## Authentication

Most endpoints are public and don't require authentication. Admin-only endpoints require a valid JWT token in cookies.

## API Endpoints

### 1. Speakers API

#### Create Speaker
**POST** `/api/speakers`

Creates a new speaker submission.

**Request Body:**
```json
{
  "email": "speaker@example.com",
  "phone_number": "+254712345678",
  "first_name": "John",
  "last_name": "Doe",
  "middle_name": "Smith",
  "gender": "male",
  "country": "Kenya",
  "location": "kenya - coast",
  "thematic_area": "Digital Track",
  "session_type": "Keynote Address",
  "session_title": "The Future of Technology",
  "session_description": "Exploring emerging technologies and their impact",
  "target_audience": "experience",
  "target_type": "technical",
  "audience_engagement": "Q and A",
  "agree_terms": true,
  "agree_communications": true,
  "delivery_type": "physical"
}
```

**Response:**
```json
{
  "_id": "64a1b2c3d4e5f6789abcdef0",
  "email": "speaker@example.com",
  "phone_number": "+254712345678",
  "first_name": "John",
  "last_name": "Doe",
  "middle_name": "Smith",
  "gender": "male",
  "country": "Kenya",
  "location": "kenya - coast",
  "thematic_area": "Digital Track",
  "session_type": "Keynote Address",
  "session_title": "The Future of Technology",
  "session_description": "Exploring emerging technologies and their impact",
  "target_audience": "experience",
  "target_type": "technical",
  "audience_engagement": "Q and A",
  "agree_terms": true,
  "agree_communications": true,
  "delivery_type": "physical",
  "is_accepted": false,
  "createdAt": "2023-07-01T10:00:00.000Z",
  "updatedAt": "2023-07-01T10:00:00.000Z"
}
```

**Fields:**
- `session_rsvp_link` (string | null): Optional RSVP URL attendees can use to confirm participation.
- `speakers` contains structured speaker entries, each with its own stable `id` for UI lists.

**Frontend Example:**
```javascript
const submitSpeaker = async (speakerData) => {
  try {
    const response = await fetch('/api/speakers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(speakerData)
    });
    
    if (response.ok) {
      const result = await response.json();
      console.log('Speaker created:', result);
      return result;
    } else {
      const error = await response.json();
      throw new Error(error.error);
    }
  } catch (error) {
    console.error('Error creating speaker:', error);
    throw error;
  }
};
```

#### Delete Speaker (Admin Only)
**POST** `/api/speakers/delete/:id`

Deletes a speaker by ID. Requires admin authentication.

**Response:** Redirects to `/admin/speakers`

---

### 2. Vendors API

#### Create Vendor
**POST** `/api/vendors`

Creates a new vendor application.

**Request Body:**
```json
{
  "first_name": "Jane",
  "last_name": "Smith",
  "email": "vendor@example.com",
  "phone_number": "+254712345678",
  "agree_terms": true,
  "agree_communications": true,
  "business_name": "Coastal Catering",
  "business_address": "Mombasa, Kenya",
  "business_description": "Fresh seafood and local cuisine",
  "is_registered": true,
  "business_phone": "+254712345679",
  "business_email": "info@coastalcatering.com",
  "vendor_type": "food"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Vendor created successfully",
  "data": {
    "_id": "64a1b2c3d4e5f6789abcdef1",
    "first_name": "Jane",
    "last_name": "Smith",
    "email": "vendor@example.com",
    "phone_number": "+254712345678",
    "agree_terms": true,
    "agree_communications": true,
    "business_name": "Coastal Catering",
    "business_address": "Mombasa, Kenya",
    "business_description": "Fresh seafood and local cuisine",
    "is_registered": true,
    "business_phone": "+254712345679",
    "business_email": "info@coastalcatering.com",
    "vendor_type": "food",
    "is_accepted": false,
    "createdAt": "2023-07-01T10:00:00.000Z",
    "updatedAt": "2023-07-01T10:00:00.000Z"
  }
}
```

**Validation Rules:**
- `vendor_type` must be one of: `"food"`, `"drinks"`, `"food and drinks"`
- All fields except `middle_name` are required
- Boolean fields accept: `true`, `"true"`, `"on"`, `1`, `"1"`

**Frontend Example:**
```javascript
const submitVendor = async (vendorData) => {
  try {
    const response = await fetch('/api/vendors', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(vendorData)
    });
    
    const result = await response.json();
    
    if (result.success) {
      console.log('Vendor created:', result.data);
      return result.data;
    } else {
      throw new Error(result.message);
    }
  } catch (error) {
    console.error('Error creating vendor:', error);
    throw error;
  }
};
```

---

### 3. Waitlist API

#### Get Waitlist Entries
**GET** `/api/waitlist`

Retrieves paginated waitlist entries with optional search.

**Query Parameters:**
- `page` (optional): Page number (default: 1)
- `limit` (optional): Items per page (default: 10)
- `search` (optional): Search term for name, email, or phone

**Example Request:**
```
GET /api/waitlist?page=1&limit=5&search=john
```

**Response:**
```json
{
  "data": [
    {
      "_id": "64a1b2c3d4e5f6789abcdef2",
      "first_name": "John",
      "last_name": "Doe",
      "email": "john@example.com",
      "phone_number": "+254712345678",
      "agree_terms": true,
      "agree_communications": true,
      "createdAt": "2023-07-01T10:00:00.000Z",
      "updatedAt": "2023-07-01T10:00:00.000Z"
    }
  ],
  "pagination": {
    "total": 25,
    "page": 1,
    "totalPages": 5,
    "limit": 5
  }
}
```

#### Get Single Waitlist Entry
**GET** `/api/waitlist/:id`

Retrieves a specific waitlist entry by ID.

**Response:**
```json
{
  "_id": "64a1b2c3d4e5f6789abcdef2",
  "first_name": "John",
  "last_name": "Doe",
  "email": "john@example.com",
  "phone_number": "+254712345678",
  "agree_terms": true,
  "agree_communications": true,
  "createdAt": "2023-07-01T10:00:00.000Z",
  "updatedAt": "2023-07-01T10:00:00.000Z"
}
```

#### Create Waitlist Entry
**POST** `/api/waitlist`

Creates a new waitlist entry.

**Request Body:**
```json
{
  "first_name": "Jane",
  "last_name": "Smith",
  "email": "jane@example.com",
  "phone_number": "+254712345678",
  "agree_terms": true,
  "agree_communications": true
}
```

#### Delete Waitlist Entry (Admin Only)
**DELETE** `/api/waitlist/:id`

Deletes a waitlist entry by ID. Requires admin authentication.

**Response:**
```json
{
  "message": "Entry deleted successfully"
}
```

**Frontend Example:**
```javascript
// Get paginated waitlist entries
const getWaitlistEntries = async (page = 1, limit = 10, search = '') => {
  try {
    const params = new URLSearchParams({ page, limit, search });
    const response = await fetch(`/api/waitlist?${params}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching waitlist:', error);
    throw error;
  }
};

// Create waitlist entry
const addToWaitlist = async (entryData) => {
  try {
    const response = await fetch('/api/waitlist', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(entryData)
    });
    
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error adding to waitlist:', error);
    throw error;
  }
};
```

---

### 4. Schedules API

#### Get Schedules
**GET** `/api/schedules`

Retrieves all schedules or filters by date.

**Query Parameters:**
- `date` (optional): Filter by specific date (YYYY-MM-DD format)

**Example Request:**
```
GET /api/schedules?date=2023-07-15
```

**Response:**
```json
[
  {
    "_id": "64a1b2c3d4e5f6789abcdef3",
    "id": "64a1b2c3d4e5f6789abcdef3",
    "title": "Opening Ceremony",
    "description": "Welcome and keynote address",
    "session_rsvp_link": "https://events.pwaniinnovationweek.com/rsvp/opening",
    "day": 1,
    "date": "2024-07-15T09:00:00.000Z",
    "start_time": "09:00",
    "end_time": "10:30",
    "moderator": "Mary Wekesa",
    "venue": "Main Auditorium",
    "type": "Session",
    "track": {
      "id": "64a1b2c3d4e5f6789abcdef4",
      "name": "Youth Agency",
      "slug": "youth-agency",
      "description": "Sessions centered on empowering youth leadership and impact."
    },
    "speakers": [
      {
        "id": "64a1b2c3d4e5f6789abcdef3:speaker:0",
        "name": "John Doe",
        "title": "Program Lead",
        "speakerType": "Keynote Speaker",
        "organization": "Pwani Innovation Hub"
      },
      {
        "id": "64a1b2c3d4e5f6789abcdef3:speaker:1",
        "name": "Amina Abdalla",
        "title": "Founder & CEO",
        "speakerType": "Guest Speaker",
        "organization": "Coastline Ventures"
      }
    ],
    "createdAt": "2024-06-20T10:00:00.000Z",
    "updatedAt": "2024-06-28T12:30:00.000Z"
  }
]
```

**Frontend Example:**
```javascript
const getSchedules = async (date = null) => {
  try {
    const url = date ? `/api/schedules?date=${date}` : '/api/schedules';
    const response = await fetch(url);
    const schedules = await response.json();
    return schedules;
  } catch (error) {
    console.error('Error fetching schedules:', error);
    throw error;
  }
};
```

---

### 5. Ticket Types API

#### Get Ticket Types
**GET** `/api/ticket-types`

Retrieves all available ticket types.

**Response:**
```json
[
  {
    "_id": "64a1b2c3d4e5f6789abcdef",
    "name": "Early Bird",
    "amount": 4999,
    "description": "Discounted access for early registrants",
    "payment_link": "https://payment.example.com/early-bird",
    "createdAt": "2023-07-01T10:00:00.000Z",
    "updatedAt": "2023-07-01T10:00:00.000Z"
  },
  {
    "_id": "64a1b2c3d4e5f6789abcdef1",
    "name": "Regular",
    "amount": 7999,
    "description": "Standard attendee access",
    "payment_link": "https://payment.example.com/regular",
    "createdAt": "2023-07-01T10:00:00.000Z",
    "updatedAt": "2023-07-01T10:00:00.000Z"
  }
]
```

**Frontend Example:**
```javascript
const getTicketTypes = async () => {
  try {
    const response = await fetch('/api/ticket-types');
    const ticketTypes = await response.json();
    return ticketTypes;
  } catch (error) {
    console.error('Error fetching ticket types:', error);
    throw error;
  }
};
```

---

### 6. Exhibitors API

#### Create Exhibitor
**POST** `/api/exhibitors`

Creates a new exhibitor application.

**Request Body:**
```json
{
  "company_name": "Tech Solutions Ltd",
  "contact_person": "Jane Doe",
  "email": "jane@techsolutions.com",
  "phone_number": "+254712345678",
  "booth_preference": "indoor",
  "products_description": "Software solutions and consulting",
  "agree_terms": true,
  "agree_communications": true
}
```

**Response:**
```json
{
  "_id": "64a1b2c3d4e5f6789abcdef6",
  "company_name": "Tech Solutions Ltd",
  "contact_person": "Jane Doe",
  "email": "jane@techsolutions.com",
  "phone_number": "+254712345678",
  "booth_preference": "indoor",
  "products_description": "Software solutions and consulting",
  "agree_terms": true,
  "agree_communications": true,
  "status": "pending",
  "createdAt": "2023-07-01T10:00:00.000Z",
  "updatedAt": "2023-07-01T10:00:00.000Z"
}
```

---

### 7. Volunteers API

#### Create Volunteer
**POST** `/api/volunteers`

Creates a new volunteer application.

**Request Body:**
```json
{
  "first_name": "John",
  "last_name": "Doe",
  "email": "john@example.com",
  "phone_number": "+254712345678",
  "id_number": "12345678",
  "department": "logistics",
  "gender": "male",
  "agree_terms": true,
  "agree_communications": true
}
```

**Response:**
```json
{
  "_id": "64a1b2c3d4e5f6789abcdef7",
  "first_name": "John",
  "last_name": "Doe",
  "email": "john@example.com",
  "phone_number": "+254712345678",
  "id_number": "12345678",
  "department": "logistics",
  "gender": "male",
  "agree_terms": true,
  "agree_communications": true,
  "createdAt": "2023-07-01T10:00:00.000Z",
  "updatedAt": "2023-07-01T10:00:00.000Z"
}
```

---

### 8. Inquiries API

#### Create Inquiry
**POST** `/api/inquiries`

Creates a new inquiry.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone_number": "+254712345678",
  "subject": "Partnership Inquiry",
  "message": "I would like to discuss partnership opportunities",
  "inquiry_type": "sponsorship",
  "agree_terms": true,
  "agree_communications": true
}
```

**Response:**
```json
{
  "_id": "64a1b2c3d4e5f6789abcdef8",
  "name": "John Doe",
  "email": "john@example.com",
  "phone_number": "+254712345678",
  "subject": "Partnership Inquiry",
  "message": "I would like to discuss partnership opportunities",
  "inquiry_type": "sponsorship",
  "agree_terms": true,
  "agree_communications": true,
  "is_resolved": false,
  "createdAt": "2023-07-01T10:00:00.000Z",
  "updatedAt": "2023-07-01T10:00:00.000Z"
}
```

---

### 9. Images API

#### Get Images
**GET** `/api/images`

Retrieves all uploaded images.

**Response:**
```json
[
  {
    "_id": "64a1b2c3d4e5f6789abcdef9",
    "url": "https://uploadthing.com/f/abc123",
    "key": "abc123",
    "uploadedBy": "admin",
    "uploadedAt": "2023-07-01T10:00:00.000Z"
  }
]
```

#### Save Image Reference
**POST** `/api/images`

Saves a reference to an uploaded image.

**Request Body:**
```json
{
  "url": "https://uploadthing.com/f/abc123",
  "key": "abc123",
  "uploadedBy": "admin"
}
```

**Response:**
```json
{
  "_id": "64a1b2c3d4e5f6789abcdef9",
  "url": "https://uploadthing.com/f/abc123",
  "key": "abc123",
  "uploadedBy": "admin",
  "uploadedAt": "2023-07-01T10:00:00.000Z"
}
```

---

## Error Handling

All API endpoints return appropriate HTTP status codes and error messages:

- **200**: Success
- **201**: Created
- **400**: Bad Request (validation errors)
- **404**: Not Found
- **500**: Internal Server Error

**Error Response Format:**
```json
{
  "error": "Error message",
  "success": false,
  "message": "Human-readable error message"
}
```

## Frontend Integration Best Practices

### 1. Error Handling
```javascript
const handleApiCall = async (url, options = {}) => {
  try {
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers
      },
      ...options
    });
    
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || error.message || 'Request failed');
    }
    
    return await response.json();
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};
```

### 2. Form Validation
```javascript
const validateForm = (data, requiredFields) => {
  const errors = {};
  
  requiredFields.forEach(field => {
    if (!data[field] || String(data[field]).trim() === '') {
      errors[field] = `${field} is required`;
    }
  });
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};
```

### 3. Loading States
```javascript
const useApiCall = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const execute = async (apiCall) => {
    setLoading(true);
    setError(null);
    
    try {
      const result = await apiCall();
      return result;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };
  
  return { loading, error, execute };
};
```

### 4. Pagination Helper
```javascript
const usePagination = (initialPage = 1, initialLimit = 10) => {
  const [page, setPage] = useState(initialPage);
  const [limit, setLimit] = useState(initialLimit);
  const [totalPages, setTotalPages] = useState(0);
  
  const updatePagination = (paginationData) => {
    setTotalPages(paginationData.totalPages);
  };
  
  const nextPage = () => setPage(prev => Math.min(prev + 1, totalPages));
  const prevPage = () => setPage(prev => Math.max(prev - 1, 1));
  
  return {
    page,
    limit,
    totalPages,
    setPage,
    setLimit,
    updatePagination,
    nextPage,
    prevPage
  };
};
```

## CORS Configuration

The API supports CORS for cross-origin requests. Configure your frontend domain in the `ALLOWED_ORIGINS` environment variable:

```env
ALLOWED_ORIGINS=http://localhost:3000,https://yourdomain.com
```

## Rate Limiting

Login endpoints are protected with rate limiting (10 attempts per 15 minutes). Other endpoints don't have rate limiting by default.

## Testing

Use the provided test suite to verify API functionality:

```bash
npm test
```

The tests cover authentication, RBAC, and CRUD operations for all endpoints.
