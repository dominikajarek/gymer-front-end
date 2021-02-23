import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../images/Logo-transparent.png';
import '../../styles/leftMenu.css';

export const LeftMenu = () => {
    return (
        <div className='container-main-menu'>
            <img alt='logo' src={logo} className='app-logo' />
            <nav className='nav'>
                <Link className='a-nav a-nav1 btn-one' to='/'>Home</Link>
                <Link className='a-nav a-nav2 btn-one' to="/gyms">Gym</Link>
                <Link className='a-nav a-nav3 btn-one' to="/fitness">Fitness</Link>
                <Link className='a-nav a-nav4 btn-one' to="/personal-trainers">Personal trainer</Link>
            </nav>
        </div>
    );
}