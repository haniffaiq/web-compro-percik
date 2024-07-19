import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import AppContext from "../../context/AppContext";
import Alur from "./Alur";
// import Prestasi from "../About/Prestasi";
import Daftar from "./Daftar";
// import data from "../../assets/json/school";

const School = () => {
  const { globalState, updateGlobalState } = useContext(AppContext);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div>
        <div className="lg:flex flex-col items-center justify-center lg:flex-row lg:justify-start hidden">
          <div className="tittle-container mb-[-28px] bg-[#ebebeb] lg:mb-0 lg:bg-transparent w-full">
            <p className="text-black text-3xl lg:text-5xl lg:px-[145px]" style={{ fontFamily: "Hedvig Letters Serif, serif" }}>
              {globalState.globalProperty === "IND" ? "SEKOLAH" : "SCHOOL"}
            </p>
          </div>
          {/* <div className="yellow-bar-header border-t-7 border-yellow-400 w-103 absolute top-218 left-125 lg:static lg:border-0"></div> */}
        </div>
      </div>
      <div className="flex gap-1 lg:ml-[125px] py-2 mt-[28px] justify-start ml-[42px] lg:justify-start lg:justify-center lg:justify-start lg:justify-start lg:px-[145px] lg:justify-start lg:px-[145px]">
        <Link to="/" className="lg:text-lg text-sm">
          {globalState.globalProperty === "IND" ? "BERANDA" : "HOME"}
        </Link>
        <span className="lg:text-lg text-sm"> &gt; </span>
        <Link to="/school" className="font-bold lg:text-lg tracking-widest text-sm" style={{ fontFamily: "Maven Pro" }}>
          {globalState.globalProperty === "IND" ? "SEKOLAH" : "SCHOOL"}
        </Link>
      </div>
      {/* <Alur /> */}
      <Daftar />
    </>
  );
};

export default School;
