import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import heroimage from '../images/hero.jpg'
import { Link } from 'react-router-dom';
import '../index.css'
const Home = () => {
  return (
    <div className='body-container'>
      <div className="home-content">
        <div className="left-content">
            <div className='main-heading'>
              <h2 className='about-me-heading'>Hello, my name is <span>Nishant Manocha</span></h2>
            </div>

            <div className='professions'> <p>
                        <span>I am a{' '}</span>
                        <span className='typing'>
                        <TypeAnimation
                          preRenderFirstString={true}
                          sequence={[
                            500,
                            'MERN Stack Developer', // initially rendered starting point
                            1000,
                            'Selenium Automation Specialist',
                            1000,
                            'Web Scraper',
                            1000,
                            'C++ Developer',
                            1000,
                          ]}
                          speed={40}
                          repeat={Infinity}
                        />
                        </span>
                  </p>
              </div>

            <div className='description'>I am a passionate and versatile developer with expertise in MERN stack development, Selenium automation, and web scraping. With a strong foundation in C++ and DSA, I excel in building robust and efficient software solutions.</div>
            <div className="btn" style={{  margin: "auto"}}> 
              <Link to={"/contact"} id='btn-color' >Hire Me</Link>
            </div>
        </div>
        <div className="right-content">
                  <img src={heroimage} alt="My Image" />
        </div>

        </div>
        
      </div>
  )
}

export default Home