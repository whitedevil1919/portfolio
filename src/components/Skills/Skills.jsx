import React from 'react';
import { Code, Layout, Server, Database, Wrench, Layers } from 'lucide-react';
import { portfolioData } from '../../data/portfolio';
import './Skills.css';

export default function Skills() {
  const { skills } = portfolioData;

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Programming Languages':
        return <Code size={18} />;
      case 'Frontend':
        return <Layout size={18} />;
      case 'Backend':
        return <Server size={18} />;
      case 'Database':
        return <Database size={18} />;
      case 'Tools':
        return <Wrench size={18} />;
      default:
        return <Layers size={18} />;
    }
  };

  const isPlaceholder = (item) => {
    return item.startsWith('[Add ') || item.startsWith('[coming') || item.includes('placeholder');
  };

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        <p className="section-subtitle">A breakdown of my programming languages, tools, and technical competencies.</p>

        <div className="skills-grid">
          {skills.map((categoryObj, index) => (
            <div className="card skills-category-card" key={index}>
              <h3 className="category-title">
                {getCategoryIcon(categoryObj.category)}
                <span>{categoryObj.category}</span>
              </h3>
              
              <ul className="skills-list">
                {categoryObj.items.map((item, itemIdx) => {
                  const placeholder = isPlaceholder(item);
                  return (
                    <li 
                      key={itemIdx} 
                      className={`skill-tag ${placeholder ? 'placeholder' : ''}`}
                      title={placeholder ? 'Placeholder for future skills' : undefined}
                    >
                      {item}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
