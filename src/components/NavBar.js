import React from 'react'
import {Navbar, Row, Col, Container, Nav} from 'react-bootstrap'
import { Link } from "react-router-dom"



export default function NavBar() {
  return (
    <div  >
      <Navbar variant="dark" className="p-3 bg-transparent border-dark border-bottom"  >
        <Row className="navBar" className="w-100">
          <Col className="pl-5">
          <Navbar.Brand className="ml-2" href="#home">THE PLANETS</Navbar.Brand>
          </Col>
          <Col className="d-flex justify-content-end" >
            <Nav className=" d-flex">
              <Nav.Link href="/mercury">MERCURY</Nav.Link>
              <Nav.Link href="/venus">VENUS</Nav.Link>
              <Nav.Link href="/">EARTH</Nav.Link>
              <Nav.Link href="/mars">MARS</Nav.Link>
              <Nav.Link href="/jupiter">JUPITER</Nav.Link>
              <Nav.Link href="/saturn">SATURN</Nav.Link>
              <Nav.Link href="/uranus">URANUS</Nav.Link>
              <Nav.Link href="/neptune">NEPTUNE</Nav.Link>
            </Nav>
            </Col>
        </Row>
      </Navbar>
    </div>
  )
}
