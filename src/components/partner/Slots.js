import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export const Slots = () => {
    const [slots, setSlots] = useState([]);

    //useParams takes info from path
    const { id } = useParams();

    useEffect(() => {
        axios.get(`/api/partners/${id}/slots`)
            .then(response => {
                const result = response.data;
                setSlots(result);
                console.log(result._embedded.slotDTOList.map(slot => slot.description));
            })
    }, []);

    return (
        <div>

        </div>
    );
}