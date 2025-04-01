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
          <h4>Senior Software Engineer working in <span className='siemens-text'>Siemens.</span></h4>
          <p>
            I am a quick learner. I love spending time coding and encountering new challenges.
            My expertise spans across Angular, React, Node.js, Javascript, Typescript, MongoDB allowing me to craft end-to-end solutions that are both efficient and user-friendly.
            I have also worked with cloud computing services like AWS.
          </p>
          <p>
            Passionate about building things using web development.
            As a quick learner, I love staying ahead of industry trends, continuously exploring new technologies, and optimizing development workflows.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About