import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Modal } from "react-responsive-modal";
import { UserForm } from "../forms/UserForm";

import 'react-responsive-modal/styles.css';
import '../../styles/header.css';

export const Header = () => {

    const [openFirstLogin, setOpenFirstLogin] = useState(false);
    const [openFirstRegistration, setOpenFirstRegistration] = useState(false);
    const [openSecond, setOpenSecond] = useState(false);

    return (
            <header className='header-container'>
                <div className="search__container">
                    <input className="search__input" type="text" placeholder="Search" />
                </div>
                    <Link to='/login'
                          className='btn btn-one sign-in link-style'
                          >
                        Sign in
                    </Link>
                    <Link to='/register'
                          className='btn btn-one sign-up link-style'
                          onClick={() => setOpenFirstRegistration(true)}>
                        Sign up
                    </Link>

                <Modal open={openFirstLogin} onClose={() => setOpenFirstLogin(false)} center>
                    <button className="button" onClick={() => setOpenSecond(true)}>
                        Sign in as user
                    </button>
                    <button className="button" onClick={() => setOpenSecond(true)}>
                        Sign in as partner
                    </button>
                </Modal>
                <Modal open={openSecond} onClose={() => setOpenSecond(false)} center>
                    <UserForm />
                </Modal>

                <Modal open={openFirstRegistration} onClose={() => setOpenFirstRegistration(false)} center>
                    <button className="button" onClick={() => setOpenSecond(true)}>
                        Sign up as user
                    </button>
                    <button className="button" onClick={() => setOpenSecond(true)}>
                        Sign up as partner
                    </button>
                </Modal>
                <Modal open={openSecond} onClose={() => setOpenSecond(false)} center>
                    <UserForm />
                </Modal>
            </header>
    );
}