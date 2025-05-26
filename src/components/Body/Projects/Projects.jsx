import React from 'react';
import './Projects.css';
import ProjectCard from './ProjectCard/ProjectCard';
import videoStreamingPlatFormImage from '../../../assets/images/video-streaming-platform.png';
import netflixProjectImage from '../../../assets/images/netflix-project.png';
import swiggyProjectImage from '../../../assets/images/swiggy-project.png';
import { motion } from 'framer-motion';

const projectDetails = [
    {
        projectName: "Video Streaming Platform",
        projectDescription: "Video Streaming Plaform is a web application where users can watch trending videos and live videos. I have also integrated live chat using API polling.",
        projectURL: "https://pai-f6ea7.web.app/",
        projectImage: videoStreamingPlatFormImage,
        skills: ["react", "redux", "javascript"],
        showProjectLaunch: true
    },
    {
        projectName: "Netflix",
        projectDescription: "Netflix like platform where users can login and watch videos. User can also select dark and light theme based on thier preference.",
        projectURL: "https://netflix-47288.web.app/",
        projectImage: netflixProjectImage,
        skills: ["react", "redux", "javascript", "tailwindcss"],
        showProjectLaunch: true
    },
    {
        projectName: "Food Ordering Application",
        projectDescription: "An application where we can filter top restaurants in the city, go through the menu categories and add them to cart to place an order.",
        projectURL: "",
        projectImage: swiggyProjectImage,
        skills: ["react", "redux", "javascript", "firebase"],
        showProjectLaunch: false
    }
]

const Projects = () => {
    return (
        <motion.div
            className="glass-card bg-translucent-30 p-8 rounded-xl border border-primary 
                            hover:bg-translucent-40 transition-all"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 2 * 0.1 }}
            viewport={{ once: false }}
        >
            <div style={{ margin: '0 auto', maxWidth: '1200px' }}>
                <h1 className='section-title'>Projects</h1>
                <div className='projects-container'>
                    {projectDetails.map((project) => <ProjectCard key={project.projectURL} info={project} />)}
                </div>
            </div>
        </motion.div>

    )
}

export default Projects