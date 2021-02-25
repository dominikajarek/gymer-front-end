import React, {useCallback, useState} from 'react';
import {useHistory} from 'react-router-dom';

import '../../styles/register.css';
import axios from "axios";

export function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState(false)

    const history = useHistory();
    const handleSuccessRegister = useCallback(() => history.push('/'), [history]);


    function handleSubmit(e) {
        e.preventDefault();
        const user = { email, password, confirmPassword };
        axios.post("/api/registration/partner", user, {withCredentials:true} )
            .then(response =>{
                setError(response.data.error);
                setMessage(response.data.message);
                if (error) {
                    setTimeout(handleSuccessRegister, 1000);
                }
        }).catch(error => {
            setMessage(error.response.data.message);
        })

    }

    return (
        <div className= "register">
            <form onSubmit={ handleSubmit }>
                <h2>Sign Up</h2>
                {error ? ( <h3 className="error">{message}</h3> ):( <h3> </h3> )}
                <p>
                    <label htmlFor="email" className="floatLabel">Email</label>
                    <input id="email"
                           name="email"
                           type="email"
                           value={email}
                           onChange={({target}) => setEmail(target.value)}
                    />
                </p>
                <p>
                    <label htmlFor="password" className="floatLabel">Password</label>
                    <input id="password"
                           name="password"
                           type="password"
                           value={password}
                           onChange={({target}) => setPassword(target.value)}
                    />
                </p>
                <p>
                    <label htmlFor="confirmPassword" className="floatLabel">Confirm Password</label>
                    <input id="confirmPassword"
                           name="confirmPassword"
                           type="password"
                           value={confirmPassword}
                           onChange={({target}) => setConfirmPassword(target.value)}
                    />
                </p>
                <p> //todo ask about two endpoint
                    <input type="submit" value="Sign in as User" id="submit" />
                    <input type="submit" value="Sign in as Partner" id="partnerSubmit" />
                </p>
            </form>
        </div>
    );
}

