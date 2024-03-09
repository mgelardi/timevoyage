// App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Mark the component as a client component
// This ensures that components using React hooks work correctly in a server-side rendered context
// See https://nextjs.org/docs/getting-started/react-essentials#client-components
useClient;

const App = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://timevoyagedb.crm0qiaemqmq.eu-west-1.rds.amazonaws.com/api/data')
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
