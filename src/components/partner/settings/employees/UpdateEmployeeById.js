import React, {useCallback, useState} from 'react';
import {UpdateEmployeeForm} from "../../../forms/employees/UpdateEmployeeForm";
import {useHistory, useLocation} from "react-router-dom";
import axios from "axios";

export const UpdateEmployeeById = () => {
    const location = useLocation();

    const [message, setMessage] = useState('');
    const [id, setId] = useState(location.state?.employees.id);
    const [firstName, setFirstName] = useState(location.state?.employees.firstName);
    const [lastName, setLastName] = useState(location.state?.employees.lastName);
    const [image, setImage] = useState(location.state?.employees.image);
    const [description, setDescription] = useState(location.state?.employees.description);

    const history = useHistory();
    const handleChangingDetails = useCallback(() => window.location.reload(), [history]);

    const updatedEmployee = {
        id: id,
        description: description,
        firstName: firstName,
        image: image,
        lastName: lastName
    };

    const handleChangeEmployeesData = () => {
        axios.put(`/api/partners/${location.state.partnerId}/employees/${location.state.id}`, updatedEmployee)
            .then(response => {
                console.log(response)
                history.push(`employees/${location.state.id}`, {
                    employees: updatedEmployee,
                    id: location.state.id,
                    partnerId: location.state.partnerId
                })
                setFirstName(updatedEmployee.firstName);
                setLastName(updatedEmployee.lastName);
                setImage(updatedEmployee.image);
                setDescription(updatedEmployee.description);

                showSuccessMessage();
            })
    };

    //zamiast usuwac tu, dodaj usuwanie tak jak w slotach - przy kafelkach button

    const showSuccessMessage = () => {
        setMessage("Details updated successfully");
        setTimeout(handleChangingDetails, 300);
    };

    const submitChange = (e) => {
        e.preventDefault();
        switch (window.confirm("Do you really want to update data?")) {
            case true:
                handleChangeEmployeesData();
                break;
        }
    };

    return (
        <UpdateEmployeeForm
            id={id}
            firstName={firstName}
            lastName={lastName}
            image={image}
            description={description}
            message={message}
            setFirstName={setFirstName}
            setLastName={setLastName}
            setImage={setImage}
            setDescription={setDescription}
            onChange={submitChange}
        />
    );
};