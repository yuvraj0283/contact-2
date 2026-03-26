# Contact Management Web App - MERN Stack

A full-stack contact management application built with MongoDB, Express, React, and Node.js (MERN).

## Features

- ✅ **Create Contacts** - Add new contacts with detailed information
- ✅ **Read Contacts** - View all contacts and search by name, email, or phone
- ✅ **Update Contacts** - Edit existing contact information
- ✅ **Delete Contacts** - Remove contacts from the database
- ✅ **Search** - Real-time search functionality
- ✅ **Validation** - Form validation on both client and server
- ✅ **Responsive Design** - Works on desktop and mobile devices
- ✅ **Beautiful UI** - Modern gradient design with smooth animations

## Tech Stack

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **CORS** - Cross-Origin Resource Sharing
- **Dotenv** - Environment variable management

### Frontend
- **React 18** - UI library
- **React Hooks** - State management
- **Axios** - HTTP client
- **CSS3** - Styling with animations

## Project Structure

```
contact-management-app/
├── backend/
│   ├── models/
│   │   └── Contact.js
│   ├── routes/
│   │   └── contacts.js
│   ├── middleware/
│   │   └── errorHandler.js
│   ├── server.js
│   ├── package.json
│   └── .env.example
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── api/
│   │   │   └── contactService.js
│   │   ├── components/
│   │   │   ├── ContactForm.js
│   │   │   ├── ContactList.js
│   │   │   ├── ContactCard.js
│   │   │   └── ContactDetail.js
│   │   ├── styles/
│   │   │   ├── ContactForm.css
│   │   │   ├── ContactCard.css
│   │   │   ├── ContactList.css
│   │   │   └── ContactDetail.css
│   │   ├── App.js
│   │   ├── App.css
│   │   ├── index.js
│   │   └── index.css
│   └── package.json
└── README.md
```

## Prerequisites

- **Node.js** (v14 or higher)
- **npm** or **yarn**
- **MongoDB** (local or cloud database like MongoDB Atlas)

## Setup Instructions

### 1. Clone or Navigate to the Project

```bash
cd contact-management-app
```

### 2. Setup Backend

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create .env file from .env.example
cp .env.example .env

# Edit .env with your MongoDB URI
# MONGO_URI=mongodb://localhost:27017/contact_management
# PORT=5000

# Start the backend server
npm run dev
```

The backend server will run on `http://localhost:5000`

### 3. Setup Frontend

```bash
# In a new terminal, navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start the frontend development server
npm start
```

The frontend will automatically open at `http://localhost:3000`

## API Endpoints

### Base URL: `http://localhost:5000/api`

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/contacts` | Get all contacts |
| GET | `/contacts/:id` | Get a specific contact |
| POST | `/contacts` | Create a new contact |
| PUT | `/contacts/:id` | Update a contact |
| DELETE | `/contacts/:id` | Delete a contact |
| GET | `/health` | Health check endpoint |

### Example Request Body

```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "phone": "+1-123-456-7890",
  "address": {
    "street": "123 Main St",
    "city": "New York",
    "state": "NY",
    "postalCode": "10001",
    "country": "USA"
  },
  "notes": "Important client"
}
```

## Features in Detail

### Contact Creation
- Form validation for required fields (firstName, lastName, email, phone)
- Email format validation
- Phone number format validation
- Optional address fields
- Notes field for additional information

### Contact Search
- Real-time search across contact names
- Search by email address
- Search by phone number
- Instant filtering results

### Contact Details Modal
- View complete contact information
- Display creation and update timestamps
- Quick edit button
- Professional modal design

### Responsive Design
- Desktop: Multi-column grid layout
- Tablet: Adjusted grid with sidebar
- Mobile: Single column layout
- Touch-friendly buttons and inputs

## Usage

1. **Add a Contact**: Click "Add New Contact" button, fill in the form, and submit
2. **View Contact Details**: Click "View" on any contact card
3. **Edit a Contact**: Click "Edit" on a contact card or from the detail modal
4. **Delete a Contact**: Click "Delete" on a contact card (confirmation required)
5. **Search Contacts**: Use the search box to filter contacts by name, email, or phone

## Error Handling

- Form validation errors are displayed inline
- API errors are shown in notification toast
- Duplicate email validation on server-side
- Phone number format validation
- Graceful error messages for better UX

## Future Enhancements

- [ ] User authentication and authorization
- [ ] Export contacts to CSV/PDF
- [ ] Import contacts from file
- [ ] Contact groups/categories
- [ ] Contact photo upload
- [ ] Birthday reminders
- [ ] Contact history/activity log
- [ ] Dark mode theme
- [ ] Mobile app (React Native)
- [ ] Advanced search filters

## Development Notes

### MERN Stack Fundamentals Demonstrated

1. **MongoDB**: Document-based database with Mongoose ODM
2. **Express**: RESTful API with proper routing and middleware
3. **React**: Component-based UI with hooks and state management
4. **Node.js**: Server-side JavaScript runtime

### Best Practices Implemented

- ✅ Separation of concerns (models, routes, components)
- ✅ Environment configuration management
- ✅ Error handling and validation
- ✅ RESTful API design
- ✅ Component reusability
- ✅ Responsive CSS Grid layout
- ✅ Async/await for API calls
- ✅ Request/response JSON format
- ✅ CORS configuration
- ✅ Clean folder structure

## License

MIT

## Support

For issues or questions, please create an issue in the repository.

---

**Built with ❤️ using MERN Stack**
