import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import { Connection } from "../../actions/Connection.js";
import { EditProfileForm } from "../forms/EditProfileForm";

export const UserProfile = () => {

    const [userDetails, setUserDetails] = useState([]);
    const [credentials, setCredentials] = useState([]);

    const [messageLabel, setMessageLabel] = useState('');
    const [firstNameValue, setFirstNameValue] = useState('');
    const [lastNameValue, setLastNameValue] = useState('');
    const [emailValue, setEmailValue] = useState('');
    const [phoneNumberValue, setPhoneNumberValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const [newPasswordValue, setNewPasswordValue] = useState('');

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
        setUserDetails(data);
        setFirstNameValue(data.firstName);
        setLastNameValue(data.lastName);

        const getCredentialUrl = data._links.credentials.href;
        setCredentialUrl(getCredentialUrl);
        Connection.getRequestWithCallbacks(getCredentialUrl, setUserCredentials, Connection.logMessageCallback);
    }

    const setUserCredentials = data => {
        setEmailValue(data.email);
        setPhoneNumberValue(data.phoneNumber);
        setCredentials(data);
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
        setMessageLabel("Details updated successfully");
        setTimeout(handleChangingDetails, 300);
    }

    const submitNewPassword = (e) => {
        e.preventDefault();
        if (window.confirm('Do you really want to update your account details?')) {
            handleConfirmWhenSubmittingNewPassword();
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
        setMessageLabel("Password changed successfully");
    }

    const showErrorMessage = response => {
        setMessageLabel(response.data.message);
    }

    /**
     * Section where HTML skeleton is build up from obtained data.
     */

    return (
        <EditProfileForm
            messageLabel={messageLabel}
            firstNameValue={firstNameValue}
            lastNameValue={lastNameValue}
            phoneNumberValue={phoneNumberValue}
            emailValue={emailValue}
            passwordValue={passwordValue}
            newPasswordValue={newPasswordValue}
            setFirstNameValue={setFirstNameValue}
            setLastNameValue={setLastNameValue}
            setPhoneNumberValue={setPhoneNumberValue}
            setEmailValue={setEmailValue}
            setPasswordValue={setPasswordValue}
            setNewPasswordValue={setNewPasswordValue}
            submitNewDetails={submitNewDetails}
            submitNewPassword={submitNewPassword}
        />
    );
}