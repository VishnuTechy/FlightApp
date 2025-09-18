import React from "react";
import "./Header.css";
import logo from "../assets/logo.png"; // put your ALMUSAFEER logo in src/assets/

export default function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <div className="brand">ALMUSAFEER</div>
        <img src={logo} alt="ALMUSAFEER" className="logoheader" />
      </div>



      <div className="header-right">
        <nav className="header-nav">
          <a href="#">Home</a>
          <span>/</span>
          <a href="#">My Booking</a>
          <span>/</span>
          <a href="#">Register</a>
          <span>/</span>
          <a href="#">Login</a>
          <span>/</span>
          <a href="#">Contact</a>
        </nav>
        <div className="currency">
          <img
            src="https://flagcdn.com/w20/kw.png"
            alt="Kuwait"
            className="flag"
          />
          <span>KWD</span>
        </div>
        <div className="lang">العربية</div>
      </div>
    </header>
  );
}
