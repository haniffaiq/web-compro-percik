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
import Riwayat2 from "./Riwayat2";


import { useRef } from 'react';
import Statistik from "./Statistik";

const About = () => {

  const maknaRef = useRef(null);
  const riwayatRef = useRef(null);
  const prinsipRef = useRef(null);
  const visiMisiRef = useRef(null);
  const strukturRef = useRef(null);
  const statistikRef = useRef(null);


  const scrollToRef = (ref) => {
    if (ref && ref.current) {
      const offset = 100; // Ganti dengan nilai offset yang diinginkan
      const elementTopPosition = ref.current.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementTopPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const handleClick = (ref) => {
    scrollToRef(ref);
  };
  const { globalState, updateGlobalState } = useContext(AppContext);
  console.log(globalState.globalProperty);
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div>

        <div className="lg:lg:flex flex-col items-center justify-center lg:flex-row lg:justify-start hidden">
          <div className="tittle-container mb-[-28px] bg-[#ebebeb] lg:mb-0 lg:bg-transparent w-full">
            <p className="text-black  text-3xl font-bold lg:text-5xl">{globalState.globalProperty === "IND" ? "Tentang Kami" : "About Us"}</p>
          </div>
          {/* <div className="yellow-bar-header border-t-7 border-yellow-400 w-103 absolute top-218 left-125 lg:static lg:border-0"></div> */}
        </div>
      </div>


      <div className="flex gap-1 lg:ml-[125px] py-2 mt-[28px] justify-center lg:justify-start justify-center lg:justify-start">
        <Link to="/" className="text-lg lg:text-lg text-sm">
          {globalState.globalProperty === "IND" ? "Beranda" : "Home"}
        </Link>
        <span className="text-lg lg:text-lg text-sm"> &gt; </span>
        <Link to="/about" className="font-bold text-lg lg:text-lg text-sm">
          {globalState.globalProperty === "IND" ? "Tentang Kami" : "About Us"}
        </Link>
      </div>






      <div className="lg:grid lg:grid-cols-7">

        <div className="grid grid-row lg:col-span-6">
          {/* <AboutUs /> */}
          <div ref={maknaRef}>
            <Filosofi />
          </div>
          <div ref={riwayatRef}>
            <Riwayat />
          </div>
          <div ref={prinsipRef}>
            <Filosofi />
          </div>
          <div ref={visiMisiRef}>
            <Filosofi />
          </div>
          <div ref={strukturRef}>
            <Filosofi />
          </div>
          <div ref={statistikRef}>
            <Statistik />
          </div>
          {/* <Riwayat2 /> */}
          {/* <Visi /> */}
          {/* <Misi /> */}
          {/* <Prestasi /> */}
          {/* <Galeri /> */}
        </div>

        <div className="h-[1000px] sticky top-0 z-10 lg:block hidden">
          <div className="mt-32 grid grid-rows justify-center">
            <button onClick={() => handleClick(maknaRef)} className="m-1 px-8 py-2 rounded-lg text-left hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 focus:bg-blue-500 focus:text-white focus:ring-offset-2">Makna Logo</button>
            <button onClick={() => handleClick(riwayatRef)} className="m-1 px-8 py-2 rounded-lg text-left hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 focus:bg-blue-500 focus:text-white focus:ring-offset-2">Riwayat</button>
            <button onClick={() => handleClick(prinsipRef)} className="m-1 px-8 py-2 rounded-lg text-left hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 focus:bg-blue-500 focus:text-white focus:ring-offset-2">Prinsip Dasar</button>
            <button onClick={() => handleClick(visiMisiRef)} className="m-1 px-8 py-2 rounded-lg text-left hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 focus:bg-blue-500 focus:text-white focus:ring-offset-2">Visi, Misi & Value</button>
            <button onClick={() => handleClick(strukturRef)} className="m-1 px-8 py-2 rounded-lg text-left hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 focus:bg-blue-500 focus:text-white focus:ring-offset-2">Struktur Organisasi</button>
            <button onClick={() => handleClick(statistikRef)} className="m-1 px-8 py-2 rounded-lg text-left hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 focus:bg-blue-500 focus:text-white focus:ring-offset-2">Statistik</button>

          </div>
        </div>
      </div>

    </>
  );
};

export default About;
