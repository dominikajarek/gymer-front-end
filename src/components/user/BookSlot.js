import React, { useCallback, useEffect, useState } from 'react';
import axios from "axios";

import { useHistory } from "react-router-dom";
import { Connection } from "../../actions/Connection";
import { GuestBookForm } from "../forms/GuestBookForm";
import { SlotInfo } from "../partner/SlotInfo";

export const BookSlot = (props) => {

    const slotId = props.slotId;

    const [user, setUser] = useState();
    const [message, setMessage] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const [slotData, setSlotData] = useState({});
    const [employee, setEmployee] = useState({});

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    useEffect(() => {
        const activeUserUrl = '/api/me';
        Connection.getRequestWithCallbacks(activeUserUrl, setActiveUser, Connection.logMessageCallback);
        localStorage.getItem('Authorization') ? setIsLoggedIn(true) : setIsLoggedIn(false);
    }, []);

    useEffect(() => {
        axios.get(`/api/partners/${props.partnerId}/slots/${slotId}`)
            .then(response => {
                setSlotData({
                    title: response.data.description,
                    description: response.data.slotType,
                    date: response.data.date,
                    startTime: response.data.startTime,
                    endTime: response.data.endTime,
                });
                const employeeId = response.data._links.employee.href.split("/")[7];
                axios.get(`/api/partners/${props.partnerId}/employees/${employeeId}`)
                    .then(response1 => {
                        setEmployee({
                            name: response1.data.firstName,
                            lastName: response1.data.lastName
                        });
                    })
            })
    }, []);

    const setActiveUser = data => {
        localStorage.getItem('Authorization') ? setUser(data) : setUser(null);
    };

    const showMessage = data => {
        setMessage(data.data.message);
    }

    const bookAsGuest = (slotId) => {
        const guestBody = {
            "cancel": false,
            "email": email,
            "firstName": name,
            "lastName": surname,
            "phoneNumber": phoneNumber,
            "slotId": slotId
        };
        const bookAsGuestUrl = `/api/slotuser/${slotId}/reservation/guest`;
        Connection.postRequestWithCallbacks(bookAsGuestUrl, guestBody, handleBookSlot, showMessage);
    };

    const bookAsUser = (slotId) => {
        const userBody = {
            "userId": user.id,
            "slotId": slotId,
            "cancel": false
        };
        const bookAsUserUrl = `/api/slotuser/${slotId}/reservation/user`;
        Connection.postRequestWithCallbacks(bookAsUserUrl, userBody, handleBookSlot, showMessage);
    }

    const handleBookSlot = data => {
        setMessage(data.message);
        setTimeout(props.closeModal, 1000);
    }

    return (
        <div className="booking-modal">
            {
                isLoggedIn ?
                    <div className='modal-user-button'>
                        <SlotInfo
                            data={slotData}
                            employee={employee}
                            message={message}
                        />
                        <button className="button-submit-book" onClick={() => bookAsUser(slotId)}>Book</button>
                    </div>
                    :
                    <div>
                        <SlotInfo
                            data={slotData}
                            employee={employee}
                            message={message}
                        />
                        <GuestBookForm
                            name={name}
                            surname={surname}
                            email={email}
                            phoneNumber={phoneNumber}
                            setName={setName}
                            setSurname={setSurname}
                            setEmail={setEmail}
                            setPhoneNumber={setPhoneNumber}
                            bookAsGuest={bookAsGuest}
                            slotId={slotId}
                        />
                    </div>
            }
        </div>
    );
}