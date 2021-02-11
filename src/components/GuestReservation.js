import React from 'react';

import {Link} from "react-router-dom";

function GuestReservation() {

    return (
        <div className='mt-56 w-full h-100 grid justify-items-stretch'>
            <div className='justify-self-center'>
                <section className="bg-gray-200 rounded-lg py-5 mx-auto shadow-lg">
                    <form id="register" className=" flex-auto text-sm mt-0 m-8 xs:p-4 sm:p-4 md:p-8 lg:p-8" method="POST"
                          action="/reservation">
                        <h3 className="flex justify-center m-2 font-bold text-2xl">Reservation</h3>
                        <div className="relative border rounded mb-4 shadow appearance-none label-floating">
                            <input className="w-full py-2 px-3 text-black leading-normal rounded" id="name"
                                   name="name" type="text" placeholder="Name" />
                                <label
                                    className="absolute block text-black top-0 left-0 w-full px-3 py-2 leading-normal"
                                    htmlFor="name">
                                </label>
                        </div>
                        <div className="relative border rounded mb-4 shadow appearance-none label-floating">
                            <input className="w-full py-2 px-3 text-black leading-normal rounded" id="email"
                                   name="email" type="email" placeholder="E-mail Address" />
                                <label
                                    className="absolute block text-black top-0 left-0 w-full px-3 py-2 leading-normal"
                                    htmlFor="email">
                                </label>
                        </div>
                        <div className="relative border rounded mb-4 shadow appearance-none label-floating">
                            <input className="w-full py-2 px-3 text-black leading-normal rounded" id="phoneNumber"
                                   name="phoneNumber" type="tel" placeholder="PhoneNumber" />
                                <label
                                    className="absolute block text-black top-0 left-0 w-full px-3 py-2 leading-normal"
                                    htmlFor="phoneNumber">
                                </label>
                        </div>
                        <div className="relative border rounded mb-4 shadow appearance-none label-floating">
                            <input className="w-full py-2 px-3 text-black leading-normal rounded"
                                   id="additionalInfo" name="additionalInfo" type="text"
                                   placeholder="Additional information" />
                                <label
                                    className="absolute block text-black top-0 left-0 w-full px-3 py-2 leading-normal"
                                    htmlFor="additionalInfo">
                                </label>
                        </div>
                        <div className="flex flex-wrap py-2 items-center justify-evenly">
                            <div className="sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2 h-12 text-center align-baseline">
                                <input
                                    className="bg-black hover:bg-white hover:text-black text-white w-full py-2 px-4 rounded"
                                    type="submit" value="Register"/>
                            </div>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    );
}

export default GuestReservation;