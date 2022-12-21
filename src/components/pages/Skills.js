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
    <section className="">
      <h1 className='skillsHeader'>Skills</h1>
      <div class="row">
        <div class="col-sm-4">
          <div class="card rounded-border border-primary mb-5">
            <h5 class="card-header">Technologies & Languages</h5>
            <div class="card-body">
              <ul className='card-text'>
                <li> HTML, CSS, JavaScript </li>
                <li>MERN Stack(React,Express.js, Node.js, MongoDB)</li>
                <li>MySQL & Sequelize</li>
                <li>MongoDB & Mongoose</li>
                <li>GraphQL & IndexDB </li>
                <li>Bootstrap & Bulma</li>
                <li>Jquery</li>
                <li>Google & React Developer Tools</li>


              </ul>
            </div>
          </div>
        </div>


        <div class="col-sm-4">
          <div class="card rounded-border border-primary mb-5">
            <h5 class="card-header">Paradigms, Concept's & Methodology's </h5>
            <div class="card-body">
              <ul className='card-text'>
                <li>Object oriented programming</li>
                <li>Functional programming</li>
                <li>Object relational mapping</li>
                <li>React State management</li>
                <li>Git version control</li>
                <li>Github</li>
                <li>Agile development methodology</li>
                <li>Progressive web applications</li>
                <li>Incorporating NPM's</li>

              </ul>
            </div>
          </div>
        </div>



        <div class="col-sm-4">
          <div class="card rounded-border border-primary mb-5">
            <h5 class="card-header">Soft Skills</h5>
            <div class="card-body">
              <ul className='card-text'>
                <li>Reading documentation</li>
                <li>Confident & Professional communicator</li>
                <li>Innovative</li>
                <li>Problem solving and utilizing resources</li>
                <li>Dependable</li>
                <li>Adaptive & flexible Learner</li>
                <li>Organized</li>
                <li>Leader & Team Player</li>
                <li>Analytical thinker</li>

              </ul>
            </div>
          </div>
        </div>
       

        <div class="col-sm-6">
          <div class="card rounded-border border-primary">
            <h5 class="card-header">Currently Studying</h5>
            <div class="card-body">
              <ul className='card-text'>
                <li> AWS</li>
                <li> Java</li>
                <li>Python</li>
                <li>Data structures and algorithms</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="col-sm-6">
          <div class="card rounded-border border-primary">
            <h5 class="card-header">Non-technical proficienties</h5>
            <div class="card-body">
              <ul className='card-text'>
                <li>Finance/stock-trading</li>
                <li>Exercise Science & anatomy</li>
                <li>Outdoor Survival skills</li>
                <li>Logistics</li>
                
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
