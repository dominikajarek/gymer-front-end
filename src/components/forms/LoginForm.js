import React from 'react';
import logoGoogle from "../../images/google.svg";
import {Link} from "react-router-dom";

export const LoginForm = (props) => {

    return (
        <div className="register">
            <form onSubmit={props.handleSubmit} className='register-form'>
                <p className='register-input-field'>
                    <label htmlFor="email" className="floatLabel formLabel">Email</label>
                    <input id="email"
                           name="email"
                           type="email"
                           value={props.email}
                           onChange={({target}) => props.setEmail(target.value)}
                    />
                </p>
                <p className='register-input-field'>
                    <label htmlFor="password" className="floatLabel formLabel">Password</label>
                    <input id="password"
                           name="password"
                           type="password"
                           value={props.password}
                           onChange={({target}) => props.setPassword(target.value)}
                    />
                </p>
                <h3 className="error">{props.message}</h3>
                <p className='register-input-field'>
                    <input type="submit" value="Sign in" />
                </p>

                <div className='other-logins'>
                    <p className='google-auth-container'>
                        <img src={logoGoogle} alt="google login" className="icon"></img>
                        <a className="google-auth-button" href="/api/google-auth">Login with google</a>
                    </p>
                    <div className='sign-up-container'>
                        <Link to='/register'
                              className='btn btn-one sign-up link-style'>
                            Sign up
                        </Link>
                    </div>
                </div>
            </form>
        </div>
    );
}