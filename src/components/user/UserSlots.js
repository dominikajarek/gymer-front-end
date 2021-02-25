import React, {useCallback, useEffect, useState} from 'react';
import {useHistory} from "react-router-dom";

import {Connection} from "../../Connection.js";

import '../../styles/user-details-site.css';

export const UserSlots = () => {

    const [user, setUserState] = useState([]);
    const [slots, setSlotsState] = useState([]);
    const [message, setMessageState] = useState('');

    /**
     * Section responsible for obtaining all necessary information.
     * Active user is obtained first, next slots list is obtained as well only if first request was valid.
     * All necessary information are stored in state variables.
     */

    useEffect(() => {
        const activeUserUrl = '/api/me';
        Connection.getRequestWithCallbacks(activeUserUrl, setActiveUserAndGetUserSlots, Connection.logMessageCallback);
    }, []);

    const setActiveUserAndGetUserSlots = data => {
        setUserState(data);

        const getSlotsUrl = '/api/users/' + data.id + '/slots';
        Connection.getRequestWithCallbacks(getSlotsUrl, setUserSlots, Connection.logMessageCallback);
    }

    const setUserSlots = data => {
        setSlotsState(data._embedded.slotDTOList);
    }

    /**
     * Section responsible for managing buttons showed on site.
     * First button is responsible for resigning from the slot.
     * Second button is responsible for redirecting to the connected partner site.
     */

    const history = useHistory();
    const handleRemoveSlot = useCallback(() => window.location.reload(), [history]);
    const handlePartnerRedirect = partnerId => {
        const gymUrl = '/gymsite/' + partnerId;
        history.push(gymUrl);
    }

    const resignPopup = (id) => {
        if (window.confirm('Do you want to resign from this slot?')) {
            resignRequest(id);
        } else {

        }
    }

    const resignRequest = slotId => {
        const body = {
            "userId": user.id,
            "slotId": slotId,
            "cancel": true
        }

        const removeSlotsUrl = '/api/slotuser/' + slotId + '/reservation/user';
        Connection.postRequestWithCallbacks(removeSlotsUrl, body, handleRemoveAndSetMessage, Connection.logMessageCallback);
    }

    const handleRemoveAndSetMessage = data => {
        setMessageState(data.message);
        handleRemoveSlot();
    }

    const goToPartner = slotUrl => {
        const path = slotUrl.split("/");
        const partnerId = path.length - 3;
        handlePartnerRedirect(path[partnerId]);
    }

    /**
     * Section where HTML skeleton is build up from obtained data.
     */

    const listOfSlots = slots.map(slot =>
        <div className="grid-container-user-slots" key={slot.id}>
            <div className="name padding-grid">{slot.slotType}</div>
            <div className="date padding-grid">
                <div className="day text-justify-in-grid">{slot.date}</div>
                <div className="time text-justify-in-grid">{slot.startTime} - {slot.endTime}</div>
            </div>
            <div className="description padding-grid">{slot.description}</div>
            <button className="resign button-on-slot padding-grid" onClick={() => resignPopup(slot.id)}>RESIGN</button>
            <button className="go-to-partner button-on-slot padding-grid"
                    onClick={() => goToPartner(slot._links.self.href)}>PARTNER
            </button>
            <div className="private padding-grid">{slot.private ? "private" : "public"}</div>
            <div className="size padding-grid">{slot.size === 1 ? "1 slot" : slot.size + " slots"}</div>
        </div>
    );

    return (<div className="content"><h2>{message}</h2>{listOfSlots}</div>);
}