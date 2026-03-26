# API Documentation

## Contact Management API

BaseURL: `http://localhost:5000/api`

---

## Endpoints

### 1. Get All Contacts

**Endpoint:** `GET /contacts`

**Description:** Retrieve all contacts from the database, sorted by creation date (newest first).

**Request:**
```http
GET /api/contacts HTTP/1.1
Host: localhost:5000
Content-Type: application/json
```

**Response (200 OK):**
```json
{
  "success": true,
  "data": [
    {
      "_id": "507f1f77bcf86cd799439011",
      "firstName": "John",
      "lastName": "Doe",
      "email": "john@example.com",
      "phone": "+1-234-567-8900",
      "address": {
        "street": "123 Main St",
        "city": "New York",
        "state": "NY",
        "postalCode": "10001",
        "country": "USA"
      },
      "notes": "Important client",
      "createdAt": "2024-01-15T10:30:00Z",
      "updatedAt": "2024-01-15T10:30:00Z",
      "__v": 0
    }
  ]
}
```

**Error Response (500):**
```json
{
  "success": false,
  "message": "Database connection error"
}
```

---

### 2. Get Single Contact

**Endpoint:** `GET /contacts/:id`

**Description:** Retrieve a specific contact by ID.

**Parameters:**
- `id` (string, required) - MongoDB ObjectId of the contact

**Request:**
```http
GET /api/contacts/507f1f77bcf86cd799439011 HTTP/1.1
Host: localhost:5000
Content-Type: application/json
```

**Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "_id": "507f1f77bcf86cd799439011",
    "firstName": "John",
    "lastName": "Doe",
    "email": "john@example.com",
    "phone": "+1-234-567-8900",
    "address": {
      "street": "123 Main St",
      "city": "New York",
      "state": "NY",
      "postalCode": "10001",
      "country": "USA"
    },
    "notes": "Important client",
    "createdAt": "2024-01-15T10:30:00Z",
    "updatedAt": "2024-01-15T10:30:00Z",
    "__v": 0
  }
}
```

**Error Response (404):**
```json
{
  "success": false,
  "message": "Contact not found"
}
```

---

### 3. Create Contact

**Endpoint:** `POST /contacts`

**Description:** Create a new contact with provided information.

**Request Headers:**
```http
Content-Type: application/json
```

**Request Body:**
```json
{
  "firstName": "Jane",
  "lastName": "Smith",
  "email": "jane@example.com",
  "phone": "+1-987-654-3210",
  "address": {
    "street": "456 Oak Ave",
    "city": "Los Angeles",
    "state": "CA",
    "postalCode": "90001",
    "country": "USA"
  },
  "notes": "New client from referral"
}
```

**Response (201 Created):**
```json
{
  "success": true,
  "message": "Contact created successfully",
  "data": {
    "_id": "507f1f77bcf86cd799439012",
    "firstName": "Jane",
    "lastName": "Smith",
    "email": "jane@example.com",
    "phone": "+1-987-654-3210",
    "address": {
      "street": "456 Oak Ave",
      "city": "Los Angeles",
      "state": "CA",
      "postalCode": "90001",
      "country": "USA"
    },
    "notes": "New client from referral",
    "createdAt": "2024-01-16T14:25:00Z",
    "updatedAt": "2024-01-16T14:25:00Z",
    "__v": 0
  }
}
```

**Error Response (400 Bad Request):**
```json
{
  "success": false,
  "message": "Email already exists",
  "errors": ["Email is already registered"]
}
```

**Validation Rules:**
- `firstName` (required): String, max 100 chars
- `lastName` (required): String, max 100 chars
- `email` (required): Valid email format, must be unique
- `phone` (required): Valid phone format
- `address` (optional): Object with optional fields
- `notes` (optional): String, max 500 chars

---

### 4. Update Contact

**Endpoint:** `PUT /contacts/:id`

**Description:** Update an existing contact.

**Parameters:**
- `id` (string, required) - MongoDB ObjectId of the contact

**Request Body:**
```json
{
  "firstName": "Jane",
  "lastName": "Doe",
  "email": "jane.doe@example.com",
  "phone": "+1-111-222-3333",
  "address": {
    "city": "Chicago",
    "state": "IL"
  },
  "notes": "Updated information"
}
```

**Response (200 OK):**
```json
{
  "success": true,
  "message": "Contact updated successfully",
  "data": {
    "_id": "507f1f77bcf86cd799439011",
    "firstName": "Jane",
    "lastName": "Doe",
    "email": "jane.doe@example.com",
    "phone": "+1-111-222-3333",
    "address": {
      "street": "123 Main St",
      "city": "Chicago",
      "state": "IL",
      "postalCode": "10001",
      "country": "USA"
    },
    "notes": "Updated information",
    "createdAt": "2024-01-15T10:30:00Z",
    "updatedAt": "2024-01-16T15:45:00Z",
    "__v": 1
  }
}
```

**Error Response (404):**
```json
{
  "success": false,
  "message": "Contact not found"
}
```

**Error Response (400):**
```json
{
  "success": false,
  "message": "Invalid email format",
  "errors": ["Email must be a valid email address"]
}
```

---

### 5. Delete Contact

**Endpoint:** `DELETE /contacts/:id`

**Description:** Delete a specific contact permanently.

**Parameters:**
- `id` (string, required) - MongoDB ObjectId of the contact

**Request:**
```http
DELETE /api/contacts/507f1f77bcf86cd799439011 HTTP/1.1
Host: localhost:5000
Content-Type: application/json
```

**Response (200 OK):**
```json
{
  "success": true,
  "message": "Contact deleted successfully",
  "data": {
    "_id": "507f1f77bcf86cd799439011",
    "firstName": "John",
    "lastName": "Doe",
    "email": "john@example.com",
    "phone": "+1-234-567-8900",
    "address": {
      "street": "123 Main St",
      "city": "New York",
      "state": "NY",
      "postalCode": "10001",
      "country": "USA"
    },
    "notes": "Important client",
    "createdAt": "2024-01-15T10:30:00Z",
    "updatedAt": "2024-01-15T10:30:00Z",
    "__v": 0
  }
}
```

**Error Response (404):**
```json
{
  "success": false,
  "message": "Contact not found"
}
```

---

### 6. Health Check

**Endpoint:** `GET /health`

**Description:** Check if the API server is running and healthy.

**Request:**
```http
GET /api/health HTTP/1.1
Host: localhost:5000
```

**Response (200 OK):**
```json
{
  "success": true,
  "message": "Server is running"
}
```

---

## Response Format

All responses follow a consistent JSON format:

**Success Response:**
```json
{
  "success": true,
  "data": { /* response data */ },
  "message": "Optional message"
}
```

**Error Response:**
```json
{
  "success": false,
  "message": "Error description",
  "errors": ["Specific error 1", "Specific error 2"]
}
```

---

## Status Codes

| Code | Meaning |
|------|---------|
| 200 | OK - Request successful |
| 201 | Created - Resource created successfully |
| 400 | Bad Request - Invalid input or validation error |
| 404 | Not Found - Resource not found |
| 500 | Server Error - Internal server error |

---

## Contact Schema

```javascript
{
  "_id": ObjectId,
  "firstName": String (required),
  "lastName": String (required),
  "email": String (required, unique, lowercase),
  "phone": String (required),
  "address": {
    "street": String,
    "city": String,
    "state": String,
    "postalCode": String,
    "country": String
  },
  "notes": String,
  "createdAt": Date (auto-generated),
  "updatedAt": Date (auto-updated)
}
```

---

## Example Usage

### cURL

```bash
# Get all contacts
curl http://localhost:5000/api/contacts

# Create a contact
curl -X POST http://localhost:5000/api/contacts \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "John",
    "lastName": "Doe",
    "email": "john@example.com",
    "phone": "+1-234-567-8900"
  }'

# Update a contact
curl -X PUT http://localhost:5000/api/contacts/507f1f77bcf86cd799439011 \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "Jane",
    "lastName": "Doe"
  }'

# Delete a contact
curl -X DELETE http://localhost:5000/api/contacts/507f1f77bcf86cd799439011
```

### JavaScript/Axios

```javascript
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api'
});

// Get all contacts
const contacts = await api.get('/contacts');

// Create contact
const newContact = await api.post('/contacts', {
  firstName: 'John',
  lastName: 'Doe',
  email: 'john@example.com',
  phone: '+1-234-567-8900'
});

// Update contact
const updated = await api.put('/contacts/507f1f77bcf86cd799439011', {
  firstName: 'Jane'
});

// Delete contact
await api.delete('/contacts/507f1f77bcf86cd799439011');
```

---

## Error Handling

The API includes comprehensive error handling:

1. **Validation Errors** - Invalid input data
2. **Not Found Errors** - Resource doesn't exist
3. **Server Errors** - Internal server issues

All errors include descriptive messages and specific field errors for validation issues.

---

## Rate Limiting

Currently no rate limiting is implemented. In production, consider adding rate limiting middleware to prevent abuse.

---

## CORS

The API is configured with CORS to allow requests from the frontend at `http://localhost:3000`.

For production, update CORS settings in `server.js`:

```javascript
app.use(cors({
  origin: 'https://yourdomain.com'
}));
```

---

Last Updated: January 2024
