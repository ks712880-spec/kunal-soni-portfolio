import '../styles/Certifications.css';

const certifications = [
  {
    icon: '🏢',
    issuer: 'IBM',
    title: 'SAP Sales and Distribution (SAP SD) Certification',
    description:
      'Completed SAP SD certification from IBM, covering core concepts such as Enterprise Structure, Order-to-Cash (O2C) cycle, pricing configuration, and SD integration with MM and FI.',
  },
  {
    icon: '🔷',
    issuer: 'SAP Certified',
    title: 'SAP Sales and Distribution (SAP SD)',
    description:
      'Completed SAP SD certification from SAP, demonstrating knowledge of sales processes, delivery, billing, pricing procedures, and integration with other SAP modules.',
  },
];

export default function Certifications() {
  return (
    <section className="section" id="certifications">
      <div className="container">
        <h2 className="section-title reveal">Certifications</h2>
        <p className="section-subtitle reveal reveal-delay-1">
          Industry-recognized certifications validating SAP SD expertise.
        </p>

        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <div
              className={`glass-card cert-card reveal reveal-delay-${index + 1}`}
              key={cert.title}
            >
              <div className="cert-badge">{cert.icon}</div>
              <div className="cert-issuer">{cert.issuer}</div>
              <h3 className="cert-title">{cert.title}</h3>
              <p className="cert-description">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
