import React from 'react';
import { FileText, Target, Award } from 'lucide-react';
import { portfolioData } from '../../data/portfolio';
import './About.css';

export default function About() {
  const { about } = portfolioData;

  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">A brief introduction to my background, aspirations, and goals.</p>

        <div className="about-grid">
          <div className="about-content">
            <div className="about-bio">
              <p className="about-paragraph">{about.bio}</p>
              
              <div className="about-career-goal">
                <div className="career-goal-title flex-align">
                  <Target size={18} className="icon-margin" style={{ marginRight: '6px', color: 'var(--color-accent)' }} />
                  <span>Career Goal</span>
                </div>
                <p className="career-goal-text">{about.careerGoal}</p>
              </div>
            </div>
          </div>

          <div className="about-side">
            <div className="card focus-card">
              <span className="focus-title">Current Focus</span>
              <span className="focus-value">{about.currentFocus}</span>
            </div>

            <div className="resume-container">
              <span className="resume-title">Resume / CV</span>
              <button 
                className="resume-btn" 
                disabled 
                title="Resume is coming soon"
                aria-label="Download Resume (Coming Soon)"
              >
                <FileText size={18} />
                <span>{about.resumePlaceholder}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
