import React from 'react';
import { Link } from "react-router-dom";

import 'react-responsive-modal/styles.css';
import '../../styles/header.css';

export const Header = () => {

    return (
            <header className='header-container'>
                <div>
                    <input className="search__input" type="text" placeholder="Search" />
                </div>
                <div className='buttons-user'>
                    <Link to='/login'
                          className='btn btn-one sign-in link-style'>
                        Log in
                    </Link>
                    <Link to='/register'
                          className='btn btn-one sign-up link-style'>
                        Sign up
                    </Link>
                </div>
            </header>
    );
}