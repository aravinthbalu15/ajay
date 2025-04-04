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
  <h1>
    St Joseph's Church
    <span className="newline">Kamplar</span>
  </h1>
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

                <li><Link className="dropdown-item4" to="/about" onClick={closeMenu}>About us</Link></li>
                <li><Link className="dropdown-item4" to="/history-details" onClick={closeMenu}>Our History</Link></li>
                <li><Link className="dropdown-item4" to="/about" onClick={closeMenu}>Sacred Heart Convent</Link></li>
                <li><Link className="dropdown-item4" to="/about" onClick={closeMenu}>St.Joseph's Auditorium</Link></li>

                <li><Link className="dropdown-item4" to="/old-priest" onClick={closeMenu}>Our Parish Priests</Link></li>
                <li><Link className="dropdown-item4" to="/service" onClick={closeMenu}>Our People at God's Service</Link></li>
                <li><Link className="dropdown-item4" to="/about" onClick={closeMenu}>The Substation</Link></li>

              </ul>
            </li>

            {/* Administration */}
            
            <li className="nav-item dropdown">
              <button className={`nav-link2 dropdown-toggle ${dropdownOpen === "admin" ? "open" : ""}`} onClick={() => toggleDropdown("admin")}>Administration</button>
              <ul className={`dropdown-menu3 ${dropdownOpen === "admin" ? "show" : ""}`}>
              <li><Link className="dropdown-item4" to="/ourparish" onClick={closeMenu}>Our Parish Pastoral Council</Link></li>

                <li><Link className="dropdown-item4" to="/anbiyam-co" onClick={closeMenu}>Coordination of anbiyams</Link></li>
                <li><Link className="dropdown-item4" to="/anbiyam" onClick={closeMenu}>Anbiyams</Link></li>
                
              </ul>
            </li>

            {/* Participatary */}

            <li className="nav-item dropdown">
              <button className={`nav-link2 dropdown-toggle ${dropdownOpen === "home" ? "open" : ""}`} onClick={() => toggleDropdown("pt-sr")}>Participatary Structures</button>
              <ul className={`dropdown-menu3 ${dropdownOpen === "pt-sr" ? "show" : ""}`}>
                {/* திருத்தூதுக் கழகங்கள்*/}
                <li className="nav-item dropdown35">
                      <button
                        className={`nav-link2 dropdown-toggle ${dropdownOpen === "p1" ? "open" : ""}`}
                        onClick={() => toggleDropdown("p1")}
                      >
                        திருத்தூதுக் கழகங்கள்
                      </button>
                      <ul className={`dropdown-menu33 ${dropdownOpen === "p1" ? "show" : ""}`}>
                        <li>
                          <Link className="dropdown-item4" to="/two" onClick={closeMenu}>
                            மரியாயின் சேனை
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item4" to="/two" onClick={closeMenu}>
                            கத்தோலிக்க சேவா சங்கம்
                          </Link>
                        </li>
                      </ul>
                    </li>
              {/* உருவாக்க அமைப்புகள் */}

                    <li className="nav-item dropdown35">
                      <button
                        className={`nav-link2 dropdown-toggle ${dropdownOpen === "p2" ? "open" : ""}`}
                        onClick={() => toggleDropdown("p2")}
                      >
                       உருவாக்க அமைப்புகள்
                      </button>
                      <ul className={`dropdown-menu33 ${dropdownOpen === "p2" ? "show" : ""}`}>
                        <li>
                          <Link className="dropdown-item4" to="/two" onClick={closeMenu}>
                          பாலர் சபை
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item4" to="/two" onClick={closeMenu}>
                          சிறார் இயக்கம்
                          </Link>
                        </li>
                      </ul>
                    </li>

                     {/* உருவாக்க அமைப்புகள் */}

                    <li className="nav-item dropdown35">
                      <button
                        className={`nav-link2 dropdown-toggle ${dropdownOpen === "p2" ? "open" : ""}`}
                        onClick={() => toggleDropdown("p2")}
                      >
                       உருவாக்க அமைப்புகள்
                      </button>
                      <ul className={`dropdown-menu33 ${dropdownOpen === "p2" ? "show" : ""}`}>
                        <li>
                          <Link className="dropdown-item4" to="/two" onClick={closeMenu}>
                          பாலர் சபை
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item4" to="/two" onClick={closeMenu}>
                          சிறார் இயக்கம்
                          </Link>
                        </li>
                      </ul>
                    </li>

                  
                   
              
              </ul>
            </li>


          {/* images */}

            <li className="nav-item dropdown">
              <button className={`nav-link2 dropdown-toggle ${dropdownOpen === "gallery" ? "open" : ""}`} onClick={() => toggleDropdown("gallery")}>Gallery</button>
              <ul className={`dropdown-menu3 ${dropdownOpen === "gallery" ? "show" : ""}`}>
                <li><Link className="dropdown-item4" to="/images-category" onClick={closeMenu}>Images</Link></li>
                <li><Link className="dropdown-item4" to="/videos" onClick={closeMenu}>Videos</Link></li>
              </ul>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link2" to="/" onClick={closeMenu}>Schedule</Link>
            </li> */}
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
