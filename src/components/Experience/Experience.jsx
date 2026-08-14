import React from 'react';
import { Briefcase } from 'lucide-react';
import { portfolioData } from '../../data/portfolio';
import './Experience.css';

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h2 className="section-title">Work Experience</h2>
        <p className="section-subtitle">My professional journey and industry contributions.</p>

        <div className="experience-timeline">
          {experience.map((exp) => (
            <div className="experience-card" key={exp.id}>
              <div className="experience-header">
                <span className="role-title">{exp.role}</span>
                <span className="company-name">{exp.company}</span>
                <span className="duration-tag">{exp.duration}</span>
              </div>

              <div className="experience-details">
                <div className="detail-block">
                  <span className="detail-block-title">Key Responsibilities</span>
                  <ul className="detail-list">
                    {exp.responsibilities.map((resp, idx) => (
                      <li className="detail-item" key={idx}>
                        <span className="detail-dot" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="detail-block">
                  <span className="detail-block-title">Major Achievements</span>
                  <ul className="detail-list">
                    {exp.achievements.map((ach, idx) => (
                      <li className="detail-item" key={idx}>
                        <span className="detail-dot" style={{ backgroundColor: 'var(--color-accent)' }} />
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
