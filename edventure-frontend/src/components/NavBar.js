// src/components/NavBar.js

import React from 'react';
import '../App.css'; // Assuming you want to use styles from App.css
import logo from "../Assets/whitelogo.png";

const NavBar = () => {
  return (
    <nav className="navbar">
      {<img src={logo} alt="logo of edventure park" />}
      <div className="navbar-content">

      </div>
    </nav>
  );
};

export default NavBar;
