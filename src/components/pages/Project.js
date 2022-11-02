import React from "react";
import projects from '../../assets/projects.json'



function Project() {
    return (
  <div>
  <h1>Project</h1>
  {projects.map(project => (
   
  //  <div className="img-box">
   <div className="container">
    <div className="row">
        <div className="col-12">
            <div className="card">
      <p> {project.title}</p>
      <img className="cardImage" src={project.image} alt="project"/>
      <a href={project.Deployedlink}>Link</a> 
      </div>
       </div> 
        </div>
          </div> 
      
     
 
  
  ))}
</div>
    )
  }
  
  export default Project;