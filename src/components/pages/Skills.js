import React from 'react';
import { Parallax } from 'react-parallax';

export default function About() {
  return (
    <Parallax
      blur={{ min: -15, max: 15 }}
      // bgImage={require('../../assets/workspacebg.jpeg')}
      // bgImageAlt="the dog"
      strength={-200}
    >
      <section className="body">
        <h1 className='skillsHeader'>Skills</h1>
        <div className="my-2">

          <p className='textContent'>


            HTML, CSS and JavaScript. | Mern stack, Node, Express and React.js, MongoDB |MySQL & NoSQL, GraphQL, IndexDB databases | Bootstrap, jQuery, Bulma  | OOP and Functional programming syntaxes |ORM, Sequelize, Mongoose, several other NPM’s | Google and React developer tools | Agile development methodology | Git and GitHub workflow | State management | Data-types | Progressive Web Applications | Google and React Developer Tools

          </p>
        </div>
      </section>
    </Parallax>
  );
}
