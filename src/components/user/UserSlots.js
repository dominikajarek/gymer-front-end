import React, {useCallback, useEffect, useState} from 'react';
import axios from "axios";

import '../../index.css';
import '../../styles/userSlots.css';
import {useHistory} from "react-router-dom";

export const UserSlots = () => {

    const [user, setUser] = useState([]);
    const [slots, setSlots] = useState([]);
    const [message, setMessage] = useState('');

    const history = useHistory();
    const handleRemoveSlot = useCallback(() => window.location.reload(), [history]);

    let config = {
        headers: {
            'Authorization': localStorage.getItem('Authorization')
        }
    }

    useEffect(() => {
        getActiveUser();
    }, []);

    const getActiveUser = () => {
        axios.get('/api/me', config)
            .then(response => {
                setUser(response.data);
                getActiveUsersSlots(response.data.id);
            }).catch(reason => {
            console.log(reason.response);
        });
    }

    const getActiveUsersSlots = (id) => {
        const getSlotsUrl = '/api/users/' + id + '/slots';
        axios.get(getSlotsUrl, config)
            .then(response => {
                if (response.data != null) {
                    setSlots(response.data._embedded.slotDTOList);
                }

            }).catch(reason => {
            if (reason.response != null) {
                console.log(reason.response);
            }
        });
    }

    const listOfSlots = slots.map(slot =>
        <div className="table" key={slot.id}>
            <div className="row">
                <div className="value">{slot.slotType}</div>
                <div className="value">Time: {slot.startTime} - {slot.endTime}</div>
                <div className="value">Date: {slot.date}</div>
            </div>
            <div className="row">
                <div className="value">{slot.description}</div>
                <div className="value">Is private: {slot.private}</div>
                <div className="value">Size: {slot.size}</div>
            </div>
            <button className="row" onClick={() => resignPopup(slot.id)}>RESIGN</button>
        </div>
    );

    const resignPopup = (id) => {
        if (window.confirm('Really go to another page?')) {
            resignRequest(id);
        } else {

        }
    }

    const resignRequest = (slotId) => {
        const body = {
            "userId": user.id,
            "slotId": slotId,
            "cancel": true
        }
        const removeSlotsUrl = '/api/slotuser/' + slotId + '/reservation/user';
        axios.post(removeSlotsUrl, body, config)
            .then(response => {
                if (response.data.error === false) {
                    setMessage(response.data.message);
                    handleRemoveSlot();
                }
            }).catch(reason => {
            console.log(reason.response);
        });
    }

    return (<div className="content"><h2>{message}</h2>{listOfSlots}</div>);
}