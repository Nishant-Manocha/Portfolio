import React, { useState } from 'react'
import './Skills.css'
import {SkillsData} from '../../data/SkillsData'
import SkillCard from './SkillCard/SkillCard'
import SkillsInfoCard from './SkillsInfoCard/SkillsInfoCard'

const Skills = () => 
{
    const [selectedSkills,SetselectedSkills] = useState(SkillsData[0]);

    function handleSelectedSkill(data)
    {
        SetselectedSkills(data);
    }
  return (
    <section className="skills-container">
        <h5>Technical Proficiency</h5>

        <div className="skills-content">
            <div className="skills">
                {
                    SkillsData.map((item)=>(
                        <SkillCard
                        key={item.title}
                        iconUrl={item.icons}
                        title={item.title}
                        isActive={selectedSkills.title === item.title}
                        onClick={()=>{handleSelectedSkill(item)}}
                        />
                    ))
                }
            </div>
            <div className="skills-info">
                <SkillsInfoCard
                heading={selectedSkills.title}
                skills={selectedSkills.skills}
                />
            </div>
        </div>
    </section>
  )
}

export default Skills