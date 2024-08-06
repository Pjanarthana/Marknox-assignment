import React from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import './Projects.css';

const projectsData = [
  {
    id: 1,
    title: "Springdale Public School: A Comprehensive and Responsive Educational Portal",
    description: "Responsive Springdale Public School website built with React.Js, Redux, and Bootstrap, showcasing academics, faculty, admissions, gallery, and contact information.",
    imageUrl: "https://via.placeholder.com/300x200",
    technologies: ["React", "Redux", "Bootstrap"],
    githubUrl: "https://github.com/Pjanarthana",
    liveUrl: "https://main--springdale001.netlify.app/"
  },
  {
    id: 2,
    title: "OpenWeather API with React.js",
    description: "Fetch and display current weather, 7-week forecast, and city weather using React.js and OpenWeather API with key authentication.",
    imageUrl: "https://via.placeholder.com/300x200",
    technologies: ["JavaScript", "HTML", "CSS", "API Integration"],
    githubUrl: "https://github.com/Pjanarthana",
    liveUrl: "https://your-weather-app.com"
  },
  {
    id: 3,
    title: "Gilly's Koramangala Leaderboard",
    description: "Dynamic leaderboard for Gilly's Koramangala with responsive design, real-time updates, local storage, and interactive features using React and Redux.",
    imageUrl: "https://via.placeholder.com/300x200",
    technologies: ["React", "Redux"],
    githubUrl: "https://github.com/Pjanarthana",
    liveUrl: "https://main--f1-dashboard01.netlify.app/"
  }
];

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2 className="section-title">My Projects</h2>
      <div className="projects-grid">
        {projectsData.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;