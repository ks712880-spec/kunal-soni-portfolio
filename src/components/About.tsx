import '../styles/About.css';

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="container">
        <h2 className="section-title reveal">About Me</h2>
        <p className="section-subtitle reveal reveal-delay-1">
          A results-driven SAP SD professional bridging business and technology.
        </p>

        <div className="about-grid">
          <div className="about-text reveal reveal-delay-2">
            <h3>Who I Am</h3>
            <p>
              I'm <span className="about-highlight">Kunal Soni</span>, an MBA graduate in Finance & Marketing
              from Maharshi Dayanand University. I specialize in <span className="about-highlight">SAP SD (Sales & Distribution)</span> with
              deep expertise in the Order-to-Cash cycle, cross-module integration, and pricing configuration.
            </p>
            <p>
              Currently working at <span className="about-highlight">M3M India Pvt. Ltd.</span> alongside the
              KPMG consulting team, I support SAP SD implementation activities, resolve complex pricing and
              account determination issues, and ensure seamless end-to-end sales processes.
            </p>

            <div className="about-info-list">
              <div className="about-info-item">
                <div className="info-icon">📍</div>
                <span className="info-label">Location</span>
                <span className="info-value">Gurugram, Haryana</span>
              </div>
              <div className="about-info-item">
                <div className="info-icon">📧</div>
                <span className="info-label">Email</span>
                <span className="info-value">kunalsoni7651@gmail.com</span>
              </div>
              <div className="about-info-item">
                <div className="info-icon">📱</div>
                <span className="info-label">Phone</span>
                <span className="info-value">+91 9729211737</span>
              </div>
            </div>
          </div>

          <div className="about-cards">
            <div className="glass-card about-card reveal reveal-delay-2">
              <div className="about-card-icon">💼</div>
              <div className="about-card-value">2+</div>
              <div className="about-card-label">Years Experience</div>
            </div>
            <div className="glass-card about-card reveal reveal-delay-3">
              <div className="about-card-icon">🏅</div>
              <div className="about-card-value">2</div>
              <div className="about-card-label">Certifications</div>
            </div>
            <div className="glass-card about-card reveal reveal-delay-4">
              <div className="about-card-icon">🎓</div>
              <div className="about-card-value">MBA</div>
              <div className="about-card-label">Finance & Marketing</div>
            </div>
            <div className="glass-card about-card reveal reveal-delay-5">
              <div className="about-card-icon">🔧</div>
              <div className="about-card-value">O2C</div>
              <div className="about-card-label">End-to-End Cycle</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
