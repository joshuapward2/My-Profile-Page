import React from "react";
import projects from './projects.json'

function Project() {
    return (
  <div>
  <h1>Project</h1>
  {projects.map(project => (
   
   <div class="img-box">
      <p> {project.image}</p>
      <p> {project.title}</p>
      <a href={project.Deployedlink}></a>


       </div>  
     

  ))}
  </div>
  
    )
  }
  
  export default Project;