import React, { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import AppContext from "../../context/AppContext";
import Alur from "./Alur";
import Prestasi from "../About/Prestasi";
import Daftar from "./Daftar";

const School = () => {
  const { globalState, updateGlobalState } = useContext(AppContext);
  console.log(globalState, "DIAbout");
  const location = useLocation();

  return (
    <>
      <div className="hidden lg:flex gap-1 ml-[35px] py-9">
        <Link to="/" className="">
          {globalState.globalProperty === "IND" ? "Home" : "Home"}
        </Link>
        <span> / </span>
        <Link to="/sekolah" className="">
          {globalState.globalProperty === "IND" ? "Sekolah" : "School"}
        </Link>
      </div>
      <Alur />
      <Daftar />
    </>
  );
};

export default School;
