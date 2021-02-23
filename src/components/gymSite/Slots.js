import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const Slots = () => {
    const [slots, setSlots] = useState([]);

    useEffect(() => {
        axios.get('https://gymer-management-system.herokuapp.com/api/partners/1/slots')
            .then(response => {
               let result = response.data._embedded.slotDTOList;
               console.log(result);
               setSlots(result);
            });
    }, []);

    return (
        <div>

        </div>
    );
}