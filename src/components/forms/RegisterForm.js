import React from 'react';

export const RegisterForm = (props) => {

    return (
        <div className="register">
            <form onSubmit={props.handleSubmit} className='register-form'>
                <h2 className='text'>Choose account type:</h2>
                <ul className="tab-group">
                    <li className="tab">
                        <label className="checkbox" htmlFor="partner">
                            <input id="partner"
                                   name="selector"
                                   type="radio"
                                   value="partner"
                                   onChange={({target}) => props.setActive(target)}
                            /> Partner
                        </label>
                    </li>
                    <li className="tab">
                        <label className="checkbox" htmlFor="user">
                            <input id="user"
                                   name="selector"
                                   type="radio"
                                   value="user"
                                   onChange={({target}) => props.setActive(target)}
                            /> User
                        </label>
                    </li>
                </ul>
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
                <p className='register-input-field'>
                    <label htmlFor="confirmPassword" className="floatLabel formLabel">Confirm Password</label>
                    <input id="confirmPassword"
                           name="confirmPassword"
                           type="password"
                           value={props.confirmPassword}
                           onChange={({target}) => props.setConfirmPassword(target.value)}
                    />
                </p>
                <h3 className="error">{props.message}</h3>
                <p className='register-input-field'>
                    <input type="submit" value="Sign up" disabled={!props.validateForm()}/>
                </p>
            </form>
        </div>
    );
}