import React from 'react'
import { FaGithub,FaLink} from "react-icons/fa";
import './ProjectCard.css'

const ProjectCard = ({id,hoverId,title,desc,githubLink,webLink,ProjectImage,icons}) => {
  return (
    
    <div className={`project-card-overlay  ${id%2 ===0 ? "project-card-overlay-right" : "project-card-overlay-left"}` } >
        <div className="project-card" style={{backgroundImage:`URL( ${ProjectImage})`}}>
        <div className={`project-number  ${id%2 ===0 ? "project-number-right" : "project-number-left"}`}>
            {hoverId}
        </div>

        <div className={`project-main-content  ${id%2 ===0 ? "project-main-content-right" : "project-main-content-left"}`}>

            <div className="project-skills-container">
                {
                    icons.map( (icon,index)=>(
                        <img key={index} className="project-skill" src={icon.language} alt={title} />
                    ))
                }
                
            </div>

            <h2 className="project-heading">{title}</h2>

            <p className="project-subHeading">          
                {desc}
            </p>
            <div className="btn-grp">
                <a href={githubLink}>
                <i title="GitHubLink" className='project-icons'><FaGithub/></i>
                </a>
                <a href={webLink}>
                <i title="Live Link" className='project-icons'><FaLink/></i>
                </a>
            </div>
        </div>
    </div>
</div>
  )
}

export default ProjectCard