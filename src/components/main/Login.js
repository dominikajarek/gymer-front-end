import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from "axios";

import '../../styles/login.css';

export const Login = () => {

    const [email, setEmail] = useState('test@gmail.com');
    const [password, setPassword] = useState('test');
    const [message, setMessage] = useState('');

    const history = useHistory();
    const handleSuccessLogin = useCallback(() => history.push('/'), [history]);

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
        <div>
            <h2>{message}</h2>
            <label htmlFor="email">Email:</label><br/>
            <input
                type="email"
                name="email"
                value={email}
                onChange={({target}) => setEmail(target.value)}
            />
            <br/>
            <label htmlFor="password">Password:</label><br/>
            <input
                type="password"
                name="password"
                value={password}
                onChange={({target}) => setPassword(target.value)}
            />
            <br/>
            <input onClick={handleSubmit} defaultValue={"Submit"}/>
        </div>
    );
}