// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppProvider from "./context/AppProvider";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import School from "./components/School/School";
import Project from "./components/Project/Project";
import Event from "./components/Event/Event";
import Management from "./components/Management/Management";

function App() {
  return (
    <AppProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/school" element={<School />} />
          <Route path="/project" element={<Project />} />
          <Route path="/event" element={<Event />} />
          <Route path="/management" element={<Management />} />
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;
