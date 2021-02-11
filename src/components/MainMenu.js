import React from 'react';
import logo from '../images/Logo-transparent.png';
import { Form, FormControl } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function MainMenu() {
    return (
        <div className='flex justify-center'>
            <div className="md:flex flex-col md:flex-row md:min-h-screen w-full h-full">
                <div className="flex flex-col w-full md:w-64 text-gray-700 border-r-2 border-gray-600 pr-3 pl-3 flex-shrink-0">
                    <div className="flex-shrink-0 px-8 py-4 flex flex-row items-center justify-between">
                        <a href="#">
                            <img alt='logo' src={logo} />
                        </a>
                        <button className="rounded-lg md:hidden rounded-lg focus:outline-none focus:shadow-outline">
                            <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
                            </svg>
                        </button>
                    </div>
                    <Form
                        className='button-hover block px-2 mt-2 text-capitalize text-gray-900 bg-gray-200 rounded-lg
                        hover:text-gray-900 focus:text-gray-900 focus:outline-none focus:shadow-outline'>
                        <FormControl type="text" placeholder="Search" className='px-2 py-1 mt-2 mb-2
                                                                            text-capitalize bg-transparent
                                                                            rounded-lg
                                                                            hover:text-gray-900 focus:text-gray-900
                                                                            focus:outline-none focus:shadow-outline' />
                        <FontAwesomeIcon icon={faSearch} className='ml-3' />
                    </Form>
                    <nav className="flex-grow md:block px-4 pb-4 md:pb-0 md:overflow-y-auto">
                        <a
                            className="block px-4 py-2 mt-4 mb-6 text-capitalize text-gray-900 bg-transparent
                                        rounded-lg hover:text-gray-900 focus:text-gray-900 button-hover
                                        focus:outline-none focus:shadow-outline" href="#">Home</a>
                        <a
                            className="block px-4 py-2 mt-2 text-capitalize text-gray-900 bg-transparent
                                        rounded-lg hover:text-gray-900 focus:text-gray-900 button-hover
                                        focus:outline-none focus:shadow-outline" href="#">Gym</a>
                        <a
                            className="block px-4 py-2 mt-2 text-capitalize text-gray-900 bg-transparent
                                        rounded-lg hover:text-gray-900 focus:text-gray-900
                                        button-hover focus:outline-none focus:shadow-outline" href="#">Fitness</a>
                        <a
                            className="block px-4 py-2 mt-2 text-capitalize text-gray-900 bg-transparent
                                        rounded-lg hover:text-gray-900 focus:text-gray-900 button-hover
                                        focus:outline-none focus:shadow-outline" href="#">Personal trainer</a>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default MainMenu;