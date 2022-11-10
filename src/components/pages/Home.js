import React from 'react';
import {Parallax} from 'react-parallax';

export default function Home() {
  return (
    <div>
  
    <div>
     
     <Parallax
       
        blur={{ min: -15, max: 15 }}
         bgImage={require('../../assets/bg-briefcase.jpeg')}
        bgImageAlt="the dog"
        strength={-200}
    >
      <br></br>
      <h4>“A new idea comes suddenly and in a rather intuitive way, but intuition is nothing but the outcome of earlier intellectual experience.” - Albert Einstein</h4>
      <br></br>
      <h4>"Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing or learning to do." — Pele</h4>
      
      
        <div style={{ height: '400px' }} />
    </Parallax>
    </div>
    </div>
  );
}
