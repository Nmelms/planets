import React, {useState, useEffect} from 'react'
import { Row, Col } from 'react-bootstrap'
import planetImg from "../assets/planet-uranus.svg"
import interalImg from "../assets/planet-uranus-internal.svg"
import srcIcon from "../assets/icon-source.svg"
import surfaceImg from "../assets/geology-uranus.png"
import { ListGroup } from 'react-bootstrap'
import Layout from './Layout'

  export default function Saturn({ data }) {
    return (
      <div>
        <Layout planetImg={planetImg} data={data}/>
      </div>
      )  
}