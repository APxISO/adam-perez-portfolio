import React from 'react';

const ProjectCard = ({ title, description, siteUrl, githubUrl }) => (
  <div className="bg-stone-100 p-6 rounded-lg">
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="mb-4">{description}</p>
    <div className="space-x-4">
      <a href={siteUrl} target="_blank" rel="noopener noreferrer" className="text-stone-800 hover:underline">View Site</a>
      <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="text-stone-800 hover:underline">GitHub Repo</a>
    </div>
  </div>
);

const Projects = () => {
  const projects = [
    {
      title: 'Feet Heat',
      description: 'E-commerce web application for luxury sneakers with user authentication and persistent shopping cart.',
      siteUrl: '#', // Replace with actual URL
      githubUrl: '#', // Replace with actual URL
    },
    {
      title: 'Stranger\'s Things',
      description: 'Web application for posting and browsing items for sale, inspired by "Stranger Things." (Think Craigslist)',
      siteUrl: '#', // Replace with actual URL
      githubUrl: '#', // Replace with actual URL
    },
    {
      title: 'Quote Generator',
      description: 'Web app that generates random quotes and allows users to tweet them.',
      siteUrl: '#', // Replace with actual URL
      githubUrl: '#', // Replace with actual URL
    },
  ];

  return (
    <section className="min-h-screen bg-white p-8">
      <h2 className="text-3xl font-bold mb-8">Technical Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;