import React from 'react';
import './Hero.css';
const Hero = (props) => {
    return (
        <div className = "Hero" style = {{backgroundImage:'url('+props.bgImage+')'}}>
        </div>
    );
}

export default Hero;