import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.jpg'

const Hero = ({ setMenu }) => { 
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt="Sonali Chorge" />
        <h1><span>Hi, I’m Sonali Chorge, </span> a Full-Stack<br/> .NET Developer</h1>
        <p>I’m a dedicated .NET Developer focused on building secure, scalable, and user-centered applications. I love learning, improving, and creating meaningful software.</p>

        <div className="hero-action">
          <div 
            className="nav-connect" 
            onClick={() => setMenu("contact")}>
            <a href="#contact">Connect With Me</a>
          </div>
            <a
              href="/MyResume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Sona_Chorge_Resume.pdf"
              className="hero-resume" >
              📄 My Resume
            </a>
        </div>
    </div>
  )
}
export default Hero
