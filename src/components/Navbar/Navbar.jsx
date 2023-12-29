import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AppContext from "../../context/AppContext";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as INFlag } from "../../assets/in.svg";
import { ReactComponent as ENFlag } from "../../assets/en.svg";

const Navbar = () => {
  const { globalState, updateGlobalState } = useContext(AppContext);
  console.log("Global State:", globalState);

  return (
    <>
      <div className="w-full border border-black">
        <div className="grid grid-cols-8 ml-[30px] mr-[30px] m-2 ">
          <div className="flex gap-3 col-span-3">
            <button className="">
              <Logo />
            </button>
            <button className="font-bold text-xl flex items-center">
              YAYASAN PERGURUAN CIKINI
            </button>
          </div>
          <div className="flex items-center gap-4 w-full col-span-3">
            <Link to="/">
              {globalState.globalProperty === "IND" ? "Beranda" : "Home"}
            </Link>
            <Link to="/about">
              {globalState.globalProperty === "IND"
                ? "Tentang Kami"
                : "About Us"}
            </Link>
            <Link to="/school">
              {globalState.globalProperty === "IND" ? "Sekolah" : "School"}
            </Link>
            <Link to="/project">
              {globalState.globalProperty === "IND" ? "Proyek" : "Project"}
            </Link>
            <Link to="/event">
              {globalState.globalProperty === "IND" ? "Kegiatan" : "Event"}
            </Link>
            <Link to="/management">
              {globalState.globalProperty === "IND"
                ? "Manajemen"
                : "Management"}
            </Link>
          </div>
          <div className="w-full flex justify-end items-center col-span-2 py-2">
            <div className="border-2 rounded-[8px] flex  border-[#09588D]">
              <button
                onClick={() => updateGlobalState({ globalProperty: "IND" })}
                className={
                  globalState.globalProperty === "IND"
                    ? "bg-[#09588D] rounded-l-[3px] rounded-r-[8px] w-full h-full px-3 font-bold text-white flex gap-2"
                    : "px-3 font-bold text-black flex gap-2"
                }
              >
                <div>
                  <INFlag />
                </div>
                <div>ID</div>
              </button>
              <button
                onClick={() => updateGlobalState({ globalProperty: "ENG" })}
                className={
                  globalState.globalProperty === "ENG"
                    ? " bg-[#09588D] rounded-r-[3px] rounded-l-[8px] w-full h-full px-3 font-bold text-white flex gap-2"
                    : "px-3 font-bold text-black flex gap-2"
                }
              >
                <div>
                  <ENFlag />
                </div>
                <div>EN</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
