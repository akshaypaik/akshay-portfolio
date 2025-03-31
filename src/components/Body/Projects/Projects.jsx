import React from 'react';
import './Projects.css';
import ProjectCard from './ProjectCard/ProjectCard';
import videoStreamingPlatFormImage from '../../../assets/images/video-streaming-platform.png';
import netflixProjectImage from '../../../assets/images/netflix-project.png';

const projectDetails = [
    {
        projectName: "Video Streaming Platform",
        projectURL: "https://pai-f6ea7.web.app/",
        projectImage: videoStreamingPlatFormImage
    },
    {
        projectName: "Netflix",
        projectURL: "https://netflix-47288.web.app/",
        projectImage: netflixProjectImage
    }
]

const Projects = () => {
    return (
        <div>
            <h1 className='section-title'>Projects</h1>
            <div className='projects-container'>
                {projectDetails.map((project) => <ProjectCard key={project.projectURL} info={project} />)}
            </div>
        </div>
    )
}

export default Projects