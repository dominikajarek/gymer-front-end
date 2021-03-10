import React, {useState} from 'react';
import { Link } from "react-router-dom";
import { Common } from "../../actions/Common";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import 'react-responsive-modal/styles.css';
import '../../styles/header.css';

export const ProfileMenu = () => {

    const [showMenu, setShowMenu] = useState(false);

    const openMenu = (event) => {
        event.preventDefault();
        setShowMenu(!showMenu);
    }

    const logout = () => {
        localStorage.clear();
        Common.refreshPage();
        console.log('you are logged out');
    };

    return (
        <header className='header-container'>
            <div>
                <input className="search__input" type="text" placeholder="Search" />
            </div>

            <div className="dropdown">
                <button className="dropbtn">
                    <FontAwesomeIcon icon={faUserCircle} size='3x' onClick={openMenu} className='fa-icon' />
                </button>
                <div className="dropdown-content">
                    {
                        showMenu ? (
                            <div className='user-nav'>
                                <Link to='/profile'
                                      className='btn btn-one link-style profile'>
                                    Profile
                                </Link>
                                <Link to='/user-slots'
                                      className='btn btn-one link-style slots'>
                                    Your slots
                                </Link>
                                <Link to='/login'
                                      className='btn btn-one link-style logout'
                                      onClick={logout}>
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