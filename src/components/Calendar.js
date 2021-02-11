import React from 'react';
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";

function Calendar() {

    return (
        <div className="container mt-60">
            <table className='shadow-2xl mr-3 ml-3'>
                <thead className='divide-y-2 divide-y-reverse divide-gray-400'>
                <tr>
                    <th className="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
                        <span className="xl:block lg:block md:block sm:block hidden">Monday 15.02</span>
                    </th>
                    <th className="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
                        <span className="xl:block lg:block md:block sm:block hidden">Tuesday 16.02</span>
                    </th>
                    <th className="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
                        <span className="xl:block lg:block md:block sm:block hidden">Wednesday 17.02</span>
                    </th>
                    <th className="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
                        <span className="xl:block lg:block md:block sm:block hidden">Thursday 18.02</span>
                    </th>
                    <th className="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
                        <span className="xl:block lg:block md:block sm:block hidden">Friday 19.02</span>
                    </th>
                    <th className="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
                        <span className="xl:block lg:block md:block sm:block hidden">Saturday 20.02</span>
                    </th>
                    <th className="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 text-capitalize ">
                        <span className="xl:block lg:block md:block sm:block hidden">Sunday 21.02</span>
                    </th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td className="shadow-lg p-1 h-40 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-200 text-center">
                        <Button variant="primary">
                            <Link to={'/reservation'}>8am - fitness class</Link>
                        </Button>
                        <div
                            className="flex flex-col h-5 w-5 overflow-hidden">
                        </div>
                    </td>
                    <td className="shadow-lg p-1 h-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-200 text-center">
                        <div
                            className="flex flex-col h-5 w-5 overflow-hidden">
                        </div>
                    </td>

                    <td className="shadow-lg p-1 h-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-200 text-center">
                        <Button variant="primary">
                            <Link to={'/reservation'}>10am - crossfit</Link>
                        </Button>
                        <div
                            className="flex flex-col h-5 w-5 overflow-hidden">
                        </div>
                    </td>
                    <td className="shadow-lg p-1 h-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-200 text-center">
                        <div
                            className="flex flex-col h-5 w-5 overflow-hidden">
                        </div>
                    </td>
                    <td className="shadow-lg p-1 h-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-200 text-center">
                        <div
                            className="flex flex-col h-5 w-5 overflow-hidden">
                        </div>
                    </td>
                    <td className="shadow-lg p-1 h-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-200 text-center">
                        <div
                            className="flex flex-col h-5 w-5 overflow-hidden">
                        </div>
                    </td>
                    <td className="shadow-lg p-1 h-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-200 text-center">
                        <div
                            className="flex flex-col h-5 w-5 overflow-hidden">
                        </div>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Calendar;