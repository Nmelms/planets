import React from "react";
import hamburgerIcon from "../assets/icon-hamburger.svg";
import { Link } from "react-router-dom";

export default function NavBar({ handleClick }) {
  return (
    <nav className="navBar">
      <h2>
        <Link className="navLink navTitle" to="/">
          THE PLANETS
        </Link>
      </h2>
      <div className="planetLinks">
        <Link className="navLink" to="/mercury">
          MERCURY
        </Link>
        <Link className="navLink" to="/venus">
          VENUS
        </Link>
        <Link className="navLink" to="/">
          EARTH
        </Link>
        <Link className="navLink" to="/mars">
          MARS
        </Link>
        <Link className="navLink" to="/jupiter">
          JUPITER
        </Link>
        <Link className="navLink" to="/saturn">
          SATURN
        </Link>
        <Link className="navLink" to="/uranus">
          URANUS
        </Link>
        <Link className="navLink" to="/neptune">
          NEPTUNE
        </Link>
      </div>
      <img
        alt="menu icon"
        onClick={() => handleClick()}
        className="hamburgerIcon"
        src={hamburgerIcon}
      />
    </nav>
  );
}
