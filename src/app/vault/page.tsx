"use client";
import React, { useState , useEffect } from 'react';
import CommonLayout from "@/layout/CommonLayout";
import axios from 'axios';

//DB
const DataDisplay = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
      axios.get('https://localhost:3360/api/data')
          .then(response => {
              setData(response.data);
          })
          .catch(error => {
              console.error('Error fetching data:', error);
          });
  }, []);

  return (
    <CommonLayout mainClass="custom-padding" headerClassName="header-light" sideBarClassName="sidebar-white" loaderName="style2" differentLogo="logo-colore.png">
    <h1>Data from MySQL Database</h1>
      <ul>
        {data.map(item => (
          <li key={item.firstname}>{item.lastname}</li>
        ))}
      </ul>
    </CommonLayout>
  );
};

export default DataDisplay;
