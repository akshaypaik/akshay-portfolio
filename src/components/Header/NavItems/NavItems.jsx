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
        onMenuSelect(menuSelected);
    };

    const onMenuSelect = (currentMenu) => {
        setCurrentMenu(currentMenu);
    }

    return (
        <div className='nav-items'>
            <ul>
                <a href='#home' onClick={(e) => handleScroll(e, '#home')}>
                    <li className={`${currentMenu === "home" ? 'selected' : ''}`}>
                        Home
                    </li>
                </a>
                <a href='#about' onClick={(e) => handleScroll(e, '#about')}>
                    <li className={`${currentMenu === "about" ? 'selected' : ''}`}>
                        About
                    </li>
                </a>
                <a href='#skills' onClick={(e) => handleScroll(e, '#skills')}>
                    <li className={`${currentMenu === "skills" ? 'selected' : ''}`}>
                        Skills
                    </li>
                </a>
                <a href='#projects' onClick={(e) => handleScroll(e, '#projects')}>
                    <li className={`${currentMenu === "projects" ? 'selected' : ''}`}>
                        Projects
                    </li>
                </a>
                <a href='#contact' onClick={(e) => handleScroll(e, '#contact')}>
                    <li className={`${currentMenu === "contact" ? 'selected' : ''}`}>
                        Contact
                    </li>
                </a>
            </ul>
        </div>
    )
}

export default NavItems