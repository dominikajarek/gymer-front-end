import React from "react";

import logo from "../../images/Logo-transparent.png";

export const Footer = () => {

    return (
        <footer className='header-container'>
            <div className='logo'>
                <a href='/'>
                    <img alt='logo' src={logo} className='app-logo' />
                </a>
            </div>
            <div className='dropdown'>
                <p>&copy; Copyright Team Gymer</p>
            </div>
        </footer>
    );
}