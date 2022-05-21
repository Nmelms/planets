import React, {useState, useEffect} from 'react'
import { Row, Col } from 'react-bootstrap'
import planetImg from "../assets/planet-saturn.svg"
import interalImg from "../assets/planet-saturn-internal.svg"
import srcIcon from "../assets/icon-source.svg"
import surfaceImg from "../assets/geology-saturn.png"
import { ListGroup } from 'react-bootstrap'
import Layout from './Layout'

  export default function Saturn({ data }) {
    return (
      <div>
        <Layout planetImg={planetImg} data={data}/>
      </div>
      )  
}