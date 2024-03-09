// App.js
import React, { useState, useEffect } from 'react'; // Import useState and useEffect hooks
import axios from 'axios';

const App = () => {
    const [data, setData] = useState([]); // Initialize state using useState hook

    useEffect(() => {
        axios.get('http://localhost:5000/api/data')
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
