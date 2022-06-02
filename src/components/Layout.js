import React, {useState, useEffect} from 'react'
import { Row, Col, ListGroup, Container, Image } from 'react-bootstrap'
import planetImg from "../assets/planet-jupiter.svg"
import interalImg from "../assets/planet-earth-internal.svg"
import srcIcon from "../assets/icon-source.svg"
import surfaceImg from "../assets/geology-earth.png"
import NavBar from "./NavBar.js"





export default function Layout({ data, planetImg, internalImg, surfaceImg }) {
  const [description, setDescription] = useState(data.overview.content)
  const [source, setSource] = useState(data.overview.source)
  const [activeElement, setActiveElement] = useState('overview')

  
  
  const handleClick = (content, source, id) =>{
    setDescription(content)
    setSource(source)
    setActiveElement(`${id}`)
  
}

  const mouseOver = (e) => {
    e.target.style.background =  `${data.color}`
    console.log('over')
  }
  const mouseLeave =(e) => {
    e.target.style.background = 'none'
  }

  return (
    <div className="wrapper">
      
      <div className="infoSelect">
        <div className="infoSelectItem">
          <button onMouseLeave={(e) => mouseLeave(e)} onMouseOver={(e) => mouseOver(e)} style={{borderBottom: activeElement === "overview" ? `2px solid ${data.color}` : ''}}    onClick={() => handleClick(data.overview.content, data.overview.source, 'overview')} id="overview" >01&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;OVERVIEW</button>
        </div>
        <div  className="infoSelectItem">
          <button onMouseLeave={(e) => mouseLeave(e)} onMouseOver={(e) => mouseOver(e)} style={{borderBottom: activeElement === "structure" ? `2px solid ${data.color}` : ''}}   onClick={() => handleClick(data.structure.content, data.structure.source, 'structure')} id="structure" >02&nbsp;&nbsp;&nbsp;&nbsp; STRUCTURE</button>
        </div>
        <div className="infoSelectItem">
        <button onMouseLeave={(e) => mouseLeave(e)} onMouseOver={(e) => mouseOver(e)} style={{borderBottom: activeElement === "surface" ? `2px solid ${data.color}` : ''}}    onClick={() => handleClick(data.geology.content, data.geology.source,'surface')} id="surface">03&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SURFACE</button>
        </div>
      </div>

      <div style={{display: 'none'}}className="navBar">
        <h2>Planets</h2>
        <div className="linkList">
          <a href="">MERCURY</a>
          <a href="">VENUS</a>
          <a href="">EARTH</a>
          <a href="">MARS</a>
          <a href="">jupiter</a>
          <a href="">SATURN</a>
          <a href="">URANUS</a>
          <a href="">NEPTUNE</a>
        </div>     
      </div>
      
      <div className="planetDiv">
        {description === data.overview.content && <img className="planetImg" src={planetImg} />}
        {description === data.structure.content && <img className="planetImg" src={internalImg} />}
        {description === data.geology.content &&  <><img className="planetImg" src={planetImg} /> <img className="surfaceImg" src={surfaceImg} /></>}
      </div>

      <div className="descriptBox">
        <h2>{data.name.toUpperCase()}</h2>
        <p>{description}</p>
        <p className="source">Source: <a href={source}>Wikipedia</a> <img className="srcIcon" src={srcIcon} /></p>       
      </div>

      <div className="stats">
        <div className="statsItem"><h4>ROTATION TIME</h4><h3>{data.rotation}</h3></div>
        <div className="statsItem"><h4>REVOLUTION TIME</h4><h3>{data.revolution}</h3></div>
        <div className="statsItem"><h4>RADIUS</h4><h3>{data.radius}</h3></div>
        <div className="statsItem"><h4>AVERAGE TEMP.</h4><h3>{data.temperature}</h3></div>
      </div>
    </div>
  )
}
