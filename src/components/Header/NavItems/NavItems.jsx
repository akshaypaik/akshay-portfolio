import React, { useState } from 'react';
import './NavItems.css';

const NavItems = () => {

    const [currentMenu, setCurrentMenu] = useState("home");

    const handleScroll = (e, targetId) => {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
        const menuSelected = targetId.slice(1);
        console.log("menuSelected: ", menuSelected);
        onMenuSelect(menuSelected);
    };

    const onMenuSelect = (currentMenu) => {
        setCurrentMenu(currentMenu);
    }

    return (
        <div className='nav-items'>
            <ul>
                <li className={`${currentMenu === "home" ? 'selected' : ''}`}>
                    <a href='#home' onClick={(e) => handleScroll(e, '#home')}>Home</a>
                </li>
                <li className={`${currentMenu === "about" ? 'selected' : ''}`}>
                    <a href='#about' onClick={(e) => handleScroll(e, '#about')}>About</a>
                </li>
                <li className={`${currentMenu === "skills" ? 'selected' : ''}`}>
                    <a href='#skills' onClick={(e) => handleScroll(e, '#skills')}>Skills</a>
                </li>
                <li className={`${currentMenu === "projects" ? 'selected' : ''}`}>
                    <a href='#projects' onClick={(e) => handleScroll(e, '#projects')}>Projects</a>
                </li>
                <li className={`${currentMenu === "contact" ? 'selected' : ''}`}>
                    <a href='#contact' onClick={(e) => handleScroll(e, '#contact')}>Contact</a>
                </li>
            </ul>
        </div>
    )
}

export default NavItems