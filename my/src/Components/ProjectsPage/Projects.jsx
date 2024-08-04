import React from 'react';
import './Projects.css';
import { ProjectsData } from '../../data/ProjectsData';
import ProjectCard from './ProjectCard';

const Portfolio = () => {
  return (
    <div className="project-section">
      <div className="page-header">
        <h2>Portfolio</h2>
      </div>

      <div className="project-container">
        {ProjectsData.map(item => (
          <ProjectCard
            key={item.id}
            id={item.id}
            hoverId={item.hoverId}
            title={item.title}
            desc={item.desc}
            githubLink={item.githubLink}
            webLink={item.webLink}
            ProjectImage={item.ProjectImage}
            icons={item.icons}
          />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
