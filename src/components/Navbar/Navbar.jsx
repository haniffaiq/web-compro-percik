import React, { useContext, useState } from "react";
import { ReactComponent as Logo } from "../../assets/logo/logo.svg";
import INFlag from "../../assets/icon/in.svg";
import ENFlag from "../../assets/icon/en.svg";
import { Link, Location, useLocation } from "react-router-dom";
import AppContext from "../../context/AppContext";

const Navbar = () => {
  const { globalState, updateGlobalState } = useContext(AppContext);
  console.log("Global State:", globalState);
  const location = useLocation();
  //   const isLocation = location.pathname.split("/");

  return (
    <>
      {console.log(location, "LOCATION")}
      <div className="w-full border-b shadow-lg">
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
            <Link
              to="/"
              className={
                location.pathname === "/"
                  ? " text-black font-[600]"
                  : "text-[#6B7280] font-[600]"
              }
            >
              {globalState.globalProperty === "IND" ? "Beranda" : "Home"}
            </Link>
            <Link
              to="/about"
              className={
                location.pathname === "/about"
                  ? "text-black font-[600]"
                  : "text-[#6B7280] font-[600]"
              }
            >
              {globalState.globalProperty === "IND"
                ? "Tentang Kami"
                : "About Us"}
            </Link>
            <Link
              to="/school"
              className={
                location.pathname === "/school"
                  ? "text-black font-[600]"
                  : "text-[#6B7280] font-[600]"
              }
            >
              {globalState.globalProperty === "IND" ? "Sekolah" : "School"}
            </Link>
            <Link
              to="/project"
              className={
                location.pathname === "/project"
                  ? "text-black font-[600]"
                  : "text-[#6B7280] font-[600]"
              }
            >
              {globalState.globalProperty === "IND" ? "Proyek" : "Project"}
            </Link>
            <Link
              to="/event"
              className={
                location.pathname === "/event"
                  ? "text-black font-[600]"
                  : "text-[#6B7280] font-[600]"
              }
            >
              {globalState.globalProperty === "IND" ? "Kegiatan" : "Event"}
            </Link>
            <Link
              to="/management"
              className={
                location.pathname === "/management"
                  ? "text-black font-[600]"
                  : "text-[#6B7280] font-[600]"
              }
            >
              {globalState.globalProperty === "IND"
                ? "Manajemen"
                : "Management"}
            </Link>
          </div>
          <div className="w-full flex justify-end items-center col-span-2 py-2">
            <div className="border-2 rounded-[8px] grid grid-cols-2 border-[#09588D]">
              <button
                onClick={() => updateGlobalState({ globalProperty: "IND" })}
                className={
                  globalState.globalProperty === "IND"
                    ? "bg-[#09588D] rounded-l-[3px] rounded-r-[8px] duration-300 w-full h-full  font-bold text-white flex gap-2"
                    : " font-bold text-black flex gap-2 duration-300"
                }
              >
                <div className="flex ml-[1px] items-center gap-1">
                  <img
                    className="border rounded-full border-black"
                    src={INFlag}
                    alt="IN Flag"
                  />
                  <div>ID</div>
                </div>
              </button>
              <button
                onClick={() => updateGlobalState({ globalProperty: "ENG" })}
                className={
                  globalState.globalProperty === "ENG"
                    ? " bg-[#09588D] rounded-r-[3px] rounded-l-[8px] duration-300 w-full h-full  font-bold text-white flex gap-2"
                    : " font-bold text-black flex gap-2 "
                }
              >
                <div className="flex ml-[1px] items-center gap-1">
                  <img
                    className="border rounded-full border-black"
                    src={ENFlag}
                    alt="IN Flag"
                  />
                  <div className="">EN</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
