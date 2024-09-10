import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import Navigation from '../components/navigation/Navigation';
import Hero from '../components/hero/Hero';
import About from '../components/about/About';


// Import other components here (Hero, About, Projects, Skills, Contact)

const Home = () => {
  const [currentSection, setCurrentSection] = useState('hero');
  const sections = ['hero', 'about', 'projects', 'skills', 'contact'];

  return (
    <div className="font-sans text-stone-900">
      <Navigation currentSection={currentSection} setCurrentSection={setCurrentSection} />

      <AnimatePresence mode="wait">
        <motion.div
          key={currentSection}
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: '-100%' }}
          transition={{ type: 'tween', duration: 0.5 }}
        >
          {currentSection === 'hero' && <Hero />}
          {currentSection === 'about' && <About />}
        </motion.div>
      </AnimatePresence>

      <button
        className="fixed bottom-8 right-8 bg-stone-800 text-white p-2 rounded-full hover:bg-stone-700 transition"
        onClick={() => {
          const nextIndex = (sections.indexOf(currentSection) + 1) % sections.length;
          setCurrentSection(sections[nextIndex]);
        }}
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

export default Home;