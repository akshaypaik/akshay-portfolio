import React from 'react';
import './Home.css';
import { useSelector } from 'react-redux';
import myImage from '../../../assets/images/me-home-shape-png.png';

const Home = () => {

    const darkMode = useSelector((store) => store.app.darkMode);
    const personalPortfolio = useSelector((store) => store.app.personalPortfolio);

    return (
        <>
            <div className='home-container'>
                <h1>
                    Hi
                    <br />
                    I'm <span className='profile-name'>Akshay Pai</span>
                    <div className='autoWrite'>

                    </div>
                    <div className='download-cv-btn'>
                        <a href='https://drive.google.com/file/d/1eR7DlTYhgWCfCA6NLc_qh3dXaxXiSqCI/view?usp=drive_link'
                            target='_blank'>Download CV</a>
                    </div>
                </h1>
                <img src={myImage} alt='akshay-photo' />
            </div>
            <div className='home-socials'>
                <a href="https://www.linkedin.com/in/akshay-pai" target="_blank">
                    <svg className="linkedin-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M16 8a6 6 0 0 1 6 6v6h-4v-6a2 2 0 0 0-4 0v6h-4V8h4" fill={`${darkMode ? 'white' : 'black'}`} />
                        <rect x="2" y="8" width="4" height="12" fill={`${darkMode ? 'white' : 'black'}`} />
                        <circle cx="4" cy="4" r="2" fill={`${darkMode ? 'white' : 'black'}`} />
                    </svg>
                </a>
                <a href="https://github.com/akshaypaik" target="_blank">
                    <svg className="github-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.66-.22.66-.48v-1.69c-2.78.6-3.36-1.34-3.36-1.34-.45-1.15-1.1-1.46-1.1-1.46-.9-.61.07-.6.07-.6 1 .07 1.52 1.03 1.52 1.03.88 1.51 2.3 1.07 2.86.82.09-.64.35-1.07.63-1.31-2.22-.25-4.56-1.11-4.56-4.93 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.59 9.59 0 0 1 12 6.8c.85 0 1.71.11 2.51.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.69 0 3.83-2.34 4.68-4.57 4.93.36.31.68.91.68 1.84v2.73c0 .27.16.58.67.48A10.01 10.01 0 0 0 22 12c0-5.52-4.48-10-10-10z"
                            fill={`${darkMode ? 'white' : 'black'}`} />
                    </svg>
                </a>
                {personalPortfolio && <a href="https://www.instagram.com/akshaypai_" target="_blank">
                    <svg className="instagram-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zM12 6.25a5.75 5.75 0 1 1 0 11.5 5.75 5.75 0 0 1 0-11.5zm0 1.5a4.25 4.25 0 1 0 0 8.5 4.25 4.25 0 0 0 0-8.5zM17.5 6.25a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-1.5 0v-.5a.75.75 0 0 1 .75-.75z"
                            fill={`${darkMode ? 'white' : 'black'}`} />
                    </svg>
                </a>}
                {personalPortfolio && <a href="https://www.youtube.com/c/AkshayPaiK" target="_blank">
                    <svg className="youtube-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M19.75 3.5c1.34.12 2.4 1.12 2.51 2.46.34 3.6.34 7.22 0 10.83-.11 1.34-1.17 2.34-2.51 2.46-5.17.5-10.35.5-15.5 0-1.34-.12-2.4-1.12-2.51-2.46a49.67 49.67 0 0 1 0-10.83C1.85 4.62 2.9 3.62 4.25 3.5c5.16-.5 10.33-.5 15.5 0zm-9 4.76v6l4.88-3-4.88-3z"
                            fill={`${darkMode ? 'white' : 'black'}`} />
                    </svg>
                </a>}
            </div>
        </>
    )
}

export default Home