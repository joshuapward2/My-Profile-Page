import React from "react";
import projects from './projects.json'
// import '../../assets/cover/images'


function Project() {
    return (
  <div>
  <h1>Project</h1>
  {projects.map(project => (
   
  //  <div className="img-box">
   <div className="container">
    <div class="row">
        <div class="col-12">
            <div class="card">
      <p> {project.title}</p>
      <img src={project.image} alt="project"/>
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