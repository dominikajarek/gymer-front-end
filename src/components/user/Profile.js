import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import { Connection } from "../../actions/Connection.js";

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

    const showErrorMessage = response => {
        setMessageLabelState(response.data.message);
    }

    /**
     * Section where HTML skeleton is build up from obtained data.
     */

    return (
        <div className='register'>
            <h3 className="text-justify-in-grid">{messageLabel}</h3>
            <form className="register-form">
                <div>
                    <p className='register-input-field'>
                        <label htmlFor="email" className="floatLabel formLabel">First name</label>
                        <input defaultValue={firstNameValue}
                               name="email"
                               type="email"
                               onChange={({target}) => setFirstNameState(target.value)}
                        />
                    </p>
                    <p className='register-input-field'>
                        <label htmlFor="email" className="floatLabel formLabel">Last name</label>
                        <input defaultValue={lastNameValue}
                               name="email"
                               type="email"
                               onChange={({target}) => setLastNameState(target.value)}
                        />
                    </p>
                    <p className='register-input-field'>
                        <label htmlFor="email" className="floatLabel formLabel">Phone number</label>
                        <input defaultValue={phoneNumberValue}
                               name="email"
                               type="email"
                               onChange={({target}) => setPhoneNumberState(target.value)}
                        />
                    </p>
                    <p className='register-input-field'>
                        <button className="button-submit" onClick={submitNewDetails}>Save</button>
                    </p>

                </div>
                <div>
                    <p className='register-input-field'>
                        <label htmlFor="email" className="floatLabel formLabel">Email</label>
                        <input defaultValue={emailValue} disabled={true}
                               name="email"
                               type="email"
                               onChange={({target}) => setFirstNameState(target.value)}
                        />
                    </p>
                    <p className='register-input-field'>
                        <label htmlFor="email" className="floatLabel formLabel">Password</label>
                        <input defaultValue={passwordValue}
                               name="password"
                               type="password"
                               onChange={({target}) => setPasswordState(target.value)}
                        />
                    </p>
                    <p className='register-input-field'>
                        <label htmlFor="email" className="floatLabel formLabel">Confirm password</label>
                        <input defaultValue={newPasswordValue}
                               name="password"
                               type="password"
                               onChange={({target}) => setNewPasswordState(target.value)}
                        />
                    </p>
                    <button className="button-submit" onClick={submitNewPassword}>Confirm</button>
                </div>
            </form>
        </div>
    );
}