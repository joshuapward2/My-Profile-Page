import React from "react";
import projects from './projects.json'

function Project() {
    return (
  <div>
  <h1>Project</h1>
  {projects.map(projects => {
    return
    (<div>
      <p>{
        projects.id}</p>

      </div>  
    )

  })}
  </div>
  
    )
  }
  
  export default Project;