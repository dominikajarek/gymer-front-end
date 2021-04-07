import React from 'react';

export const EditPartnerProfileForm = (props) => {

    return (
        <div className='register'>
            <h3 className="text-justify-in-grid">{props.message}</h3>
            <form className="register-form">
                <div>
                    <p className='register-input-field'>
                        <label htmlFor="name" className="floatLabel formLabel">Name</label>
                        <input defaultValue={props.name}
                               className='input-type-text'
                               name="name"
                               type="text"
                               onChange={({target}) => props.setName(target.value)} />
                    </p>
                    <p className='register-input-field'>
                        <label htmlFor="phone" className="floatLabel formLabel">Phone number</label>
                        <input defaultValue={props.phone}
                               className='input-type-text'
                               name="phone"
                               type="text"
                               onChange={({target}) => props.setPhone(target.value)} />
                    </p>
                    <p className='register-input-field'>
                        <label htmlFor="desc" className="floatLabel formLabel">Description</label>
                        <input defaultValue={props.description}
                               className='input-type-text'
                               name="desc"
                               type="text"
                               onChange={({target}) => props.setDescription(target.value)} />
                    </p>
                    <p className='register-input-field'>
                        <label htmlFor="website" className="floatLabel formLabel">Website</label>
                        <input defaultValue={props.website}
                               className='input-type-text'
                               name="website"
                               type="text"
                               onChange={({target}) => props.setWebsite(target.value)} />
                    </p>
                    <p className='register-input-field'>
                        <label htmlFor="logo" className="floatLabel formLabel">Logo</label>
                        <input defaultValue={props.logo}
                               className='input-type-text'
                               name="logo"
                               type="text"
                               onChange={({target}) => props.setLogo(target.value)} />
                    </p>
                    <p className='register-input-field'>
                        <label htmlFor="image" className="floatLabel formLabel">Image</label>
                        <input defaultValue={props.image}
                               className='input-type-text'
                               name="image"
                               type="text"
                               onChange={({target}) => props.setImage(target.value)} />
                    </p>
                    <p className='register-input-field'>
                        <button className="button-submit" onClick={props.submitNewData}>Save</button>
                    </p>
                </div>

                <div>
                    <p className='register-input-field'>
                        <label htmlFor="name" className="floatLabel formLabel">City</label>
                        <input defaultValue={props.city}
                               className='input-type-text'
                               name="name"
                               type="text"
                               onChange={({target}) => props.setCity(target.value)} />
                    </p>
                    <p className='register-input-field'>
                        <label htmlFor="phone" className="floatLabel formLabel">Street</label>
                        <input defaultValue={props.street}
                               className='input-type-text'
                               name="phone"
                               type="text"
                               onChange={({target}) => props.setStreet(target.value)} />
                    </p>
                    <p className='register-input-field'>
                        <label htmlFor="desc" className="floatLabel formLabel">Number</label>
                        <input defaultValue={props.number}
                               className='input-type-text'
                               name="desc"
                               type="text"
                               onChange={({target}) => props.setNumber(target.value)} />
                    </p>
                    <p className='register-input-field'>
                        <label htmlFor="website" className="floatLabel formLabel">Zip code</label>
                        <input defaultValue={props.zipCode}
                               className='input-type-text'
                               name="website"
                               type="text"
                               onChange={({target}) => props.setZipCode(target.value)} />
                    </p>
                    <p className='register-input-field'>
                        <button className="button-submit" onClick={props.submitNewAdress}>Save</button>
                    </p>
                </div>

                <div>
                    <div className='time-input-field'>
                        <div className='day-time-label'>
                            <p className='day-label'>Monday</p>
                            <br />
                            <p className='register-input-field'>
                                <label htmlFor="logo" className="floatLabel formLabel">From</label>
                                <input defaultValue={props.logo}
                                       className='input-time'
                                       name="logo"
                                       type="text"
                                       onChange={({target}) => props.setLogo(target.value)} />
                            </p>
                            <p className='register-input-field'>
                                <label htmlFor="logo" className="floatLabel formLabel">To</label>
                                <input defaultValue={props.logo}
                                       className='input-time'
                                       name="logo"
                                       type="text"
                                       onChange={({target}) => props.setLogo(target.value)} />
                            </p>
                        </div>
                        <div className='day-time-label'>
                            <p>Tuesday</p>
                            <br />
                            <p className='register-input-field'>
                                <label htmlFor="logo" className="floatLabel formLabel">From</label>
                                <input defaultValue={props.logo}
                                       className='input-time'
                                       name="logo"
                                       type="text"
                                       onChange={({target}) => props.setLogo(target.value)} />
                            </p>
                            <p className='register-input-field'>
                                <label htmlFor="logo" className="floatLabel formLabel">To</label>
                                <input defaultValue={props.logo}
                                       className='input-time'
                                       name="logo"
                                       type="text"
                                       onChange={({target}) => props.setLogo(target.value)} />
                            </p>
                        </div>
                        <div className='day-time-label'>
                            <p>Wednesday</p>
                            <br />
                            <p className='register-input-field'>
                                <label htmlFor="logo" className="floatLabel formLabel">From</label>
                                <input defaultValue={props.logo}
                                       className='input-time'
                                       name="logo"
                                       type="text"
                                       onChange={({target}) => props.setLogo(target.value)} />
                            </p>
                            <p className='register-input-field'>
                                <label htmlFor="logo" className="floatLabel formLabel">To</label>
                                <input defaultValue={props.logo}
                                       className='input-time'
                                       name="logo"
                                       type="text"
                                       onChange={({target}) => props.setLogo(target.value)} />
                            </p>
                        </div>
                        <div className='day-time-label'>
                            <p>Thursday</p>
                            <br />
                            <p className='register-input-field'>
                                <label htmlFor="logo" className="floatLabel formLabel">From</label>
                                <input defaultValue={props.logo}
                                       className='input-time'
                                       name="logo"
                                       type="text"
                                       onChange={({target}) => props.setLogo(target.value)} />
                            </p>
                            <p className='register-input-field'>
                                <label htmlFor="logo" className="floatLabel formLabel">To</label>
                                <input defaultValue={props.logo}
                                       className='input-time'
                                       name="logo"
                                       type="text"
                                       onChange={({target}) => props.setLogo(target.value)} />
                            </p>
                        </div>
                        <div className='day-time-label'>
                            <p>Friday</p>
                            <br />
                            <p className='register-input-field'>
                                <label htmlFor="logo" className="floatLabel formLabel">From</label>
                                <input defaultValue={props.logo}
                                       className='input-time'
                                       name="logo"
                                       type="text"
                                       onChange={({target}) => props.setLogo(target.value)} />
                            </p>
                            <p className='register-input-field'>
                                <label htmlFor="logo" className="floatLabel formLabel">To</label>
                                <input defaultValue={props.logo}
                                       className='input-time'
                                       name="logo"
                                       type="text"
                                       onChange={({target}) => props.setLogo(target.value)} />
                            </p>
                        </div>
                        <div className='day-time-label'>
                            <p>Saturday</p>
                            <br />
                            <p className='register-input-field'>
                                <label htmlFor="logo" className="floatLabel formLabel">From</label>
                                <input defaultValue={props.logo}
                                       className='input-time'
                                       name="logo"
                                       type="text"
                                       onChange={({target}) => props.setLogo(target.value)} />
                            </p>
                            <p className='register-input-field'>
                                <label htmlFor="logo" className="floatLabel formLabel">To</label>
                                <input defaultValue={props.logo}
                                       className='input-time'
                                       name="logo"
                                       type="text"
                                       onChange={({target}) => props.setLogo(target.value)} />
                            </p>
                        </div>
                        <div className='day-time-label'>
                            <p>Sunday</p>
                            <br />
                            <p className='register-input-field'>
                                <label htmlFor="logo" className="floatLabel formLabel">From</label>
                                <input defaultValue={props.logo}
                                       className='input-time'
                                       name="logo"
                                       type="text"
                                       onChange={({target}) => props.setLogo(target.value)} />
                            </p>
                            <p className='register-input-field'>
                                <label htmlFor="logo" className="floatLabel formLabel">To</label>
                                <input defaultValue={props.logo}
                                       className='input-time'
                                       name="logo"
                                       type="text"
                                       onChange={({target}) => props.setLogo(target.value)} />
                            </p>
                        </div>
                    </div>
                    <button className="button-submit">Confirm</button>
                </div>

                <div>
                    <p className='register-input-field'>
                        <label htmlFor="email" className="floatLabel formLabel">Email</label>
                        <input defaultValue={props.email} disabled={true}
                               name="email"
                               type="email"
                               onChange={({target}) => props.setEmail(target.value)} />
                    </p>
                    <p className='register-input-field'>
                        <label htmlFor="password" className="floatLabel formLabel">Password</label>
                        <input defaultValue={props.password}
                               name="password"
                               type="password"
                               onChange={({target}) => props.setPassword(target.value)} />
                    </p>
                    <p className='register-input-field'>
                        <label htmlFor="newPassword" className="floatLabel formLabel">Confirm password</label>
                        <input defaultValue={props.newPassword}
                               name="newPassword"
                               type="password"
                               onChange={({target}) => props.setNewPassword(target.value)} />
                    </p>
                    <button className="button-submit" onClick={props.setNewPassword}>Confirm</button>
                </div>
            </form>
        </div>
    );
}