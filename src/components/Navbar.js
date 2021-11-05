import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiceD20 } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [click, setClick] = useState(false);
  const handleclick = () => setClick(!click);
  const unsetClick = () => setClick(false);

  return (
    <div className="navbar">
      <nav className="nav-container">
        <Link to="/" className="nav-logo" onClick={unsetClick}>
          <FontAwesomeIcon icon={faDiceD20} />
        </Link>

        <ul
          className={click ? "nav-menu active" : "nav-menu"}
          onClick={handleclick}
        >
          <li className="nav-item">
            <NavLink
              exact
              to="/"
              onClick={handleclick}
              activeClassName="active"
              className="nav-links"
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/projects"
              activeClassName="active"
              className="nav-links"
              onClick={handleclick}
            >
              Projects
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/posts"
              onClick={handleclick}
              activeClassName="active"
              className="nav-links"
            >
              Blog post
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/about"
              onClick={handleclick}
              activeClassName="active"
              className="nav-links"
            >
              About Me!
            </NavLink>
          </li>
        </ul>

        <div className="nav-icon" onClick={handleclick}>
          <FontAwesomeIcon className="icon" icon={click ? faTimes : faBars} />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
