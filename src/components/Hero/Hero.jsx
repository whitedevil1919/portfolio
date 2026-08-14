import React from 'react';
import { ArrowRight, User } from 'lucide-react';
import { portfolioData } from '../../data/portfolio';
import './Hero.css';

export default function Hero() {
  const { personalInfo, hero } = portfolioData;

  // Set this to true and provide image path in portfolioData.personalInfo.profilePhoto to display actual image.
  const hasImage = personalInfo.profilePhoto && personalInfo.profilePhoto !== '[Profile Photo]' && personalInfo.profilePhoto !== '';

  return (
    <section id="home" className="hero-section">
      <div className="container hero-grid">
        <div className="hero-content">
          <span className="hero-title-prefix">Hi, I'm {personalInfo.fullName}</span>
          <h1 className="hero-headline">{hero.mainHeadline}</h1>
          <p className="hero-intro">{hero.shortIntroduction}</p>
          
          <div className="hero-ctas">
            <a href="#projects" className="btn btn-primary">
              {hero.primaryCTA} <ArrowRight size={16} />
            </a>
            <a href="#contact" className="btn btn-secondary">
              {hero.secondaryCTA}
            </a>
          </div>
        </div>

        <div className="hero-image-container">
          <div className="profile-avatar-placeholder" title="Bolisetty Sri Nikhil">
            {hasImage ? (
              <img 
                src={personalInfo.profilePhoto} 
                alt={personalInfo.fullName} 
                className="profile-real-image" 
                loading="eager"
              />
            ) : (
              <>
                <User size={64} strokeWidth={1} />
                <span className="placeholder-text">{personalInfo.profilePhoto}</span>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
