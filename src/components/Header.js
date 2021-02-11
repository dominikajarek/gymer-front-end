import React from 'react';

import Navigation from './Navigation';
import { Button, ButtonGroup } from "react-bootstrap";

function Header() {

    return (
        <header className='h-20 w-5xl fixed top-0'>
            <ButtonGroup aria-label="Basic example"
                         className='float-right font-semibold rounded-lg bg-transparent '>
                <Button
                    variant='secondary'
                    className='px-4 py-1 mt-2 mb-2 hover:text-gray-900 focus:text-gray-900 button-hover rounded focus:outline-none'>
                Sign in
                </Button>
                <Button
                    variant='secondary'
                    className='px-4 py-1 mt-2 mb-2 hover:text-gray-900 focus:text-gray-900 button-hover rounded focus:outline-none'>
                Sign up
                </Button>
            </ButtonGroup>
            <Navigation />
        </header>
    );
}

export default Header;