import React from 'react'
import {Navbar, Row, Col, Container, Nav} from 'react-bootstrap'
import hamburgerIcon from '../assets/icon-hamburger.svg'
import { Link } from "react-router-dom"



export default function NavBar({handleClick}) {

 
  return (
    <div  >
      <Navbar  variant="dark" className="p-3 navBar h-25  border-dark border-bottom"  >
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
      </Navbar>
    </div>
  )
}
