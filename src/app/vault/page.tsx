// page.stx
import React, { useState , useEffect } from 'react'; // Import useState and useEffect hooks
import App from '../App.js'; // Assuming App.js is in the same directory

const Page = () => {
    return (
        <div>
            <h1>Your Page Title</h1>
            <App /> {/* Render the App component */}
        </div>
    );
};

export default Page;
