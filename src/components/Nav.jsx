import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../images/logo.png";
import "../Style/Nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  const [scrolling, setScrolling] = useState(false);
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      const handleScroll = () => setScrolling(window.scrollY > 50);
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    } else {
      setScrolling(true);
    }
  }, [location.pathname]);

  const toggleNavbar = () => setNavbarOpen(!navbarOpen);
  const toggleDropdown = (menu) => setDropdownOpen(dropdownOpen === menu ? null : menu);
  const closeMenu = () => {
    setNavbarOpen(false);
    setDropdownOpen(null);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".dropdown")) {
        setDropdownOpen(null);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <nav className={`navbar1 ${scrolling ? "scrolled" : "transparent"}`}>
      <div className="container-fluid">
        <Link className="navbar1-brand" to="/" onClick={closeMenu}>
          <img src={Logo} alt="Logo" className="logo1" />
          <h1>St Joseph Church</h1>
        </Link>
        <button className="navbar1-toggler" type="button" onClick={toggleNavbar}>
          <FontAwesomeIcon icon={navbarOpen ? faTimes : faBars} size="2x" />
        </button>
        <div className={`navbar1-collapse ${navbarOpen ? "show" : ""}`}>
          <ul className="navbar-nav2">
            <li className="nav-item dropdown">
              <button className={`nav-link2 dropdown-toggle ${dropdownOpen === "home" ? "open" : ""}`} onClick={() => toggleDropdown("home")}>Home</button>
              <ul className={`dropdown-menu3 ${dropdownOpen === "home" ? "show" : ""}`}>
              <li><Link className="dropdown-item4" to="/" onClick={closeMenu}>Home</Link></li>

                <li><Link className="dropdown-item4" to="/ourparish" onClick={closeMenu}>About us</Link></li>
                <li><Link className="dropdown-item4" to="/anbiyangal" onClick={closeMenu}>History</Link></li>
                <li><Link className="dropdown-item4" to="/anbiyangal" onClick={closeMenu}>Our people at Service</Link></li>
              </ul>
            </li>
            
            <li className="nav-item">
              <Link className="nav-link2" to="/ourparish" onClick={closeMenu}>Administration</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link2" to="/anbiyangal" onClick={closeMenu}>Anbiyangal</Link>
            </li>


            <li className="nav-item dropdown">
              <button className={`nav-link2 dropdown-toggle ${dropdownOpen === "gallery" ? "open" : ""}`} onClick={() => toggleDropdown("gallery")}>Gallery</button>
              <ul className={`dropdown-menu3 ${dropdownOpen === "gallery" ? "show" : ""}`}>
                <li><Link className="dropdown-item4" to="/images-category" onClick={closeMenu}>Images</Link></li>
                <li><Link className="dropdown-item4" to="/videos" onClick={closeMenu}>Videos</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link2" to="/" onClick={closeMenu}>Schedule</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link2" to="/festival" onClick={closeMenu}>Festival</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
