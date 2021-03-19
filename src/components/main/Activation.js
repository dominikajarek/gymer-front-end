import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import axios from "axios";
import '../../styles/user-details-site.css';

export const Activation = () => {
    const [message, setMessage] = useState('');
    const { search } = useLocation();
    const { code } = queryString.parse(search);

    useEffect(() => {
        axios.get(`/api/verify?code=${code}`)
            .then(response => {
                setMessage(response.data.message);
            }).catch(error => {
            setMessage(error.response.data.message);
        })
    }, []);

    return (
        <div className="info-container">
            <h3 className="info">{message}</h3>
        </div>
    );
}