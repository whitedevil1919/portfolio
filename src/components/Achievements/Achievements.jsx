import React from 'react';
import { Award, Zap } from 'lucide-react';
import { portfolioData } from '../../data/portfolio';
import './Achievements.css';

export default function Achievements() {
  const { achievements } = portfolioData;

  return (
    <section id="achievements" className="achievements-section">
      <div className="container">
        <h2 className="section-title">Achievements</h2>
        <p className="section-subtitle">Awards, contests, and other notable milestones.</p>

        <ul className="achievements-list">
          {achievements.list.map((ach, idx) => (
            <li className="card achievement-card" key={idx}>
              <Zap size={20} className="achievement-icon" />
              <span className="achievement-text">{ach}</span>
            </li>
          ))}
        </ul>

        <div className="achievements-status">
          <p>{achievements.status}</p>
        </div>
      </div>
    </section>
  );
}
