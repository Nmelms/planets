import React, {useState, useEffect} from 'react'
import { Row, Col, ListGroup, Container, Image } from 'react-bootstrap'
import planetImg from "../assets/planet-jupiter.svg"
import interalImg from "../assets/planet-earth-internal.svg"
import srcIcon from "../assets/icon-source.svg"
import surfaceImg from "../assets/geology-earth.png"
import NavBar from "./NavBar.js"
import Layout from "./Layout.js"




export default function Jupiter({ data }) {

  return (
    <div>
      <Layout planetImg={planetImg} data={data}/>
    </div>
  )
}
