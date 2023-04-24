import React, { useState } from "react";
import Logo from "../assets/pizzaLogo.png";
//import { Link } from "react-router-dom";
import Reorder from '@mui/icons-material/Reorder';


import "../styles/Navbar.css";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={Logo} />
        <div className="hiddenLinks">
          <ul>
            <li className="active">
              <a href="/home">Home</a>
            </li>
            <li className="active">
              <a href="/menu">Menu</a>
            </li>
            <li className="active">
              <a href="/about">About</a>
            </li>
            <li className="active">
              <a href="/contact">Contact</a>
            </li>
          </ul>
          
        </div>
      </div>
      <div className="rightSide">
      <ul>
            <li className="active">
              <a href="/home">Home</a>
            </li>
            <li className="active">
              <a href="/menu">Menu</a>
            </li>
            <li className="active">
              <a href="/about">About</a>
            </li>
            <li className="active">
              <a href="/contact">Contact</a>
            </li>
          </ul>
        <button onClick={toggleNavbar}>
            <Reorder/>
        </button>
      </div>
    </div>
  );
}

export default Navbar;