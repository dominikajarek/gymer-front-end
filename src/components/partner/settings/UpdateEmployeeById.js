import React, {useEffect, useState} from 'react';
import { EditEmployeeForm } from "../../forms/EditEmployeeForm";
import {useHistory, useLocation} from "react-router-dom";
import axios from "axios";

export const UpdateEmployeeById = () => {
      const location = useLocation();
      const history = useHistory();
      console.log(location)
      const [firstName, setFirstName] = useState(location.state?.employees.firstName);
      const [lastName, setLastName] = useState(location.state?.employees.lastName);
      const [image, setImage] = useState(location.state?.employees.image);
      const [description, setDescription] = useState(location.state?.employees.description);

      const submitChange = (e) => {
            e.preventDefault();
            if (window.confirm("Do you really want to update data?")) {
                handleChangeEmployeesData();
            }
      };

      const updatedEmployee = {
          description: "description",
          firstName: "firstName",
          image: "image",
          lastName: "lastName"
      };

      const handleChangeEmployeesData = () => {
          axios.put(`/api/partners/${location.state.partnerId}/employees/${location.state.id}`, updatedEmployee)
              .then(response => {
                  console.log(response);
                  // history.replaceState(updatedEmployee, '', `/employees/${location.state.id}`);
              })
      };
        // useEffect(() => {
        //     axios.get(`/api/partners/${location.state.partnerId}/employees/${location.state.id}`)
        //         .then(response => {
        //             console.log(response);
        //             console.log(updatedEmployee)
        //             // history.replaceState(updatedEmployee, '', `/employees/${location.state.id}`);
        //         })
        // }, []);

      return (
          <EditEmployeeForm
              id={location.state?.employees.id}
              firstName={firstName}
              lastName={lastName}
              image={image}
              description={description}
              setFirstName={setFirstName}
              setLastName={setLastName}
              setImage={setImage}
              setDescription={setDescription}
              onChange={submitChange}
          />
      );
};