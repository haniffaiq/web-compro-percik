import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import AppContext from "../../context/AppContext";
import AboutUs from "./About";
import Visi from "./Visi";
import Filosofi from "./Filosofi";
import Riwayat from "./Riwayat";
import Struktur from "./Struktur";

import { useRef } from "react";
import Statistik from "./Statistik";
import Sambutan from "./Sambutan";
import Prinsip from "./Prinsip";
import Akreditasi from "./Akreditasi";

const About = () => {
  const maknaRef = useRef(null);
  const riwayatRef = useRef(null);
  const prinsipRef = useRef(null);
  const visiMisiRef = useRef(null);
  const strukturRef = useRef(null);
  const sambutanRef = useRef(null);
  const akreditasiRef = useRef(null);

  const scrollToRef = (ref) => {
    if (ref && ref.current) {
      const offset = 100; // Ganti dengan nilai offset yang diinginkan
      const elementTopPosition = ref.current.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementTopPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
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
            <p className="text-black text-3xl lg:text-5xl lg:px-[145px]" style={{ fontFamily: "Hedvig Letters Serif, serif" }}>
              {globalState.globalProperty === "IND" ? "Tentang Kami" : "About Us"}
            </p>
          </div>
          {/* <div className="yellow-bar-header border-t-7 border-yellow-400 w-103 absolute top-218 left-125 lg:static lg:border-0"></div> */}
        </div>
      </div>

      <div className="flex gap-1 lg:ml-[125px] py-2 mt-[28px] justify-start ml-[42px] lg:justify-start  lg:px-[145px] lg:px-[145px]">
        <Link to="/" className="text-lg lg:text-lg text-sm tracking-widest" style={{ fontFamily: "Maven Pro" }}>
          {globalState.globalProperty === "IND" ? "BERANDA" : "HOME"}
        </Link>
        <span className="text-lg lg:text-lg text-sm tracking-widest" style={{ fontFamily: "Maven Pro" }}>
          {" "}
          &gt;{" "}
        </span>
        <Link to="/about" className="font-bold text-lg lg:text-lg text-sm tracking-widest" style={{ fontFamily: "Maven Pro" }}>
          {globalState.globalProperty === "IND" ? "TENTANG KAMI" : "ABOUT US"}
        </Link>
      </div>

      <div className="lg:grid lg:grid-cols-7">
        <div className="lg:grid lg:grid-row lg:col-span-6">
          <div ref={sambutanRef}>
            <Sambutan />
          </div>
          <div ref={riwayatRef}>
            <Riwayat />
          </div>
          <div ref={maknaRef}>
            <Filosofi />
          </div>
          <div ref={prinsipRef}>
            <Prinsip />
          </div>
          <div ref={visiMisiRef}>
            <Visi />
          </div>
          <div ref={strukturRef}>
            <Struktur />
          </div>
          <div ref={akreditasiRef}>
            <Akreditasi />
          </div>

          {/* <Riwayat2 /> */}
          {/* <Visi /> */}
          {/* <Misi /> */}
          {/* <Prestasi /> */}
          {/* <Galeri /> */}
        </div>

        <div className="h-[1000px] sticky top-0 z-10 lg:block hidden">
          <div className="mt-32 grid grid-rows justify-center">
            <button
              onClick={() => handleClick(sambutanRef)}
              className="m-1 px-8 py-2 rounded-lg text-left hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 focus:bg-blue-500 focus:text-white focus:ring-offset-2 border-b-4"
            >
              Sambutan
            </button>
            <button
              onClick={() => handleClick(riwayatRef)}
              className="m-1 px-8 py-2 rounded-lg text-left hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 focus:bg-blue-500 focus:text-white focus:ring-offset-2 border-b-4 "
            >
              Riwayat Singkat
            </button>
            <button
              onClick={() => handleClick(maknaRef)}
              className="m-1 px-8 py-2 rounded-lg text-left hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 focus:bg-blue-500 focus:text-white focus:ring-offset-2 border-b-4"
            >
              Makna Logo
            </button>
            <button
              onClick={() => handleClick(prinsipRef)}
              className="m-1 px-8 py-2 rounded-lg text-left hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 focus:bg-blue-500 focus:text-white focus:ring-offset-2 border-b-4"
            >
              Prinsip Dasar
            </button>
            <button
              onClick={() => handleClick(visiMisiRef)}
              className="m-1 px-8 py-2 rounded-lg text-left hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 focus:bg-blue-500 focus:text-white focus:ring-offset-2 border-b-4"
            >
              Visi, Misi & Value
            </button>
            <button
              onClick={() => handleClick(strukturRef)}
              className="m-1 px-8 py-2 rounded-lg text-left hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 focus:bg-blue-500 focus:text-white focus:ring-offset-2 border-b-4"
            >
              Struktur Organisasi
            </button>
            <button
              onClick={() => handleClick(akreditasiRef)}
              className="m-1 px-8 py-2 rounded-lg text-left hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 focus:bg-blue-500 focus:text-white focus:ring-offset-2 border-b-4"
            >
              SK Akreditasi
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
