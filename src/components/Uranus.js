import React, {useState, useEffect} from 'react'
import { Row, Col } from 'react-bootstrap'
import earthImg from "../assets/planet-uranus.svg"
import interalImg from "../assets/planet-uranus-internal.svg"
import srcIcon from "../assets/icon-source.svg"
import surfaceImg from "../assets/geology-uranus.png"
import { ListGroup } from 'react-bootstrap'

export default function Venus() {
    const info = {
    overview:{
      text: `  Uranus is the seventh planet from the Sun. Its name is a reference to the 
      Greek god of the sky, Uranus according to Greek mythology, was the great-grandfather 
      of Ares. It has the third-largest planetary radius and fourth-largest planetary 
      mass in the Solar System.
    
    `,
      pic: earthImg,
      id: "overview",
      wiki: "https://en.wikipedia.org/wiki/Uranus"
    },
    internal: {
      text:   ` The standard model of Uranus's structure is that it consists of three layers: a 
      rocky (silicate/iron–nickel) core in the centre, an icy mantle in the middle and 
      an outer gaseous hydrogen/helium envelope. The core is relatively small, with a 
      mass of only 0.55 Earth masses.`,
      pic: interalImg,
      id: "internal",
      wiki: "https://en.wikipedia.org/wiki/Uranus#Internal_structure"
    },
    surface: {
      text: `  The composition of Uranus's atmosphere is different from its bulk, consisting mainly 
      of molecular hydrogen and helium. The helium molar fraction, i.e. the number of 
      helium atoms per molecule of gas, is 0.15±0.03 in the upper troposphere.`,
      pic: surfaceImg,
      id: "surface",
      wiki: "https://en.wikipedia.org/wiki/Uranus#Atmosphere"

    }
  }

  const [des, setDes] = useState(info.overview)
  return (
    <div style={{postion: "relative"}} className="page">
    <Row className="vh-100 d-flex ">
      <Col stye={{position: 'absolute'}} lg={7} className=" h-75 align-items-center  justify-content-center d-flex">
        {des.id === 'overview' && <img style={{position: 'absolute'}} src={info.overview.pic} />}
        {des.id === 'internal' && <img style={{position: 'absolute'}} src={info.internal.pic} />}
        {des.id === 'surface' && 
          <div  lg={7} className="align-items-center justify-content-center d-flex">
            <img className="earthImg" src={info.overview.pic} />
            <img className="secondImg" src={info.surface.pic} />
          </div>}
      </Col>
      <Col stye={{position: 'absolute'}} className=" d-flex page" lg={5}>
        <div className="d-flex flex-column align-items-start justify-content-center" >
        <h1>URANUS</h1>
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
                <h1>84 Years</h1>
              </div>
            </Col>
            <Col className="boxItem border-dark mx-2 w-25">
              <div className="mt-4">
                <h5>RADIUS</h5>
                <h1>25,362 KM</h1>
              </div>
            </Col>
            <Col className="boxItem border-dark mx-2 w-25">
              <div className="mt-4">
                <h5>AVERAGE TEMP.</h5>
                <h1>-195°C</h1>
              </div>
            </Col>
        </Row>
    </Row>
  </div>
  )
}
