import React from 'react';

import '../../styles/login.css';
import axios from "axios";

function Login() {

    function handleSubmit() {
        const loginDetails = {
            "email": document.getElementById('email').value,
            "password": document.getElementById('password').value
        }

        axios.post("/api/login", loginDetails)
            .then(response => {
                console.log(response.data);
                alert(response.data.message);
                if (response.data.error === false) {
                    // redirect to homepage with logged in status
                }
            })
            .catch(reason => {
                if (reason.response) {
                    console.log(reason.response.data);
                    alert(reason.response.data.message);
                }
            });
    }

    return (
        <div>
            <label htmlFor="email">Email:</label><br/>
            <input type="text" id="email" name="email" defaultValue={"email"}/><br/>
            <label htmlFor="password">Password:</label><br/>
            <input type="password" id="password" name="password" defaultValue={"password"}/><br/>
            <input onClick={handleSubmit} defaultValue={"Submit"}/>
        </div>
    );
}

export default Login;