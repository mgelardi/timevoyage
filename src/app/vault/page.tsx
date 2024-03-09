// Import necessary modules
import React from 'react';
import axios from 'axios';

// Define the Page component
const Page = ({ initialData }) => {
    // Initialize state to hold fetched data
    const [data, setData] = React.useState(initialData);

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

// Fetch data from MySQL database during SSR
export async function getServerSideProps(context) {
    // Make GET request to Express server endpoint
    const response = await axios.get('https://your-amplify-app-url.amazonaws.com/api/data');

    // Extract data from response
    const data = response.data;

    // Return data as props
    return {
        props: {
            initialData: data
        }
    };
}

export default Page;
