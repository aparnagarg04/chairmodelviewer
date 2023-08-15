// src/components/Navbar.jsx
import React, { useState } from 'react';
import '../App.css'; // Import app.css
import { GrTextAlignLeft, GrClose } from "react-icons/gr";



const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  return (
    <>
      {/* <div className="menu-icon" onClick={handleShowNavbar}>
        {showNavbar ? (
          <GrClose
            style={{ width: "2rem", height: "2rem" }}
          />
        ) : (
          <GrTextAlignLeft
            style={{ width: "2rem", height: "2rem" }}
          />
        )}
      </div>
      <nav className={`navbar ${ "active"}`}> */}
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
        {/* </nav> */}
      </nav>

    </>
  );
};

export default Navbar;
