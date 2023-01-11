import React from "react";
// import projects from '../../projects.json'

const projects = [{
   
  "id": "1",
  "title":"A Day In The Smoky Mountains",
  "description":"A Day In The Smoky Mountains is a simple collaborative front-end project developed from scratch in a weeks time. It entails up-to-date conditions and amentities of The Great Smoky Mountains National Park.",
  "Deployedlink":"https://zombiewok28.github.io/A-Day-In-The-Smoky-Mountains/",
  "GitHubLink":"https://github.com/joshuapward2/A-Day-In-The-Smoky-Mountains",
  "image":"zombie.png"
  
},
{
 
  "id": "2",
  "title":"Javascript Password Generator",
  "description":"This app is exactly what it sounds like, a simple but effective random password generator. Built with vanilla javascript.",
  "Deployedlink":"https://joshuapward2.github.io/password-generator-/",
  "GitHubLink":"https://github.com/joshuapward2/password-generator-",
  "image":"jsbg.png"
  
},
{
 
  "id": "3",
  "title":"Between the Looking Glass",
  "description":"Between the Looking Glass is a collective full-stack application developed in a 10-day sprint to create a community for junior developers transitioning into the workforce.",
  "Deployedlink":"https://github.com/joshuapward2/between-the-looking-glass",
  "GitHubLink":"https://github.com/joshuapward2/between-the-looking-glass",
  "image":"lookingGlass.png"
  
},
{
 
  "id": "4",
  "title":"MySql Database Employee Tracker",
  "description":"Where this app lacks in vivid frontend polish it makes up for in efficient backend functionality. Allowing users to keep track of employers utilizing Mysql's strict structure(back-end/repository-only)",
  "Deployedlink":"https://github.com/joshuapward2/employee-tracker",
  "GitHubLink":"https://github.com/joshuapward2/employee-tracker",
  "image":"mysqlbg.svg"
  
},{
 
  "id": "5",
  "title":"MongoDB Social media API",
  "description":"Considering the popularity of social media platforms i wanted to show that i am capable of writing and executing queryies and mutations within one. In this scenario i utilized MongoDB to do so.(back-end/repository-only)",
  "Deployedlink":"https://github.com/joshuapward2/social-network-api",
  "GitHubLink":"https://github.com/joshuapward2/social-network-api",
  "image":"mongodblogo.svg"
  
},{
 
  "id": "6",
  "title":"Quick-Track Version 2",
  "description":"Quick track is another full-stack application built in a 10 day sprint that tracks users' caloric intake & provides dietary tools. Allowing users to create an account and login. Created with React on the frontend and graphQl on top of a mongoDB database in the backend.",
  "Deployedlink":"https://github.com/joshuapward2/quick-track-v2",
  "GitHubLink":"https://github.com/joshuapward2/quick-track-v2",
  "image":"capstone.png"
  
}




]


function Project() {
    return (
  <div>
  <h1 className="projectsHeader">Projects</h1>
  <h5 className="projectsExplanation">Below you'll find a list of a few of the projects I have built. I wanted to give a broad overview of some of the capabilities I bring to the table. So, each projects scope will vary as well as the complexity of the code. PLEASE NOTE that some of these projects are not deployed and are repositories only. All of them are working applications and can either be deployed locally or they're strictly back-end project's. Please visit the relevant projects Readme for more details. Each Readme can be found by clicking "Link to Github Repository". Thanks again for visiting my page. If you have any questions please don't hesitate to contact me via email or Linkedin </h5>
  {projects.map(project => (
   

   <div className="container">
    <div className="row justify-content-center">
        <div className="col-sm-6">
            <div className="card border-primary">
      <h3 className="projectTitle">{project.title}</h3>
      <p className="projectDescription">{project.description}</p>
    
      <img className="cardImage" src={`${process.env.PUBLIC_URL}/images/${project.image}`} alt="project"/>
      <a href={project.Deployedlink}>Link to site</a> 
      <a href={project.GitHubLink}>Link to Github Repository</a> 
    
      
      </div>
       </div> 
        </div>
          </div> 
      
     
 
  
  ))}
</div>
    )
  }
  
  export default Project;