# Contact Management App - Setup Guide

## Quick Start

### Prerequisites
- Node.js (v14+)
- MongoDB (local or MongoDB Atlas)
- npm or yarn

### Step 1: Setup MongoDB
Option A - Local MongoDB:
```bash
mongod
```

Option B - MongoDB Atlas (Cloud):
1. Create account at https://www.mongodb.com/cloud/atlas
2. Create a cluster and get connection string
3. Use the URI in your .env file

### Step 2: Start Backend

```bash
cd backend
npm install
cp .env.example .env
# Edit .env and update MONGO_URI if needed
npm run dev
```

Output should show:
```
MongoDB connected successfully
Server running on port 5000
```

### Step 3: Start Frontend (in new terminal)

```bash
cd frontend
npm install
npm start
```

Frontend will open at http://localhost:3000

## Environment Variables

### Backend (.env)
```
MONGO_URI=mongodb://localhost:27017/contact_management
PORT=5000
NODE_ENV=development
```

For MongoDB Atlas:
```
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/contact_management
PORT=5000
NODE_ENV=development
```

## Troubleshooting

### MongoDB Connection Error
- Ensure MongoDB is running
- Check MONGO_URI in .env
- Verify MongoDB credentials if using Atlas

### Port Already in Use
- Backend: Change PORT in .env
- Frontend: Will prompt to use different port

### Dependencies Issues
- Delete node_modules and package-lock.json
- Run npm install again

### CORS Errors
- Ensure backend is running on port 5000
- Frontend proxy is configured in package.json

## Testing the API

Use Postman/Thunder Client to test endpoints:

**Create Contact:**
```
POST http://localhost:5000/api/contacts
Body: {
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "phone": "+1-234-567-8900"
}
```

**Get All Contacts:**
```
GET http://localhost:5000/api/contacts
```

**Get Single Contact:**
```
GET http://localhost:5000/api/contacts/{id}
```

**Update Contact:**
```
PUT http://localhost:5000/api/contacts/{id}
Body: { /* updated fields */ }
```

**Delete Contact:**
```
DELETE http://localhost:5000/api/contacts/{id}
```

## Production Deployment

### Backend Deployment (Heroku/Vercel)
```bash
npm install -g heroku
heroku create your-app-name
git push heroku main
```

### Frontend Deployment (Vercel/Netlify)
```bash
npm run build
# Deploy the build folder
```

### Environment Variables
- Add REACT_APP_API_BASE_URL to production URL
- Update MongoDB connection for production

## Performance Tips

1. Add database indexing for frequently searched fields
2. Implement pagination for large contact lists
3. Cache contacts in frontend state
4. Use CDN for static assets
5. Enable gzip compression on backend

---

Happy coding! 🚀
