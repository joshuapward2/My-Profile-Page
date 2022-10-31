import React from "react";
import projects from './projects.json'

function Project() {
    return (
  <div>
  <h1>Project</h1>
  {projects.map(project => (
   
    <div>
      <p> {project.id}</p>
      <p> {project.title}</p>


       </div>  
     

  ))}
  </div>
  
    )
  }
  
  export default Project;