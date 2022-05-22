import React, {useState, useEffect} from 'react'
import { Row, Col, ListGroup, Container, Image } from 'react-bootstrap'
import planetImg from "../assets/planet-jupiter.svg"
import internalImg from "../assets/planet-jupiter-internal.svg"
import srcIcon from "../assets/icon-source.svg"
import surfaceImg from "../assets/geology-jupiter.png"
import NavBar from "./NavBar.js"
import Layout from "./Layout.js"




export default function Jupiter({ data }) {

  return (
    <div>
      <Layout surfaceImg={surfaceImg} internalImg={internalImg} planetImg={planetImg} data={data}/>
    </div>
  )
}
