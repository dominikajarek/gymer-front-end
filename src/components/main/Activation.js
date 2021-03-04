import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import axios from "axios";

export const Activation = () => {
    const [message, setMessage] = useState('');
    const { search } = useLocation();
    const { code } = queryString.parse(search);

    useEffect(() => {
        axios.get(`/api/verify?code=${code}`)
            .then(response => {
                setMessage(response.data.message);
                console.log(response.data.message)
            })
    }, []);

    return (
        <div>
            <h3>{message}</h3>
        </div>
    );
}