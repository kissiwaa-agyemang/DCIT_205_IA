import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav from "./Pages/Nav/Nav";
import Footer from "./Pages/Footer/Footer";
import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact/Contact";
import About from "./Pages/About/About";
import Research from "./Pages/Research/Research";
import Msc from "./Pages/Msc/Msc";
import Requirement from "./Pages/Requirement/Requirement";
import Service from "./Pages/Service/Service";
import Alumni from "./Pages/Alumni/Alumni";
import UndergradCourse from "./Pages/UndergradCourse/UndergradCourse";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/research" element={<Research />} />
        <Route path="/msc" element={<Msc />} />
        <Route path="/requirement" element={<Requirement />} />
        <Route path="/service" element={<Service />} />
        <Route path="/alumni" element={<Alumni />} />
        <Route path="/undergradCourse" element={<UndergradCourse />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
