  import React from 'react'
  import { Row, Col } from "react-bootstrap"
  
  export default function ({image, planetName, description }) {
    return (
  <div>
    <Row className="vh-100 d-flex ">
      <Col lg={8} className="align-items-center justify-content-center d-flex">
        <img  src={image}></img>
      </Col>
      <Col lg={4}>
        <h1>
          {planetName}
        </h1>
        <p>  
          {description}
        </p>
      </Col>
    </Row>
  </div>
    )
  }
  