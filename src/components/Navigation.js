import React from 'react';
import {Navbar, Nav, Button, ButtonGroup} from "react-bootstrap";
import {Link} from "react-router-dom";

function Navigation() {

    return (
            <Navbar bg="light" expand="lg" className="flex-row flex-grow pb-4 md:pb-0 hidden
                                                                    md:flex md:justify-end md:flex-row float-left w-full
                                                                    divide-y-2 divide-gray-500 divide-y-reverse pr-3 py-16">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="-mb-px flex float-left">
                    <ButtonGroup aria-label="Basic example" className='float-right font-semibold rounded-lg bg-transparent '>
                        <Button variant='secondary' className='px-4 py-1 mt-2 mb-2 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-400 rounded focus:outline-none'
                        >
                            <Link to='/gymsite'>About</Link>
                        </Button>
                        <Button variant='secondary' className='px-4 py-1 mt-2 mb-2 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-400 rounded focus:outline-none'
                        >
                            <Link to='/calendar'>Timetable</Link>
                        </Button>
                    </ButtonGroup>
                </Navbar.Collapse>

            </Navbar>
    );
}

export default Navigation;

/*

 */