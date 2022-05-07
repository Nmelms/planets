import React, {useState, useEffect} from 'react'
import { Row, Col } from 'react-bootstrap'
import earthImg from "../assets/planet-venus.svg"
import interalImg from "../assets/planet-venus-internal.svg"
import srcIcon from "../assets/icon-source.svg"
import surfaceImg from "../assets/geology-venus.png"
import { ListGroup } from 'react-bootstrap'

export default function Venus() {
    const info = {
    overview:{
      text: `  Venus is the second planet from the Sun. It is named after the 
      Roman goddess of love and beauty. As the brightest natural object 
      in Earth's night sky after the Moon, Venus can cast shadows and 
      can be, on rare occasions, visible to the naked eye in broad daylight.
    `,
      pic: earthImg,
      id: "overview",
      wiki: "https://en.wikipedia.org/wiki/Venus"
    },
    internal: {
      text:   `The similarity in size and density between Venus and Earth suggests 
      they share a similar internal structure: a core, mantle, and crust. 
      Like that of Earth, Venusian core is most likely at least partially 
      liquid because the two planets have been cooling at about the same rate.`,
      pic: interalImg,
      id: "internal",
      wiki: "https://en.wikipedia.org/wiki/Venus#Internal_structure"
    },
    surface: {
      text: `  Much of the Venusian surface appears to have been shaped by volcanic activity. 
      Venus has several times as many volcanoes as Earth, and it has 167 large 
      volcanoes that are over 100 km (60 mi) across. The only volcanic complex 
      of this size on Earth is the Big Island of Hawaii.`,
      pic: surfaceImg,
      id: "surface",
      wiki: "https://en.wikipedia.org/wiki/Venus#Surface_geology"

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
          <div  lg={7} className="align-items-center justify-content-center d-flex">
            <img className="earthImg" src={info.overview.pic} />
            <img className="secondImg" src={info.surface.pic} />
          </div>}
      </Col>
      <Col stye={{position: 'absolute'}} className=" d-flex page" lg={5}>
        <div className="d-flex flex-column align-items-start justify-content-center" >
        <h1>VENUS</h1>
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
                <h1>243 Days</h1>
              </div>
            </Col>
            <Col className="boxItem border-dark mx-2 w-25">
              <div className="mt-4">
                <h5>REVOLUTION TIME</h5>
                <h1>224.7 Days</h1>
              </div>
            </Col>
            <Col className="boxItem border-dark mx-2 w-25">
              <div className="mt-4">
                <h5>RADIUS</h5>
                <h1>6,051.8 KM</h1>
              </div>
            </Col>
            <Col className="boxItem border-dark mx-2 w-25">
              <div className="mt-4">
                <h5>AVERAGE TEMP.</h5>
                <h1>471°C</h1>
              </div>
            </Col>
        </Row>
    </Row>
  </div>
  )
}
