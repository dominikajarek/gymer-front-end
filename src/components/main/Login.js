import React, {useCallback} from 'react';
import {useHistory} from 'react-router-dom';

import '../../styles/login.css';
import axios from "axios";

function Login() {

    const history = useHistory();
    const handleSuccessLogin = useCallback(() => history.push('/'), [history]);

    function handleSubmit() {
        const loginDetails = {
            "email": document.getElementById('email').value,
            "password": document.getElementById('password').value
        }

        axios.post("/api/login", loginDetails)
            .then(response => {
                document.getElementById('message-label').textContent = response.data.message;
                const jwt = response.headers.authorization;
                setTimeout(handleSuccessLogin, 500);
            })
            .catch(reason => {
                // if there is error with credentials like 400 bad request or else with message in json format
                if (reason.response) {
                    document.getElementById('message-label').textContent = reason.response.data.message;
                }
            });
    }

    return (
        <div>
            <h2 id="message-label">Message</h2>
            <label htmlFor="email">Email:</label><br/>
            <input type="text" id="email" name="email" defaultValue={"jk7223039@gmail.com"}/><br/>
            <label htmlFor="password">Password:</label><br/>
            <input type="password" id="password" name="password" defaultValue={"password"}/><br/>
            <input onClick={handleSubmit} defaultValue={"Submit"}/>
        </div>
    );
}

export default Login;