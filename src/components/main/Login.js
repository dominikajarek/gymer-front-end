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
                // show message fron JsonResponse object
                console.log(response.data);
                alert(response.data.message);

                // set up JSON Web Token to the variable
                const jwt = response.headers.authorization;
                console.log(jwt);

                // if error field === false should redirect to the homepage
                if (response.data.error === false) {
                    // redirect to homepage with logged in status
                }
            })
            .catch(reason => {
                // if there is error with credentials like 400 bad request or else with message in json format
                if (reason.response) {
                    console.log(reason.response.data);
                    alert(reason.response.data.message);
                }
            });
    }

    return (
        <div>
            <label htmlFor="email">Email:</label><br/>
            <input type="text" id="email" name="email" defaultValue={"jk7223039@gmail.com"}/><br/>
            <label htmlFor="password">Password:</label><br/>
            <input type="password" id="password" name="password" defaultValue={"password"}/><br/>
            <input onClick={handleSubmit} defaultValue={"Submit"}/>
        </div>
    );
}

export default Login;