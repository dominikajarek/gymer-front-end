import React from 'react';
import { Navbar, Nav } from "react-bootstrap";

function Navigation() {

    return (
            <Navbar bg="light" expand="lg" className="flex-row flex-grow pb-4 md:pb-0 hidden
                                                                    md:flex md:justify-end md:flex-row float-left w-full
                                                                    divide-y-2 divide-gray-500 divide-y-reverse pr-3 py-16">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="-mb-px flex float-left">
                    <Nav className="mr-auto float-left">
                        <Nav.Link href={'/gymsite'} className='px-4 py-2 mt-2 text-sm font-semibold bg-transparent
                                                                rounded-lg md:mt-0 md:ml-4 hover:text-gray-900
                                                                focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200
                                                                focus:outline-none focus:shadow-outline float-left'>
                            About</Nav.Link>
                        <Nav.Link href={'/calendar'} className='px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg
                                                                md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200
                                                                focus:bg-gray-200 focus:outline-none focus:shadow-outline float-left'>
                            Timetable</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
    );
}

export default Navigation;

/*

 */