import React, {useState, useEffect} from 'react'
import { Row, Col } from 'react-bootstrap'
import earthImg from "../assets/planet-earth.svg"
import interalImg from "../assets/planet-earth-internal.svg"
import srcIcon from "../assets/icon-source.svg"
import surfaceImg from "../assets/geology-earth.png"
import { ListGroup } from 'react-bootstrap'


export default function Earth() {

  const info = {
    overview:{
      text: `Third planet from the Sun and the only known planet to harbor life. 
                About 29.2% of Earth's surface is land with remaining 70.8% is 
                covered with water. Earth's distance from the Sun, physical properties 
                and geological history have allowed life to evolve and thrive.`,
      pic: earthImg,
      id: "overview",
      wiki: "https://en.wikipedia.org/wiki/Earth"
    },
    internal: {
      text: `Earth's interior, like that of the other terrestrial planets, is divided 
      into layers by their chemical or physical (rheological) properties. The 
      outer layer is a chemically distinct silicate solid crust, which is 
      underlain by a highly viscous solid mantle.`,
      pic: interalImg,
      id: "internal",
      wiki: "https://en.wikipedia.org/wiki/Earth#Internal_structure"
    },
    surface: {
      text: `The total surface area of Earth is about 510 million km2. The continental 
      crust consists of lower density material such as the igneous rocks granite 
      and andesite. Less common is basalt, a denser volcanic rock that is the 
      primary constituent of the ocean floors.`,
      pic: surfaceImg,
      id: "surface",
      wiki: "https://en.wikipedia.org/wiki/Earth#Surface"

    }
  }

  const [des, setDes] = useState(info.overview)

  return (
    <div className="page">
    <Row className="vh-100 d-flex ">
      <Col lg={7} className=" align-items-center justify-content-center d-flex">
        {des.id === 'overview' && <img style={{position: 'absolute'}} src={info.overview.pic} />}
        {des.id === 'internal' && <img style={{position: 'absolute'}} src={info.internal.pic} />}
        {des.id === 'surface' && 
          <div  lg={7} className="align-items-center justify-content-center d-flex">
            <img className="earthImg" src={info.overview.pic} />
            <img className="secondImg" src={info.surface.pic} />
          </div>}
      </Col>
      <Col className=" d-flex page" lg={5}>
        <div className="d-flex flex-column align-items-start justify-content-center" >
        <h1>EARTH</h1>
        <p>{des.text}</p>
        <h3>Source : <a href={des.wiki}>Wikipedia</a>
            <img  src={srcIcon} />
        </h3>
        <ListGroup className="list w-100">
          <ListGroup.Item style={{border: '2px solid black'}} className=" bg-transparent listItem mb-2" action onClick={() => setDes(info.overview)}>OverView</ListGroup.Item>
          <ListGroup.Item style={{border: '2px solid black'}} className=" bg-transparent listItem mb-2" action onClick={() => setDes(info.internal)}>Internaaaaa</ListGroup.Item>
          <ListGroup.Item style={{border: '2px solid black'}} className=" bg-transparent listItem mb-2" action onClick={() => setDes(info.surface)}>Surface</ListGroup.Item>
        </ListGroup>
        
        </div>
        </Col>
        <Row className="bottomRow">
            <Col className="boxItem m-4 w-25">
              <div>
                <h5>Rotation Time</h5>
                <h1>0.99 Days</h1>
              </div>
            </Col>
            <Col className="boxItem m-4 w-25">
              <div>
                <h5>Revolution Time</h5>
                <h1>365.26 Days</h1>
              </div>
            </Col>
            <Col className="boxItem m-4 w-25">
              <div>
                <h5>Radius</h5>
                <h1>6,371 KM</h1>
              </div>
            </Col>
            <Col className="boxItem m-4 w-25">
              <div>
                <h5>Average Temp.</h5>
                <h1>16°c</h1>
              </div>
            </Col>
        </Row>
    </Row>
  </div>

  )
}
