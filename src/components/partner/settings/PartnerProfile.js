import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import { Connection } from "../../../actions/Connection";
import { EditPartnerProfileForm } from "../../forms/EditPartnerProfileForm";
import axios from "axios";

export const PartnerProfile = () => {

    const [details, setDetails] = useState([]);
    const [credentials, setCredentials] = useState([]);

    const [message, setMessage] = useState('');

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [partnerId, setPartnerId] = useState();

    const [name, setName] = useState('');
    const [logo, setLogo] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');
    const [website, setWebsite] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const [city, setCity] = useState('');
    const [street, setStreet] = useState('');
    const [number, setNumber] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [workingHours, setWorkingHours] = useState([{}]);
    const [startHour, setStartHour] = useState('');
    const [endHour, setEndHour] = useState('');

    const [partnerUrl, setPartnerUrl] = useState('');
    const [credentialsUrl, setCredentialsUrl] = useState('');
    const [addressUrl, setAddressUrl] = useState('');
    const [workingHoursUrl, setWorkingHoursUrl] = useState('');

    const history = useHistory();
    const handleChangingDetails = useCallback(() => window.location.reload(), [history]);

    const daysIds = workingHours.map(hour => hour.id);

    useEffect(() => {
        const getActiveUserUrl = '/api/me';
        Connection.getRequestWithCallbacks(getActiveUserUrl, setActiveUser, Connection.logMessageCallback);
    }, []);

    useEffect(() => {
        axios.get(addressUrl)
            .then(response => {
                setPartnerId(response.data.id);
                setCity(response.data.city);
                setStreet(response.data.street);
                setNumber(response.data.number);
                setZipCode(response.data.zipCode);
            })
    }, [credentials]);

    useEffect(() => {
        axios.get(workingHoursUrl)
            .then(response => {
                setWorkingHours(response.data._embedded.workingHourDTOList);
            })
    }, [credentials]);

    const setActiveUser = data => {
        const partnerUrl = `/api/partners/${data.id}`;
        const partnerAddressUrl = `/api/partners/${data.id}/addresses/${data.id}`;
        const hoursUrl = `/api/partners/${data.id}/workinghours`;
        setPartnerUrl(partnerUrl);
        setAddressUrl(partnerAddressUrl);
        setWorkingHoursUrl(hoursUrl);
        Connection.getRequestWithCallbacks(partnerUrl, setPartnerDetails, Connection.logMessageCallback);
    };

    const setPartnerDetails = data => {
        setDetails(data);
        setName(data.name);
        setDescription(data.description);
        setWebsite(data.website);
        setImage(data.image);
        setLogo(data.logo);

        const credentialsUrl = data._links.credential.href;
        setCredentialsUrl(credentialsUrl);

        Connection.getRequestWithCallbacks(credentialsUrl, setPartnerCredentials, Connection.logMessageCallback);
    };

    const setPartnerCredentials = data => {
        setEmail(data.email);
        setPhoneNumber(data.phoneNumber);
        setCredentials(data);
    };

    const submitNewData = (e) => {
        e.preventDefault();
        if (window.confirm("Do you really want to change your data?")) {
            handleSubmitNewData();
        }
    };

    const submitNewAddress = (e) => {
        e.preventDefault();
        if (window.confirm("Do you really want to change your address?")) {
            handleSubmitNewAddress();
        }
    };

    const submitNewPassword = (e) => {
        e.preventDefault();
        if (window.confirm("Do you really want to change your password?")) {
            handleSubmitNewPassword();
        }
    };

    const submitNewWorkingHours = (e) => {
      e.preventDefault();
      if (window.confirm("Do you really want to change working hours?")) {
        handleSubmitNewWorkingHours();
      }
    };

    const handleSubmitNewData = () => {
      const newPartnerData = {
        "id": details.id,
        "name": name,
        "description": description,
        "website": website,
        "logo": logo,
        "image": image
      };
      Connection.putRequestWithCallbacks(partnerUrl, newPartnerData, updateCredentials, Connection.logMessageCallback);
    };

    const handleSubmitNewAddress = () => {
        const newAddress = {
            "id": details.id,
            "city": city,
            "street": street,
            "number": number,
            "zipCode": zipCode
        };
        Connection.putRequestWithCallbacks(addressUrl, newAddress, updateCredentials, Connection.logMessageCallback);
    };

    const updateCredentials = () => {
      const newCredentials = {
          "id": credentials.id,
          "phoneNumber": phoneNumber
      };
      Connection.putRequestWithCallbacks(credentialsUrl, newCredentials, showSuccessMessage, Connection.logMessageCallback);
    };

    const handleSubmitNewPassword = () => {
      const newPasswordData = {
        "oldPassword": password,
        "newPassword": newPassword
      };
      const newPasswordUrl = `${partnerUrl}/password`;
      Connection.putRequestWithCallbacks(newPasswordUrl, newPasswordData, updatePassword, showErrorMessage);
    };

    const handleSubmitNewWorkingHours = () => {
      const newHours = {
        "startHour": startHour,
        "endHour": endHour
      };
      const newHoursUrl = `api/partners/${details.id}/workinghours/${daysIds[0]}`;
      Connection.putRequestWithCallbacks(newHoursUrl, newHours, showSuccessMessage, showErrorMessage);
    };

    const updatePassword = () => {
      setMessage("Password changed successfully");
    };

    const showErrorMessage = response => {
        setMessage(response.data.message);
    };

    const showSuccessMessage = () => {
        setMessage("Details updated successfully");
        setTimeout(handleChangingDetails, 300);
    };

    return (
        <div>
            <EditPartnerProfileForm
                name={name}
                image={image}
                logo={logo}
                description={description}
                website={website}
                phone={phoneNumber}
                email={email}
                password={password}
                newPassword={newPassword}
                message={message}
                city={city}
                street={street}
                number={number}
                zipCode={zipCode}
                workingHours={workingHours}
                setName={setName}
                setImage={setImage}
                setLogo={setLogo}
                setDescription={setDescription}
                setWebsite={setWebsite}
                setPhone={setPhoneNumber}
                setEmail={setEmail}
                setPassword={setPassword}
                setNewPassword={setNewPassword}
                setCity={setCity}
                setStreet={setStreet}
                setNumber={setNumber}
                setZipCode={setZipCode}
                setWorkingHours={setWorkingHours}
                submitNewData={submitNewData}
                submitNewPassword={submitNewPassword}
                submitNewAdress={submitNewAddress}
                submitNewWorkingHours={submitNewWorkingHours}
            />
        </div>
    );
}