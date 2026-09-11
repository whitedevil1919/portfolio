import React from 'react';
import { Award, ExternalLink } from 'lucide-react';
import { portfolioData } from '../../data/portfolio';
import './Certifications.css';

export default function Certifications() {
  const { certifications } = portfolioData;
  const sih = certifications.featured || certifications.sihCertificate;

  return (
    <section id="certifications" className="certifications-section">
      <div className="container">
        <h2 className="section-title">Certifications</h2>
        <p className="section-subtitle">Technical certifications and credentials.</p>

        {sih && (
          <div className="card sih-certificate-card">
            <div className="sih-certificate-header">
              <h3 className="sih-certificate-title">
                <Award size={20} style={{ color: 'var(--color-accent)' }} />
                <span>{sih.title} — {sih.subtitle}</span>
              </h3>
              {(sih.image || sih.certificatePdf) && (
                <a
                  href={sih.image || sih.certificatePdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sih-certificate-open-btn"
                  title="View Certificate"
                >
                  <span>View Certificate</span>
                  <ExternalLink size={15} />
                </a>
              )}
            </div>

            <div className="sih-certificate-image-wrapper">
              <img
                src={sih.image}
                alt={`${sih.title} — ${sih.subtitle}`}
                className="sih-certificate-image"
                loading="lazy"
              />
            </div>
          </div>
        )}

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
