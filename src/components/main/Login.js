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
        <div className="register">
            <h2>{message}</h2>
            <form onSubmit={handleSubmit} className='register-form'>

                <p className='register-input-field'>
                    <label htmlFor="email" className="floatLabel formLabel">Email</label>
                    <input id="email"
                           name="email"
                           type="email"
                           value={email}
                           onChange={({target}) => setEmail(target.value)}
                    />
                </p>
                <p className='register-input-field'>
                    <label htmlFor="password" className="floatLabel formLabel">Password</label>
                    <input id="password"
                           name="password"
                           type="password"
                           value={password}
                           onChange={({target}) => setPassword(target.value)}
                    />
                </p>
                <p className='register-input-field'>
                    <input type="submit" value="Sign in" id="submit" />
                </p>
            </form>
        </div>
    );
}