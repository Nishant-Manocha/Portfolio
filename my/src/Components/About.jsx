import React from 'react'
import '../index.css'
import Skills from './Skills/Skills'
import { Link } from 'react-router-dom'
import Timeline from './Timeline/Timeline'
const About = () => {
  return (

    <div className='about-container'>
      <div className="about-content">
        <div className='about-me-heading'>
                <h2>About me</h2>
        </div>
        <div className='about-me-text'>
          <h3>I'm Nishant and  <span>Web Developer</span></h3>
          <p>I am a passionate and versatile developer with expertise in MERN stack development, Selenium automation, and web scraping. With a strong foundation in C++ and DSA, I excel in building robust and efficient software solutions. My diverse skill set allows me to create seamless web applications, automate complex workflows, and extract valuable data from the web.</p>
        </div>

        <div className="about-btn">
            <div > 
              <Link to={"/contact"} className="border-btn" >Download CV</Link>
            </div>

            <div > 
              <Link to={"/contact"} className="btn" >Hire Me</Link>
            </div>
        </div>

        <Skills></Skills>

        <Timeline></Timeline>
      </div>

    </div>
  )
}

export default About