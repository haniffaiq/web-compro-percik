import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AppContext from "../../context/AppContext";
import ManagementTittle from "./ManagementTittle";
import TopSectionPict from "./TopSectionPicture";
import BottomSectionPict from "./BottomSectionPicture";
import "./ManagementStyle.css";

const Management = () => {
  const { globalState, updateGlobalState } = useContext(AppContext);
  const [selectedButton, setSelectedButton] = useState(null);

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
        <button className={selectedButton === "PEMBINA" ? "selected" : ""} onClick={() => handleButtonClick("PEMBINA")}>
          PEMBINA
        </button>
        <button className={selectedButton === "PENGAWAS" ? "selected" : ""} onClick={() => handleButtonClick("PENGAWAS")}>
          PENGAWAS
        </button>
        <button className={selectedButton === "PENGURUS" ? "selected" : ""} onClick={() => handleButtonClick("PENGURUS")}>
          PENGURUS
        </button>
      </div>
      <TopSectionPict />
      <BottomSectionPict />
    </>
  );
};

export default Management;
