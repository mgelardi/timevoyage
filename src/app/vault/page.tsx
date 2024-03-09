"use client";
import React, { useState } from 'react';
import CommonLayout from "@/layout/CommonLayout";
import './TimeCapsule.css'; // Import CSS for time capsule animation
require('dotenv/config');
const pool = require('../config/db.js');

//MYSQL CONNECTION
//pool.getConnection( (err, conn) => {
  //if (err) throw err;
  //const dbid = 1;
  //const lastname = 'Gelardi';
  //const firstname = 'Michelangelo';
  //const address = 'Hollystown';
  //const city = 'Dublin';
  //const qry = `INSERT INTO persons(ID,LastName,FirstName,Address,City) VALUES (?,?,?,?,?)`;
  //conn.query(qry, [dbid,lastname,firstname,address,city], (err, result) => {
    //conn.release();
    //if (err) throw err;
    //console.log(result);
  //});
//});

const TimeCapsule = () => {

  return (
    <CommonLayout mainClass="custom-padding" headerClassName="header-light" sideBarClassName="sidebar-white" loaderName="style2" differentLogo="logo-colore.png">
    <div></div>
    </CommonLayout>
  );
};

export default TimeCapsule;
