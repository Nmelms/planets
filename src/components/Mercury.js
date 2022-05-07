import React, {useState, useEffect} from 'react'
import { Row, Col } from 'react-bootstrap'
import earthImg from "../assets/planet-mercury.svg"
import interalImg from "../assets/planet-mercury-internal.svg"
import srcIcon from "../assets/icon-source.svg"
import surfaceImg from "../assets/geology-mercury.png"
import { ListGroup } from 'react-bootstrap'

export default function Mercury() {
    const info = {
    overview:{
      text: `Mercury is the smallest planet in the Solar System and the 
      closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, 
      the shortest of all the Sun's planets. Mercury is one of four terrestrial
       planets in the Solar System, and is a rocky body like Earth.".
    `,
      pic: earthImg,
      id: "overview",
      wiki: "https://en.wikipedia.org/wiki/Mercury_(planet)"
    },
    internal: {
      text: `Mercury appears to have a solid silicate crust and mantle overlying a solid,
       iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core.
        The planet's density is the second highest in the Solar System at 5.427 g/cm3 , 
        only slightly less than Earth's density.`,
      pic: interalImg,
      id: "internal",
      wiki: "https://en.wikipedia.org/wiki/Mercury_(planet)#Internal_structure"
    },
    surface: {
      text: `Mercury's surface is similar in appearance to that of the Moon, 
      showing extensive mare-like plains and heavy cratering, indicating that it has been 
      geologically inactive for billions of years. It is more heterogeneous than either Mars's
       or the Moon’s.`,
      pic: surfaceImg,
      id: "surface",
      wiki: "https://en.wikipedia.org/wiki/Mercury_(planet)#Surface_geology"

    }
  }

  const [des, setDes] = useState(info.overview)
  return (
    <div className="page">
    <Row className="vh-100 d-flex ">
      <Col lg={7} className="p-5 align-items-end justify-content-center d-flex">
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
        <h1>MERCURY</h1>
        <p style={{height: '150px'}} >{des.text}</p>
        <h3>Source : <a href={des.wiki}>Wikipedia</a>
            <img  src={srcIcon} />
        </h3>
        <ListGroup className="list w-100">
          <ListGroup.Item  className=" border-top border-dark bg-transparent listItem mb-2" action onClick={() => setDes(info.overview)}>OverView</ListGroup.Item>
          <ListGroup.Item  className=" border-top border-dark bg-transparent listItem mb-2" action onClick={() => setDes(info.internal)}>Internaaaaa</ListGroup.Item>
          <ListGroup.Item  className=" border-top border-dark bg-transparent listItem mb-2" action onClick={() => setDes(info.surface)}>Surface</ListGroup.Item>
        </ListGroup>
        
        </div>
        </Col>
        <Row className="bottomRow">
            <Col className="boxItem border-dark m-4 w-25">
              <div className="mt-4">
                <h6 >ROTATION TIME</h6>
                <h1>58.6 Days</h1>
              </div>
            </Col>
            <Col className="boxItem border-dark m-4 w-25">
              <div className="mt-4">
                <h5>REVOLUTION TIME</h5>
                <h1>87.97 Days</h1>
              </div>
            </Col>
            <Col className="boxItem border-dark m-4 w-25">
              <div className="mt-4">
                <h5>RADIUS</h5>
                <h1>2,439.7 KM</h1>
              </div>
            </Col>
            <Col className="boxItem border-dark m-4 w-25">
              <div className="mt-4">
                <h5>AVERAGE TEMP.</h5>
                <h1>430°c</h1>
              </div>
            </Col>
        </Row>
    </Row>
  </div>
  )
}
