// page.tsx

import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import Axios

const Page = () => {
  const [data, setData] = useState([]); // State to hold fetched data

  useEffect(() => {
    // Fetch data when component mounts
    axios.get('https://your-amplify-app-url.amazonaws.com/api/data') // Replace with your actual URL
      .then(response => {
        setData(response.data); // Update state with fetched data
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); // Empty dependency array to run effect only once on component mount

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
