import React, {useState, useEffect} from 'react'
import { Row, Col, ListGroup, Container, Image } from 'react-bootstrap'
import planetImg from "../assets/planet-earth.svg"
import internalImg from "../assets/planet-earth-internal.svg"
import srcIcon from "../assets/icon-source.svg"
import surfaceImg from "../assets/geology-earth.png"
import Layout from "./Layout.js"




export default function Earth({ data }) {

  return (
    <div>
       <Layout surfaceImg={surfaceImg} internalImg={internalImg} planetImg={planetImg} data={data}/>
    </div>
  )
    
}
