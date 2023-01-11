import React from 'react'


import JWResume from '../../assets/updatedResume2.pdf'
import RESUMEIMG from '../../assets/resumeScreenshot.png'

export default function Resume() {
    return (
        <div className='container'>
            <div className='row'>
                < div className='col'>
                    <div className='resumeContainer'>
                        <a href={JWResume}>Click to view full-size resume</a>
                        <div className='resume card'>
                        
                        <img src={RESUMEIMG} alt="my-resume"></img>
                       
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}