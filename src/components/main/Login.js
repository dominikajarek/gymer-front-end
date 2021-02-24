import React, {useCallback, useState} from 'react';
import {useHistory} from 'react-router-dom';

import '../../styles/login.css';
import axios from "axios";

export function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState();
    const [message, setMessage] = useState('');

    const history = useHistory();
    const handleSuccessLogin = useCallback(() => history.push('/'), [history]);

    function handleSubmit(e) {
        e.preventDefault();
        const user = { email, password };
        axios.post("/api/login", user)
            .then(response => {
                const jwt = response.headers.authorization;
                setMessage(response.data.message);
                setUser(response.data);
                localStorage.setItem('user', JSON.stringify(response.data));
                setTimeout(handleSuccessLogin, 500);
            })
            .catch(reason => {
                // if there is error with credentials like 400 bad request or else with message in json format
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
                defaultValue={"jk7223039@gmail.com"}
                value={email}
                onChange={({target}) => setEmail(target.value)}
            />
                <br/>
            <label htmlFor="password">Password:</label><br/>
            <input
                type="password"
                name="password"
                defaultValue={"password"}
                value={password}
                onChange={({target}) => setPassword(target.value)}
            />
                <br/>
            <input onClick={handleSubmit} defaultValue={"Submit"}/>
        </div>
    );
}
