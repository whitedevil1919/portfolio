import React from 'react';
import { ExternalLink, Briefcase } from 'lucide-react';
import { GithubIcon } from '../SocialIcons';
import { portfolioData } from '../../data/portfolio';
import './Projects.css';

export default function Projects() {
  const { projects } = portfolioData;

  const isLinkPlaceholder = (link) => {
    return !link || link.startsWith('[') || link === '';
  };

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">A showcase of projects illustrating my role, problem solving, and skills.</p>

        <div className="projects-grid">
          {projects.map((project) => {
            const isGithubPlaceholder = isLinkPlaceholder(project.github);
            const isDemoPlaceholder = isLinkPlaceholder(project.liveDemo);

            return (
              <div className="card project-card" key={project.id}>
                <div className="project-header">
                  <h3 className="project-title">{project.name}</h3>
                  <Briefcase size={20} style={{ color: 'var(--color-accent)' }} />
                </div>

                <p className="project-desc">{project.shortDescription}</p>

                <div className="project-meta-item">
                  <span className="meta-label">Problem / Purpose</span>
                  <span className="meta-value">{project.problemPurpose}</span>
                </div>

                <div className="project-meta-item">
                  <span className="meta-label">My Contribution</span>
                  <span className="meta-value">{project.contribution}</span>
                </div>

                <div className="project-meta-item">
                  <span className="meta-label">Technologies Used</span>
                  <span className="meta-value">{project.technologies}</span>
                </div>

                <div className="project-features">
                  <span className="meta-label">Key Features</span>
                  <ul className="features-list">
                    {project.keyFeatures.map((feature, index) => (
                      <li key={index} className="feature-item">
                        <span className="feature-item-dot" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="project-links">
                  {isGithubPlaceholder ? (
                    <span className="proj-btn disabled" title="GitHub repository is coming soon">
                      <GithubIcon size={16} />
                      <span>{project.github}</span>
                    </span>
                  ) : (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="proj-btn active"
                    >
                      <GithubIcon size={16} />
                      <span>Code Repository</span>
                    </a>
                  )}

                  {isDemoPlaceholder ? (
                    <span className="proj-btn disabled" title="Live demo is coming soon">
                      <ExternalLink size={16} />
                      <span>{project.liveDemo}</span>
                    </span>
                  ) : (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="proj-btn active"
                    >
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
