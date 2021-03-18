import React, { useEffect, useState } from 'react';
import axios from "axios";
import { UserProfileMenu } from "../user/UserProfileMenu";
import { PartnerProfileMenu } from "../partner/settings/PartnerProfileMenu";
import logo from "../../images/Logo-transparent.png";

export const UserNavbar = () => {

    const [userType, setUserType] = useState();

    useEffect(() => {
        axios.get('/api/me')
            .then(response => {
                console.log(response)
                setUserType(response.data.credential.role.toLowerCase());
            })
    }, []);

    const checkUserType = () => {
      if (userType === 'user') {
          return <UserProfileMenu />;
      } if (userType === 'partner') {
          return <PartnerProfileMenu />
        }
    };

    return (
        <div>
            <div className='logo'>
                <a href='/'>
                    <img alt='logo' src={logo} className='app-logo' />
                </a>
            </div>
            {checkUserType()}
        </div>
    );
}