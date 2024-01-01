// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppProvider from "./context/AppProvider";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Index";
import About from "./components/About/About";
import School from "./components/School/School";
import Project from "./components/Project/Project";
import Event from "./components/Event/Event";
import Management from "./components/Management/Management";
import Footer from "./components/Footer/Footer";

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
        <Footer />
      </Router>
    </AppProvider>
  );
}

export default App;
