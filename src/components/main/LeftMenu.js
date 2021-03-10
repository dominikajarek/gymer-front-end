import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../images/Logo-transparent.png';
import '../../styles/left-menu.css';

export const LeftMenu = () => {
    return (
        <div className='container-main-menu'>
            <a href='/'>
                <img alt='logo' src={logo} className='app-logo' />
            </a>
            <nav className='nav'>
                <Link className='a-nav1 btn-one' to='/'>Home</Link>
                <Link className='a-nav2 btn-one' to="/gyms">Gym</Link>
                <Link className='a-nav3 btn-one' to="/fitness">Fitness</Link>
                <Link className='a-nav4 btn-one' to="/personal-trainers">Personal trainer</Link>
            </nav>
        </div>
    );
}