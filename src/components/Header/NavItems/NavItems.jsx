import React from 'react';
import './NavItems.css';

const NavItems = () => {
    const handleScroll = (e, targetId) => {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <div className='nav-items'>
            <ul>
                <li className='selected'>Home</li>
                <li><a href='#about' onClick={(e) => handleScroll(e, '#about')}>About</a></li>
                <li>Skills</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}

export default NavItems