import React, {useState, useEffect} from 'react'
import { Row, Col } from 'react-bootstrap'
import planetImg from "../assets/planet-venus.svg"
import internalImg from "../assets/planet-venus-internal.svg"
import srcIcon from "../assets/icon-source.svg"
import surfaceImg from "../assets/geology-venus.png"
import { ListGroup } from 'react-bootstrap'
import Layout from './Layout'

  export default function Saturn({ data }) {
    return (
      <div>
        <Layout surfaceImg={surfaceImg} internalImg={internalImg} planetImg={planetImg} data={data}/>
      </div>
      )  
}