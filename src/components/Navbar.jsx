import React from "react";
import { Link } from "react-router-dom";
import Button from "./ui/Button";
import logo from "../assets/logo.svg"
import "./Navbar.css";


function Navbar() {
  return (
  <>
  <div className="center flex-column my-1">

    <img className="my-1" src={logo} alt="treavelo logo" />
    <nav>
      <ul className="merriweather-sans night">
        <li className="nav-buttons">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-buttons">
          <a href="#features">Features</a>
        </li>
        <li className="nav-buttons">
          <a href="#faq">FAQs</a>
        </li>
        <li>
            <Button />
        </li>
      </ul>
    </nav>
  </div>
  </>
  );
}

export default Navbar;
