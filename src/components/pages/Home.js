import React from 'react';
import {Parallax} from 'react-parallax';

export default function Home() {
  return (
    <div>
     <Parallax
        blur={{ min: -15, max: 15 }}
        // bgImage={require('path/to/another/image.jpg')}
        bgImage="https://wallpapercave.com/wp/wp7453603.jpg"
        bgImageAlt="the dog"
        strength={-200}
    >
        Blur transition from min to max
        <div style={{ height: '400px' }} />
    </Parallax>
    </div>
  );
}
