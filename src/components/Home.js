import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Home() {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(response => {
                const result = response.data;
                setData(result);
            })
    }, []);

    return (
        <div>
            {
                data.map(value =>
                    <p key={value.id}>{value.title}</p>
                )
            }
        </div>
    );
}

export default Home;