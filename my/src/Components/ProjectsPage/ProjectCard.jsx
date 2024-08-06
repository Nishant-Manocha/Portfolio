import React, { useState, useEffect } from 'react';
import { FaGithub, FaLink } from "react-icons/fa";
import './ProjectCard.css';
import { useInView } from 'react-intersection-observer';

const ProjectCard = ({ id, hoverId, title, desc, githubLink, webLink, ProjectImage, icons }) => {
    const [animateCard, setAnimateCard] = useState(false);
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    useEffect(() => {
        if (inView) {
            setAnimateCard(true);
        }
    }, [inView]);

    return (
        <div
            ref={ref}
            className={`project-card-overlay 
                ${id % 2 === 0 ? "project-card-overlay-right" : "project-card-overlay-left"} 
                ${animateCard ? (id % 2 === 0 ? "animate-card-right" : "animate-card-left") : ""}`}>
            <div
                className="project-card"
                style={{ backgroundImage: `url(${ProjectImage})` }}>

                <div
                    className={`project-number ${id % 2 === 0 ? "project-number-right" : "project-number-left"}`}>
                    {hoverId}
                </div>

                <div
                    className={`project-main-content ${id % 2 === 0 ? "project-main-content-right" : "project-main-content-left"}`}>
                    <div className="project-skills-container">
                        {icons.map((icon, index) => (
                            <img key={index} className="project-skill" src={icon.language} alt={`${title} skill`} />
                        ))}
                    </div>

                    <h2 className="project-heading">{title}</h2>

                    <p className="project-subHeading">
                        {desc}
                    </p>
                    <div className="btn-grp">
                        <a href={githubLink} title="GitHub Link">
                            <i className='project-icons'><FaGithub /></i>
                        </a>
                        <a href={webLink} title="Live Link">
                            <i className='project-icons'><FaLink /></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
