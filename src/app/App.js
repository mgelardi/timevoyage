// App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import dynamic from 'next/dynamic';

const ClientOnlyComponent = dynamic(() => import('../components/ClientOnlyComponent'), { ssr: false });

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
        <ClientOnlyComponent>
            <div>
                <h1>Data from MySQL Database</h1>
                <ul>
                    {data.map(item => (
                        <li key={item.id}>{item.name}</li>
                    ))}
                </ul>
            </div>
        </ClientOnlyComponent>
    );
};

export default App;
