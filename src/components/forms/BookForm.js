import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

export const BookForm = () => {

    const [redirect, setRedirect] = useState(false);
    const [user, setUser] = useState();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [additionalInfo, setAdditionalInfo] = useState('');


    const validateForm = () => {
        return email.length > 0 && password.length > 0;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setRedirect(true);
        if (redirect) {
            return <Redirect to='/reservation' />
        }
    };

    return (
        <div className='login-container'>
            <p className='register-input-field'>
                <label htmlFor="email" className="floatLabel formLabel">First name</label>
                <input
                       name="email"
                       type="email"

                />
            </p>
            <p className='register-input-field'>
                <label htmlFor="email" className="floatLabel formLabel">Last name</label>
                <input
                       name="email"
                       type="email"
                />
            </p>
            <p className='register-input-field'>
                <label htmlFor="email" className="floatLabel formLabel">Phone number</label>
                <input
                       name="email"
                       type="email"
                />
            </p>
            <p className='register-input-field'>
                <button className="button-submit">Save</button>
            </p>
        </div>
    );
}