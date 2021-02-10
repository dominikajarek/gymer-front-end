import React from 'react';

import Navigation from './Navigation';
import logo from '../images/Logo-transparent.png';

function Header() {

    return (
        <header className='h-xs w-5xl fixed top-0 sticky-top'>
            <img alt='logo' src={logo} className='w-80 h-25 float-left' />
            <button className='float-right px-4 py-2 m-4 mt-4 text-sm font-semibold bg-transparent rounded-lg
                                                                md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200
                                                                hover:shadow-2xl
                                                                focus:bg-gray-200 focus:outline-none focus:shadow-outline'>Sign in</button>
            <button className='float-right px-4 py-2 m-4 mt-4 text-sm font-semibold bg-transparent rounded-lg
                                                                md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200
                                                                hover:shadow-2xl
                                                                focus:bg-gray-200 focus:outline-none focus:shadow-outline'>Sign up</button>
            <Navigation />
        </header>
    );
}

export default Header;