import React from 'react';

import Slider from '../slider/Slider';
import Navigation from "./Navigation";
import '../../styles/gymSite.css';
import image from '../../images/gym8.jpg';
import gymLogo from '../../images/logo-gym.png';

function GymSite() {
    const slideData = [
        {
            index: 0,
            src: gymLogo
        },
        {
            index: 1,
            src: image
        }
    ]

    return (
        <div className='container-gymsite'>
            <div className="modal info-container">
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
                <h2 className='contact'>Contact</h2>
                <p>
                    466658689
                </p>
                <p>
                    gymsite@gmail.com
                </p>
                <p>
                    Orchan Road 77, NYC
                </p>
            </div>
            <div className="about-info">
                <div>
                    <div className="title">About us</div>
                </div>
                <div className="dateTime">
                    <div className="day">
                        Lorem ipsum dolor sit amet,
                        consectetur velit esse cillum dolore eu fugiat nulla pariatur.
                        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                </div>
            </div>
            <div className="team-info">
                <div>
                    <div className="title">Our team</div>
                    <Slider className='grid-slider' heading="Example Slider" slides={slideData} />
                </div>
            </div>
        </div>
    );
}

export default GymSite;