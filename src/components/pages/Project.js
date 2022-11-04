import React from "react";
import projects from '../../projects.json'



function Project() {
    return (
  <div>
  <h1>Project</h1>
  {projects.map(project => (
   
  //  <div className="img-box">
   <div className="container">
    <div className="row justify-content-center">
        <div className="col-6">
            <div className="card">
      <p>{project.title}</p>
      {console.log(`../../assets/${project.image}`)}
      <img className="cardImage" src={`./images/${project.image}`} alt="project"/>
      <a href={project.Deployedlink}>Link to site</a> 
      </div>
       </div> 
        </div>
          </div> 
      
     
 
  
  ))}
</div>
    )
  }
  
  export default Project;