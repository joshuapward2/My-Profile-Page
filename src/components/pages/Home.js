import React from 'react';
import {Parallax} from 'react-parallax';

export default function Home() {
  return (
    <div>
  
    <div>
     
     <Parallax
       
        blur={{ min: -15, max: 15 }}
         bgImage={require('../../assets/bgpic2.jpeg')}
        bgImageAlt="the dog"
        strength={-200}
    >
      <br></br>
      <h4>“A new idea comes suddenly and in a rather intuitive way, but intuition is nothing but the outcome of earlier intellectual experience.” - Albert Einstein</h4>
      <br></br>
      <h4>“The art of debugging is figuring out what you really told your program to do rather than what you thought you told it to do.” - Andrew Singer</h4>
      <br></br>
      <h4>“User interface is the process of shifting from chaotic complexity to elegant simplicity.” - Akshat Paul</h4>

     
      
        <div style={{ height: '400px' }} />
    </Parallax>
    </div>
    </div>
  );
}
