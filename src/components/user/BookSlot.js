import React, {useCallback, useEffect, useState} from 'react';
import { useHistory } from "react-router-dom";
import { Connection } from "../../actions/Connection";
import { GuestBookForm } from "../forms/GuestBookForm";

export const BookSlot = (props) => {

    const slotId = props.slotId;

    const [user, setUser] = useState();
    const [message, setMessage] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

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
        Connection.postRequestWithCallbacks(bookAsGuestUrl, guestBody, handleBookSlot, Connection.logMessageCallback);
    };

    const bookAsUser = (slotId) => {
        const userBody = {
            "userId": user.id,
            "slotId": slotId,
            "cancel": false
        };
        const bookAsUserUrl = `/api/slotuser/${slotId}/reservation/user`;
        Connection.postRequestWithCallbacks(bookAsUserUrl, userBody, handleBookSlot, Connection.logMessageCallback);
    }

    const handleBookSlot = data => {
        setMessage(data.message);
        bookCallback();
    };

    return (
        <div className="register">
            {
                isLoggedIn ?
                    <div className='modal-user-button'>
                        <button className="button-submit-book" onClick={() => bookAsUser(slotId)}>Book</button>
                    </div>
                    :
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
            }
        </div>
    );
}