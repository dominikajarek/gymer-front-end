import React, {useCallback, useEffect, useState} from 'react';
import axios from "axios";
import {useHistory} from "react-router-dom";

import '../../styles/user-details-site.css';

export const UserSlots = () => {

    const [user, setUser] = useState([]);
    const [slots, setSlots] = useState([]);
    const [message, setMessage] = useState('');

    const history = useHistory();
    const handleRemoveSlot = useCallback(() => window.location.reload(), [history]);
    const handlePartnerRedirect = partnerId => {
        const gymUrl = '/gymsite/' + partnerId;
        history.push(gymUrl);
    }

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
        <div className="grid-container-user-slots" key={slot.id}>
            <div className="name padding-grid">{slot.slotType}</div>
            <div className="date padding-grid">
                <div className="day text-justify-in-grid">{slot.date}</div>
                <div className="time text-justify-in-grid">{slot.startTime} - {slot.endTime}</div>
            </div>
            <div className="description padding-grid">{slot.description}</div>
            <button className="resign button-on-slot padding-grid" onClick={() => resignPopup(slot.id)}>RESIGN</button>
            <button className="go-to-partner button-on-slot padding-grid" onClick={() => goToPartner(slot._links.self.href)}>PARTNER</button>
            <div className="private padding-grid">{slot.private ? "private" : "public"}</div>
            <div className="size padding-grid">{slot.size === 1 ? "1 slot" : slot.size + " slots"}</div>
        </div>
    );

    const resignPopup = (id) => {
        if (window.confirm('Do you want to resign from this slot?')) {
            resignRequest(id);
        } else {

        }
    }

    const goToPartner = (slotUrl) => {
        const path = slotUrl.split("/");
        const partnerId = path.length - 3;
        handlePartnerRedirect(path[partnerId]);
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