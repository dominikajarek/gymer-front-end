import React from 'react';

function Calendar() {

    return (
        <div className="container mt-60 h-full">
            <table className='shadow-2xl mr-3 ml-3'>
                <thead className='border-b-2 border-gray-500'>
                <tr className='h-20'>
                    <th className="p-2 border-r-2 border-gray-500 xl:text-sm text-xs">
                        <span className="xl:block lg:block md:block sm:block hidden">Monday 15.02</span>
                    </th>
                    <th className='w-xl h-xs grid grid-cols-4 gap-4'>
                        <span className='border-r-2 border-gray-200 classes grid'>
                            <p>10 AM</p>
                            <p>Fitness - Jane</p>
                            <button className='align-content-end outline-none focus:outline-none'>SIGN IN</button>
                        </span>
                    </th>
                </tr>
                </thead>
                <thead className='border-b-2 border-gray-500'>
                <tr className='h-20'>
                    <th className="p-2 border-r-2 border-gray-500 xl:text-sm text-xs">
                        <span className="xl:block lg:block md:block sm:block hidden">Tuesday 16.02</span>
                    </th>
                    <th className='w-xl h-xs grid grid-cols-4 gap-4'>
                        <span className='border-r-2 border-gray-200 classes grid'>
                            <p>8 AM</p>
                            <p>Swimming - John</p>
                            <button className='align-content-end outline-none focus:outline-none'>SIGN IN</button>
                        </span>
                        <span className='border-r-2 border-gray-200 classes grid'>
                            <p>12 AM</p>
                            <p>Fitness - Jane</p>
                            <button className='align-content-end outline-none focus:outline-none'>SIGN IN</button>
                        </span>
                    </th>
                </tr>
                </thead>
                <thead className='border-b-2 border-gray-500'>
                <tr className='p-4 h-xs'>
                    <th className="p-2 border-r-2 border-gray-500 h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
                        <span className="xl:block lg:block md:block sm:block hidden">Wednesday 17.02</span>
                    </th>
                    <th className='w-xl h-xs grid grid-cols-4 gap-4'>
                        <span className='border-r-2 border-gray-200 classes grid'>
                            <p>7 AM</p>
                            <p>Yoga - Janice</p>
                            <button className='align-content-end outline-none focus:outline-none'>SIGN IN</button>
                        </span>
                        <span className='border-r-2 border-gray-200 classes grid'>
                            <p>11 AM</p>
                            <p>Swimming - John</p>
                            <button className='align-content-end outline-none focus:outline-none'>SIGN IN</button>
                        </span>
                    </th>
                </tr>
                </thead>
                <thead className='border-b-2 border-gray-500'>
                <tr className='p-4 h-xs'>
                    <th className="p-2 border-r-2 border-gray-500 h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
                        <span className="xl:block lg:block md:block sm:block hidden">Thursday 18.02</span>
                    </th>
                    <th className='w-xl h-xs grid grid-cols-4 gap-4'>
                        <span className='border-r-2 border-gray-200 classes grid'>
                            <p>9 AM</p>
                            <p>Cardio - Jane</p>
                            <button className='align-content-end outline-none focus:outline-none'>SIGN IN</button>
                        </span>
                        <span className='border-r-2 border-gray-200 classes grid'>
                            <p>10 AM</p>
                            <p>Yoga - Janice</p>
                            <button className='align-content-end outline-none focus:outline-none'>SIGN IN</button>
                        </span>
                        <span className='border-r-2 border-gray-200 classes grid'>
                            <p>5 PM</p>
                            <p>Fitness - Jane</p>
                            <button className='align-content-end outline-none focus:outline-none'>SIGN IN</button>
                        </span>
                    </th>
                </tr>
                </thead>
                <thead className='border-b-2 border-gray-500'>
                <tr className='p-4 h-xs'>
                    <th className="p-2 border-r-2 border-gray-500 h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
                        <span className="xl:block lg:block md:block sm:block hidden">Friday 19.02</span>
                    </th>
                    <th className='w-xl h-xs grid grid-cols-4 gap-4'>
                        <span className='border-r-2 border-gray-200 classes grid'>
                            <p>10 AM</p>
                            <p>Swimming - John</p>
                            <button className='align-content-end outline-none focus:outline-none'>SIGN IN</button>
                        </span>
                    </th>
                </tr>
                </thead>
                <thead className='border-b-2 border-gray-500'>
                <tr className='p-4 h-xs'>
                    <th className="p-2 border-r-2 border-gray-500 h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
                        <span className="xl:block lg:block md:block sm:block hidden">Saturday 20.02</span>
                    </th>
                    <th className='w-xl h-xs grid grid-cols-4 gap-4'>
                        <span className='border-r-2 border-gray-200 classes grid'>
                            <p>8 AM</p>
                            <p>Swimming - John</p>
                            <button className='align-content-end outline-none focus:outline-none'>SIGN IN</button>
                        </span>
                        <span className='border-r-2 border-gray-200 classes grid'>
                            <p>10 AM</p>
                            <p>Yoga - Janice</p>
                            <button className='align-content-end outline-none focus:outline-none'>SIGN IN</button>
                        </span>
                    </th>
                </tr>
                </thead>
                <thead className='border-b-2 border-gray-500'>
                <tr className='p-4 h-xs'>
                    <th className="p-2 border-r-2 border-gray-500 h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
                        <span className="xl:block lg:block md:block sm:block hidden">Sunday 21.02</span>
                    </th>
                    <th className='w-xl h-xs grid grid-cols-4 gap-4'>
                        <span className='border-r-2 border-gray-200 classes grid'>
                            <p>11 AM</p>
                            <p>Swimming - John</p>
                            <button className='align-content-end outline-none focus:outline-none'>SIGN IN</button>
                        </span>
                        <span className='border-r-2 border-gray-200 classes grid'>
                            <p>12 AM</p>
                            <p>Fitness - Jane</p>
                            <button className='align-content-end outline-none focus:outline-none'>SIGN IN</button>
                        </span>
                    </th>
                </tr>
                </thead>
            </table>
        </div>
    );
}

export default Calendar;