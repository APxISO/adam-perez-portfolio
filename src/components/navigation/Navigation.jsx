import React from 'react';

const Navigation = ({ currentSection, setCurrentSection }) => {
  const sections = ['hero', 'about', 'projects', 'skills', 'contact'];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white bg-opacity-90 z-50">
      <ul className="flex justify-center space-x-8 p-4">
        {sections.map((section) => (
          <li key={section}>
            <button
              className={`capitalize ${currentSection === section ? 'font-bold' : ''}`}
              onClick={() => setCurrentSection(section)}
            >
              {section}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;