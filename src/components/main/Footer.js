import logo from "../../images/Logo-transparent.png";
import {Link} from "react-router-dom";
import React from "react";

export const Footer = () => {

    return (
        <footer className='header-container'>
            <div className='logo'>
                <a href='/'>
                    <img alt='logo' src={logo} className='app-logo' />
                </a>
            </div>
            <div className='dropdown'>
                <p>Copyright Team Gymer</p>
            </div>
        </footer>
    );
}