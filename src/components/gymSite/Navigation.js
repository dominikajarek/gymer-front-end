import React from 'react';
import { Link } from "react-router-dom";

import '../../styles/navigation.css';
import '../../styles/header.css';


function Navigation() {

    return (
        <div className='buttons-nav'>
            <Link to='/gymsite' className='btn btn-one about' style={{'textDecoration':'none', 'color':'rgba(2, 2, 2, 1)'}}>About</Link>
            <Link to='/calendar' className='btn btn-one timetable' style={{'textDecoration':'none', 'color':'rgba(2, 2, 2, 1)'}}>Timetable</Link>
        </div>
    );
}

export default Navigation;