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
      <div className="hidden lg:flex gap-1 ml-[35px] py-9 ">
        <Link to="/" className="">
          {globalState.globalProperty === "IND" ? "Home" : "Home"}
        </Link>
        <span> / </span>
        <Link to="/sekolah" className="font-bold">
          {globalState.globalProperty === "IND" ? "Sekolah" : "School"}
        </Link>
      </div>
      <Alur />
      <Daftar />
    </>
  );
};

export default School;
