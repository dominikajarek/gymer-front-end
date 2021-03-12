import React from 'react';

export const SlotInfo = (props) => {

    return (
        <div>
            <h1>{props.data.title}{" "}{"-->"}{" "}{props.data.description}</h1>
            <h1>date: {props.data.date}</h1>
            <h1>start: {props.data.startTime}</h1>
            <h1>end: {props.data.endTime}</h1>
            <h1>with{" "}{props.data.name}{" "}{props.data.surname}</h1>
        </div>
    );
}