import React from 'react';
import { useLocation } from "react-router-dom";
import { AddEmployeeForm } from "../../forms/AddEmployeeForm";

export const Add = () => {
    const location = useLocation();
    console.log(location)

    return (
        <AddEmployeeForm
            id={location.state?.employees.id}
            firstName={location.state?.employees.firstName}
            lastName={location.state?.employees.lastName}
            image={location.state?.employees.image}
            description={location.state?.employees.description}
            onClick={location.state?.handleAdd}
        />
    );
};