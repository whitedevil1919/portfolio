import React from 'react';
import { portfolioData } from '../../data/portfolio';
import './Education.css';

export default function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="education-section">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <p className="section-subtitle">My academic foundations and fields of study.</p>

        <div className="education-container">
          {education.map((edu) => (
            <div className="card education-card" key={edu.id}>
              <div className="education-card-header">
                <div>
                  <h3 className="edu-degree">{edu.degree}</h3>
                  <div className="edu-institution">{edu.institution}</div>
                </div>
                <span className="edu-duration">{edu.duration}</span>
              </div>

              <div>
                <h4 className="edu-subjects-title">Relevant Subjects & Focus Areas</h4>
                <ul className="edu-subjects-list">
                  {edu.subjects.map((sub, idx) => (
                    <li className="edu-subject-tag" key={idx}>
                      {sub}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
