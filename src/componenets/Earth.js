import React from 'react'
import { Row, Col } from 'react-bootstrap'
import earthImg from "../assets/planet-earth.svg"

export default function Earth() {
  return (
    <>
    <Row className="vh-100 d-flex ">
      <Col lg={8} className="align-items-center justify-content-center d-flex">
        <img  src={earthImg}></img>
      </Col>
      <Col lg={4}>
        <h1>EARTH</h1>
        <p>  Third planet from the Sun and the only known planet to harbor life. 
              About 29.2% of Earth's surface is land with remaining 70.8% is 
              covered with water. Earth's distance from the Sun, physical properties 
              and geological history have allowed life to evolve and thrive.
        </p>
      </Col>
    </Row>

    </>
  )
}
