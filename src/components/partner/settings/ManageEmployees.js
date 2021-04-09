import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { EmployeeList } from "./EmployeeList";
import axios from 'axios';

import image from '../../../images/kitty.jpg';

export const ManageEmployees = () => {
    const [employeesList, setEmployeesList] = useState();
    const [partnerId, setPartnerId] = useState();
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

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

    const handleAddEmployee = (e) => {
        e.preventDefault();
        axios.post(`/api/partners/${partnerId}/employees`, {data:  {
                description: "Hello",
                firstName: "John",
                image: "image",
                lastName: "Doe"
            }})
            .then(
                response => {
                    console.log(response);
                })
    };

    return (
        <div>
            <div className='search-grids'>
                <EmployeeList
                    employeesList={employeesList} />
            </div>
            <Link
                className='gym-link'
                to={{
                    pathname: '/add-employee',
                    state: {
                        employees: employeesList,
                        handleAdd: handleAddEmployee
                    } }}>
                New employee
            </Link>
        </div>
    );
};