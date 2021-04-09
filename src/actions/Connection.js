import axios from "axios";

const config = {
    headers: {
        'Authorization': localStorage.getItem('Authorization')
    }
}

export class Connection {

    static logMessageCallback = data => {
        console.log(data);
    }

    static getRequestWithCallbacks = (url, callback, errorCallback) => {
        axios.get(url, config)
        .then(response => {
            if (response == null) return;
            callback(response.data);
        }).catch(reason => {
            if (reason == null) return;
            errorCallback(reason.response);
        })
    }

    static postRequestWithCallbacks = (url, body, callback, errorCallback) => {
        axios.post(url, body, config)
        .then(response => {
            if (response == null) return;
            callback(response.data);
        }).catch(reason => {
            if (reason == null) return;
            errorCallback(reason.response);
        })
    }

    static putRequestWithCallbacks = (url, body, callback, errorCallback) => {
        axios.put(url, body, config)
            .then(response => {
                if (response == null) return;
                callback(response.data);
            }).catch(reason => {
            if (reason == null) return;
            errorCallback(reason.response);
        })
    }

    static deleteRequestWithCallbacks = (url, callback, errorCallback) => {
        axios.delete(url)
            .then(response => {
                console.log(response);
            })
    }

}
