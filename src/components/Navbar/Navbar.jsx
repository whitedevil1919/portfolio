import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import './Navbar.css';

const navItems = [
  { label: 'Home', href: '#home', id: 'home' },
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Skills', href: '#skills', id: 'skills' },
  { label: 'Projects', href: '#projects', id: 'projects' },
  { label: 'Experience', href: '#experience', id: 'experience' },
  { label: 'Education', href: '#education', id: 'education' },
  { label: 'Certifications', href: '#certifications', id: 'certifications' },
  { label: 'Achievements', href: '#achievements', id: 'achievements' },
  { label: 'Contact', href: '#contact', id: 'contact' },
];

export default function Navbar({ theme, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (id) => {
    setIsOpen(false);
    setActiveSection(id);
  };

  return (
    <nav className="navbar" aria-label="Main Navigation">
      <div className="container nav-container">
        <a href="#home" className="logo" onClick={() => handleLinkClick('home')}>
          Bolisetty Sri Nikhil<span className="logo-dot">.</span>
        </a>

        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => handleLinkClick(item.id)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <button
            onClick={toggleTheme}
            className="theme-toggle"
            aria-label={theme === 'dark' ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
            title={theme === 'dark' ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="menu-btn"
            aria-expanded={isOpen}
            aria-label="Toggle Navigation Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <ul className={`mobile-menu ${isOpen ? 'open' : ''}`} aria-hidden={!isOpen}>
        {navItems.map((item) => (
          <li key={item.id} style={{ width: '100%' }}>
            <a
              href={item.href}
              className={`mobile-nav-link ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => handleLinkClick(item.id)}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
