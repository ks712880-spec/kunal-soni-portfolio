import '../styles/Education.css';

const educationData = [
  {
    year: '2023 – 2025',
    degree: 'MBA (Finance & Marketing)',
    school: 'Maharshi Dayanand University (MDU)',
    board: 'Rohtak, Haryana',
  },
  {
    year: '2019 – 2022',
    degree: 'Bachelor of Commerce (B.Com)',
    school: 'Chaudhary Bansi Lal University',
    board: 'Bhiwani, Haryana',
  },
  {
    year: '2017 – 2019',
    degree: '12th Standard (Commerce)',
    school: 'HBSE Board',
    board: 'Bhiwani, Haryana',
  },
  {
    year: '2015 – 2017',
    degree: '10th Standard',
    school: 'CBSE Board',
    board: 'Bhiwani, Haryana',
  },
];

export default function Education() {
  return (
    <section className="section" id="education">
      <div className="container">
        <h2 className="section-title reveal">Education</h2>
        <p className="section-subtitle reveal reveal-delay-1">
          Academic journey from CBSE roots to an MBA in Finance & Marketing.
        </p>

        <div className="education-timeline">
          {educationData.map((item, index) => (
            <div
              className={`glass-card education-item reveal reveal-delay-${index + 1}`}
              key={item.degree}
            >
              <span className="education-year">{item.year}</span>
              <h3 className="education-degree">{item.degree}</h3>
              <p className="education-school">{item.school}</p>
              <p className="education-board">{item.board}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
