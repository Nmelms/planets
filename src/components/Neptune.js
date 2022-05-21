import React, {useState, useEffect} from 'react'
import { Row, Col } from 'react-bootstrap'
import planetImg from "../assets/planet-neptune.svg"
import interalImg from "../assets/planet-neptune-internal.svg"
import srcIcon from "../assets/icon-source.svg"
import surfaceImg from "../assets/geology-neptune.png"
import { ListGroup } from 'react-bootstrap'
import Layout from './Layout'

  export default function Neptune({ data }) {
    return (
      <div>
        <Layout planetImg={planetImg} data={data}/>
      </div>
      )  
}
