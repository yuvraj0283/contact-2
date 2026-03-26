import React, { useState } from 'react';
import '../styles/ContactForm.css';

const ContactForm = ({ onSubmit, initialData, isLoading }) => {
  const [formData, setFormData] = useState(
    initialData || {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: {
        street: '',
        city: '',
        state: '',
        postalCode: '',
        country: '',
      },
      notes: '',
    }
  );

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      address: {
        ...formData.address,
        [name]: value,
      },
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      onSubmit(formData);
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h2>{initialData ? 'Edit Contact' : 'Add New Contact'}</h2>

      <div className="form-group">
        <label htmlFor="firstName">First Name *</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
          placeholder="Enter first name"
        />
        {errors.firstName && <span className="error">{errors.firstName}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="lastName">Last Name *</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
          placeholder="Enter last name"
        />
        {errors.lastName && <span className="error">{errors.lastName}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="email">Email *</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Enter email address"
        />
        {errors.email && <span className="error">{errors.email}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="phone">Phone Number *</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          placeholder="Enter phone number"
        />
        {errors.phone && <span className="error">{errors.phone}</span>}
      </div>

      <div className="form-section">
        <h3>Address (Optional)</h3>

        <div className="form-group">
          <label htmlFor="street">Street</label>
          <input
            type="text"
            id="street"
            name="street"
            value={formData.address.street}
            onChange={handleAddressChange}
            placeholder="Enter street address"
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.address.city}
              onChange={handleAddressChange}
              placeholder="Enter city"
            />
          </div>

          <div className="form-group">
            <label htmlFor="state">State</label>
            <input
              type="text"
              id="state"
              name="state"
              value={formData.address.state}
              onChange={handleAddressChange}
              placeholder="Enter state"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="postalCode">Postal Code</label>
            <input
              type="text"
              id="postalCode"
              name="postalCode"
              value={formData.address.postalCode}
              onChange={handleAddressChange}
              placeholder="Enter postal code"
            />
          </div>

          <div className="form-group">
            <label htmlFor="country">Country</label>
            <input
              type="text"
              id="country"
              name="country"
              value={formData.address.country}
              onChange={handleAddressChange}
              placeholder="Enter country"
            />
          </div>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="notes">Notes</label>
        <textarea
          id="notes"
          name="notes"
          value={formData.notes}
          onChange={handleInputChange}
          placeholder="Enter additional notes"
          rows="4"
        ></textarea>
      </div>

      <button type="submit" className="btn btn-primary" disabled={isLoading}>
        {isLoading ? 'Saving...' : 'Save Contact'}
      </button>
    </form>
  );
};

export default ContactForm;
