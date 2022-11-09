import React from "react";
// import projects from '../../projects.json'

const projects = [{
   
  "id": "1",
  "title":"A Day In The Smoky Mountains",
  "Deployedlink":"https://zombiewok28.github.io/A-Day-In-The-Smoky-Mountains/",
  "GitHubLink":"https://github.com/joshuapward2/A-Day-In-The-Smoky-Mountains",
  "image":"zombie.png"
  
},
{
 
  "id": "2",
  "title":"Between the looking glass",
  "Deployedlink":"https://dry-temple-13792.herokuapp.com/",
  "GitHubLink":"https://github.com/joshuapward2/between-the-looking-glass",
  "image":"lookingGlass.png"
  
},
{
 
  "id": "3",
  "title":"Javascript password generator",
  "Deployedlink":"https://joshuapward2.github.io/password-generator-/",
  "GitHubLink":"https://github.com/joshuapward2/password-generator-",
  "image":"jsbg.png"
  
},{
 
  "id": "4",
  "title":"MySql Database employee tracker",
  "Deployedlink":"",
  "GitHubLink":"https://github.com/joshuapward2/employee-tracker",
  "image":"jsbg.png"
  
},{
 
  "id": "5",
  "title":"MongoDB Social media API",
  "Deployedlink":"",
  "GitHubLink":"https://github.com/joshuapward2/social-network-api",
  "image":"jsbg.png"
  
},{
 
  "id": "6",
  "title":"Object relational mapping employee tracker",
  "Deployedlink":"",
  "GitHubLink":"https://github.com/joshuapward2/employee-tracker",
  "image":"sequelizebg.png"
  
}




]


function Project() {
    return (
  <div>
  <h1>Project</h1>
  {projects.map(project => (
   

   <div className="container">
    <div className="row justify-content-center">
        <div className="col-6">
            <div className="card">
      <p>{project.title}</p>
    
      <img className="cardImage" src={`${process.env.PUBLIC_URL}/images/${project.image}`} alt="project"/>
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