import React from 'react';

import logo from '../images/gym8.jpg';

function GymSite() {
    return (
        <div className=
                 'mt-56 w-full h-100 grid justify-items-stretch'
        >
            <h1 className='text-4xl mt-4 h-10 justify-self-center'>
                GYM NAME
            </h1>
            <img alt='x' src={logo} className='h-xs w-md pl-8 shadow-2xl' />
            <div className="modal w-xs">
                <h2>Opening hours</h2>
                <div id="Wednesday" className="dateTime">
                    <div className="day">Wednesday</div>
                    <div className="time">6am - 10pm</div>
                </div>
                <br />
                <div id="Thursday" className="dateTime">
                    <div className="day">Thursday</div>
                    <div className="time">6am - 10pm</div>
                </div>
                <br />
                <div id="Friday" className="dateTime">
                    <div className="day">Friday</div>
                    <div className="time">6am - 10pm</div>
                </div>
                <br />
                <div id="Saturday" className="dateTime">
                    <div className="day">Saturday</div>
                    <div className="time">6am - 10pm</div>
                </div>
                <br />
                <div id="Sunday" className="dateTime">
                    <div className="day">Sunday</div>
                    <div className="time">6am - 10pm</div>
                </div>
                <br />
                <div id="Monday" className="dateTime">
                    <div className="day">Monday</div>
                    <div className="time">6am - 10pm</div>
                </div>
                <br />
                <div id="Tuesday" className="dateTime">
                    <div className="day">Tuesday</div>
                    <div className="time">6am - 10pm</div>
                </div>
            </div>
            <p className='float-left justify-self-start h-20 ml-32'>About us</p>
            <p className='w-xs h-8 mb-52'>
                Lorem ipsum dolor sit amet,
                consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </div>
    );
}

export default GymSite;