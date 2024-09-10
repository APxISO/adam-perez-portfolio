import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Skills = () => {
  const [skills, setSkills] = useState([
    { name: 'JavaScript', level: 'Experienced' },
    { name: 'React', level: 'Experienced' },
    { name: 'Node.js', level: 'Experienced' },
    { name: 'HTML/CSS', level: 'Experienced' },
    { name: 'SQL', level: 'Experienced' },
    { name: 'Python', level: 'Intermediate' },
  ]);

  const [newSkill, setNewSkill] = useState({ name: '', level: 'Beginner' });
  const [showForm, setShowForm] = useState(false);

  const handleAddSkill = (e) => {
    e.preventDefault();
    if (newSkill.name) {
      setSkills([...skills, newSkill]);
      setNewSkill({ name: '', level: 'Beginner' });
      setShowForm(false);
    }
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section className="min-h-screen bg-stone-100 p-8">
      <h2 className="text-3xl font-bold mb-8">Skills</h2>
      <Slider {...sliderSettings} className="mb-8">
        {skills.map((skill, index) => (
          <div key={index} className="px-2">
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-xl font-bold">{skill.name}</h3>
              <p>{skill.level}</p>
            </div>
          </div>
        ))}
      </Slider>
      {!showForm && (
        <button
          className="bg-stone-800 text-white px-4 py-2 rounded"
          onClick={() => setShowForm(true)}
        >
          Add a Skill
        </button>
      )}
      {showForm && (
        <form onSubmit={handleAddSkill} className="mt-4">
          <input
            type="text"
            value={newSkill.name}
            onChange={(e) => setNewSkill({ ...newSkill, name: e.target.value })}
            placeholder="Skill name"
            className="mr-2 p-2 border rounded"
          />
          <select
            value={newSkill.level}
            onChange={(e) => setNewSkill({ ...newSkill, level: e.target.value })}
            className="mr-2 p-2 border rounded"
          >
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Experienced">Experienced</option>
          </select>
          <button type="submit" className="bg-stone-800 text-white px-4 py-2 rounded">
            Add
          </button>
        </form>
      )}
    </section>
  );
};

export default Skills;