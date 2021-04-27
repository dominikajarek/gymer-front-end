import React from 'react';
import {Link} from 'react-router-dom';

export const DisplayPartnerSlots = (props) => {
    return (
        <div className="grid-container-user-slots" key={props.slot.id}>
            <div className="name padding-grid">{props.slot.date}</div>
            <div className="date padding-grid">
                <div className="day text-justify-in-grid">
                    <p>{"\n"}{props.slot.startTime.toLocaleString()} - {props.slot.endTime}</p>
                </div>
            </div>
            <h3 className="description padding-grid">{props.slot.description}</h3>
            <Link to={`edit-slot/${props.slot.id}`}>
                <button className="button-on-slot padding-grid">
                    Update slot
                </button>
            </Link>
            <button className="button-delete padding-grid" onClick={() => props.deleteSlot(props.slot.id)}>
                Delete slot
            </button>
            <div className="private padding-grid">type: {props.slot.private ? "private" : "public"}</div>
            <div className="size padding-grid">{props.slot.size === 1 ? "1 slot" : props.slot.size + " slots"}</div>
        </div>
    );
}