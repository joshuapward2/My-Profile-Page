import React from "react";
import footerImage from '../../assets/githubLogo.png'
import LinkedLink from '../../assets/linkedinLogo.svg'
import './style.css'

function Footer() {
  return (
    <div className="footerDiv">
      <h5 className="email">joshua.p.ward2@gmail.com</h5>
      <br></br>
      <div className="linksContainer">
        <a href="https://github.com/joshuapward2/"> <img className="gitHubLogo" src={footerImage} alt="logo" /></a>
        <a href="https://www.linkedin.com/in/joshuapward2/"><img className="LinkedinLogoImg" src={LinkedLink} alt="logo" /></a>



      </div>
    </div>

  )
}

export default Footer;