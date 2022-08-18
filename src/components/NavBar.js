import React from "react";
import { Navbar, Row, Col, Container, Nav } from "react-bootstrap";
import hamburgerIcon from "../assets/icon-hamburger.svg";
import { Link } from "react-router-dom";

export default function NavBar({ handleClick }) {
  return (
    <nav className="navBar">
      {/* <Navbar  variant="dark" className="p-3 navBar h-25  border-dark border-bottom"  >
        <Row className=" d-flex navRow justify-content-center" className="w-100">
         <Col className="d-flex navCol" >
          <Navbar.Brand className="align-self-start navTitle ml-2" href="/">THE PLANETS</Navbar.Brand>
            <img onClick={() => handleClick()} className="hamburgerIcon" src={hamburgerIcon} />
            <Nav className="nav vw-100  d-flex">
              <Nav.Link className="navLink" href="/mercury">MERCURY</Nav.Link>
              <Nav.Link className="navLink" href="/venus">VENUS</Nav.Link>
              <Nav.Link className="navLink" href="/">EARTH</Nav.Link>
              <Nav.Link className="navLink" href="/mars">MARS</Nav.Link>
              <Nav.Link className="navLink" href="/jupiter">JUPITER</Nav.Link>
              <Nav.Link className="navLink" href="/saturn">SATURN</Nav.Link>
              <Nav.Link className="navLink" href="/uranus">URANUS</Nav.Link>
              <Nav.Link className="navLink" href="/neptune">NEPTUNE</Nav.Link>
            </Nav>
            </Col>
        </Row>
      </Navbar> */}
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
