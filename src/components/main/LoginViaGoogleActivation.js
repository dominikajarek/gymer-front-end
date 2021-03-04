import React, {useCallback, useEffect} from 'react';
import axios from "axios";
import {useHistory} from "react-router-dom";

export const LoginViaGoogleActivation = () => {

    const history = useHistory();
    const redirect = useCallback(() => {
            history.push('/user-slots');
            refreshPage();
    }, [history]);

    useEffect(() => {
        axios.get(`/api/google`)
            .then(response => {
                localStorage.setItem('Authorization', response.headers.authorization);
            })
        redirect();
    }, []);

    const refreshPage = () => {
        window.location.reload();
    }

    return (
        <div>

        </div>
    );
}