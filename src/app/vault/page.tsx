"use client";
import React, { useState , useEffect } from 'react';
import CommonLayout from "@/layout/CommonLayout";
const mysql = require('mysql');

//DB

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
      const connection = mysql.createConnection({
            host: 'timevoyagedb.crm0qiaemqmq.eu-west-1.rds.amazonaws.com',
            user: 'admin',
            password: 'P4p3r1n0!',
            database: 'tvdb'
        });

        connection.connect((error) => {
          if (error) {
              console.error('Error connecting to database:', error);
              return;
          }
          console.log('Connected to database');
      });

        connection.connect();

        connection.query('SELECT * FROM persons', (error, results) => {
          if (error) throw error;
          console.log(results);
          setData(results);
      });

        connection.end();
    }, []);

    return (
      <CommonLayout mainClass="custom-padding" headerClassName="header-light" sideBarClassName="sidebar-white" loaderName="style2" differentLogo="logo-colore.png">
      <h1>Data from MySQL Database</h1>
        <ul>
        
        </ul>
      </CommonLayout>
    );
};

export default App;
