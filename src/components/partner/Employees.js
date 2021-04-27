import React from 'react';
import {useParams} from 'react-router-dom';
import {useAxiosGet} from "../../commonActions/useAxiosGet";

import image from '../../images/kitty.jpg';

export const Employees = () => {

    const {id} = useParams();
    const url = `/api/partners/${id}/employees`;
    const employees = useAxiosGet(url);
    let content = null;

    if (employees.error) {
        content =
            <p>
                There was an error, please refresh page or try again later
            </p>
    }

    if (employees.isLoading) {
        content = 'Loading...'
    }

    if (employees.data) {
        return (
            content =
                <div className='employee-container'>
                    <div className="title">Our team</div>
                    <div className='name-photo-container'>
                        {employees.data._embedded.employeeDTOList.map(employee =>
                            <div key={employee.id}>
                                <p className='employee-name'>{employee.firstName}{" "}{employee.lastName}</p>
                                <img alt='photo' src={image} className='gym-image1'/>
                            </div>)}
                    </div>
                </div>
        );
    }

    return (
        <div>
            {content}
        </div>
    );
}