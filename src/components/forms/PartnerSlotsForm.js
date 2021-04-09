import React from 'react';

export const PartnerSlotsForm = (props) => {
    return (

        <div>

            <div className="grid-container-user-slots" key={props.slot.id}>
                <div className="name padding-grid">{props.slot.date}</div>
                <div className="date padding-grid">
                    <div className="day text-justify-in-grid">
                        <p>{"\n"}{props.slot.startTime.toLocaleString()} - {props.slot.endTime}</p>
                    </div>
                </div>
                <h3 className="description padding-grid">{props.slot.description}</h3>
                <button className="button-on-slot padding-grid" >Edit slot</button>
                <button className="button-on-slot padding-grid" onClick={() => props.deleteSlot(props.slot.id)}>Delete slot</button>
               <div className="private padding-grid">type: {props.slot.private ? "private" : "public"}</div>
                <div className="size padding-grid">{props.slot.size === 1 ? "1 slot" : props.slot.size + " slots"}</div>
            </div>
        </div>
    );
}