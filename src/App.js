// src/App.js
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppProvider from "./context/AppProvider";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Index";
import About from "./components/About/Index";
import School from "./components/School/Index";
import Project from "./components/Project/Project";
import ProjectDetail from "./components/ProjectDetail/ProjectDetail";
import EventDetail from "./components/Event Detail/EventDetail";
import Event from "./components/Event/Event";
import Management from "./components/Management/Management";
import Footer from "./components/Footer/Footer";
import SchoolDetail from "./components/SchoolDetail/Index";

function App() {
  return (
    <AppProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/school" element={<School />} />
          <Route path="/school-detail/:id" element={<SchoolDetail />} />
          <Route path="/project" element={<Project />} />
          <Route path="/project-detail" element={<ProjectDetail />} />
          <Route path="/event-detail" element={<EventDetail />} />
          <Route path="/event" element={<Event />} />
          <Route path="/management" element={<Management />} />
        </Routes>
        <Footer />
      </Router>
    </AppProvider>
  );
}

export default App;
