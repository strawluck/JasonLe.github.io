import React from 'react';
import landing from '../styles/Landing.module.scss';

function Landing() {
    return (
        <div className={landing.land_container}>
            <h1 className={landing.title}>{'>'} Jason Le</h1>
            <div className={landing.description}>
                As an enthusiastic and passionate software developer, I strive to make a positive and innovative<br />
                impact in the world. I'm constantly on the lookout for new opportunities and challenges so feel<br /> 
                free to reach out!
            </div>
        </div>
    )
}

export default Landing;