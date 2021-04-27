import React, {useState, useEffect, useCallback} from 'react';
import {EmployeeList} from "./EmployeeList";
import {Modal} from "react-responsive-modal";
import axios from 'axios';

import imagekitty from '../../../../images/kitty.jpg';
import {AddNewEmployee} from "./AddNewEmployee";

export const ManageEmployees = () => {
    const [employeesList, setEmployeesList] = useState([]);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [partnerId, setPartnerId] = useState();
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState('');
    const handleRemoveEmployee = useCallback(() => window.location.reload(), []);

    useEffect(() => {
        axios.get('/api/me')
            .then(response => {
                setPartnerId(response.data.id);
                axios.get(`/api/partners/${response.data.id}/employees`)
                    .then(response => {
                        setEmployeesList(response.data._embedded.employeeDTOList);
                    })
            })
    }, []);

    const newEmployee = {
        firstName: firstName,
        lastName: lastName,
        description: description,
        image: image
    };

    const handleAddEmployee = () => {
        axios.post(`/api/partners/${partnerId}/employees`, newEmployee)
            .then(
                response => {
                    console.log(response);
                })
    };

    const deleteEmployee = (id) => {
        if (window.confirm('Do you want to delete employee')) {
            const deleteEmployeeUrl = `/api/partners/${partnerId}/employees/${id}`
            axios.delete(deleteEmployeeUrl, {
                data: employeesList[id]
            })
                .then(() => {
                    setMessage("Successfully delete employee");
                    handleRemoveEmployee();
                })
        }
    };

    return (
        <div>
            <button className='button-on-slot' onClick={() => setOpen(true)}>Add new employee</button>

            <Modal open={open} center onClose={() => setOpen(false)}>
                <AddNewEmployee
                    partnerId={partnerId}
                    handleAdd={handleAddEmployee}
                    firstName={firstName}
                    setFirstName={setFirstName}
                    lastName={lastName}
                    setLastName={setLastName}
                    description={description}
                    setDescription={setDescription}
                    image={imagekitty}
                    setImage={setImage}
                />
            </Modal>
            <div className='search-grids'>
                <EmployeeList
                    employeesList={employeesList}
                    partnerId={partnerId}
                    handleDelete={deleteEmployee}
                />
            </div>
        </div>
    );
};