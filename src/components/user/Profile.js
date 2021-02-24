import React, {useCallback, useEffect, useState} from 'react';
import {useHistory} from "react-router-dom";
import axios from "axios";

import '../../styles/user-details-site.css';

export const Profile = () => {

    const [activeUser, setUser] = useState([]);
    const [userDetails, setUserDetails] = useState([]);
    const [credentials, setCredentials] = useState([]);

    const [messageLabel, setMessageLabel] = useState('');
    const [firstNameValue, setFirstName] = useState('');
    const [lastNameValue, setLastName] = useState('');
    const [emailValue, setEmail] = useState('');
    const [phoneNumberValue, setPhoneNumber] = useState('');
    const [passwordValue, setPassword] = useState('');
    const [newPasswordValue, setNewPassword] = useState('');

    const history = useHistory();
    const handleChangingDetails = useCallback(() => window.location.reload(), [history]);

    const [userUrl, setUserUrl] = useState('');
    const [credentialUrl, setCredentialUrl] = useState('');

    let config = {
        headers: {
            'Authorization': localStorage.getItem('Authorization')
        }
    }

    useEffect(() => {
        getActiveUser();
    }, []);

    const getActiveUser = () => {
        axios.get('/api/me', config)
            .then(response => {
                setUser(response.data);
                getActiveUsersDetails(response.data.id);
            }).catch(reason => {
            console.log(reason.response);
        });
    }

    const getActiveUsersDetails = (id) => {
        const getUserUrl = '/api/users/' + id;
        setUserUrl(getUserUrl);
        axios.get(getUserUrl, config)
            .then(response => {
                if (response.data != null) {
                    setUserDetails(response.data);
                    if (response.data != null) {
                        const getCredentialUrl = response.data._links.credentials.href;
                        setCredentialUrl(getCredentialUrl);
                        getActiveUsersCredentials(getCredentialUrl);
                        setFirstName(response.data.firstName);
                        setLastName(response.data.lastName);
                    }
                }
            }).catch(reason => {
            if (reason.response != null) {
                console.log(reason.response);
            }
        });
    }

    const getActiveUsersCredentials = (getCredentialUrl) => {
        axios.get(getCredentialUrl, config)
            .then(response => {
                if (response.data != null) {
                    setEmail(response.data.email);
                    setPhoneNumber(response.data.phoneNumber);
                    setCredentials(response.data);
                }
            }).catch(reason => {
            if (reason.response != null) {
                console.log(reason.response);
            }
        });
    }

    const submitNewDetails = (e) => {
        e.preventDefault();
        if (window.confirm('Do you really want to update your account details?')) {
            updateUserDetails();
        } else {

        }
    }

    const updateUserDetails = () => {
        const newUserData = {
            "id": userDetails.id,
            "firstName": firstNameValue,
            "lastName": lastNameValue
        }
        axios.put(userUrl, newUserData, config)
            .then(response => {
                if (response.data != null) {
                    updateCredentialDetails();
                }
            }).catch(reason => {
            if (reason.response != null) {
                console.log(reason.response);
            }
        });
    }

    const updateCredentialDetails = () => {
        const newCredentialData = {
            "id": credentials.id,
            "phoneNumber": phoneNumberValue
        }
        axios.put(credentialUrl, newCredentialData, config)
            .then(response => {
                if (response.data != null) {
                    setMessageLabel("Details updated successfully");
                    setTimeout(handleChangingDetails, 300);
                }
            }).catch(reason => {
            if (reason.response != null) {
                console.log(reason.response);
            }
        });
    }

    const submitNewPassword = (e) => {
        e.preventDefault();
        if (window.confirm('Do you really want to update your account details?')) {
            updateNewPassword();
        } else {

        }
    }

    const updateNewPassword = () => {
        const newPasswordData = {
            "oldPassword": passwordValue,
            "newPassword": newPasswordValue
        }

        const newPasswordUrl = userUrl + "/password";
        axios.put(newPasswordUrl, newPasswordData, config)
            .then(response => {
                setMessageLabel("Password changed successfully");
            })
            .catch(reason => {
            if (reason.response != null) {
                setMessageLabel("Password's doesn't match.");
            }
        });

    }

    return (
        <div>
            <h3 className="text-justify-in-grid">{messageLabel}</h3>
            <div className="grid-addon grid-container-user-details">
                <label className="formLabel text-justify-in-grid">Change user details:</label>
                <div className="firstNameLabel padding-grid">
                    <label htmlFor="fnfield" className="fnlabel text-justify-in-grid">First name:</label>
                    <input className="fnfield text-justify-in-grid" type="text" defaultValue={firstNameValue}
                           onChange={({target}) => setFirstName(target.value)}/>
                </div>
                <div className="lastNameLabel padding-grid">
                    <label htmlFor="lnfield" className="lnlabel text-justify-in-grid">Last name:</label>
                    <input className="lnfield text-justify-in-grid" type="text" defaultValue={lastNameValue}
                           onChange={({target}) => setLastName(target.value)}/>
                </div>
                <div className="phoneLabel padding-grid">
                    <label htmlFor="pField" className="pLabel text-justify-in-grid">Phone number:</label>
                    <input className="pField text-justify-in-grid" type="text" defaultValue={phoneNumberValue}
                           onChange={({target}) => setPhoneNumber(target.value)}/>
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
                    <input className="passfield text-justify-in-grid" type="text" defaultValue={passwordValue}
                           onChange={({target}) => setPassword(target.value)}/>
                </div>
                <div className="newPasswordLabel padding-grid">
                    <label htmlFor="passfield2" className="passlabel2 text-justify-in-grid">New password:</label>
                    <input className="passfield2 text-justify-in-grid" type="text" defaultValue={newPasswordValue}
                           onChange={({target}) => setNewPassword(target.value)}/>
                </div>
                <div className="buttonPassSubmit text-justify-in-grid">
                    <button className="resign button-on-slot" onClick={submitNewPassword}>CONFIRM</button>
                </div>
            </div>
        </div>
    );
}