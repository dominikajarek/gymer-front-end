import React from 'react';
import {AddEmployeeForm} from "../../../forms/employees/AddEmployeeForm";

export const AddNewEmployee = (props) => {
    return (
        <AddEmployeeForm
            firstName={props.firstName}
            setFirstName={props.setFirstName}
            lastName={props.lastName}
            setLastName={props.setLastName}
            image={props.image}
            setImage={props.setImage}
            description={props.description}
            setDescription={props.setDescription}
            onClick={props.handleAdd}
        />
    );
};