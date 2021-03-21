import React from 'react';
import { Link } from "react-router-dom";

export const Navigation = (props) => {

    let id = props.id;

    return (
        <div className='buttons-nav'>
            <Link to={`/gymsite/${id}`}
                  className='btn btn-one about'>
                About
            </Link>
            <Link to={`/calendar/${id}`}
                  className='btn btn-one timetable'>
                Timetable
            </Link>
        </div>
    );
}