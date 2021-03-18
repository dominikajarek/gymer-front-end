import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import axios from "axios";

import { Navigation } from "./Navigation";
import { BookSlot } from "../user/BookSlot";
import { Modal } from "react-responsive-modal";

import '../../styles/calendar.css';
import '../../styles/book-form.css';
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

export const Calendars = () => {

    const [events, setEvents] = useState([]);
    const [open, setOpen] = useState(false);
    const [slotId, setSlotId] = useState();

    const { id } = useParams();
    const url = `/api/partners/${id}/slots`;

    useEffect(() => {
        axios.get(url)
            .then(response => {
                setEvents(response.data._embedded.slotDTOList);
            })
    }, []);
    const slots = events.map((slot) => {
        return {
            id: slot.id,
            title: slot.description,
            start: new Date(slot.date.split("-")[0], slot.date.split("-")[1], slot.date.split("-")[2],
                slot.startTime.split(":")[0], slot.startTime.split(":")[1], slot.startTime.split(":")[2]),
            end: new Date(slot.date.split("-")[0], slot.date.split("-")[1], slot.date.split("-")[2],
                slot.endTime.split(":")[0], slot.endTime.split(":")[1], slot.endTime.split(":")[2]),
            desc: slot.slotType,
            allDay: false,
            employee: slot._links.employee.href
        }
    });

    const onEventClick = () => {
        setOpen(true);
    }

    return (
        <div>
         <div className="calendar">
             <Navigation id={ id } className='calendar-nav' />
             <Calendar
                className='calendar-style'
                onSelectEvent={event => {
                    onEventClick(event);
                    setSlotId(event.id);
                }}
                selectable
                localizer={ localizer }
                defaultDate={ new Date() }
                defaultView="week"
                events={ slots }
                toolbar={ true }
                min={ moment('6:00am', 'h:mma').toDate() }
                max={ moment('20:00pm', 'h:mma').toDate() }
                views={{
                    day: true,
                    week: true
                }}
            />
            <Modal open={open} onClose={() => setOpen(false)} center>
                <BookSlot
                    events={slots}
                    slotId={slotId}
                    partnerId={id}
                />
            </Modal>
        </div>
    </div>
    );
}