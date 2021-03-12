import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import axios from "axios";

import { Connection } from "../../../actions/Connection";
import { EditPartnerProfileForm } from "../../forms/EditPartnerProfileForm";

export const PartnerProfile = () => {

    const [credentials, setCredentials] = useState();
    const [details, setDetails] = useState([]);
    const [message, setMessage] = useState('');

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [partnerId, setPartnerId] = useState();

    const [name, setName] = useState('');
    const [logo, setLogo] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');
    const [website, setWebsite] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const [partnerUrl, setPartnerUrl] = useState('');
    const [credentialUrl, setCredentialUrl] = useState('');

    const history = useHistory();
    const handleChangingDetails = useCallback(() => window.location.reload(), [history]);

    useEffect(() => {
        const getActiveUserUrl = '/api/me';
        axios.get(getActiveUserUrl)
            .then(response => {
                console.log(response);
                setCredentials(response.data.credential);
                setPartnerId(response.data.id);
                setActivePartnerAndGetData();
            })
    }, []);

    const setActivePartnerAndGetData = () => {
        const partnerUrl = `/api/partners/${partnerId}`;
        setPartnerUrl(partnerUrl);

        Connection.getRequestWithCallbacks(partnerUrl, setUserDetailsAndGetUserCredentials, Connection.logMessageCallback);
    };

    const setUserDetailsAndGetUserCredentials = (data) => {
        setDetails(data);
        console.log(data.id)
        setName(data.name);
        setDescription(data.description);
        setWebsite(data.website);
        setImage(data.image);
        setLogo(data.logo);

        const getCredentialUrl = data._links.credentials.href;
        setCredentialUrl(getCredentialUrl);

        Connection.getRequestWithCallbacks(getCredentialUrl, setUserCredentials, Connection.logMessageCallback);
    };

    const setUserCredentials = data => {
        setEmail(data.email);
        setPhoneNumber(data.phoneNumber);
        setCredentials(data);
    }

    return (
        <div>
            <p>{email}</p>
            <EditPartnerProfileForm
                name={name}
                image={image}
                logo={logo}
                description={description}
                website={website}
                phone={phoneNumber}
                email={email}
                password={password}
                newPassword={newPassword}
                setName={setName}
                setImage={setImage}
                setLogo={setLogo}
                setDescription={setDescription}
                setWebsite={setWebsite}
                setPhone={setPhoneNumber}
                setEmail={setEmail}
                setPassword={setPassword}
                setNewPassword={setNewPassword}
            />
        </div>
    );
}