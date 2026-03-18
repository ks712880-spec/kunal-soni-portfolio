import { useState, FormEvent } from 'react';
import '../styles/Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // In a real app, you'd send this to a backend
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="section contact" id="contact">
      <div className="container">
        <h2 className="section-title reveal">Get In Touch</h2>
        <p className="section-subtitle reveal reveal-delay-1">
          Let's connect! I'm always open to new opportunities and collaborations.
        </p>

        <div className="contact-grid">
          <div className="contact-info reveal reveal-delay-2">
            <h3>Let's work together</h3>
            <p>
              Whether you need SAP SD consulting, implementation support, or want to
              discuss potential opportunities, feel free to reach out. I'm always ready
              to bring my expertise to new challenges.
            </p>

            <div className="contact-items">
              <div className="glass-card contact-item">
                <div className="contact-item-icon">📱</div>
                <div className="contact-item-content">
                  <div className="contact-item-label">Phone</div>
                  <div className="contact-item-value">+91 9729211737</div>
                </div>
              </div>

              <div className="glass-card contact-item">
                <div className="contact-item-icon">📧</div>
                <div className="contact-item-content">
                  <div className="contact-item-label">Email</div>
                  <div className="contact-item-value">kunalsoni7651@gmail.com</div>
                </div>
              </div>

              <div className="glass-card contact-item">
                <div className="contact-item-icon">📍</div>
                <div className="contact-item-content">
                  <div className="contact-item-label">Location</div>
                  <div className="contact-item-value">Gurugram, Haryana, India</div>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-card contact-form reveal reveal-delay-3">
            <h4>Send me a message</h4>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label" htmlFor="name">Your Name</label>
                <input
                  className="form-input"
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="email">Your Email</label>
                <input
                  className="form-input"
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="john@example.com"
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="message">Message</label>
                <textarea
                  className="form-textarea"
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your project or opportunity..."
                  required
                />
              </div>
              <button type="submit" className="btn-primary form-submit">
                {submitted ? '✓ Message Sent!' : '→ Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
