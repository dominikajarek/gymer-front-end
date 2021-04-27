import React, {useCallback, useState} from 'react';
import {useHistory} from 'react-router-dom';
import {Common} from "../../commonActions/Common";
import {LoginForm} from "../forms/LoginForm";
import axios from "axios";

export const Login = () => {

    const [email, setEmail] = useState('test@gmail.com');
    const [password, setPassword] = useState('test');
    const [message, setMessage] = useState('');

    const history = useHistory();
    const handleSuccessLogin = useCallback(() => {
        history.push('/');
        Common.refreshPage();
    }, [history]);

    function handleSubmit(e) {
        e.preventDefault();
        const user = {email, password};
        axios.post("/api/login", user)
            .then(response => {
                setMessage(response.data.message);
                localStorage.setItem('Authorization', response.headers.authorization);
                setTimeout(handleSuccessLogin, 500);
            })
            .catch(reason => {
                if (reason.response) {
                    setMessage(reason.response.data.message);
                }
            });
    }

    return (
        <LoginForm
            handleSubmit={handleSubmit}
            email={email}
            password={password}
            setEmail={setEmail}
            setPassword={setPassword}
            message={message}
        />
    );
}