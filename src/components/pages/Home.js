import React from 'react';
 import {Parallax} from 'react-parallax';

export default function Home() {
  return (
    
     
     <Parallax  
       blur={{ min: -15, max: 15 }}
      //  bgImage={require('../../assets/workspacebg.jpeg')}
      // bgImageAlt="the dog"
      strength={-200}
  >
  <section className="body">
  <h1 className="skillsHeader">About me...</h1>
  <div className="my-2">
    
    <p className='textContent'>
    Hi, I'm Josh! Im Full stack software developer and U.S military veteran. Other then software and my time in the USMC i've spent time in management, hospitality, coaching & training, customer service and sales. I also have a well-rounded understanding of the fundamentals of business and economics. I'm competent in interpreting and analyzing asset charts and graphs. I’ve earned a certificate in Full-stack Software Development from the University of Central Florida.  
   My established communication skills and technical fundamentals, combined with a vigorous work ethic, make me a strong addition to any team. My focus is to join a team where I can apply my skills and experience, expand my knowledge and play a part in the next generation of tech. I’m excited to learn and contribute to a team’s success and help others along the way.

    </p>
  </div>
  </section>
  
     </Parallax>
    
  );
}
