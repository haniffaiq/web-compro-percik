import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AppContext from "../../context/AppContext";
import ManagementTittle from "./ManagementTittle";
import TopSectionPict from "./TopSectionPicture";
import "./ManagementStyle.css";
import ManajemenImg from "../../assets/img/unsplash_pAtA8xe_iVM.png";
import data from "../../assets/json/management.json";

const Management = () => {
  const { globalState, updateGlobalState } = useContext(AppContext);
  const [selectedButton, setSelectedButton] = useState("Pembina");

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };



  return (
    <>
      <div className="flex gap-1 ml-[35px] py-9">
        <Link to="/" className="">
          {globalState.globalProperty === "IND" ? "Home" : "Home"}
        </Link>
        <span> / </span>
        <Link to="/project" className="">
          {globalState.globalProperty === "IND" ? "Manajement" : "Management"}
        </Link>
      </div>
      <ManagementTittle />
      <div className="triple-button-container">
        <button className={selectedButton === "Pembina" ? "selected" : ""} onClick={() => handleButtonClick("Pembina")}>
          PEMBINA
        </button>
        <button className={selectedButton === "Pengawas" ? "selected" : ""} onClick={() => handleButtonClick("Pengawas")}>
          PENGAWAS
        </button>
        <button className={selectedButton === "Pengurus" ? "selected" : ""} onClick={() => handleButtonClick("Pengurus")}>
          PENGURUS
        </button>
      </div>
      <TopSectionPict selectedButton={selectedButton} manajemenData={data.managementData} />
    </>
  );
};

export default Management;
