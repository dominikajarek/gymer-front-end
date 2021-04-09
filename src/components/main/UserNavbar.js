import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import { UserProfileMenu } from "../user/UserProfileMenu";
import { PartnerProfileMenu } from "../partner/settings/PartnerProfileMenu";
import { Header } from "./Header";
import { faArrowLeft}  from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

import logo from "../../images/Logo-transparent.png";

export const UserNavbar = () => {

    const [userType, setUserType] = useState();
    const history = useHistory();

    useEffect(() => {
        axios.get('/api/me')
            .then(response => {
                setUserType(response.data.credential.role);
            })
    }, []);

    const checkUserType = () => {
        if (userType === 'USER') {
            return <UserProfileMenu/>;
        } else if (userType === 'PARTNER') {
            return <PartnerProfileMenu/>
        } else {
            return <Header/>
        }
    };

    return (
        <header className='header-container'>
            <div className='logo'>
                <a href='/'>
                    <img alt='logo' src={logo} className='app-logo'/>
                </a>
            </div>
            {checkUserType()}
            <FontAwesomeIcon icon={faArrowLeft} onClick={history.goBack} className='go-back-icon' size='2x' />
        </header>
    );
}