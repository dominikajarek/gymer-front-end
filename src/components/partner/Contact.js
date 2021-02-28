import React from "react";
import { useParams } from "react-router-dom";
import { useAxiosGet } from "../../useAxiosGet";

export const Contact = () => {

    const { id } = useParams();
    const url = `/api/addresses/${id}`;
    const address = useAxiosGet(url);
    let content = null;

    if (address.error) {
        content =
            <p>
                There was an error, please refresh page or try again later
            </p>
    }

    if (address.isLoading) {
        content = 'Loading...'
    }

    if (address.data) {
        return (
            content =
                <div>
                    <p className='info-header'>Contact</p>
                    <div className='working-hours'>
                        <p>{address.data.city}</p>
                        <p>{address.data.street}{" "}{address.data.number}</p>
                    </div>
                </div>
        );
    }

    return (
        <div>
            {content}
        </div>
    );
}