import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import "../Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">Ladder Safety Checklist</div>
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li>
          <a href="ladder">Ladder inspection</a>
        </li>
        <li>
          <a href="using">Usage instructions</a>
        </li>
      </ul>
      <button className="menu-btn" onClick={toggleMenu}>
        <MenuIcon />
      </button>
    </nav>
  );
}

export default Navbar;
