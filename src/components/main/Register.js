import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from "axios";

import '../../styles/register.css';

export function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState(false);
    const [accountType, setAccountType] = useState('');

    const history = useHistory();
    const handleSuccessRegister = useCallback(() => history.push('/'), [history]);


    function handleSubmit(e) {
        e.preventDefault();
        const user = {email, password, confirmPassword, accountType};
        axios.post(`/api/registration/${accountType}`, user, {withCredentials: true})
            .then(response => {
                setError(response.data.error);
                setMessage(response.data.message);
                if (!response.data.error) {
                    setTimeout(handleSuccessRegister, 500);
                }
            }).catch(error => {
            setMessage(error.response.data.message);
        })
    }

    const validateForm = () => {
        return email.length > 0 && password.length > 0 &&
            confirmPassword.length > 0 && accountType.length > 0;
    };

    function setActive(element) {
        setAccountType(element.value);
    }


    return (
        <div className="register">
            <form onSubmit={handleSubmit} className='register-form'>
                <h2 className='text'>Choose account type:</h2>
                <ul className="tab-group">
                    <li className="tab"> {/* here should be optionally class active to visual effect*/}
                        <label className="checkbox" htmlFor="partner">
                            <input id="partner"
                                   name="selector"
                                   type="radio"
                                   value="partner"
                                   onChange={({target}) => setActive(target)}
                            /> Partner
                        </label>
                    </li>
                    <li className="tab">
                        <label className="checkbox" htmlFor="user">
                            <input id="user"
                                   name="selector"
                                   type="radio"
                                   value="user"
                                   onChange={({target}) => setActive(target)}
                            /> User
                        </label>
                    </li>
                </ul>
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
                    <label htmlFor="confirmPassword" className="floatLabel formLabel">Confirm Password</label>
                    <input id="confirmPassword"
                           name="confirmPassword"
                           type="password"
                           value={confirmPassword}
                           onChange={({target}) => setConfirmPassword(target.value)}
                    />
                </p>
                {error &&<h3 className="error">{message}</h3>}
                <p className='register-input-field'>
                    <input type="submit" value="Sign in" disabled={!validateForm()}/>
                </p>
            </form>
        </div>
    );
}

