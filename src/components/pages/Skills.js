import React from 'react';
// import { Parallax } from 'react-parallax';

export default function About() {
  return (
    // <Parallax
    //   // blur={{ min: -15, max: 15 }}
    //   // // bgImage={require('../../assets/workspacebg.jpeg')}
    //   // // bgImageAlt="the dog"
    //   // strength={-200}
    // >
    <section className="skillsCards">
      <h1 className='skillsHeader'>Skills</h1>
      <div class="row">
        <div class="col-sm-4">
          <div class="card mb-5">
            <h3 class="card-header"> Languages, frameworks,libraries and databases</h3>
            <div class="card-body">
              <ul className='card-text'>
                <li> HTML, CSS, JavaScript & Python </li>
                <li>MERN Stack</li>
                <li>MySQL & Sequelize</li>
                <li>MongoDB & Mongoose</li>
                <li>GraphQL & IndexDB </li>
                <li>Bootstrap & Bulma</li>
                <li>Jquery</li>
                <li>Flask</li>


              </ul>
            </div>
          </div>
        </div>


        <div class="col-sm-4">
          <div class="card mb-5">
            <h3 class="card-header">Technologies & other </h3>
            <div class="card-body">
              <ul className='card-text'>
                <li>Network and security fundamentals and topologies</li>
                <li>AWS Cloud fundamentals</li>
                <li>Git, CMD, Powershell, Linux</li>
                <li>Github</li>
                <li>Agile development methodology</li>
                <li>Progressive web applications and webpack</li>
                <li>Google & React Developer Tools</li>
                <li>NPM & PIP</li>
                <li>Troubleshooting Hardware and Software Networks</li>
                <li>ORM and Handlebars syntax</li>
                <li>State management</li>
                

                

              </ul>
            </div>
          </div>
        </div>

        <div class="col-sm-4">
          <div class="card mb-5">
            <h3 class="card-header">Certifications</h3>
            <div class="card-body">
              <ul className='card-text'>
                <li>AWS Cloud Practioner</li>
                <li>COMPTIA A +</li>
                <li>Certified Scrum Master</li>
                <li>Certified Full Stack Developer</li>
                
              </ul>
            </div>
          </div>
        </div>




       

        <div class="col-sm-12">
          <div class="card mb-5">
            <h3 class="card-header">Non-technical experience</h3>
            <div class="card-body">
              <ul className='card-text'>
                <li>Management</li>
                <li>Finance</li>
                <li>Exercise Science & Anatomy</li>
                <li>Logistics</li>
                <li>Hospitality</li>
                
              </ul>
            </div>
          </div>
        </div>
      </div>

    

    </section>


    /* <p className='textContent'>

        HTML, CSS and JavaScript. | Mern stack, Node, Express and React.js, MongoDB |MySQL & NoSQL, GraphQL, IndexDB databases | Bootstrap, jQuery, Bulma  | OOP and Functional programming syntaxes |ORM, Sequelize, Mongoose, several other NPM’s | Google and React developer tools | Agile development methodology | Git and GitHub workflow | State management | Data-types | Progressive Web Applications | Google and React Developer Tools

      </p> */

    /* // </Parallax> */

  );
}
