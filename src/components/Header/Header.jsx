import React from 'react';
import './Header.css';
import manBeardImg from '../../assets/images/man-with-beard.png';
import NavItems from './NavItems/NavItems';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDarkMode } from '../../utils/ReduxStore/appSlice';

const Header = () => {

    const dispatch = useDispatch();
    const darkMode = useSelector((store) => store.app.darkMode);

    const handleToggleDarkMode = () => {
        dispatch(toggleDarkMode());
    }

    return (
        <div className='header-container'>
            <img src={manBeardImg} alt='man-with-beard' className={`${darkMode ? 'dark' : ''}`} />
            <NavItems />
            <div className='dark-mode-icon' onClick={handleToggleDarkMode}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="100"
                    height="100"
                    fill={`${darkMode ? 'black' : 'white'}`}
                    stroke={`${darkMode ? 'white' : 'black'}`}
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