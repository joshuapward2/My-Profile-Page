import React from "react";
import './style.css'


function Header() {

    return (
  <div className="headerDiv">
  <h1 className="headerText">Joshua Ward <img className="iconImage" src={`${process.env.PUBLIC_URL}/images/gears.png`} alt="icon"/></h1>


  </div>
  
    )
  }
  
  export default Header;