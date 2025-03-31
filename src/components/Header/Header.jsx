import React from 'react';
import './Header.css';
import manBeardImg from '../../assets/images/man-with-beard.png';
import NavItems from './NavItems/NavItems';

const Header = () => {
    return (
        <div className='header-container'>
            <img src={manBeardImg} alt='man-with-beard' />
            <NavItems />
            <div className='dark-mode-icon'>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="100"
                    height="100"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 6 6 0 0 0 21 12.79z" />
                </svg>
            </div>
        </div>
    )
}

export default Header