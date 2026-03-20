import { useState } from 'react';
import '../ui/ContactForm.css';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  // Integrates with EmailJS service to send form data to your inbox
  const sendEmail = (e) => {
    e.preventDefault();

 
    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID, 
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID, 
      formData,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Email Sent Successfully!');
        // Clear the form after success
        setFormData({ name: '', email: '', subject: '', message: '' });
      })
      .catch((err) => {
        console.log('FAILED...', err);
        alert('Failed to send email.');
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <section className="contact-container">
      <div className="contact-grid">
        
        <div className="contact-form-section">
          <h2 className="section-title">Get in Touch</h2>
          <form onSubmit={sendEmail} className="actual-form">
            <div className="form-group">
              <label>Name</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label>Subject</label>
              <input type="text" name="subject" value={formData.subject} onChange={handleChange} />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea name="message" value={formData.message} onChange={handleChange} required />
            </div>

            <button type="submit" className="submit-btn">Send Email</button>
          </form>
        </div>

        {/* Right Side: Contact Info */}
        <div className="contact-info-section">
          <h2 className="section-title">Contact Info</h2>
          <div className="info-details">
            <div className="info-item">
              <FaEnvelope className="icon" />
              <span>raymond.singlaire@redalphacyber.com</span>
            </div>
            <div className="info-item">
              <FaPhoneAlt className="icon" />
              <span>+65 98557655</span>
            </div>
            <div className="info-item">
              <FaMapMarkerAlt className="icon" />
              <span>Singapore</span>
            </div>
          </div>

          <div className="social-links">
            <a href="https://www.linkedin.com/in/raymond-singlaire-912105185/" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://github.com/Fakerayray" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactForm;