import React from 'react';
import {TextField} from "@material-ui/core";

export const AddEmployeeForm = (props) => {
    return (
        <div className='add-employee-form'>
            <p className=''>
                <TextField
                    required
                    className='employee-name'
                    label="First name"
                    value={props.firstName}
                    onChange={({target}) => props.setFirstName(target.value)}
                />
            </p>
            <p className=''>
                <TextField
                    required
                    className='surname'
                    label="Last name"
                    value={props.lastName}
                    onChange={({target}) => props.setLastName(target.value)}
                />
            </p>
            <p className=''>
                <TextField
                    required
                    className='employee-description'
                    label="Description"
                    value={props.description}
                    onChange={({target}) => props.setDescription(target.value)}
                />
            </p>
            <p className=''>
                <TextField
                    required
                    className='image'
                    label="Image"
                    value={props.image}
                    onChange={({target}) => props.setImage(target.value)}
                />
            </p>
            <button type='submit' className="button-submit btn-sub" onClick={() => props.onClick} value='Submit'>
                Submit
            </button>
        </div>
    );
};