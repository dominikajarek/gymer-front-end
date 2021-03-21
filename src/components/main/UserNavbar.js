import React, { useEffect, useState } from 'react';
import { UserProfileMenu } from "../user/UserProfileMenu";
import { PartnerProfileMenu } from "../partner/settings/PartnerProfileMenu";
import { Header } from "./Header";
import axios from "axios";

import logo from "../../images/Logo-transparent.png";

export const UserNavbar = () => {

    const [userType, setUserType] = useState();

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
        </header>
    );
}