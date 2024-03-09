// App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Check if we're in the browser environment before making the API call
        if (typeof window !== 'undefined') {
            axios.get('http://timevoyagedb.crm0qiaemqmq.eu-west-1.rds.amazonaws.com/api/data')
                .then(response => {
                    setData(response.data);
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
        }
    }, []);

    return (
        <div>
            <h1>Data from MySQL Database</h1>
            <ul>
                {data.map(item => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default App;
