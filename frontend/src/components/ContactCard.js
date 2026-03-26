import React from 'react';
import '../styles/ContactCard.css';

const ContactCard = ({ contact, onEdit, onDelete, onView }) => {
  return (
    <div className="contact-card">
      <div className="contact-header">
        <h3>{contact.firstName} {contact.lastName}</h3>
        <span className="contact-id">#{contact._id.substring(0, 5)}</span>
      </div>

      <div className="contact-info">
        <p>
          <strong>Email:</strong> <a href={`mailto:${contact.email}`}>{contact.email}</a>
        </p>
        <p>
          <strong>Phone:</strong> <a href={`tel:${contact.phone}`}>{contact.phone}</a>
        </p>
        
        {contact.address && (
          <p>
            <strong>Address:</strong>{' '}
            {contact.address.street && `${contact.address.street}, `}
            {contact.address.city && `${contact.address.city}, `}
            {contact.address.state && `${contact.address.state} `}
            {contact.address.postalCode && `${contact.address.postalCode}`}
          </p>
        )}

        {contact.notes && (
          <p>
            <strong>Notes:</strong> {contact.notes}
          </p>
        )}
      </div>

      <div className="contact-actions">
        <button className="btn btn-info" onClick={() => onView(contact._id)}>
          View
        </button>
        <button className="btn btn-edit" onClick={() => onEdit(contact)}>
          Edit
        </button>
        <button
          className="btn btn-danger"
          onClick={() => onDelete(contact._id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ContactCard;
