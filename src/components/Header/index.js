import React from "react";
import Navigation from "../Navigation";

function Header(props) {

    return (
  <div>
  <h1>Header</h1>
  <Navigation {...props}/>
  </div>
  
    )
  }
  
  export default Header;