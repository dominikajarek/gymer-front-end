import React from 'react';

import {useAxiosGet} from "../useAxiosGet";
import { GymsCard } from "./GymsCard";

export const Gyms = () => {

    const url = '/api/partners';
    const gyms = useAxiosGet(url);
    let content = null;

    if (gyms.error) {
        content =
            <p>
                There was an error, please refresh page or try again later
            </p>
    }

    if (gyms.isLoading) {
        content = 'Loading...'
    }

    if (gyms.data) {
        return (
            content =
                gyms.data._embedded.partnerDTOList.map((gym, key) =>
                    <div key={ key } className='card-container'>
                        <GymsCard
                            gyms={ gym } />
                    </div>
                )
        );
    }

    return (
        <div>
            {content}
        </div>
    );
}