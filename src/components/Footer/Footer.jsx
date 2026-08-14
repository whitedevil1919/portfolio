import React from 'react';
import { Link2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon, TwitterIcon } from '../SocialIcons';
import { portfolioData } from '../../data/portfolio';
import './Footer.css';

export default function Footer() {
  const { socialLinks, personalInfo } = portfolioData;

  const getSocialIcon = (key) => {
    switch (key) {
      case 'github':
        return <GithubIcon size={18} />;
      case 'linkedin':
        return <LinkedinIcon size={18} />;
      case 'instagram':
        return <InstagramIcon size={18} />;
      case 'twitter':
        return <TwitterIcon size={18} />;
      default:
        return <Link2 size={18} />;
    }
  };

  const isPlaceholder = (link) => {
    return !link || link.startsWith('[') || link === '';
  };

  const socialItems = Object.entries(socialLinks).map(([key, val]) => ({
    key,
    value: val,
    icon: getSocialIcon(key),
    placeholder: isPlaceholder(val),
  }));

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" aria-label="Footer">
      <div className="container footer-content">
        <ul className="footer-socials">
          {socialItems.map((item) => (
            <li key={item.key}>
              {item.placeholder ? (
                <span 
                  className="social-icon-btn disabled" 
                  title={`${item.key.toUpperCase()} link is coming soon`}
                  aria-label={`${item.key} (Coming Soon)`}
                >
                  {item.icon}
                </span>
              ) : (
                <a
                  href={item.value}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-btn active"
                  aria-label={`Visit my ${item.key}`}
                >
                  {item.icon}
                </a>
              )}
            </li>
          ))}
        </ul>

        <ul className="footer-nav">
          <li><a href="#home" className="footer-nav-link">Home</a></li>
          <li><a href="#about" className="footer-nav-link">About</a></li>
          <li><a href="#skills" className="footer-nav-link">Skills</a></li>
          <li><a href="#projects" className="footer-nav-link">Projects</a></li>
          <li><a href="#experience" className="footer-nav-link">Experience</a></li>
          <li><a href="#education" className="footer-nav-link">Education</a></li>
          <li><a href="#certifications" className="footer-nav-link">Certifications</a></li>
          <li><a href="#contact" className="footer-nav-link">Contact</a></li>
        </ul>

        <p className="footer-copyright">
          &copy; {currentYear} {personalInfo.fullName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
