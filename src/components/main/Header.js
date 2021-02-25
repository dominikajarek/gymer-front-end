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

    const linkStyle = {
        'textDecoration':'none',
        'color':'rgba(2, 2, 2, 1)',
    }
    const partnerStyle = {
        'textDecoration':'none',
        'color': 'red',
        'padding': '1em'
    }
    const userStyle = {
        'textDecoration':'none',
        'color': 'green',
        'padding': '1em'
    }

    return (
            <header className='header-container'>
                <div className="search__container">
                    <input className="search__input" type="text" placeholder="Search" />
                </div>
                    <Link to='/login'
                          className='btn btn-one sign-in'
                          style={linkStyle}
                          >
                        Log in
                    </Link>
                    <Link to='/register'
                          className='btn btn-one sign-up'
                          style={linkStyle}
                          // onClick={() => setOpenFirstRegistration(true)}
                        >
                        Sign up
                    </Link>

{/*login*/}
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

{/*register*/}
{/*                <Modal open={openFirstRegistration} onClose={() => setOpenFirstRegistration(false)} center>*/}
{/*                    <Link*/}
{/*                        to={"/register/?accountType=partner"}*/}
{/*                        className='btn btn-one sign-up'*/}
{/*                        style={partnerStyle}*/}
{/*                        onClick={() => setOpenFirstRegistration(false)}*/}
{/*                    >*/}
{/*                        AS PARTNER*/}
{/*                    </Link>*/}

{/*                    <Link*/}
{/*                        to={"/register"}*/}
{/*                        className='btn btn-one sign-up'*/}

{/*                        style={userStyle}*/}
{/*                        onClick={() => setOpenFirstRegistration(false)}*/}
{/*                    >*/}
{/*                        AS USER</Link>*/}
{/*                </Modal>*/}

            </header>
    );
}