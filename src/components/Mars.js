import React, {useState, useEffect} from 'react'
import { Row, Col } from 'react-bootstrap'
import planetImg from "../assets/planet-mars.svg"
import interalImg from "../assets/planet-mars-internal.svg"
import srcIcon from "../assets/icon-source.svg"
import surfaceImg from "../assets/geology-mars.png"
import { ListGroup } from 'react-bootstrap'
import Layout from "./Layout.js"

export default function Mars({ data }) {
  return (
  <div>
    <Layout planetImg={planetImg} data={data}/>
  </div>
  )
}
