import React, { useState } from "react";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <header className="header">
        <nav className="navbar">
          <div className="logo">Powerhouse Gym</div>
          <FontAwesomeIcon
            icon={faBars}
            className="faBars"
            onClick={() => setShowMenu(!showMenu)}
          />
          <ul className="nav-items" id={showMenu ? "hidden" : ""}>
            <Link
              to="Home"
              style={{ textDecoration: "none", padding: "5px 10px" }}
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => setShowMenu(!showMenu)}
            >
              Home
            </Link>
            <Link
              to="Trial"
              style={{ textDecoration: "none", padding: "5px 10px" }}
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => setShowMenu(!showMenu)}
            >
              Trial
            </Link>
            <Link
              to="Classes"
              style={{ textDecoration: "none", padding: "5px 10px" }}
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => setShowMenu(!showMenu)}
            >
              Classes
            </Link>
            <Link
              to="Training"
              style={{ textDecoration: "none", padding: "5px 10px" }}
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => setShowMenu(!showMenu)}
            >
              Training
            </Link>
            <Link
              to="Staff"
              style={{ textDecoration: "none", padding: "5px 10px" }}
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => setShowMenu(!showMenu)}
            >
              Staff
            </Link>
            <Link
              to="ContactUs"
              style={{ textDecoration: "none", padding: "5px 10px" }}
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => setShowMenu(!showMenu)}
            >
              Contact Us
            </Link>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
