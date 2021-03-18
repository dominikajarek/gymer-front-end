import React from 'react';
import '../../styles/book-form.css';

export const SlotInfo = (props) => {
    return (
        <div className='book-info'>
            <p>{props.error}</p>
            <p>{props.data.title}{" "}</p>
            <p>date: {props.data.date}</p>
            <p>start: {props.data.startTime}</p>
            <p>end: {props.data.endTime}</p>
            <p>with: {props.employee.name}{" "}{props.employee.lastName}</p>
        </div>
    );
}