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
                <li className='selected'><a href='#home' onClick={(e) => handleScroll(e, '#home')}>Home</a></li>
                <li><a href='#about' onClick={(e) => handleScroll(e, '#about')}>About</a></li>
                <li><a href='#skills' onClick={(e) => handleScroll(e, '#skills')}>Skills</a></li>
                <li><a href='#projects' onClick={(e) => handleScroll(e, '#projects')}>Projects</a></li>
                <li><a href='#contact' onClick={(e) => handleScroll(e, '#contact')}>Contact</a></li>
            </ul>
        </div>
    )
}

export default NavItems