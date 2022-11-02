import React from 'react';
import {Parallax} from 'react-parallax';

export default function Home() {
  return (
    <div>
     <Parallax
        blur={{ min: -15, max: 15 }}
         bgImage={require('../../assets/devbg.png')}
        // bgImage="https://wallpapercave.com/wp/wp7453603.jpg"
        bgImageAlt="the dog"
        strength={-200}
    >
      
        <div style={{ height: '400px' }} />
    </Parallax>
    </div>
  );
}
