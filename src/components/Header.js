import React from 'react';

import Navigation from './Navigation';

function Header() {

    return (
        <header className='h-xs w-5xl fixed top-0'>

            <button className='float-right px-4 py-2 m-4 text-sm font-semibold bg-transparent rounded-lg
                                                                hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200
                                                                hover:shadow-2xl
                                                                focus:bg-gray-200 focus:outline-none focus:shadow-outline'
            >Sign in</button>
            <button className='float-right px-4 py-2 m-4 mt-4 text-sm font-semibold bg-transparent rounded-lg
                                                                hover:text-gray-900 focus:text-gray-900
                                                                hover:bg-gray-200 hover:shadow-2xl
                                                                focus:bg-gray-200 focus:outline-none focus:shadow-outline'
            >Sign up</button>
            <Navigation />
        </header>
    );
}

export default Header;