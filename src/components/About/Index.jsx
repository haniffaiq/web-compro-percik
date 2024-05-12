import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import AppContext from "../../context/AppContext";
import AboutUs from "./About";
import Visi from "./Visi";
import Prestasi from "./Prestasi";
import Galeri from "./Galeri";
import Misi from "./Misi";
import Filosofi from "./Filosofi";
import Riwayat from "./Riwayat";

const About = () => {
  const { globalState, updateGlobalState } = useContext(AppContext);
  console.log(globalState.globalProperty);
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div>
        <div className="lg:lg:flex flex-col items-center justify-center lg:flex-row lg:justify-start hidden hidden">
          <div className="tittle-container mb-[-28px] bg-[#ebebeb] lg:mb-0 lg:bg-transparent w-full">
            <p className="text-black font-segoeui text-3xl font-bold lg:text-5xl">{globalState.globalProperty === "IND" ? "TENTANG KAMI" : "ABOUT US"}</p>
          </div>
          <div className="yellow-bar-header border-t-7 border-yellow-400 w-103 absolute top-218 left-125 lg:static lg:border-0"></div>
        </div>
      </div>
      <div className="flex gap-1 lg:ml-[125px] py-9 mt-[28px] justify-center lg:justify-start justify-center lg:justify-start">
        <Link to="/" className="text-lg lg:text-lg text-sm">
          {globalState.globalProperty === "IND" ? "Beranda" : "Home"}
        </Link>
        <span className="text-lg lg:text-lg text-sm"> &gt; </span>
        <Link to="/about" className="font-bold text-lg lg:text-lg text-sm">
          {globalState.globalProperty === "IND" ? "TENTANG KAMI" : "ABOUT US"}
        </Link>
      </div>
      <AboutUs />
      <Filosofi />
      <Riwayat />
      {/* <Visi /> */}
      {/* <Misi /> */}
      {/* <Prestasi /> */}
      <Galeri />
    </>
  );
};

export default About;
