import { useState, useEffect } from 'react';
import '../styles/Footer.css';

export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="footer">
        <div className="footer-inner">
          <span className="footer-logo">KS.</span>
          <span className="footer-text">
            © {new Date().getFullYear()} Kunal Soni. All rights reserved.
          </span>
          <div className="footer-links">
            <a href="mailto:kunalsoni7651@gmail.com" className="footer-link" title="Email" aria-label="Email">
              ✉
            </a>
            <a href="tel:+919729211737" className="footer-link" title="Phone" aria-label="Phone">
              📱
            </a>
            <a href="#hero" className="footer-link" title="Back to top" aria-label="Back to top">
              ↑
            </a>
          </div>
        </div>
      </footer>
      <button
        className={`back-to-top ${showTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        ↑
      </button>
    </>
  );
}
