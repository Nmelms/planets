import NavBar from "./components/NavBar.js"
import Earth from "./components/Earth.js"
import Mars from "./components/Mars.js"

import {Routes, BrowserRouter as Router, Switch, Route} from 'react-router-dom'


function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/earth" element={<Earth />} />
        <Route path="/mars" element={<Mars />} />
      </Routes>

    </Router>
  );
}

export default App;
