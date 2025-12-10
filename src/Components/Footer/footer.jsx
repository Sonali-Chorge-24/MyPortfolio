import React from 'react'
import './footer.css'
import logo from '../../assets/logo.png'
import linkedin from '../../assets/linkedin.svg'
import Github from '../../assets/Github.svg'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={logo} alt="Portfolio Logo" />
          <p>I am a Full Stack .NET Developer based in Pune with 6 months of experience.</p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <input type="text" placeholder="Enter Your Email" />
          </div>
          <button className="footer-subscribe">Subscribe</button>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          © 2025 Sonali Chorge. All rights reserved.
        </p>
        <div className="footer-bottom-right">
          <a
            href="https://www.linkedin.com/in/sonali-chorge-8b10672ab"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link">
            <img src={linkedin} alt="LinkedIn" style={{ height: "25px", width: "25px" }} /> LinkedIn Profile
          </a>
          <a
            href="https://github.com/your-github-username"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link">
            <img src={Github} alt="GitHub" style={{ height: "25px", width: "25px" }} /> GitHub Profile
          </a>
        </div>
      </div>
    </div>
  )
}
export default Footer
