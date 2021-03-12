import React from 'react';

export const EditProfileForm = (props) => {

    return (
        <div className='register'>
            <h3 className="text-justify-in-grid">{props.messageLabel}</h3>
            <form className="register-form">
                <div>
                    <p className='register-input-field'>
                        <label htmlFor="email" className="floatLabel formLabel">First name</label>
                        <input defaultValue={props.firstNameValue}
                               name="email"
                               type="email"
                               onChange={({target}) => props.setFirstNameValue(target.value)}
                        />
                    </p>
                    <p className='register-input-field'>
                        <label htmlFor="email" className="floatLabel formLabel">Last name</label>
                        <input defaultValue={props.lastNameValue}
                               name="email"
                               type="email"
                               onChange={({target}) => props.setLastNameValue(target.value)}
                        />
                    </p>
                    <p className='register-input-field'>
                        <label htmlFor="email" className="floatLabel formLabel">Phone number</label>
                        <input defaultValue={props.phoneNumberValue}
                               name="email"
                               type="email"
                               onChange={({target}) => props.setPhoneNumberValue(target.value)}
                        />
                    </p>
                    <p className='register-input-field'>
                        <button className="button-submit" onClick={props.submitNewDetails}>Save</button>
                    </p>

                </div>
                <div>
                    <p className='register-input-field'>
                        <label htmlFor="email" className="floatLabel formLabel">Email</label>
                        <input defaultValue={props.emailValue} disabled={true}
                               name="email"
                               type="email"
                               onChange={({target}) => props.setEmailValue(target.value)}
                        />
                    </p>
                    <p className='register-input-field'>
                        <label htmlFor="email" className="floatLabel formLabel">Password</label>
                        <input defaultValue={props.passwordValue}
                               name="password"
                               type="password"
                               onChange={({target}) => props.setPasswordValue(target.value)}
                        />
                    </p>
                    <p className='register-input-field'>
                        <label htmlFor="email" className="floatLabel formLabel">Confirm password</label>
                        <input defaultValue={props.newPasswordValue}
                               name="password"
                               type="password"
                               onChange={({target}) => props.setNewPasswordValue(target.value)}
                        />
                    </p>
                    <button className="button-submit" onClick={props.submitNewPassword}>Confirm</button>
                </div>
            </form>
        </div>
    );
}