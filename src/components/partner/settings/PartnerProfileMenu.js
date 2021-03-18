import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Common } from "../../../actions/Common";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import 'react-responsive-modal/styles.css';
import '../../../styles/header.css';

export const PartnerProfileMenu = () => {

    const [showMenu, setShowMenu] = useState(false);

    const openMenu = (event) => {
        event.preventDefault();
        setShowMenu(!showMenu);
    };

    return (
        <header className='header-container'>

            <div className="dropdown">
                <button className="dropbtn">
                    <FontAwesomeIcon icon={faUserCircle} size='3x' onClick={openMenu} className='fa-icon' />
                </button>
                <div className="dropdown-content">
                    {
                        showMenu ? (
                            <div className='user-nav'>
                                <Link to='/partner-profile'
                                      className='btn btn-one link-style profile'>
                                    Profile
                                </Link>
                                <Link to='/partner-slots'
                                      className='btn btn-one link-style slots'>
                                    Your slots
                                </Link>
                                <Link to='/login'
                                      className='btn btn-one link-style logout'
                                      onClick={Common.logout}>
                                    Logout
                                </Link>
                            </div>
                        ) : null
                    }
                </div>
            </div>

        </header>
    );
}