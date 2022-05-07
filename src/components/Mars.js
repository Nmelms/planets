import React, {useState, useEffect} from 'react'
import { Row, Col } from 'react-bootstrap'
import earthImg from "../assets/planet-mars.svg"
import interalImg from "../assets/planet-mars-internal.svg"
import srcIcon from "../assets/icon-source.svg"
import surfaceImg from "../assets/geology-mars.png"
import { ListGroup } from 'react-bootstrap'

export default function Mars() {
    const info = {
    overview:{
      text: `  Mars is the fourth planet from the Sun and the second-smallest planet 
      in the Solar System, being larger than only Mercury. In English, Mars 
      carries the name of the Roman god of war and is often referred to as 
      the "Red Planet".
    `,
      pic: earthImg,
      id: "overview",
      wiki: "https://en.wikipedia.org/wiki/Mars"
    },
    internal: {
      text: `Like Earth, Mars has differentiated into a dense metallic core overlaid 
      by less dense materials. Scientists initially determined that the core 
      is at least partially liquid. Current models of its interior imply a 
      core consisting primarily of iron and nickel with about 16–17% sulfur.`,
      pic: interalImg,
      id: "internal",
      wiki: "https://en.wikipedia.org/wiki/Mars#Internal_structure"
    },
    surface: {
      text: `  Mars is a terrestrial planet whose surface consists of minerals containing 
      silicon and oxygen, metals, and other elements that typically make up rock. 
      The surface is primarily composed of tholeiitic basalt, although parts are 
      more silica-rich than typical basalt.`,
      pic: surfaceImg,
      id: "surface",
      wiki: "https://en.wikipedia.org/wiki/Mars#Surface_geology"

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
        <h1>MARS</h1>
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
            <Col className="boxItem border-dark mxx-2 w-25">
              <div className="mt-4">
                <h6 >ROTATION TIME</h6>
                <h1>1.03 Days</h1>
              </div>
            </Col>
            <Col className="boxItem border-dark mx-2 w-25">
              <div className="mt-4">
                <h5>REVOLUTION TIME</h5>
                <h1>1.88 Years</h1>
              </div>
            </Col>
            <Col className="boxItem border-dark mx-2 w-25">
              <div className="mt-4">
                <h5>RADIUS</h5>
                <h1>3,389.5 KM</h1>
              </div>
            </Col>
            <Col className="boxItem border-dark mx-2 w-25">
              <div className="mt-4">
                <h5>AVERAGE TEMP.</h5>
                <h1>-28°c</h1>
              </div>
            </Col>
        </Row>
    </Row>
  </div>
  )
}
