import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home/Home.js";
import Favourite from "./pages/Favourite/favourite";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="favourite" element={<Favourite />} />
      </Routes>
    </BrowserRouter>
  );
}

function About() {
  return (
    <div>
      <h1>This is the about page</h1>
    </div>
  );
}
function contact() {
  return (
    <div>
      <h1>This is the contact page</h1>
    </div>
  );
}

export default App;
