import React, {useCallback, useEffect, useState} from 'react';
import { useHistory } from "react-router-dom";
import { Connection } from "../../actions/Connection";

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
                    <div className='form-container'>
                        <p className='register-input-field'>
                            <label htmlFor="name" className="floatLabel formLabel">First name</label>
                            <input className='input-type-text'
                                   name="name"
                                   value={name}
                                   onChange={({target}) => setName(target.value)}
                            />
                        </p>
                        <p className='register-input-field'>
                            <label htmlFor="surname" className="floatLabel formLabel">Last name</label>
                            <input className='input-type-text'
                                   name="surname"
                                   value={surname}
                                   onChange={({target}) => setSurname(target.value)}
                            />
                        </p>
                        <p className='register-input-field'>
                            <label htmlFor="email" className="floatLabel formLabel">Email</label>
                            <input id="email"
                                   name="email"
                                   type="email"
                                   value={email}
                                   onChange={({target}) => setEmail(target.value)}
                            />
                        </p>
                        <p className='register-input-field'>
                            <label htmlFor="phone" className="floatLabel formLabel">Phone number</label>
                            <input className='input-type-text'
                                   name="phone"
                                   value={phoneNumber}
                                   onChange={({target}) => setPhoneNumber(target.value)}
                            />
                        </p>
                        <p className='register-input-field'>
                            <button className="button-submit-book" onClick={() => bookAsGuest(slotId)}>Book</button>
                        </p>
                    </div>
            }
        </div>
    );
}