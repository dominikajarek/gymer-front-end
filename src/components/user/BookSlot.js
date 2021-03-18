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

    const history = useHistory();
    const bookCallback = useCallback(() => history.push(`/booked`), [history]);

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
        Connection.postRequestWithCallbacks(bookAsGuestUrl, guestBody, handleBookSlot, handleBookMessage);
    };

    const bookAsUser = (slotId) => {
        const userBody = {
            "userId": user.id,
            "slotId": slotId,
            "cancel": false
        };
        const bookAsUserUrl = `/api/slotuser/${slotId}/reservation/user`;
        Connection.postRequestWithCallbacks(bookAsUserUrl, userBody, handleBookSlot, handleBookMessage);
    }

    const handleBookSlot = data => {
        setMessage(data.message);
        bookCallback();
    };

    const handleBookMessage = data => {
        setMessage(data.data.message);
    }

    return (
        <div className="register">
            {
                isLoggedIn ?
                    <div className='modal-user-button'>
                        <SlotInfo
                            data={slotData}
                            employee={employee}
                        />
                        <div className='message-slot'>{message}</div>
                        <button className="button-submit-book" onClick={() => bookAsUser(slotId)}>Book</button>
                    </div>
                    :
                    <div>
                        <SlotInfo
                            data={slotData}
                            employee={employee}
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
                            message={message}
                        />
                    </div>
            }
        </div>
    );
}