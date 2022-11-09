import React from "react";
import footerImage from '../../assets/githubLogo.png' 
import LinkedLink from '../../assets/linkedinLogo.svg'
import './style.css'

function Footer() {
    return (
  <div className="footerDiv">
    <h4 className="footerHeader">Links to my platforms...</h4>
    <br></br>
 
  <a href="https://github.com/joshuapward2/"> <img className="gitHubLogo" src={footerImage} alt="logo"/></a> 
  <a href="https://www.linkedin.com/in/joshuapward2/"><img className="LinkedinLogoImg" src={LinkedLink} alt="logo"/> </a>
  </div>
  
    )
  }
  
  export default Footer;