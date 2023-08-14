// src/components/Navbar.jsx
import React from 'react';
import '../app.css'; // Import app.css

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        noom 
      </div>
      <ul className="navbar-menu">
        <li className="navbar-item"><a href="/">About</a></li>
        <li className="navbar-item"><a href="/">Catalog</a></li>
        <li className="navbar-item"><a href="/">Delivery</a></li>
        <li className="navbar-item"><a href="/">Contacts</a></li>
        
      </ul>
    </nav>
  );
};

export default Navbar;
