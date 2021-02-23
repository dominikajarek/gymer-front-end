import React, {useEffect, useState} from 'react';
import axios from "axios";

import '../../styles/userSlots.css';

export const UserSlots = () => {

    const [slots, setSlots] = useState([]);

    let config = {
        headers: {
            'Authorization': localStorage.getItem('Authorization')
        }
    }

    const getActiveUser = () => {
        axios.get('/api/me', config)
            .then(response => {
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
                    const resultSlots = [];
                    response.data.get("_embedded").get("slotDTOList").forEach(slot => {
                        resultSlots.push(slot);
                    });
                    setSlots(resultSlots);
                }

            }).catch(reason => {
                if (reason.response != null) {
                    console.log(reason.response);
                }
            });
    }

    useEffect(() => {
        getActiveUser();
    }, []);

    const listOfSlots = slots.map(slot =>
        <div key={slot.id}>
            <h3>{slot.slotType}</h3>
            <p>{slot.description}</p>
            <span>Time: {slot.startTime} - {slot.endTime}</span>
            <span>Date: {slot.date}</span>
            <span>{slot.private}</span>
            <span>{slot.size}</span>
            <button>RESIGN</button>
        </div>
    );

    return (
        <div>
            <div>{listOfSlots}</div>
        </div>
    );
}