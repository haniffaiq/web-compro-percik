import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import AppContext from "../../context/AppContext";
import AboutUs from "./About";
import Visi from "./Visi";
import Prestasi from "./Prestasi";
import Galeri from "./Galeri";
import Misi from "./Misi";
import Filosofi from "./Filosofi";

const About = () => {
  const { globalState, updateGlobalState } = useContext(AppContext);
  console.log(globalState, "DIAbout");
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="hidden lg:flex gap-1 ml-[35px] py-9">
        <Link to="/" className="">
          {globalState.globalProperty === "IND" ? "Home" : "Home"}
        </Link>
        <span> / </span>
        <Link to="/about" className="">
          {globalState.globalProperty === "IND" ? "Tentang Kami" : "About Us"}
        </Link>
      </div>
      <AboutUs />
      <Filosofi />
      {/* <Visi /> */}
      <Misi />
      <Prestasi />
      <Galeri />
    </>
  );
};

export default About;
