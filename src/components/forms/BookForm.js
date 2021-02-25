import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import '../../styles/login.css';

export const BookForm = () => {

    const [redirect, setRedirect] = useState(false);
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
            <Form method='post' action='/reservation'>
                <Form.Group size='lg' controlId='email'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        autoFocus
                        type='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>
                <Form.Group size='lg' controlId='password'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>
                <Form.Group size='lg' controlId='phone-number'>
                    <Form.Label>Phone number</Form.Label>
                    <Form.Control
                        type='text'
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)} />
                </Form.Group>
                <Form.Group size='lg' controlId='info'>
                    <Form.Label>Additional information</Form.Label>
                    <Form.Control
                        type='text'
                        value={additionalInfo}
                        onChange={(e) => setAdditionalInfo(e.target.value)} />
                </Form.Group>
                <Button block size='lg' type='submit' disabled={!validateForm()} onSubmit={handleSubmit} >
                    Book
                </Button>
            </Form>
        </div>
    );
}