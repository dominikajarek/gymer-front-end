import React from 'react';

import logo from '../../images/Logo-transparent.png';
import '../../styles/left-menu.css';

export const LeftMenu = () => {

    return (
        <div className='container-main-menu'>
            <a href='/'>
                <img alt='logo' src={logo} className='app-logo' />
            </a>
        </div>
    );
}