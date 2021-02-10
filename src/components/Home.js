import React, { useState, useEffect } from 'react';
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
        <div>
            {

            }
        </div>
    );
}

export default Home;