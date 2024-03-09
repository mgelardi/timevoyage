// Import necessary modules
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Define the Page component
const Page = () => {
    // Initialize state to hold fetched data
    const [data, setData] = useState([]);

    // Fetch data from MySQL database when component mounts
    useEffect(() => {
        // Make GET request to Express server endpoint
        axios.get('https://main.d2hffzzhv01ro3.amplifyapp.com/vault:5000/api/data')
            .then(response => {
                // Update state with fetched data
                setData(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

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
