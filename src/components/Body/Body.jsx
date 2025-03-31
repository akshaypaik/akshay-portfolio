import React from 'react';
import './Body.css';
import Home from './Home/Home';
import About from './About/About';
import Skills from './Skills/Skills';

const Body = () => {
    return (
        <div className='body-container'>
            <section id="home" className='home-section'>
                <Home />
            </section>
            <section id="about" className='about-section'>
                <About />
            </section>
            <section id="skills" className='skills-section'>
                <Skills />
            </section>
        </div>
    )
}

export default Body