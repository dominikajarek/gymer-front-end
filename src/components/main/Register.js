import React, {useCallback, useState} from 'react';
import {useHistory} from 'react-router-dom';

import '../../styles/register.css';
import axios from "axios";

export function Register() {


    return (
        <div className= "register">
            <form action="#" method="post">
                <h2>Sign Up</h2>
                <p>
                    <label htmlFor="Email" className="floatLabel">Email</label>
                    <input id="Email" name="Email" type="text" />
                </p>
                <p>
                    <label htmlFor="password" className="floatLabel">Password</label>
                    <input id="password" name="password" type="password" />
                </p>
                <p>
                    <label htmlFor="confirm_password" className="floatLabel">Confirm Password</label>
                    <input id="confirm_password" name="confirm_password" type="password" />
                </p>
                <p>
                    <input type="submit" value="Create My Account" id="submit" />
                </p>
            </form>
        </div>
    );
}

