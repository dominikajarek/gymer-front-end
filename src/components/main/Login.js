import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from "axios";
import logoGoogle from "../../images/google.svg";
import {Common} from "../../actions/Common";

export const Login = () => {

    const [email, setEmail] = useState('test@gmail.com');
    const [password, setPassword] = useState('test');
    const [message, setMessage] = useState('');

    const history = useHistory();
    const handleSuccessLogin = useCallback(() => {
        history.push('/user-slots');
        Common.refreshPage();
    }, [history]);

    function handleSubmit(e) {
        e.preventDefault();
        const user = {email, password};
        axios.post("/api/login", user)
            .then(response => {
                setMessage(response.data.message);
                localStorage.setItem('Authorization', response.headers.authorization);
                localStorage.setItem('loggedIn', 'true');
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
                <h3 className="error">{message}</h3>
                <p className='register-input-field'>
                    <input type="submit" value="Sign in" />
                </p>
                <p className='google-auth-container'>
                    <img src={logoGoogle} alt="google login" className="icon"></img>
                    <a className="google-auth-button" href="/api/google-auth">Login with google</a>
                </p>
            </form>
        </div>
    );
}