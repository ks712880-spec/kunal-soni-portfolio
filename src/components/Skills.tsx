import { useEffect, useRef, useState } from 'react';
import '../styles/Skills.css';

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  icon: string;
  title: string;
  skills: Skill[];
}

const categories: SkillCategory[] = [
  {
    icon: '📦',
    title: 'SAP SD Core',
    skills: [
      { name: 'Order-to-Cash (O2C) Cycle', level: 92 },
      { name: 'Pricing Procedure Configuration', level: 88 },
      { name: 'Account Determination (VKOA)', level: 85 },
      { name: 'Billing & Payment Processes', level: 90 },
      { name: 'Master Data Management', level: 87 },
    ],
  },
  {
    icon: '🔗',
    title: 'SAP Integration',
    skills: [
      { name: 'SD–MM Integration', level: 86 },
      { name: 'SD–FI Integration', level: 83 },
      { name: 'Revenue Posting & Tax Config', level: 80 },
      { name: 'Schedule Lines & ATP Check', level: 82 },
      { name: 'PGI & Stock Movement', level: 85 },
    ],
  },
  {
    icon: '⚙️',
    title: 'Functional Expertise',
    skills: [
      { name: 'User Acceptance Testing (UAT)', level: 88 },
      { name: 'Business Requirement Gathering', level: 85 },
      { name: 'Issue Resolution & Support', level: 92 },
      { name: 'Condition Types & Access Seq.', level: 84 },
      { name: 'Partner Functions', level: 80 },
    ],
  },
];

const tags = [
  'SAP ERP', 'Sales Order', 'Delivery', 'PGI', 'Billing',
  'Customer Master', 'Material Master', 'Condition Records',
  'Account Keys', 'Billing Types', 'Enterprise Structure',
  'Procurement Linkage', 'Tax Configuration', 'Revenue Posting',
];

export default function Skills() {
  const [animated, setAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section" id="skills" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title reveal">Skills & Expertise</h2>
        <p className="section-subtitle reveal reveal-delay-1">
          Deep SAP SD functional knowledge, cross-module integration, and implementation support.
        </p>

        <div className="skills-grid">
          {categories.map((cat, ci) => (
            <div className={`glass-card skill-category reveal reveal-delay-${ci + 1}`} key={cat.title}>
              <div className="skill-category-header">
                <div className="skill-category-icon">{cat.icon}</div>
                <h3 className="skill-category-title">{cat.title}</h3>
              </div>
              <div className="skill-list">
                {cat.skills.map((skill) => (
                  <div className="skill-item" key={skill.name}>
                    <div className="skill-item-header">
                      <span className="skill-item-name">{skill.name}</span>
                      <span className="skill-item-level">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className={`skill-bar-fill ${animated ? 'animate' : ''}`}
                        style={{ width: animated ? `${skill.level}%` : '0%' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="skills-tags reveal reveal-delay-3">
          {tags.map((tag) => (
            <span className="skill-tag" key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
