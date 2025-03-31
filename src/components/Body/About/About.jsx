import React from 'react';
import './About.css';
import myAboutImg from '../../../assets/images/me-about.jpg';

const About = () => {
  return (
    <div>
        <h1 className='section-title'>About</h1>
        <div className='about-container'>
            <img src={myAboutImg} alt='about-pic' />
            <div className='about-detail'>
                <h4>I am a Software Engineer working in Siemens.</h4>
                <p>I am a quick learner. I love spending time coding and encountering new challenges. I have built my experience around web development using technologies like Angular, React, Node.js, Javascript, Typescript and many more. I have also worked with cloud computing services like AWS. </p>
            </div>
        </div>
    </div>
  )
}

export default About