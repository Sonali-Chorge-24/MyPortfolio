import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern .png'
import Mail_Icon1 from '../../assets/Mail_Icon1.svg'
import location_Icon from '../../assets/location_Icon.svg'
import call_icon from '../../assets/call_icon.svg'
import linkedin from '../../assets/linkedin.svg'
import Github from '../../assets/Github.svg'

const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "72d27dc5-797a-4338-85bf-9622b6fbe44b");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };
  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Get In Touch</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Open for Opportunities</h1>
                <p>I’m currently seeking a full-time role where I can contribute, learn, and grow as a .NET Developer.
If you think my skills match your requirements, let’s talk!</p>
                <div className="contact-details">
                    <div className="contact-detail">
                       <img src={Mail_Icon1} alt="" /> <p>sonachorge27@gmail.com</p>
                    </div>
                     <div className="contact-detail">
                        <img src={call_icon} alt="" /> <p>+91 8793988310</p>
                    </div>
                     <div className="contact-detail">
                        <img src={location_Icon} alt="" /> <p>Pune Maharashtra</p>
                    </div>
                    <div className="contact-detail">
                    <img src={linkedin} alt="" style={{height:"25px",width:"25px"}} />
                    <a href="https://www.linkedin.com/in/sonali-chorge-8b10672ab"
                      target="_blank" rel="noopener noreferrer">
                      LinkedIn Profile
                    </a>
                  </div>
                  <div className="contact-detail">
                    <img src={Github} alt="" style={{height:"25px",width:"25px"}} />
                    <a href="https://github.com/your-github-username"
                      target="_blank" rel="noopener noreferrer">
                      GitHub Profile
                    </a>
                  </div>
                </div>
            </div>
           <form onSubmit={onSubmit} className='contact-right'>
            <input type="hidden" name="subject" value="New Contact Message from Portfolio" />

            <label>Your Name</label>
            <input type="text" name="name" placeholder="Enter Your Name" required />

            <label>Your Email</label>
            <input type="email" name="email" placeholder="Enter Your Email Id" required />

            <label>Write your message here</label>
            <textarea name="message" rows="8" placeholder="Enter Your Message" required></textarea>

            <button type="submit" className='contact-submit'>Submit</button>
        </form>
        </div>
    </div>
  )
}
export default Contact