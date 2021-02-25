import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import axios from 'axios';

import { BookForm } from "../forms/BookForm";
import { Slots } from './Slots';
import { Modal } from "react-responsive-modal";

import '../../styles/calendar.css';
import "react-big-calendar/lib/css/react-big-calendar.css";
import {Navigation} from "./Navigation";

const localizer = momentLocalizer(moment);

export const Calendars = () => {

    const [events, setEvents] = useState([]);
    const [open, setOpen] = useState(false);
    const [data, setData] = useState();

    const { id } = useParams();

    useEffect(() => {
        setEvents([
            {
                title: 'swimming classes - John',
                start: new Date(2021, 1, 22, 9),
                end: new Date(2021, 1, 22, 10),
            },
            {
                title: 'swimming classes - John',
                start: new Date(2021, 1, 23, 11),
                end: new Date(2021, 1, 23, 12),
            },
            {
                title: 'fitness classes - Jane',
                start: new Date(2021, 1, 24, 16),
                end: new Date(2021, 1, 24, 17),
            },
            {
                title: 'swimming classes - John',
                start: new Date(2021, 1, 24, 9),
                end: new Date(2021, 1, 24, 10),
            },
            {
                title: 'fitness classes - Jane',
                start: new Date(2021, 1, 25, 14),
                end: new Date(2021, 1, 25, 16),
            },
        ])
    }, []);

    const style = {
        height: "80em",
        marginTop: "6em",
        marginLeft: "2em",
        marginRight: "2em"
    }

    function Event({ event }) {
        return (
                <span>
                  <strong>
                  {event.title}
                  </strong>
                            { event.desc && (':  ' + event.desc)}
                </span>
        );
    }

    function EventAgenda({ event }) {
        return (
                <span>
                <em style={{ color: 'magenta'}}>{event.title}</em>
                <p>{ event.desc }</p>
                </span>
        );
    }

    function onEventClick() {
        setOpen(true);
    }

    return (
        <div className="calendar">
            <Navigation id={id} className='calendar-nav' />
            <Calendar
                onSelectEvent={event => onEventClick(event)}
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
                components={{
                    event: Event,
                    agenda: {
                        event: EventAgenda
                    }
                }}
            />
            <Modal open={open} onClose={() => setOpen(false)} center>
                <BookForm />
            </Modal>
            <Slots />
        </div>
    );
}