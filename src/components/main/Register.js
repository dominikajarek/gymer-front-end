import React, {useCallback, useState} from 'react';
import {useHistory} from 'react-router-dom';
import {RegisterForm} from "../forms/RegisterForm";
import axios from "axios";

export const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const [accountType, setAccountType] = useState('');

    const history = useHistory();
    const handleSuccessRegister = useCallback(() =>
        history.push('/info'), [history]);

    function handleSubmit(e) {
        e.preventDefault();
        const user = {email, password, confirmPassword, accountType};
        axios.post(`/api/registration/${accountType}`, user, {withCredentials: true})
            .then(response => {
                setMessage(response.data.message);
                handleSuccessRegister();
            }).catch(error => {
            setMessage(error.response.data.message);
        })
    }

    const validateForm = () => {
        return email.length > 0 && password.length > 0 &&
            confirmPassword.length > 0 && accountType.length > 0;
    };

    function setActive(element) {
        setAccountType(element.value);
    }

    return (
        <RegisterForm
            email={email}
            password={password}
            confirmPassword={confirmPassword}
            accountType={accountType}
            setEmail={setEmail}
            setPassword={setPassword}
            setConfirmPassword={setConfirmPassword}
            setAccountType={setAccountType}
            message={message}
            handleSubmit={handleSubmit}
            validateForm={validateForm}
            setActive={setActive}
        />
    );
}

