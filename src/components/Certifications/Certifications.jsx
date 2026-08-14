import React from 'react';
import { Award, ShieldAlert } from 'lucide-react';
import { portfolioData } from '../../data/portfolio';
import './Certifications.css';

export default function Certifications() {
  const { certifications } = portfolioData;

  return (
    <section id="certifications" className="certifications-section">
      <div className="container">
        <h2 className="section-title">Certifications</h2>
        <p className="section-subtitle">Technical certifications and credentials.</p>

        <div className="certifications-grid">
          {certifications.list.map((cert) => (
            <div className="card certification-card" key={cert.id}>
              <h3 className="cert-name">
                <Award size={18} style={{ color: 'var(--color-accent)' }} />
                <span>{cert.name}</span>
              </h3>
              <div className="cert-org">{cert.organization}</div>
              <div className="cert-year">{cert.year}</div>
            </div>
          ))}
        </div>

        <div className="certifications-additional">
          <p>{certifications.additional}</p>
        </div>
      </div>
    </section>
  );
}
