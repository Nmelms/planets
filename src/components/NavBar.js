import React from 'react'
import {Navbar, Row, Col, Container, Nav} from 'react-bootstrap'
import { Link } from "react-router-dom"



export default function NavBar() {
  return (
    <div  >
      <Navbar  variant="dark" className="p-3 navBar  border-dark border-bottom"  >
        <Row className=" d-flex justify-content-center" className="w-100">
          <Navbar.Brand className="align-self-center navTitle ml-2" href="/">THE PLANETS</Navbar.Brand>
          <Col className="d-flex justify-content-center" >
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
      </Navbar>
    </div>
  )
}
