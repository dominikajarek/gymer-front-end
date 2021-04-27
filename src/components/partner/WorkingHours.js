import React from "react";
import {useParams} from "react-router-dom";
import {useAxiosGet} from "../../commonActions/useAxiosGet";

export const WorkingHours = () => {

    const {id} = useParams();
    const url = `/api/partners/${id}/workinghours`;
    const hours = useAxiosGet(url);
    let content = null;

    if (hours.error) {
        content =
            <p>
                There was an error, please refresh page or try again later
            </p>
    }

    if (hours.isLoading) {
        content = 'Loading...'
    }

    if (hours.data) {
        return (
            content =
                <div>
                    <div className="working-name column-name">Working hours</div>
                    <div className="working-details">
                        <div className='working-hours'>
                            {hours.data._embedded.workingHourDTOList.map(hour =>
                                <div key={hour.id} className='p-days'>
                                    <p>{hour.day}</p>
                                    <p>{hour.startHour}</p>
                                    <p>{hour.endHour}</p>
                                </div>)}
                        </div>
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