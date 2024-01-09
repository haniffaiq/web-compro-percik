import React, { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import AppContext from "../../context/AppContext";
import AboutUs from "./About";
import Visi from "./Visi";
import Prestasi from "./Prestasi";
import Galeri from "./Galeri";

const About = () => {
  const { globalState, updateGlobalState } = useContext(AppContext);
  console.log(globalState, "DIAbout");
  const location = useLocation();

  return (
    <>
      <div className="flex gap-1 ml-[35px] py-9">
        <Link to="/" className="">
          {globalState.globalProperty === "IND" ? "Home" : "Home"}
        </Link>
        <span> / </span>
        <Link to="/about" className="">
          {globalState.globalProperty === "IND" ? "Tentang Kami" : "About Us"}
        </Link>
      </div>
      <AboutUs />
      <Visi />
      <Prestasi />
      <Galeri />
    </>
  );
};

export default About;
