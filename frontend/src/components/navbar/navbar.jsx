import React from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";

function Navbar() {

  return (
    <div className="navbar">
      <div className="left">
        <div className="heading">ThisisNKC</div>
        <img src="assets/logo.jpg" alt="logo" />
      </div>
      <ul>
        <li>
          <Link className="ltext" to="/">Home</Link>
        </li>
        <li>
          <Link className="ltext" to="/login">LogIn</Link>
        </li>
        <li>
          <Link className="ltext" to="/aboutus">About Us</Link>
        </li>
        <li>
          <Link className="ltext" to="/contactus">Contact Us</Link>
        </li>
      </ul>
      </div>
  );
}

export default Navbar;
