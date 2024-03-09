// App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useClient } from 'next/client'; // Import useClient hook

const App = () => {
    const [data, setData] = useState([]);
    const client = useClient(); // Use useClient hook to mark component as client-side

    useEffect(() => {
        axios.get('/api/data') // Assuming API routes are in the same project
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
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
