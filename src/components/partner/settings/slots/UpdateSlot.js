import React from 'react';

export const UpdateSlot = () => {

    return (
        <div className="grid-container-user-slots">
            <input className="name padding-grid">date</input>
            <div className="date padding-grid">
                <div className="day text-justify-in-grid">
                    <p>start time - end time</p>
                </div>
            </div>
            <input className="description padding-grid">description</input>
            <input className="private padding-grid">type of slot</input>
            <div className="size padding-grid">slot size</div>
        </div>
    );
};