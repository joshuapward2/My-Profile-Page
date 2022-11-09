import React from 'react';
// import myImage from '../../assets/myImage2.jpeg'
import {Parallax} from 'react-parallax';

export default function About() {
  return (
    <Parallax
        blur={{ min: -15, max: 15 }}
         bgImage={require('../../assets/devbg.png')}
        // bgImage="https://wallpapercave.com/wp/wp7453603.jpg"
        bgImageAlt="the dog"
        strength={-200}
    >
    <section className="body">
    <h1 id="about">Who am I?  <img className="iconImage" src={`${process.env.PUBLIC_URL}/images/headerLogo.jpeg`} alt="me"/></h1>
    {/* <img src={myImage} className="my-2Image" style={{ width: "100%" }} alt="cover" /> */}
    <div className="my-2">
      <h1 className='body'>I am... </h1>
      <p className='textContent'>
      A Full stack software developer and U.S military veteran with a background in management, hospitality, exercise science, customer service and sales. I have a well-rounded understanding of the fundamentals of business and economics. I'm competent in interpreting and analyzing asset charts and graphs. I’ve earned a certificate in Full-stack Software Development from the University of Central Florida. Here, I developed and polished skills in HTML, CSS, Bootstrap, JavaScript, jQuery, Dom manipulation, OOP, testing, React, the MERN stack, state management MYSQL & NOSQL, MongoDB, IndexDB, GraphQl, PWA’s, NPM’s and several other libraries. I am proficient in the Git and GitHub work-flow via the command line interface/terminal, as well as the Agile development methodology. I've worked with teams of five to build and deploy two full-stack applications and 1 front-end application. 
     My established communication skills and technical fundamentals, combined with a vigorous work ethic, make me a strong addition to any team. My focus is to join a team where I can apply my skills and experience, expand my knowledge and play a part in the next generation of tech. I’m excited to learn and contribute to a team’s success and help others along the way.

      </p>
    </div>
    </section>
    </Parallax>
  );
}
