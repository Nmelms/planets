import NavBar from "./components/NavBar.js"
import Earth from "./components/Earth.js"
import Mars from "./components/Mars.js"
import Mercury from "./components/Mercury"
import Venus from "./components/Venus"
import Jupiter from "./components/Jupiter"
import Saturn from "./components/Saturn"
import Neptune from "./components/Neptune"
import Uranus from "./components/Uranus"
import {Routes, BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {Container} from 'react-bootstrap'
import data from './data/data.json'
import {useState } from 'react'


function App() {
  
  
  return (


    <Router >
      <NavBar />
      <Routes>
        <Route data={data} path="/" element={<Earth data={data[2]} />} />
        <Route path="/mars" element={<Mars data={data[3]} />} />
        <Route path="/mercury" element={<Mercury data={data[0]} />} />
        <Route path="/venus" element={<Venus data={data[1]} />} />
        <Route path="/jupiter" element={<Jupiter data={data[4]} />} />
        <Route path="/Saturn" element={<Saturn data={data[5]}/>} />
        <Route path="/Neptune" element={<Neptune data={data[7]}/>} />
        <Route path="/Uranus" element={<Uranus data={data[6]} />} />
      </Routes>
    </Router>
  );
}

export default App;
