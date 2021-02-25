import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from "axios";

import '../../styles/login.css';

export const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [user, setUser] = useState();

    const history = useHistory();
    const handleSuccessLogin = useCallback(() => history.push('/'), [history]);

    function handleSubmit(e) {
        e.preventDefault();
        const user = { email, password };
        axios.post("/api/login", user)
            .then(response => {
                const result = response.data;
                const jwt = response.headers.authorization;
                setMessage(result.message);
                setUser(result);
                localStorage.setItem('user', JSON.stringify(result));
                setTimeout(handleSuccessLogin, 500);
            })
            .catch(reason => {
                // if there is error with credentials like 400 bad request or else with message in json format
                if (reason.response) {
                    setMessage(reason.response.message);
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

/*
test@gmail.com
test
 */