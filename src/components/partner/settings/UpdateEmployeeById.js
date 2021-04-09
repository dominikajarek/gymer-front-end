import React from 'react';
import { EditEmployeeForm } from "../../forms/EditEmployeeForm";
import { useLocation } from "react-router-dom";

export const UpdateEmployeeById = () => {
      const location = useLocation();

      return (
          <EditEmployeeForm
              id={location.state?.employees.id}
              firstName={location.state?.employees.firstName}
              lastName={location.state?.employees.lastName}
              image={location.state?.employees.image}
              description={location.state?.employees.description}
          />
      );
};