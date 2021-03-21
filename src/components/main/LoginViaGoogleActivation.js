import React, { useCallback, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import axios from "axios";


export const LoginViaGoogleActivation = () => {

    const history = useHistory();
    const redirect = useCallback(() => {
            history.push('/');
            refreshPage();
    }, [history]);

    useEffect(() => {
        axios.get(`/api/google`)
            .then(response => {
                localStorage.setItem('Authorization', response.headers.authorization);
                localStorage.setItem('loggedIn', 'true');
                redirect();
            })
    }, []);

    const refreshPage = () => {
        window.location.reload();
    }

    return (
        <div> </div>
    );
}