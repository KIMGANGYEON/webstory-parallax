import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Project01 from "./Project/Project01";
import Project02 from "./Project/Project02";
import Home from "./Project/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/project01" element={<Project01 />}></Route>
        <Route path="/project02" element={<Project02 />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
