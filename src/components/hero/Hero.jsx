import React from 'react';

const Hero = () => {
  return (
    <section className="h-screen flex items-center justify-center bg-stone-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Adam Perez</h1>
        <p className="text-xl mb-8">Fullstack Developer</p>
        <div className="space-x-4">
          <button 
            className="bg-stone-800 text-white px-6 py-2 rounded-full hover:bg-stone-700 transition"
            onClick={() => {
              // Add logic to download CV
              console.log('Download CV clicked');
            }}
          >
            Download CV
          </button>
          <button 
            className="bg-stone-200 text-stone-800 px-6 py-2 rounded-full hover:bg-stone-300 transition"
            onClick={() => {
              window.location.href = 'mailto:adamperez.dev@gmail.com';
            }}
          >
            Let's Talk
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;