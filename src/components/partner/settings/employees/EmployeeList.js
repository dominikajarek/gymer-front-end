import React from 'react';
import {EmployeesCard} from "./EmployeesCard";

export const EmployeeList = ({employeesList = [], partnerId, handleDelete, handleAdd}) => {
    return (
        <>
            {employeesList.map((data, index) => {
                if (data) {
                    return (
                        <EmployeesCard
                            key={index}
                            employees={data}
                            partnerId={partnerId}
                            handleDelete={handleDelete}
                        />
                    );
                }
                return employeesList;
            })}
        </>
    );
};