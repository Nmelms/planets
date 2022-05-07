import React, {useState, useEffect} from 'react'
import { Row, Col } from 'react-bootstrap'
import earthImg from "../assets/planet-neptune.svg"
import interalImg from "../assets/planet-neptune-internal.svg"
import srcIcon from "../assets/icon-source.svg"
import surfaceImg from "../assets/geology-neptune.png"
import { ListGroup } from 'react-bootstrap'

export default function Neptune() {
    const info = {
    overview:{
      text: `    Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar 
      System, it is the fourth-largest planet by diameter, the third-most-massive planet, 
      and the densest giant planet. It is 17 times the mass of Earth, more massive than 
      its near-twin Uranus.
    
    `,
      pic: earthImg,
      id: "overview",
      wiki: "https://en.wikipedia.org/wiki/Neptune"
    },
    internal: {
      text:   `   Neptune's internal structure resembles that of Uranus. Its atmosphere forms about 5% 
      to 10% of its mass and extends perhaps 10% to 20% of the way towards the core. 
      Increasing concentrations of methane, ammonia and water are found in the lower regions.`,
      pic: interalImg,
      id: "internal",
      wiki: "https://en.wikipedia.org/wiki/Neptune#Internal_structure"
    },
    surface: {
      text: `  Neptune's atmosphere is 80% hydrogen and 19% helium. A trace amount of methane is also 
      present. Prominent absorption bands of methane exist at wavelengths above 600 nm, in 
      the red and infrared portion of the spectrum.`,
      pic: surfaceImg,
      id: "surface",
      wiki: "https://en.wikipedia.org/wiki/Neptune#Atmosphere"

    }
  }

  const [des, setDes] = useState(info.overview)
  return (
    <div style={{postion: "relative"}} className="page">
    <Row className="vh-100 d-flex ">
      <Col stye={{position: 'absolute'}} lg={7} className=" h-75 align-items-center  justify-content-center d-flex">
        {des.id === 'overview' && <img  style={{position: 'absolute'}} src={info.overview.pic} />}
        {des.id === 'internal' && <img style={{position: 'absolute'}} src={info.internal.pic} />}
        {des.id === 'surface' && 
          <div lg={7} className=" align-items-center justify-content-center d-flex">
            <img className="earthImg" src={info.overview.pic} />
            <img className="secondImg" src={info.surface.pic} />
          </div>}
      </Col>
      <Col stye={{position: 'absolute'}} className=" d-flex page" lg={5}>
        <div className="d-flex flex-column align-items-start justify-content-center" >
        <h1>NEPTUNE</h1>
        <p style={{height: '150px'}} >{des.text}</p>
        <h3>Source : <a href={des.wiki}>Wikipedia</a>
            <img  src={srcIcon} />
        </h3>
        <ListGroup className="h-25 list w-100">
          <ListGroup.Item  className=" border-top border-dark bg-transparent listItem mb-2" action onClick={() => setDes(info.overview)}>OverView</ListGroup.Item>
          <ListGroup.Item  className=" border-top border-dark bg-transparent listItem mb-2" action onClick={() => setDes(info.internal)}>Internaaaaa</ListGroup.Item>
          <ListGroup.Item  className=" border-top border-dark bg-transparent listItem mb-2" action onClick={() => setDes(info.surface)}>Surface</ListGroup.Item>
        </ListGroup>
        
        </div>
        </Col>
        <Row className="bottomRow h-25 align-items-start">
            <Col className="boxItem border-dark mx-2 w-25">
              <div className="mt-4">
                <h6 >ROTATION TIME</h6>
                <h1>16.08 Hours</h1>
              </div>
            </Col>
            <Col className="boxItem border-dark mx-2 w-25">
              <div className="mt-4">
                <h5>REVOLUTION TIME</h5>
                <h1>164.79 Years</h1>
              </div>
            </Col>
            <Col className="boxItem border-dark mx-2 w-25">
              <div className="mt-4">
                <h5>RADIUS</h5>
                <h1>24,622 KM</h1>
              </div>
            </Col>
            <Col className="boxItem border-dark mx-2 w-25">
              <div className="mt-4">
                <h5>AVERAGE TEMP.</h5>
                <h1>-201°C</h1>
              </div>
            </Col>
        </Row>
    </Row>
  </div>
  )
}
