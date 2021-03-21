import React from 'react';
import { Connection } from "./Connection";

export class Common {

    static refreshPage = () => {
        window.location.reload();
    }

    static logout = () => {
        const logoutUrl = "/api/logout";
        Connection.getRequestWithCallbacks(logoutUrl, Common.validLogout, Connection.logMessageCallback);
        localStorage.clear();
    };

    static validLogout = () => {
        Common.refreshPage();
    }
}