import NavBar from "./components/NavBar.js";
import Earth from "./components/Earth.js";
import Mars from "./components/Mars.js";
import Mercury from "./components/Mercury";
import Venus from "./components/Venus";
import Jupiter from "./components/Jupiter";
import Saturn from "./components/Saturn";
import Neptune from "./components/Neptune";
import Uranus from "./components/Uranus";
import MobileMenu from "./components/MobileMenu";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import data from "./data/data.json";
import { useState, useEffect } from "react";

function App() {
  const [menuActive, setMenuActive] = useState(false);

  useEffect(() => {
    if (menuActive) {
      document.querySelector(".wrapper").style.display = "none";
    } else {
      document.querySelector(".wrapper").style.display = "grid";
    }
  }, [menuActive]);

  const handleClick = () => {
    setMenuActive(!menuActive);
  };

  return (
    <Router>
      <NavBar handleClick={handleClick} />
      {menuActive && (
        <MobileMenu
          menuActive={menuActive}
          setMenuActive={setMenuActive}
          data={data}
        />
      )}
      <Routes>
        <Route path="/" element={<Earth data={data[2]} />} />
        <Route path="/mars" element={<Mars data={data[3]} />} />
        <Route path="/mercury" element={<Mercury data={data[0]} />} />
        <Route path="/venus" element={<Venus data={data[1]} />} />
        <Route path="/jupiter" element={<Jupiter data={data[4]} />} />
        <Route path="/saturn" element={<Saturn data={data[5]} />} />
        <Route path="/neptune" element={<Neptune data={data[7]} />} />
        <Route path="/uranus" element={<Uranus data={data[6]} />} />
      </Routes>
    </Router>
  );
}

export default App;
