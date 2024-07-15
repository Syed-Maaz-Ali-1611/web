import React, { useState } from 'react';
import './Contact.css'; // Import your CSS file
import ContactImage from '../../assets/images/home1.jpg';
import axios from 'axios'; // Import Axios for HTTP requests

function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    companyName: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Add form validation (optional):
    // You can add validation logic here to ensure required fields are filled
    // and data is in the correct format before proceeding.

    // If validation passes (or you don't want validation), proceed:

    try {
      const response = await axios.post('https://smaazali-backend.mdbgo.io/api/contact', formData);
      console.log(response.data); // Log API response for debugging
      alert('Form submitted successfully!'); // Or display a dynamic message
      setFormData({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        companyName: '',
        message: '',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error submitting form. Please try again later.');
    }
  };

  return (
    <div className="main">
      <div className="main-heading">
        <div className="content-main-heading">
          <h1>Get in touch</h1>
        </div>
        <div className="content-image">
          <img src={ContactImage} alt="contact" />
        </div>
      </div>

      {/* Section 1 */}
      <div className="section1-contact">
        <div className="content-section1-contact">
          <h5>
            Schedule a consultation today to explore how our advisory,
            implementation, lifecycle, and growth engine solutions can drive
            exponential growth for your company. Easily schedule by filling out
            the form below:
          </h5>
        </div>
      </div>

      {/* Form section */}
      <div className="form-section">
        <form onSubmit={handleSubmit}>
          <div>
            <label>First Name:</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Last Name:</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Phone Number:</label>
            <input
              type="tel" // Use "tel" for phone number input
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Company Name:</label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Message:</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button className="button-submit" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
