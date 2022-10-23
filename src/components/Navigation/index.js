import React from "react";

function Navigation(props) {
    const {setPage, AboutMe}= props;
    return (
  <div>
  <h1>Navigation</h1>
  <button onClick={()=>setPage(<AboutMe />)}>About me</button>
  </div>
  
    )
  }
  
  export default Navigation;