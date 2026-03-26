import React from 'react';
import '../styles/ContactDetail.css';

const ContactDetail = ({ contact, onClose, onEdit }) => {
  if (!contact) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>{contact.firstName} {contact.lastName}</h2>
          <button className="close-btn" onClick={onClose}>&times;</button>
        </div>

        <div className="modal-body">
          <div className="detail-section">
            <h3>Contact Information</h3>
            <p>
              <strong>Email:</strong>
              <br />
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </p>
            <p>
              <strong>Phone:</strong>
              <br />
              <a href={`tel:${contact.phone}`}>{contact.phone}</a>
            </p>
          </div>

          {contact.address && Object.values(contact.address).some(val => val) && (
            <div className="detail-section">
              <h3>Address</h3>
              <p>
                {contact.address.street && (
                  <>
                    {contact.address.street}
                    <br />
                  </>
                )}
                {contact.address.city && (
                  <>
                    {contact.address.city}
                    {contact.address.state && `, ${contact.address.state}`}
                    <br />
                  </>
                )}
                {contact.address.postalCode && (
                  <>
                    {contact.address.postalCode}
                    <br />
                  </>
                )}
                {contact.address.country && <>{contact.address.country}</>}
              </p>
            </div>
          )}

          {contact.notes && (
            <div className="detail-section">
              <h3>Notes</h3>
              <p>{contact.notes}</p>
            </div>
          )}

          <div className="detail-section">
            <h3>Metadata</h3>
            <p>
              <strong>Created:</strong> <br />
              {new Date(contact.createdAt).toLocaleString()}
            </p>
            <p>
              <strong>Last Updated:</strong> <br />
              {new Date(contact.updatedAt).toLocaleString()}
            </p>
          </div>
        </div>

        <div className="modal-footer">
          <button className="btn btn-edit" onClick={() => onEdit(contact)}>
            Edit Contact
          </button>
          <button className="btn btn-secondary" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactDetail;
