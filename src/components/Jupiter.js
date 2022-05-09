import React, {useState, useEffect} from 'react'
import { Row, Col } from 'react-bootstrap'
import earthImg from "../assets/planet-jupiter.svg"
import interalImg from "../assets/planet-jupiter-internal.svg"
import srcIcon from "../assets/icon-source.svg"
import surfaceImg from "../assets/geology-jupiter.png"
import { ListGroup } from 'react-bootstrap'

export default function Jupiter() {
    const info = {
    overview:{
      text: `   Jupiter is the fifth planet from the Sun and the largest in the Solar System. 
      It is a gas giant with a mass two and a half times that of all the other 
      planets in the Solar System combined, but less than one-thousandth the mass 
      of the Sun.
    `,
      pic: earthImg,
      id: "overview",
      wiki: "https://en.wikipedia.org/wiki/Jupiter"
    },
    internal: {
      text:   `  When the Juno arrived in 2016, it found that Jupiter has a very diffuse core 
      that mixes into its mantle. A possible cause is an impact from a planet of 
      about ten Earth masses a few million years after Jupiter's formation, which 
      would have disrupted an originally solid Jovian core.`,
      pic: interalImg,
      id: "internal",
      wiki: "https://en.wikipedia.org/wiki/Jupiter#Internal_structure"
    },
    surface: {
      text: `  The best known feature of Jupiter is the Great Red Spot, a persistent 
      anticyclonic storm located 22° south of the equator. It is known to have 
      existed since at least 1831, and possibly since 1665.`,
      pic: surfaceImg,
      id: "surface",
      wiki: "https://en.wikipedia.org/wiki/Jupiter#Great_Red_Spot_and_other_vortices"

    }
  }

  const [des, setDes] = useState(info.overview)
  return (
    <div style={{postion: "relative"}} className="page">
    <Row className="vh-100 d-flex ">
      <Col stye={{position: 'absolute'}} lg={7} className=" h-75 align-items-center  justify-content-center d-flex">
        {des.id === 'overview' && <img className="earthImg" style={{position: 'absolute'}} src={info.overview.pic} />}
        {des.id === 'internal' && <img className="earthImg" style={{position: 'absolute'}} src={info.internal.pic} />}
        {des.id === 'surface' && 
          <div  lg={7} className=" align-items-center justify-content-center d-flex">
            <img className="earthImg" src={info.overview.pic} />
            <img className="secondImg" src={info.surface.pic} />
          </div>}
      </Col>
      <Col stye={{position: 'absolute'}} className=" d-flex page" lg={5}>
        <div className="d-flex flex-column align-items-start justify-content-center" >
        <h1>JUPITER</h1>
        <p style={{height: '150px'}} >{des.text}</p>
        <h3>Source : <a href={des.wiki}>Wikipedia</a>
            <img  src={srcIcon} />
        </h3>
        <ListGroup className="h-25 list w-100">
          <ListGroup.Item  className=" border-top border-dark bg-transparent listItem mb-2" action onClick={() => setDes(info.overview)}>01 Overview</ListGroup.Item>
          <ListGroup.Item  className=" border-top border-dark bg-transparent listItem mb-2" action onClick={() => setDes(info.internal)}>02 Internal Structure</ListGroup.Item>
          <ListGroup.Item  className=" border-top border-dark bg-transparent listItem mb-2" action onClick={() => setDes(info.surface)}>03 Surface Geology</ListGroup.Item>
        </ListGroup>

        </div>

        </Col>
        <Row  className="bottomRow h-25 align-items-start">
            <Col  className="boxItem border-dark mx-2 w-25">
              <div className="mt-4">
                <h6 >ROTATION TIME</h6>
                <h1>9.93 Hours</h1>
              </div>
            </Col>
            <Col className="boxItem border-dark mx-2 ">
              <div className="mt-4">
                <h5>REVOLUTION TIME</h5>
                <h1>11.86 Years</h1>
              </div>
            </Col>
            <Col className="boxItem border-dark mx-2 w-25">
              <div className="mt-4">
                <h5>RADIUS</h5>
                <h1>69,911 KM</h1>
              </div>
            </Col>
            <Col className="boxItem border-dark mx-2 w-25">
              <div className="mt-4">
                <h5>AVERAGE TEMP.</h5>
                <h1>-108°C</h1>
              </div>
            </Col>
        </Row>
    </Row>
  </div>
  )
}
