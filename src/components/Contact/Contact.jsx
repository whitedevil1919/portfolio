import React, { useState } from 'react';
import { Mail, Phone, Send } from 'lucide-react';
import { portfolioData } from '../../data/portfolio';
import './Contact.css';

export default function Contact() {
  const { contact } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: null });

    // Simulate form submission
    setTimeout(() => {
      setStatus({ submitting: false, submitted: true, error: null });
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Contact</h2>
        <p className="section-subtitle">Get in touch with me directly via email, phone, or through the message form.</p>

        <div className="contact-grid">
          <div className="contact-info">
            <h3 className="contact-heading">{contact.heading}</h3>
            <p className="contact-message">{contact.message}</p>

            <div className="contact-details">
              <a href={`mailto:${contact.email}`} className="contact-detail-card">
                <div className="contact-detail-icon">
                  <Mail size={20} />
                </div>
                <div className="contact-detail-content">
                  <span className="contact-detail-label">Email Me</span>
                  <span className="contact-detail-value">{contact.email}</span>
                </div>
              </a>

              <a href={`tel:${contact.phone}`} className="contact-detail-card">
                <div className="contact-detail-icon">
                  <Phone size={20} />
                </div>
                <div className="contact-detail-content">
                  <span className="contact-detail-label">Call Me</span>
                  <span className="contact-detail-value">{contact.phone}</span>
                </div>
              </a>
            </div>
          </div>

          <div>
            {status.submitted ? (
              <div className="card text-center" style={{ padding: 'var(--spacing-xl)', textAlign: 'center' }}>
                <h3 style={{ color: 'var(--color-accent)', marginBottom: 'var(--spacing-sm)' }}>Message Sent Successfully!</h3>
                <p style={{ color: 'var(--color-text-secondary)' }}>Thank you for reaching out, Bolisetty Sri Nikhil will get back to you as soon as possible.</p>
                <button 
                  className="btn btn-primary" 
                  style={{ marginTop: 'var(--spacing-md)' }}
                  onClick={() => setStatus({ submitting: false, submitted: false, error: null })}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="contact-name" className="form-label">Full Name</label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    className="form-input"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-email" className="form-label">Email Address</label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    className="form-input"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-subject" className="form-label">Subject</label>
                  <input
                    type="text"
                    id="contact-subject"
                    name="subject"
                    className="form-input"
                    placeholder="Topic of discussion"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-message" className="form-label">Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    className="form-textarea"
                    placeholder="Describe your idea or message details..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary form-submit-btn"
                  disabled={status.submitting}
                >
                  {status.submitting ? 'Sending...' : (
                    <>
                      <span>Send Message</span>
                      <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
