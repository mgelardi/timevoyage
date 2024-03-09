// page.stx

import React from 'react';
import App from '../App'; // Assuming App.js is in the same directory

const Page = () => {
    return (
        <div>
            <h1>Your Page Title</h1>
            <App /> {/* Render the App component */}
        </div>
    );
};

export default Page;
