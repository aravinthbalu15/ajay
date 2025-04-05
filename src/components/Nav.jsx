/* Nav.jsx */
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../images/logo.png";
import "../Style/Nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  const [scrolling, setScrolling] = useState(false);
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState({});
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

  const toggleNavbar = () => setNavbarOpen((prev) => !prev);

  const toggleDropdown = (key) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const closeMenu = () => {
    setNavbarOpen(false);
    setOpenDropdowns({});
  };

  const closeAllDropdowns = () => setOpenDropdowns({});

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".dropdown") && !e.target.closest(".dropdown-sub")) {
        closeAllDropdowns();
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const renderDropdown = (label, key, items) => (
    <li className="nav-item dropdown">
      <button
        className={`nav-link2 dropdown-toggle ${openDropdowns[key] ? "open" : ""}`}
        onClick={() => toggleDropdown(key)}
      >
        {label}
      </button>
      <ul className={`dropdown-menu3 ${openDropdowns[key] ? "show" : ""}`}>{items}</ul>
    </li>
  );

  const renderSubDropdown = (label, key, items) => (
    <li className="dropdown-sub">
      <button
        className={`dropdown-link55 ${openDropdowns[key] ? "open" : ""}`}
        onClick={() => toggleDropdown(key)}
      >
        {label}
      </button>
      <ul className={`dropdown-menu-sub ${openDropdowns[key] ? "show" : ""}`}>{items}</ul>
    </li>
  );

  return (
    <nav className={`navbar1 ${scrolling ? "scrolled" : "transparent"}`}>
      <div className="container-fluid">
        <Link className="navbar1-brand" to="/" onClick={closeMenu}>
          <img src={Logo} alt="Logo" className="logo1" />
          <h1>
            St Joseph's Church<span className="newline">Kamplar</span>
          </h1>
        </Link>
        <button className="navbar1-toggler" onClick={toggleNavbar}>
          <FontAwesomeIcon icon={navbarOpen ? faTimes : faBars} size="2x" />
        </button>
        <div className={`navbar1-collapse ${navbarOpen ? "show" : ""}`}>
          <ul className="navbar-nav2">
            {renderDropdown("Home", "home", [
              <li><Link className="dropdown-item4" to="/" onClick={closeMenu}>Home</Link></li>,
              <li><Link className="dropdown-item4" to="/about" onClick={closeMenu}>About us</Link></li>,
              <li><Link className="dropdown-item4" to="/history-details" onClick={closeMenu}>Our History</Link></li>,
              <li><Link className="dropdown-item4" to="/about" onClick={closeMenu}>Sacred Heart Convent</Link></li>,
              <li><Link className="dropdown-item4" to="/about" onClick={closeMenu}>St.Joseph's Auditorium</Link></li>,
              <li><Link className="dropdown-item4" to="/old-priest" onClick={closeMenu}>Our Parish Priests</Link></li>,
              <li><Link className="dropdown-item4" to="/service" onClick={closeMenu}>Our People at God's Service</Link></li>,
              <li><Link className="dropdown-item4" to="/about" onClick={closeMenu}>The Substation</Link></li>
            ])}

            {renderDropdown("Administration", "admin", [
              <li><Link className="dropdown-item4" to="/ourparish" onClick={closeMenu}>Our Parish Pastoral Council</Link></li>,
              <li><Link className="dropdown-item4" to="/anbiyam-co" onClick={closeMenu}>Coordination of anbiyams</Link></li>,
              <li><Link className="dropdown-item4" to="/anbiyam" onClick={closeMenu}>Anbiyams</Link></li>
            ])}

            {renderDropdown("Participatary Structures", "pt-sr", [
              renderSubDropdown("திருத்தூதுக் கழகங்கள்", "p1", [
                <li><Link to="/மரியாவின் சேனை" className="dropdown-item4" onClick={closeMenu}>மரியாயின் சேனை</Link></li>,
                <li><Link to="/வின்சென்ட் தெ பால் சங்கம்" className="dropdown-item4" onClick={closeMenu}>வின்சென்ட் தெ பால் சங்கம்</Link></li>,
                <li><Link to="/கத்தோலிக்க சேவா சங்கம்" className="dropdown-item4" onClick={closeMenu}>கத்தோலிக்க சேவா சங்கம்</Link></li>
              ]),
              renderSubDropdown("உருவாக்க அமைப்புகள்", "p2", [
                <li><Link to="/பாலர் சபை" className="dropdown-item4" onClick={closeMenu}>பாலர் சபை</Link></li>,
                <li><Link to="/சிறார் இயக்கம்" className="dropdown-item4" onClick={closeMenu}>சிறார் இயக்கம்</Link></li>,
                <li><Link to="/இளம் கிறித்தவ மாணாக்கர் இயக்கம்" className="dropdown-item4" onClick={closeMenu}>இளம் கிறித்தவ மாணாக்கர் இயக்கம்</Link></li>,
                <li><Link to="/இளையோர் இயக்கம் ( ஆண்கள்)" className="dropdown-item4" onClick={closeMenu}>இளையோர் இயக்கம் ( ஆண்கள்)</Link></li>,
                <li><Link to="/இளையோர் இயக்கம் ( பெண்கள்)" className="dropdown-item4" onClick={closeMenu}>இளையோர் இயக்கம் ( பெண்கள்)</Link></li>,
                <li><Link to="/பெண்கள் இயக்கம்" className="dropdown-item4" onClick={closeMenu}>பெண்கள் இயக்கம்</Link></li>,
                <li><Link to="/விவிலியப் பணிக்குழு" className="dropdown-item4" onClick={closeMenu}>விவிலியப் பணிக்குழு</Link></li>
              ]),
              renderSubDropdown("சேவை அமைப்புகள்", "p3", [
                <li><Link to="/பெண்கள் கிராம முன்னேற்றச் சங்கம்" className="dropdown-item4" onClick={closeMenu}>பெண்கள் கிராம முன்னேற்றச் சங்கம்</Link></li>,
                <li><Link to="/கோல்பிங் இயக்கம்" className="dropdown-item4" onClick={closeMenu}>கோல்பிங் இயக்கம்</Link></li>,
                <li><Link to="/கைகள் தன்னம்பிக்கை இயக்கம்" className="dropdown-item4" onClick={closeMenu}>கைகள் தன்னம்பிக்கை இயக்கம்</Link></li>,
                <li><Link to="/அடித்தள முழுவளர்ச்சி சங்கம்" className="dropdown-item4" onClick={closeMenu}>அடித்தள முழுவளர்ச்சி சங்கம்</Link></li>
              ]),
              renderSubDropdown("வழிபாட்டு அமைப்புகள்", "p4", [
                <li><Link to="/வழிபாட்டுக் குழு" className="dropdown-item4" onClick={closeMenu}>வழிபாட்டுக் குழு</Link></li>,
                <li><Link to="/பாடகர் குழு" className="dropdown-item4" onClick={closeMenu}>பாடகர் குழு</Link></li>,
                <li><Link to="/பீடச்சினார்" className="dropdown-item4" onClick={closeMenu}>பீடச்சினார்</Link></li>
              ])
            ])}

            {renderDropdown("Gallery", "gallery", [
              <li><Link className="dropdown-item4" to="/images-category" onClick={closeMenu}>Images</Link></li>,
              <li><Link className="dropdown-item4" to="/videos" onClick={closeMenu}>Videos</Link></li>
            ])}

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
