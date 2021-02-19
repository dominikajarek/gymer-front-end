import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import Navigation from "./Navigation";

import '../../styles/calendar.css';
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

function Calendars() {

    const [events, setEvents] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

    const togglePop = () => {
        setIsOpen(!isOpen);
    }

    useEffect(() => {
        setEvents([
            {
                title: 'swimming classes - John',
                start: new Date(2021, 1, 18, 9),
                end: new Date(2021, 1, 18, 10),
            },
            {
                title: 'swimming classes - John',
                start: new Date(2021, 1, 18, 11),
                end: new Date(2021, 1, 18, 12),
            },
            {
                title: 'fitness classes - Jane',
                start: new Date(2021, 1, 18, 16),
                end: new Date(2021, 1, 18, 17),
            },
            {
                title: 'swimming classes - John',
                start: new Date(2021, 1, 19, 9),
                end: new Date(2021, 1, 19, 10),
            },
            {
                title: 'fitness classes - Jane',
                start: new Date(2021, 1, 19, 14),
                end: new Date(2021, 1, 19, 16),
            },

        ])
    }, []);

    const style = {
        height: "80em",
        marginTop: "6em",
        marginLeft: "2em",
        marginRight: "2em"
    }

    return (
        <div className="calendar">
            <Calendar
                popup
                selectable
                localizer={ localizer }
                defaultDate={ new Date() }
                defaultView="week"
                events={ events }
                toolbar={ true }
                min={ moment('9:00am', 'h:mma').toDate() }
                max={ moment('18:00pm', 'h:mma').toDate() }
                views={{
                    month: true,
                    week: true
                }}
                style={ style }
            />
        </div>
    );
}

export default Calendars;