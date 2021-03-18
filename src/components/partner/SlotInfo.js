import React from 'react';
import '../../styles/book-form.css';

export const SlotInfo = (props) => {
    return (
        <div className='book-info'>
            <p className='error text'>{props.message}</p>
            <h2 className='slot-info'>{props.data.title}{" "}</h2>
            <p className='slot-info'>date: {props.data.date}</p>
            <p className='slot-info'>start: {props.data.startTime}</p>
            <p className='slot-info'>end: {props.data.endTime}</p>
            <p className='slot-info'>with: {props.employee.name}{" "}{props.employee.lastName}</p>
        </div>
    );
}