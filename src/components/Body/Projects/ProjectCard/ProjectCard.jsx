import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ info }) => {
    return (
        <div className='project-card-container'>
            <a href={info.projectURL} target='_blank'>
                <img src={info.projectImage} alt={info.projectName} />
            </a>
            <span className='project-name'>{info.projectName}</span>
        </div>
    )
}

export default ProjectCard