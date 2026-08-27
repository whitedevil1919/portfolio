import React from 'react';
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
                {exp.responsibilities && exp.responsibilities.length > 0 && (
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
                )}

                {exp.achievements && exp.achievements.length > 0 && (
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
                )}
              </div>

              {exp.certificate && (
                <div className="certificate-container">
                  <span className="detail-block-title">Participation Certificate</span>
                  <div className="certificate-viewer">
                    {exp.image ? (
                      <a
                        href={exp.certificate}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="certificate-image-link"
                        title="Click to view PDF certificate"
                      >
                        <img
                          src={exp.image}
                          alt="Smart India Hackathon Participation Certificate"
                          className="certificate-img"
                          loading="lazy"
                        />
                      </a>
                    ) : (
                      <iframe
                        src={exp.certificate}
                        title="Smart India Hackathon Participation Certificate"
                        className="certificate-iframe"
                        width="100%"
                        loading="lazy"
                      ></iframe>
                    )}
                  </div>
                  <div className="certificate-fallback">
                    <a
                      href={exp.certificate}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="certificate-fallback-link"
                    >
                      Open Certificate
                    </a>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
