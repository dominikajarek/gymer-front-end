import React, {useEffect, useState} from 'react';
import axios from "axios";

export const UserSlots = () => {

    const [user, setUser] = useState([]);
    const [slots, setSlots] = useState([]);
    let config = {
        headers: {
            'Authorization': localStorage.getItem('jwt')
        }
    }

    useEffect(() => {
        axios.get('api/me/user', config)
            .then(response => {
                setUser(response.data);
            }).catch(reason => {
            console.log(reason.response);
        });
    }, []);

    return (<div></div>
        // {users.map((user, index) => (
        //         <div className="flex-row">
        //             <div className="flex-column"></div>
        //             <div className="flex-column"></div>
        //             <div className="flex-column"></div>
        //             <div className="flex-column"></div>
        //             <div className="flex-column"></div>
        //             <div className="flex-column"></div>
        //         </div>
        //     ))}
    );
}