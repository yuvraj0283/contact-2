import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const contactService = {
  // Get all contacts
  getAllContacts: () => api.get('/contacts'),

  // Get single contact
  getContactById: (id) => api.get(`/contacts/${id}`),

  // Create contact
  createContact: (contactData) => api.post('/contacts', contactData),

  // Update contact
  updateContact: (id, contactData) => api.put(`/contacts/${id}`, contactData),

  // Delete contact
  deleteContact: (id) => api.delete(`/contacts/${id}`),
};

export default contactService;
