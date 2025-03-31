import React from 'react';
import './Body.css';
import Home from './Home/Home';
import About from './About/About';

const Body = () => {
    return (
        <div className='body-container'>
            <section id="home" className='home-section'>
                <Home />
            </section>
            <section id="about">
                <About />
            </section>
        </div>
    )
}

export default Body