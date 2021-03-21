import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import { Connection } from "../../../actions/Connection";
import { EditPartnerProfileForm } from "../../forms/EditPartnerProfileForm";

export const PartnerProfile = () => {

    const [details, setDetails] = useState([]);
    const [credentials, setCredentials] = useState([]);

    const [message, setMessage] = useState('');

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const [name, setName] = useState('');
    const [logo, setLogo] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');
    const [website, setWebsite] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const [partnerUrl, setPartnerUrl] = useState('');
    const [credentialsUrl, setCredentialsUrl] = useState('');

    const history = useHistory();
    const handleChangingDetails = useCallback(() => window.location.reload(), [history]);

    useEffect(() => {
        const getActiveUserUrl = '/api/me';
        Connection.getRequestWithCallbacks(getActiveUserUrl, setActiveUser, Connection.logMessageCallback);
    }, []);

    const setActiveUser = data => {
        const partnerUrl = `/api/partners/${data.id}`;
        setPartnerUrl(partnerUrl);
        Connection.getRequestWithCallbacks(partnerUrl, setUserDetails, Connection.logMessageCallback);
    };

    const setUserDetails = data => {
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

    const updateCredentials = () => {
      const newCredentials = {
          "id": credentials.id,
          "phoneNumber": phoneNumber
      };
      Connection.putRequestWithCallbacks(credentialsUrl, newCredentials, showSuccessMessage, Connection.logMessageCallback);
    };

    const submitNewPassword = (e) => {
         e.preventDefault();
         if (window.confirm("Do you really want to change your password?")) {
             handleSubmitNewPassword();
         }
    };

    const handleSubmitNewPassword = () => {
      const newPasswordData = {
        "oldPassword": password,
        "newPassword": newPassword
      };
      const newPasswordUrl = `${partnerUrl}/password`;
      Connection.putRequestWithCallbacks(newPasswordUrl, newPasswordData, updatePassword, showErrorMessage);
    };

    const updatePassword = () => {
      setMessage("Password changed successfully");
    };

    const showErrorMessage = response => {
        setMessage(response.data.message);
    }

    const showSuccessMessage = () => {
        setMessage("Details updated successfully");
        setTimeout(handleChangingDetails, 300);
    }

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
                setName={setName}
                setImage={setImage}
                setLogo={setLogo}
                setDescription={setDescription}
                setWebsite={setWebsite}
                setPhone={setPhoneNumber}
                setEmail={setEmail}
                setPassword={setPassword}
                setNewPassword={setNewPassword}
                submitNewData={submitNewData}
                submitNewPassword={submitNewPassword}
            />
        </div>
    );
}