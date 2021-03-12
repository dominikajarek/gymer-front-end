import React from 'react';

export const EditPartnerProfileForm = (props) => {

    return (
        <div className='register'>
            <h3 className="text-justify-in-grid">{props.messageLabel}</h3>
            <form className="register-form">
                <div>
                    <p className='register-input-field'>
                        <label htmlFor="name" className="floatLabel formLabel">Name</label>
                        <input defaultValue={props.name}
                               name="name"
                               type="text"
                               onChange={({target}) => props.setName(target.value)}
                        />
                    </p>
                    <p className='register-input-field'>
                        <label htmlFor="phone" className="floatLabel formLabel">Phone number</label>
                        <input defaultValue={props.phone}
                               name="phone"
                               type="text"
                               onChange={({target}) => props.setPhone(target.value)}
                        />
                    </p>
                    <p className='register-input-field'>
                        <label htmlFor="desc" className="floatLabel formLabel">Description</label>
                        <input defaultValue={props.description}
                               name="desc"
                               type="text"
                               onChange={({target}) => props.setDescription(target.value)}
                        />
                    </p>
                    <p className='register-input-field'>
                        <label htmlFor="website" className="floatLabel formLabel">Website</label>
                        <input defaultValue={props.website}
                               name="website"
                               type="text"
                               onChange={({target}) => props.setWebsite(target.value)}
                        />
                    </p>
                    <p className='register-input-field'>
                        <label htmlFor="logo" className="floatLabel formLabel">Logo</label>
                        <input defaultValue={props.logo}
                               name="logo"
                               type="text"
                               onChange={({target}) => props.setLogo(target.value)}
                        />
                    </p>
                    <p className='register-input-field'>
                        <label htmlFor="image" className="floatLabel formLabel">Image</label>
                        <input defaultValue={props.image}
                               name="image"
                               type="text"
                               onChange={({target}) => props.setImage(target.value)}
                        />
                    </p>


                    <p className='register-input-field'>
                        <button className="button-submit">Save</button>
                    </p>
                </div>
                <div>
                    <p className='register-input-field'>
                        <label htmlFor="email" className="floatLabel formLabel">Email</label>
                        <input defaultValue={props.email}
                               name="email"
                               type="email"
                               onChange={({target}) => props.setEmail(target.value)}
                        />
                    </p>
                    <p className='register-input-field'>
                        <label htmlFor="email" className="floatLabel formLabel">Password</label>
                        <input defaultValue={props.password}
                               name="password"
                               type="password"
                               onChange={({target}) => props.setPassword(target.value)}
                        />
                    </p>
                    <p className='register-input-field'>
                        <label htmlFor="email" className="floatLabel formLabel">Confirm password</label>
                        <input defaultValue={props.newPassword}
                               name="password"
                               type="password"
                               onChange={({target}) => props.setNewPassword(target.value)}
                        />
                    </p>
                    <button className="button-submit">Confirm</button>
                </div>
            </form>
        </div>
    );
}