import React, { useState, useEffect } from "react";
import "./Header.css";
import logo from "../assets/logo.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // detect screen resize
  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth <= 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <header className="header">
      {/* Left section */}
      <div className="header-left">
        <div className="brand">ALMUSAFEER</div>
        <img src={logo} alt="ALMUSAFEER" className="logoheader" />
      </div>

      {/* Right section */}
      <div className="header-right">
        {/* Hamburger icon (mobile only) */}
        {isMobile && (
          <button
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            ☰
          </button>
        )}

        {/* Navigation */}
        <nav className={`header-nav ${menuOpen ? "open" : ""}`}>
          <a href="#">Home</a>
          <a href="#">My Booking</a>
          <a href="#">Register</a>
          <a href="#">Login</a>
          <a href="#">Contact</a>

          {/* Show Currency + Lang INSIDE dropdown only on mobile */}
          {isMobile && menuOpen && (
            <div className="dropdown-footer">
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
          )}
        </nav>

        {/* Show Currency + Lang normally on desktop */}
        {!isMobile && (
          <>
            <div className="currency">
              <img
                src="https://flagcdn.com/w20/kw.png"
                alt="Kuwait"
                className="flag"
              />
              <span>KWD</span>
            </div>
            <div className="lang">العربية</div>
          </>
        )}
      </div>
    </header>
  );
}
