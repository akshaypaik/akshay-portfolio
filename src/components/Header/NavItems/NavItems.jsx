import React from 'react';
import './NavItems.css';

const NavItems = () => {
    return (
        <div className='nav-items'>
            <ul>
                <li className='selected'>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}

export default NavItems