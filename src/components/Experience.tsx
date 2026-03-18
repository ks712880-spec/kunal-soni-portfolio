import '../styles/Experience.css';

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <h2 className="section-title reveal">Work Experience</h2>
        <p className="section-subtitle reveal reveal-delay-1">
          Hands-on SAP SD implementation and support at a leading real estate enterprise.
        </p>

        <div className="glass-card experience-card reveal reveal-delay-2">
          <div className="experience-header">
            <div>
              <h3 className="experience-company">M3M India Pvt. Ltd.</h3>
              <p className="experience-role">SAP SD End User & Support Consultant</p>
            </div>
            <div className="experience-meta">
              <span className="experience-meta-item">📍 Gurugram, Haryana</span>
              <span className="experience-meta-item">📅 July 2023 – Present</span>
            </div>
          </div>

          <ul className="experience-responsibilities">
            <li>Managing SAP SD Order-to-Cash (O2C) cycle, including Sales Order, Delivery, PGI, and Billing processes.</li>
            <li>Supporting SAP SD implementation activities with KPMG consulting team.</li>
            <li>Resolving pricing issues and account determination (VKOA) related problems.</li>
            <li>Maintaining Customer Master and Material Master data.</li>
            <li>Supporting SD–MM integration during PGI and stock movement.</li>
            <li>Participating in User Acceptance Testing (UAT) and system validation during implementation.</li>
            <li>Monitoring billing and revenue posting flow from SD to FI module.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
