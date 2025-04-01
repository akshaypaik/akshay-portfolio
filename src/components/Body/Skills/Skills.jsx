import React from 'react';
import './Skills.css';

const Skills = () => {
    return (
        <div>
            <h1 className='section-title'>Skills</h1>
            <div className='skills-container'>
                <ul className='skills-list'>
                    <li>
                        <h4>Javascript</h4>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
                            alt="javascript" />
                    </li>
                    <li>
                        <h4>React</h4>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png"
                            alt="react" />
                    </li>
                    <li>
                        <h4>Angular</h4>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg"
                            alt="angular" />
                    </li>
                    <li>
                        <h4>Node.js</h4>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
                            alt="nodejs" />
                    </li>
                    <li>
                        <h4>HTML</h4>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"
                            alt="html" />
                    </li>
                    <li>
                        <h4>CSS</h4>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Official_CSS_Logo.svg"
                            alt="css" />
                    </li>
                    <li>
                        <h4>AWS</h4>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/2560px-Amazon_Web_Services_Logo.svg.png"
                            alt="aws" />
                    </li>
                    <li>
                        <h4>MongoDB</h4>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg"
                            alt="mongodb" />
                    </li>
                </ul>
                <div className='skills-companies'>
                    <h2>Companies I worked with</h2>
                    <ul>
                        <li>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Siemens_AG_logo.svg"
                                alt="siemens" />
                        </li>
                        <li>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/4/43/Cognizant_logo_2022.svg"
                                alt="cognizant" />
                        </li>
                        <li style={{ paddingBottom: '16px' }}>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg"
                                alt="accenture" />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Skills;