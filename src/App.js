import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './Pages/Home';
import Models from './Pages/Models';

function App() {
  return (
    <>
      <Router>
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/models" element={<Models />} />
            {/* <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/industries" element={<Industry />} />
            <Route exact path="/services" element={<Service />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
