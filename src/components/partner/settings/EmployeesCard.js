import React from 'react';
import { Link } from 'react-router-dom';

import image from '../../../images/kitty.jpg';

export const EmployeesCard = (props) => {

    return (
        <div className="grid">
            <div className="grid__item">
                <div className="card">
                    <div className="card__content">
                        <img alt='img' src={image} />
                        <Link
                            className='gym-link'
                            to={{
                            pathname: `/employees/${props.employees.id}`,
                            state: {
                                employees: props.employees
                            } }}>
                            <h1 className="card__header">{props.employees.firstName}{" "}{props.employees.lastName}</h1>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}