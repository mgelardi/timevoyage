"use client";
import React, { useState } from 'react';
import CommonLayout from "@/layout/CommonLayout";

import './TimeCapsule.css'; // Import CSS for time capsule animation

const TimeCapsule = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleTimeCapsule = (e) => {
    e.stopPropagation(); // Prevent event propagation
    setIsOpen(prevState => !prevState);
  };

  return (
    <CommonLayout mainClass="custom-padding" headerClassName="header-light" sideBarClassName="sidebar-white" loaderName="style2" differentLogo="logo-colore.png">
    <div className={`time-capsule ${isOpen ? 'open' : ''}`} onClick={toggleTimeCapsule}>
      <div className="capsule"></div>
      {isOpen && ( // Conditionally render contents when time capsule is open
        <div className="contents">
          <div className="element">Element 1</div>
          <div className="element">Element 2</div>
          <div className="element">Element 3</div>
        </div>
      )}
    </div>
    </CommonLayout>
  );
};

export default TimeCapsule;
