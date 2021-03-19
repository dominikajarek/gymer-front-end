import React, {useCallback, useEffect} from 'react';
import axios from "axios";
import { useHistory } from "react-router-dom";

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