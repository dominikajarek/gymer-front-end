import React from 'react';
import {Link} from "react-router-dom";

import 'react-responsive-modal/styles.css';
import logo from "../../images/Logo-transparent.png";

export const Header = () => {

    return (
        <header className='header-container'>
            <div className='logo'>
                <a href='/'>
                    <img alt='logo' src={logo} className='app-logo'/>
                </a>
            </div>
            <div className='dropdown'>
                <Link to='/login'
                      className='btn btn-one sign-in link-style'>
                    Log in
                </Link>
            </div>
        </header>
    );
}