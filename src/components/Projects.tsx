import '../styles/Projects.css';

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <h2 className="section-title reveal">Project Experience</h2>
        <p className="section-subtitle reveal reveal-delay-1">
          SAP SD implementation project with a major real estate conglomerate.
        </p>

        <div className="glass-card project-card reveal reveal-delay-2">
          <span className="project-label">SAP Implementation</span>
          <h3 className="project-title">
            SAP SD Implementation Project – M3M India Pvt. Ltd.
          </h3>

          <div className="project-meta">
            <div className="project-meta-item">
              <span className="project-meta-label">Role</span>
              <span className="project-meta-value">SAP SD End User & Support Consultant</span>
            </div>
            <div className="project-meta-item">
              <span className="project-meta-label">Project Type</span>
              <span className="project-meta-value">SAP Implementation</span>
            </div>
            <div className="project-meta-item">
              <span className="project-meta-label">Client</span>
              <span className="project-meta-value">M3M India Pvt. Ltd.</span>
            </div>
            <div className="project-meta-item">
              <span className="project-meta-label">Partner</span>
              <span className="project-meta-value">KPMG</span>
            </div>
          </div>

          <ul className="project-responsibilities">
            <li>Supported SAP SD implementation activities with the KPMG consulting team.</li>
            <li>Assisted in business requirement gathering and testing of sales processes.</li>
            <li>Worked on Order-to-Cash (O2C) cycle, including Sales Order, Delivery, and Billing processes.</li>
            <li>Validated pricing procedures, condition records, and account determination (VKOA).</li>
            <li>Participated in User Acceptance Testing (UAT) and issue resolution.</li>
            <li>Supported SD–MM integration during PGI and stock movement.</li>
            <li>Maintained customer master and material master data during system setup.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
