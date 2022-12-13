import React from 'react'


import JWResume from '../../assets/updatedResume.pdf'
import RESUMEIMG from '../../assets/resumeScreenshot.png'

export default function Resume() {
    return (
        <div className='container'>
            <div className='row'>
                < div className='col'>
                    <div className='resumeContainer'>

                        <div className='resume card'>
                        <a href={JWResume}>Link to my resume</a>
                        <img src={RESUMEIMG} alt="my-resume"></img>
                       
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}