import React from 'react';
import { EmployeesCard } from "./EmployeesCard";

export const EmployeeList = ({employeesList = []}) => {

    return (
        <>
            {employeesList.map((data, index) => {
                    if (data) {
                        return (
                            <div key={index}>
                                <EmployeesCard
                                    employees={ data } />
                            </div>
                        );
                    }
                    return employeesList;
                })}
        </>
    );
};