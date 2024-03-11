import React, { useState } from "react";
import { Link } from "react-router-dom";
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
          <Link to="/ladder">Ladder inspection</Link>
        </li>
        <li>
          <Link to="/using">Usage instructions</Link>
        </li>
      </ul>
      <button className="menu-btn" onClick={toggleMenu}>
        <MenuIcon />
      </button>
    </nav>
  );
}

export default Navbar;
