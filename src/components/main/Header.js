import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Modal } from "react-responsive-modal";

import 'react-responsive-modal/styles.css';
import '../../styles/header.css';

function Header() {

    const [openFirst, setOpenFirst] = useState(false);
    const [openSecond, setOpenSecond] = useState(false);

    const linkStyle = {
        'textDecoration':'none',
        'color':'rgba(2, 2, 2, 1)'
    }

    return (
            <header className='header-container'>
                <div className="search__container">
                    <input className="search__input" type="text" placeholder="Search" />
                </div>
                    <Link to='/login'
                          className='btn btn-one sign-in'
                          style={linkStyle}
                          onClick={() => setOpenFirst(true)}>
                        Sign in
                    </Link>
                    <Link to='/register'
                          className='btn btn-one sign-up'
                          style={linkStyle}
                          onClick={() => setOpenFirst(true)}>
                        Sign up
                    </Link>

                <Modal open={openFirst} onClose={() => setOpenFirst(false)} center>
                    <button className="button" onClick={() => setOpenSecond(true)}>
                        Sign in as user
                    </button>
                    <button className="button" onClick={() => setOpenSecond(true)}>
                        Sign in as partner
                    </button>
                </Modal>
                <Modal open={openSecond} onClose={() => setOpenSecond(false)} center>
                    <input type='text' />
                </Modal>
            </header>
    );
}

export default Header;