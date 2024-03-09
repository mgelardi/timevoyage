import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Define the Page component
const Page = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Fetch data from API when component mounts on the client side
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('/api/data');
            setData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    // Render the fetched data
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

export default Page;
