import React from 'react';
import '../styles/ContactList.css';
import ContactCard from './ContactCard';

const ContactList = ({ contacts, onEdit, onDelete, onView, isLoading, searchTerm }) => {
  const filteredContacts = contacts.filter(contact =>
    `${contact.firstName} ${contact.lastName}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.phone.includes(searchTerm)
  );

  if (isLoading) {
    return <div className="loading">Loading contacts...</div>;
  }

  if (filteredContacts.length === 0) {
    return (
      <div className="no-contacts">
        <p>{searchTerm ? 'No contacts found matching your search.' : 'No contacts yet. Add one to get started!'}</p>
      </div>
    );
  }

  return (
    <div className="contact-list">
      <h2>Contacts ({filteredContacts.length})</h2>
      <div className="contacts-grid">
        {filteredContacts.map(contact => (
          <ContactCard
            key={contact._id}
            contact={contact}
            onEdit={onEdit}
            onDelete={onDelete}
            onView={onView}
          />
        ))}
      </div>
    </div>
  );
};

export default ContactList;
