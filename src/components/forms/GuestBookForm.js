import React from 'react';

export const GuestBookForm = (props) => {

    return (
        <div className='form-container'>
            <p className='register-input-field'>
                <label htmlFor="name" className="floatLabel formLabel">First name</label>
                <input className='input-type-text'
                       name="name"
                       value={props.name}
                       onChange={({target}) => props.setName(target.value)}
                />
            </p>
            <p className='register-input-field'>
                <label htmlFor="surname" className="floatLabel formLabel">Last name</label>
                <input className='input-type-text'
                       name="surname"
                       value={props.surname}
                       onChange={({target}) => props.setSurname(target.value)}
                />
            </p>
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
                <label htmlFor="phone" className="floatLabel formLabel">Phone number</label>
                <input className='input-type-text'
                       name="phone"
                       value={props.phoneNumber}
                       onChange={({target}) => props.setPhoneNumber(target.value)}
                />
            </p>
            <button className="button-submit-book-as-guest" onClick={() => props.bookAsGuest(props.slotId)}>Book</button>
        </div>
    );
}