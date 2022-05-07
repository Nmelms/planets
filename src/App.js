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


function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Earth />} />
        <Route path="/mars" element={<Mars />} />
        <Route path="/mercury" element={<Mercury />} />
        <Route path="/venus" element={<Venus />} />
        <Route path="/jupiter" element={<Jupiter />} />
        <Route path="/Saturn" element={<Saturn />} />
        <Route path="/Neptune" element={<Neptune />} />
        <Route path="/Uranus" element={<Uranus />} />
      </Routes>

    </Router>
  );
}

export default App;
