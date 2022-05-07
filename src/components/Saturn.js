import React, {useState, useEffect} from 'react'
import { Row, Col } from 'react-bootstrap'
import earthImg from "../assets/planet-saturn.svg"
import interalImg from "../assets/planet-saturn-internal.svg"
import srcIcon from "../assets/icon-source.svg"
import surfaceImg from "../assets/geology-saturn.png"
import { ListGroup } from 'react-bootstrap'

export default function Venus() {
    const info = {
    overview:{
      text: `  Saturn is the sixth planet from the Sun and the second-largest in the Solar 
      System, after Jupiter. It is a gas giant with an average radius of about 
      nine and a half times that of Earth. It only has one-eighth the average 
      density of Earth.
    
    `,
      pic: earthImg,
      id: "overview",
      wiki: "https://en.wikipedia.org/wiki/Saturn"
    },
    internal: {
      text:   ` Despite consisting mostly of hydrogen and helium, most of Saturn's mass 
      is not in the gas phase, because hydrogen becomes a non-ideal liquid 
      when the density is above 0.01 g/cm3, which is reached at a radius 
      containing 99.9% of Saturn's mass.`,
      pic: interalImg,
      id: "internal",
      wiki: "https://en.wikipedia.org/wiki/Saturn#Internal_structure"
    },
    surface: {
      text: `  The outer atmosphere of Saturn contains 96.3% molecular hydrogen and 3.25% 
      helium by volume. The planet's most famous feature is its prominent ring 
      system, which is composed mostly of ice particles with a smaller amount 
      of rocky debris and dust. `,
      pic: surfaceImg,
      id: "surface",
      wiki: "https://en.wikipedia.org/wiki/Saturn#Atmosphere"

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
        <h1>Saturn</h1>
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
                <h1>10.8 Hours</h1>
              </div>
            </Col>
            <Col className="boxItem border-dark mx-2 w-25">
              <div className="mt-4">
                <h5>REVOLUTION TIME</h5>
                <h1>29.46 Years</h1>
              </div>
            </Col>
            <Col className="boxItem border-dark mx-2 w-25">
              <div className="mt-4">
                <h5>RADIUS</h5>
                <h1>58,232 KM</h1>
              </div>
            </Col>
            <Col className="boxItem border-dark mx-2 w-25">
              <div className="mt-4">
                <h5>AVERAGE TEMP.</h5>
                <h1>-138°C</h1>
              </div>
            </Col>
        </Row>
    </Row>
  </div>
  )
}
