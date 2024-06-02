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
            <p className="text-black  text-3xl lg:text-5xl lg:px-[250px]" style={{ fontFamily: "Hedvig Letters Serif, serif" }}>
              {globalState.globalProperty === "IND" ? "Sekolah" : "School"}
            </p>
          </div>
          {/* <div className="yellow-bar-header border-t-7 border-yellow-400 w-103 absolute top-218 left-125 lg:static lg:border-0"></div> */}
        </div>
      </div>
      <div className="flex gap-1 lg:ml-[125px] py-2 mt-[28px] justify-center lg:justify-start justify-center lg:justify-start  justify-center lg:justify-start lg:px-[250px]">
        <Link to="/" className="text-lg">
          {globalState.globalProperty === "IND" ? "Beranda" : "Home"}
        </Link>
        <span className="text-lg"> &gt; </span>
        <Link to="/school" className="font-bold text-lg">
          {globalState.globalProperty === "IND" ? "Sekolah" : "School"}
        </Link>
      </div>
      {/* <Alur /> */}
      <Daftar />
    </>
  );
};

export default School;
