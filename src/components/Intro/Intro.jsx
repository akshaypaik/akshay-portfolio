import React, { useEffect } from 'react';
import './Intro.css';

const Intro = () => {

    useEffect(() => {
        const logoElements = document.getElementsByClassName("logo");
        const introMainTimer = setTimeout(() => {
            const introClass = document.getElementsByClassName("intro");
            if (introClass.length > 0) {
                introClass[0].style.top = '-100vh'; // Access the first element

            }
        }, 1400);
        const logoElementsTimer = setTimeout(() => {
            // Remove 'appear' class and add 'fade' class to each logo element
            Array.from(logoElements).forEach((element, index) => {
                const deplay = index;
                const timer3 = setTimeout(() => {
                    element.classList.remove("appear");
                    element.classList.add("fade");
                }, 200 * deplay);
            });
        }, 400);

        return () => {
            clearTimeout(introMainTimer);
            clearTimeout(logoElementsTimer);
        }
    }, []);

    return (
        <div className="intro">
            <h1 className="logo-header">
                <span className="logo appear">N</span>
                <span className="logo appear">a</span>
                <span className="logo appear">m</span>
                <span className="logo appear">a</span>
                <span className="logo appear">s</span>
                <span className="logo appear">t</span>
                <span className="logo appear">e</span>
            </h1>
        </div>
    )
}

export default Intro