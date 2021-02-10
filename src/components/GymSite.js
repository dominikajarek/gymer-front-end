import React, { useState, useEffect } from 'react';

import image from '../images/gym8.jpg';

function GymSite() {

    return (
        <div className=
                 'mt-56 w-full h-100 grid justify-items-stretch'
        >
            <h1 className='text-4xl mt-4 h-10 justify-self-center'>
                GYM NAME
            </h1>
            <img alt='x' src={image} className='h-xs w-md pl-8 shadow-3xl ml-8 justify-self-start rounded-lg' />
            <div className="modal w-xs justify-self-end">
                <h2>Opening hours</h2>
                <div className="dateTime">
                    <div className="day">Monday</div>
                    <div className="time">6am - 10pm</div>
                </div>
                <br />
                <div className="dateTime">
                    <div className="day">Tuesday</div>
                    <div className="time">6am - 10pm</div>
                </div>
                <br />
                <div className="dateTime">
                    <div className="day">Wednesday</div>
                    <div className="time">6am - 10pm</div>
                </div>
                <br />
                <div className="dateTime">
                    <div className="day">Thursday</div>
                    <div className="time">6am - 10pm</div>
                </div>
                <br />
                <div className="dateTime">
                    <div className="day">Friday</div>
                    <div className="time">6am - 10pm</div>
                </div>
                <br />
                <div className="dateTime">
                    <div className="day">Saturday</div>
                    <div className="time">6am - 10pm</div>
                </div>
                <br />
                <div className="dateTime">
                    <div className="day">Sunday</div>
                    <div className="time">6am - 10pm</div>
                </div>
            </div>
            <div className="w-xs justify-self-start pl-16">
                <p className='text-capitalize'>About us</p>
                <div className="dateTime">
                    <div className="day">Lorem ipsum dolor sit amet,
                        consectetur velit esse cillum dolore eu fugiat nulla pariatur.
                        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                </div>
            </div>
            <div>
            </div>
        </div>
    );
}

export default GymSite;