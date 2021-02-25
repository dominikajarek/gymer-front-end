import React, {useCallback, useEffect, useState} from 'react';
import {useHistory} from "react-router-dom";
import axios from "axios";

import {Connection} from "../../Connection.js";

import '../../styles/user-details-site.css';

export const Profile = () => {

    const [userDetails, setUserDetailsState] = useState([]);
    const [credentials, setCredentialsState] = useState([]);

    const [messageLabel, setMessageLabelState] = useState('');
    const [firstNameValue, setFirstNameState] = useState('');
    const [lastNameValue, setLastNameState] = useState('');
    const [emailValue, setEmailState] = useState('');
    const [phoneNumberValue, setPhoneNumberState] = useState('');
    const [passwordValue, setPasswordState] = useState('');
    const [newPasswordValue, setNewPasswordState] = useState('');

    const [userUrl, setUserUrl] = useState('');
    const [credentialUrl, setCredentialUrl] = useState('');

    /**
     * Section responsible for obtaining all necessary information.
     * Active user is obtained first, next detailed info about user is get from the server.
     * At the end credentials for this specific user are obtained.
     * All necessary information are stored in state variables.
     */

    useEffect(() => {
        const getActiveUserUrl = '/api/me';
        Connection.getRequestWithCallbacks(getActiveUserUrl, setActiveUserAndGetUserDetails, Connection.logMessageCallback);
    }, []);

    const setActiveUserAndGetUserDetails = data => {
        const userUrl = '/api/users/' + data.id;
        setUserUrl(userUrl);
        Connection.getRequestWithCallbacks(userUrl, setUserDetailsAndGetUserCredentials, Connection.logMessageCallback);
    }

    const setUserDetailsAndGetUserCredentials = data => {
        setUserDetailsState(data);
        setFirstNameState(data.firstName);
        setLastNameState(data.lastName);

        const getCredentialUrl = data._links.credentials.href;
        setCredentialUrl(getCredentialUrl);
        Connection.getRequestWithCallbacks(getCredentialUrl, setUserCredentials, Connection.logMessageCallback);
    }

    const setUserCredentials = data => {
        setEmailState(data.email);
        setPhoneNumberState(data.phoneNumber);
        setCredentialsState(data);
    }

    /**
     * Section responsible for managing buttons and actions showed on site.
     * First button is responsible for sending put request with User details.
     * Second button is responsible for sending put request with User new password settings.
     */

    const history = useHistory();
    const handleChangingDetails = useCallback(() => window.location.reload(), [history]);

    const submitNewDetails = (e) => {
        e.preventDefault();
        if (window.confirm('Do you really want to update your account details?')) {
            handleConfirmWhenSubmittingNewDetails();
        } else {

        }
    }

    const handleConfirmWhenSubmittingNewDetails = () => {
        const newUserData = {
            "id": userDetails.id,
            "firstName": firstNameValue,
            "lastName": lastNameValue
        }
        Connection.putRequestWithCallbacks(userUrl, newUserData, updateCredentialDetails, Connection.logMessageCallback);
    }

    const updateCredentialDetails = () => {
        const newCredentialData = {
            "id": credentials.id,
            "phoneNumber": phoneNumberValue
        }
        Connection.putRequestWithCallbacks(credentialUrl, newCredentialData, showMessageAndHandleSuccessUpdate, Connection.logMessageCallback)
    }

    const showMessageAndHandleSuccessUpdate = () => {
        setMessageLabelState("Details updated successfully");
        setTimeout(handleChangingDetails, 300);
    }

    const submitNewPassword = (e) => {
        e.preventDefault();
        if (window.confirm('Do you really want to update your account details?')) {
            handleConfirmWhenSubmittingNewPassword();
        } else {

        }
    }

    const handleConfirmWhenSubmittingNewPassword = () => {
        const newPasswordData = {
            "oldPassword": passwordValue,
            "newPassword": newPasswordValue
        }
        const newPasswordUrl = userUrl + "/password";
        Connection.putRequestWithCallbacks(newPasswordUrl, newPasswordData, updateNewPassword, showErrorMessage)
    }

    const updateNewPassword = () => {
        setMessageLabelState("Password changed successfully");
    }

    const showErrorMessage = () => {
        setMessageLabelState("Password's doesn't match.");
    }

    /**
     * Section where HTML skeleton is build up from obtained data.
     */

    return (
        <div>
            <h3 className="text-justify-in-grid">{messageLabel}</h3>
            <div className="grid-addon grid-container-user-details">
                <label className="formLabel text-justify-in-grid">Change user details:</label>
                <div className="firstNameLabel padding-grid">
                    <label htmlFor="fnfield" className="fnlabel text-justify-in-grid">First name:</label>
                    <input className="fnfield text-justify-in-grid" type="text" defaultValue={firstNameValue}
                           onChange={({target}) => setFirstNameState(target.value)}/>
                </div>
                <div className="lastNameLabel padding-grid">
                    <label htmlFor="lnfield" className="lnlabel text-justify-in-grid">Last name:</label>
                    <input className="lnfield text-justify-in-grid" type="text" defaultValue={lastNameValue}
                           onChange={({target}) => setLastNameState(target.value)}/>
                </div>
                <div className="phoneLabel padding-grid">
                    <label htmlFor="pField" className="pLabel text-justify-in-grid">Phone number:</label>
                    <input className="pField text-justify-in-grid" type="text" defaultValue={phoneNumberValue}
                           onChange={({target}) => setPhoneNumberState(target.value)}/>
                </div>
                <div className="buttonHolder text-justify-in-grid">
                    <button className="resign button-on-slot" onClick={submitNewDetails}>SAVE</button>
                </div>
                <div className="emailContainer padding-grid">
                    <label htmlFor="emailField" className="emailLabel text-justify-in-grid">Email:</label>
                    <input className="emailField text-justify-in-grid" type="text" defaultValue={emailValue} disabled={true}/>
                </div>
                <div className="passwordLabel padding-grid">
                    <label htmlFor="passfield" className="passlabel text-justify-in-grid">Old password:</label>
                    <input className="passfield text-justify-in-grid" type="password" defaultValue={passwordValue}
                           onChange={({target}) => setPasswordState(target.value)}/>
                </div>
                <div className="newPasswordLabel padding-grid">
                    <label htmlFor="passfield2" className="passlabel2 text-justify-in-grid">New password:</label>
                    <input className="passfield2 text-justify-in-grid" type="password" defaultValue={newPasswordValue}
                           onChange={({target}) => setNewPasswordState(target.value)}/>
                </div>
                <div className="buttonPassSubmit text-justify-in-grid">
                    <button className="resign button-on-slot" onClick={submitNewPassword}>CONFIRM</button>
                </div>
            </div>
        </div>
    );
}