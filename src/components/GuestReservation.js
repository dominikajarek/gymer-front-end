import React, { useState, useEffect } from 'react';

import image from '../images/gym8.jpg';

function GuestReservation() {

    return (
        <div className='mt-56 w-full h-100 grid justify-items-stretch'>
            <h1 className='text-4xl mt-4 h-10 justify-self-center'>
                GYM NAME
            </h1>
            <img alt='x' src={image} className='h-xs w-md pl-8 shadow-3xl ml-8 justify-self-start rounded-lg' />
            <div className="modal w-xs justify-self-end">

            </div>
            <div>
            </div>
        </div>
    );
}

export default GuestReservation;