import React from "react";
import projects from './projects.json'
import Bootstrap from 'react-bootstrap'

function Project() {
    return (
  <div>
  <h1>Project</h1>
  {projects.map(project => (
   
  //  <div className="img-box">
   <div className="container">
    <div class="row">
        <div class="col-12">
            <div class="card"></div>
      <p> {project.image}</p>
      <p> {project.title}</p>
      {/* <a href="{project.Deployedlink}"></a> */}

       </div> 
        </div>
          </div> 
      
     
 
  
  ))}
</div>
    )
  }
  
  export default Project;