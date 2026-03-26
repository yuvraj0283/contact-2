import React, { useState, useEffect } from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import ContactDetail from './components/ContactDetail';
import contactService from './api/contactService';
import './App.css';

function App() {
  const [contacts, setContacts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [editingContact, setEditingContact] = useState(null);
  const [selectedContact, setSelectedContact] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [notification, setNotification] = useState('');

  // Fetch all contacts
  const fetchContacts = async () => {
    setIsLoading(true);
    try {
      const response = await contactService.getAllContacts();
      setContacts(response.data.data || []);
    } catch (error) {
      showNotification('Error fetching contacts: ' + error.message, 'error');
      console.error('Error fetching contacts:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Load contacts on component mount
  useEffect(() => {
    fetchContacts();
  }, []);

  // Show notification
  const showNotification = (message, type = 'success') => {
    setNotification({ message, type });
    setTimeout(() => setNotification(''), 3000);
  };

  // Handle form submission (create or update)
  const handleFormSubmit = async (formData) => {
    setIsLoading(true);
    try {
      if (editingContact) {
        // Update contact
        await contactService.updateContact(editingContact._id, formData);
        showNotification('Contact updated successfully!');
      } else {
        // Create new contact
        await contactService.createContact(formData);
        showNotification('Contact created successfully!');
      }
      setShowForm(false);
      setEditingContact(null);
      fetchContacts();
    } catch (error) {
      const errorMsg = error.response?.data?.message || error.message;
      showNotification('Error saving contact: ' + errorMsg, 'error');
      console.error('Error saving contact:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle edit
  const handleEdit = (contact) => {
    setEditingContact(contact);
    setShowForm(true);
    setSelectedContact(null);
  };

  // Handle delete
  const handleDelete = async (contactId) => {
    if (window.confirm('Are you sure you want to delete this contact?')) {
      try {
        await contactService.deleteContact(contactId);
        showNotification('Contact deleted successfully!');
        fetchContacts();
      } catch (error) {
        showNotification('Error deleting contact: ' + error.message, 'error');
        console.error('Error deleting contact:', error);
      }
    }
  };

  // Handle view details
  const handleViewContact = async (contactId) => {
    try {
      const response = await contactService.getContactById(contactId);
      setSelectedContact(response.data.data);
    } catch (error) {
      showNotification('Error fetching contact details: ' + error.message, 'error');
      console.error('Error fetching contact:', error);
    }
  };

  // Handle close form
  const handleCloseForm = () => {
    setShowForm(false);
    setEditingContact(null);
  };

  return (
    <div className="App">
      <header className="app-header">
        <div className="header-content">
          <h1>📇 Contact Management</h1>
          <p>Manage your contacts efficiently</p>
        </div>
      </header>

      {notification && (
        <div className={`notification notification-${notification.type}`}>
          {notification.message}
        </div>
      )}

      <main className="app-main">
        <div className="app-container">
          <div className="sidebar">
            <button
              className="btn btn-primary btn-large"
              onClick={() => {
                setShowForm(true);
                setEditingContact(null);
              }}
            >
              + Add New Contact
            </button>

            <div className="search-box">
              <input
                type="text"
                placeholder="Search by name, email, or phone..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="content">
            {showForm ? (
              <div className="form-container">
                <ContactForm
                  onSubmit={handleFormSubmit}
                  initialData={editingContact}
                  isLoading={isLoading}
                />
                <button className="btn btn-secondary btn-close-form" onClick={handleCloseForm}>
                  ← Back to List
                </button>
              </div>
            ) : (
              <ContactList
                contacts={contacts}
                onEdit={handleEdit}
                onDelete={handleDelete}
                onView={handleViewContact}
                isLoading={isLoading}
                searchTerm={searchTerm}
              />
            )}
          </div>
        </div>
      </main>

      {selectedContact && (
        <ContactDetail
          contact={selectedContact}
          onClose={() => setSelectedContact(null)}
          onEdit={handleEdit}
        />
      )}
    </div>
  );
}

export default App;
