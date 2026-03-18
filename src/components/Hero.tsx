import { useState, useEffect } from 'react';
import '../styles/Hero.css';

const roles = [
  'SAP SD End User & Support Consultant',
  'Order-to-Cash Specialist',
  'SD–MM & SD–FI Integration Expert',
  'MBA (Finance & Marketing) Graduate',
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayText === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      const speed = isDeleting ? 30 : 60;
      timeout = setTimeout(() => {
        setDisplayText(
          isDeleting
            ? currentRole.substring(0, displayText.length - 1)
            : currentRole.substring(0, displayText.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section className="hero" id="hero">
      <div className="hero-bg">
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="hero-orb hero-orb-3" />
      </div>
      <div className="hero-grid" />

      <div className="hero-content">
        <div className="hero-badge">
          <span className="hero-badge-dot" />
          Open for Opportunities
        </div>

        <h1 className="hero-name">
          Hi, I'm <span className="hero-name-gradient">Kunal Soni</span>
        </h1>

        <p className="hero-role">
          {displayText}
          <span className="typing-cursor" />
        </p>

        <p className="hero-description">
          MBA (Finance & Marketing) graduate with hands-on experience in SAP SD implementation,
          Order-to-Cash lifecycle, pricing configuration, and real-time issue resolution
          at M3M India Pvt. Ltd. with KPMG consulting team.
        </p>

        <div className="hero-cta">
          <a href="#contact" className="btn-primary">
            ✉ Get in Touch
          </a>
          <a href="#experience" className="btn-secondary">
            ↓ View My Work
          </a>
        </div>

        <div className="hero-stats">
          <div className="hero-stat">
            <div className="hero-stat-value">2+</div>
            <div className="hero-stat-label">Years Experience</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-value">2</div>
            <div className="hero-stat-label">SAP Certifications</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-value">MBA</div>
            <div className="hero-stat-label">Finance & Marketing</div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <span>Scroll</span>
        <div className="scroll-indicator-line" />
      </div>
    </section>
  );
}
