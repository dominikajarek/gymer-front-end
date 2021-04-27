import React from 'react';

export const UpdateEmployeeForm = (props) => {

    return (
        <div className="register" key={props.id}>
            <h3 className="text-justify-in-grid">{props.messageLabel}</h3>
            <form className='register-form'>
                <p className='register-input-field'>
                    <label htmlFor="name" className="floatLabel formLabel">First name</label>
                    <input name="name"
                           type="text"
                           className='input-type-text'
                           defaultValue={props.firstName}
                           onChange={({target}) => props.setFirstName(target.value)}
                    />
                </p>
                <p className='register-input-field'>
                    <label htmlFor="lastName" className="floatLabel formLabel">Last name</label>
                    <input name="lastName"
                           type="text"
                           className='input-type-text'
                           value={props.lastName}
                           onChange={({target}) => props.setLastName(target.value)}
                    />
                </p>
                <p className='register-input-field'>
                    <label htmlFor="description" className="floatLabel formLabel">Description</label>
                    <input name="description"
                           type="text"
                           className='input-type-text'
                           value={props.description}
                           onChange={({target}) => props.setDescription(target.value)}
                    />
                </p>
                <p className='register-input-field'>
                    <label htmlFor="image" className="floatLabel formLabel">Image</label>
                    <input name="image"
                           type="text"
                           className='input-type-text'
                           value={props.image}
                           onChange={({target}) => props.setImage(target.value)}
                    />
                </p>
                <p className='register-input-field'>
                    <button className="button-submit" onClick={() => props.onChange}>Save</button>
                </p>
            </form>
        </div>
    );
};