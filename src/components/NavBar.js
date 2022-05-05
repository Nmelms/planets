import React from 'react'
import {Navbar, Row, Col, Container, Nav} from 'react-bootstrap'
import { Link } from "react-router-dom"



export default function NavBar() {
  return (
    <div>
      <Navbar className="p-3 bg-dark" bg="light" >
        <Row className="w-100">
          <Col className="pl-5">
          <Navbar.Brand className="ml-2" href="#home">THE PLANETS</Navbar.Brand>
          </Col>
          <Col className="d-flex justify-content-end" >
            <Nav className=" d-flex">
              <Nav.Link href="">MERCURY</Nav.Link>
              <Nav.Link href="">VENUS</Nav.Link>
              <Nav.Link href="">EARTH</Nav.Link>
              <Nav.Link href="">MARS</Nav.Link>
              <Nav.Link href="">JUPITER</Nav.Link>
              <Nav.Link href="">SATURN</Nav.Link>
              <Nav.Link href="">URANUS</Nav.Link>
              <Nav.Link href="">NEPTUNE</Nav.Link>
            </Nav>
            </Col>
        </Row>
      </Navbar>
    </div>
  )
}
