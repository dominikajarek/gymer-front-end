import React, {useEffect, useState} from 'react';
import axios from 'axios';

function Home() {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('/api/partners/1')
            .then(response => {
                const result = response.data;
                console.log(response.data);
                setData(result);
            })
    }, []);

    return (
        <div className='mt-56 w-full h-100 grid justify-items-stretch'>
            <h1 className='text-4xl mt-4 h-10 justify-self-center'>
                Home
            </h1>
        </div>
    );
}

export default Home;