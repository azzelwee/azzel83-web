import React, { useState } from 'react';
import './App.css';

function CommissionForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    baseType: '',
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to a server or log it)
    console.log(formData);
  };

  return (
    <div className="price-list-container">
      <div className="price-list">
        <header className="price-header">
          <h1 className="title">Commission Form</h1>
          <p className="subtitle">Fill out the details below to request your custom base design</p>
        </header>

        <section className="commission-form-section">
          <form onSubmit={handleSubmit} className="commission-form">
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="baseType">Base Type</label>
              <select
                id="baseType"
                name="baseType"
                value={formData.baseType}
                onChange={handleChange}
                required
              >
                <option value="">Select Base Type</option>
                <option value="simple">Simple Base</option>
                <option value="medium">Medium Base</option>
                <option value="complex">Complex Base</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="image">Upload Image</label>
              <input
                type="file"
                id="image"
                name="image"
                accept="image/*"
                onChange={handleFileChange}
              />
            </div>

            <button type="submit" className="submit-button">Submit Commission</button>
          </form>
        </section>
      </div>
    </div>
  );
}

export default CommissionForm;
