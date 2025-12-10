import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern .png'
import profile_img from '../../assets/profile_img.jpg'

const About = () => {
  return (
    <div id='about' className='about'>
    <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" /> 
    </div>
    <div className="about-section">
        <div className="about-left">
            <img src={profile_img} alt=""/>
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>I’m a passionate .NET Developer specializing in building clean, scalable, and efficient web applications using ASP.NET MVC, Web API, C#, and SQL Server. I enjoy turning ideas into real-world solutions with modern UI and solid backend architecture.</p>
                <p>I build fast, reliable, and user-friendly web applications using the Microsoft .NET ecosystem. From API development to full-stack solutions, I focus on writing clean code and delivering seamless user experiences.</p>
                <p>I am passionate about leveraging innovative solutions to solve real-world business problems while 
continuously improving my technical skills. My goal is to contribute to impactful software projects, 
collaborate with high-performing teams, and evolve as a professional within the IT industry.</p>
            </div>
        </div>
    </div>
  <div className="skills-section">
  <div className="skills-row">

    <div className="skills-container">
      <div className="skill"><p>ASP.NET</p><div className="progress-bar"><span style={{width:"90%"}}></span></div></div>
      <div className="skill"><p>C#</p><div className="progress-bar"><span style={{width:"80%"}}></span></div></div>
      <div className="skill"><p>HTML5 & CSS3</p><div className="progress-bar"><span style={{width:"90%"}}></span></div></div>
      <div className="skill"><p>WEB API</p><div className="progress-bar"><span style={{width:"70%"}}></span></div></div>
    </div>
    <div className="skills-container"> 
      <div className="skill"><p>ADO.NET</p><div className="progress-bar"><span style={{width:"85%"}}></span></div></div> 
      <div className="skill"><p>CORE JAVA</p><div className="progress-bar"><span style={{width:"60%"}}></span></div></div> 
      <div className="skill"><p>JAVASCRIPT</p><div className="progress-bar"><span style={{width:"60%"}}></span></div></div>
      <div className="skill"><p>SQL</p><div className="progress-bar"><span style={{width:"70%"}}></span></div></div>
    </div>
    <div className="skills-container">
      <div className="skill"><p>ASP.NET MVC</p><div className="progress-bar"><span style={{width:"90%"}}></span></div></div>
      <div className="skill"><p>BOOTSTRAP</p><div className="progress-bar"><span style={{width:"80%"}}></span></div></div>
      <div className="skill"><p>GIT HUB</p><div className="progress-bar"><span style={{width:"80%"}}></span></div></div>
      <div className="skill"><p>AJAX</p><div className="progress-bar"><span style={{width:"65%"}}></span></div></div>
    </div>
    <div className="skills-container">
      <div className="skill"><p>.NET CORE</p><div className="progress-bar"><span style={{width:"70%"}}></span></div></div>
      <div className="skill"><p>REACT JS</p><div className="progress-bar"><span style={{width:"60%"}}></span></div></div>
      <div className="skill"><p>JQUERY</p><div className="progress-bar"><span style={{width:"70%"}}></span></div></div>
    </div>
  </div>
</div>
    <div className="about-achievements">
       <div className="about-achievement">
        <h1>3</h1>
        <p>Months Internship Completed</p>
       </div>
       <hr/>
        <div className="about-achievement">
        <h1>5+</h1>
        <p>Months Of Experience</p>
       </div>
        <hr/>
        <div className="about-achievement">
        <h1>4+</h1>
        <p>Projects Completed</p>
       </div>
    </div>
    </div>
  )
}
export default About
