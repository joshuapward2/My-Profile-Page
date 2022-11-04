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
     
      
        <div style={{ height: '400px' }} />
    </Parallax>
    </div>
    </div>
  );
}
