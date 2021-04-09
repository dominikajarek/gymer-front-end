import React from 'react';

export const AddEmployeeForm = (props) => {
    return (
        <form className='register-form'>
            <div>
                <p className='register-input-field'>
                    <label htmlFor="name" className="floatLabel formLabel">First name</label>
                    <input defaultValue={props.firstName}
                           className='input-type-text'
                           name="name"
                           type="text"
                        // onChange={e => {
                        //     const val = e.target.value;
                        //     props.setEmployee(prevState => {
                        //         return { ...prevState, firstName: val }
                        //     });
                        // }}
                    />
                </p>
                <p className='register-input-field'>
                    <label htmlFor="phone" className="floatLabel formLabel">Last name</label>
                    <input defaultValue={props.lastName}
                           className='input-type-text'
                           name="phone"
                           type="text"
                    />
                </p>
                <p className='register-input-field'>
                    <label htmlFor="desc" className="floatLabel formLabel">Description</label>
                    <input defaultValue={props.description}
                           className='input-type-text'
                           name="desc"
                           type="text"
                    />
                </p>
                <p className='register-input-field'>
                    <label htmlFor="image" className="floatLabel formLabel">Image</label>
                    <input defaultValue={props.image}
                           className='input-type-text'
                           name="image"
                           type="text"
                    />
                </p>
                <p className='register-input-field'>
                    <button className="button-submit" onClick={props.onClick}>Save</button>
                </p>
            </div>
        </form>
    );
};