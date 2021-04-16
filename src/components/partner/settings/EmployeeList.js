import React from 'react';
import { EmployeesCard } from "./EmployeesCard";

export const EmployeeList = ({employeesList = [], partnerId}) => {

    return (
        <>
            {employeesList.map((data, index) => {
                    if (data) {
                        return (
                            <div key={index}>
                                <EmployeesCard
                                    employees={data}
                                    partnerId={partnerId}
                                />
                            </div>
                        );
                    }
                    return employeesList;
                })}
        </>
    );
};