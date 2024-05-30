import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AppContext from "../../context/AppContext";
import ManagementTittle from "./ManagementTittle";
import TopSectionPict from "./TopSectionPicture";
import VisiMisiSection from "./VisiMisiSection";
import "./ManagementStyle.css";
import data from "../../assets/json/management.json";

const Button = ({ buttonName, onClick, selected }) => (
  <button className={selected === buttonName ? "selected" : ""} onClick={() => onClick(buttonName)}>
    {buttonName}
  </button>
);

const Management = () => {
  const { globalState } = useContext(AppContext);
  const [selectedButton, setSelectedButton] = useState(globalState.globalProperty === "IND" ? "Pembina" : "Advisor");
  const [isPengurusSelected, setIsPengurusSelected] = useState(false);

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
    if (buttonName === "Pengurus" || buttonName === "Administrator") {
      setIsPengurusSelected(true);
    } else {
      setIsPengurusSelected(false);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setSelectedButton(globalState.globalProperty === "IND" ? "Pembina" : "Advisor");
    setIsPengurusSelected(false); // Reset state when globalProperty changes
  }, [globalState.globalProperty]);

  return (
    <>
      <ManagementTittle />

      <div className="flex gap-1 lg:ml-[270px] py-2 mt-[28px] justify-center lg:justify-start">
        <Link to="/" className="lg:text-lg text-sm">
          {globalState.globalProperty === "IND" ? "BERANDA" : "HOME"}
        </Link>
        <span className="lg:text-lg text-sm"> &gt; </span>
        <Link to="/management" className="font-bold lg:text-lg text-sm">
          {globalState.globalProperty === "IND" ? "MANAJEMEN" : "MANAGEMENT"}
        </Link>
      </div>

      <div className="managament-layout-main">
        <TopSectionPict selectedButton={selectedButton} manajemenData={globalState.globalProperty === "IND" ? data.bahasa : data.english} />
        <div className="triple-button-container">
          {globalState.globalProperty === "IND" ? (
            <>
              <Button buttonName="Pembina" onClick={handleButtonClick} selected={selectedButton} />

              <Button buttonName="Pengawas" onClick={handleButtonClick} selected={selectedButton} />

              <Button buttonName="Pengurus" onClick={handleButtonClick} selected={selectedButton} />
            </>
          ) : (
            <>
              <Button buttonName="Advisor" onClick={handleButtonClick} selected={selectedButton} />
              <Button buttonName="Supersivor" onClick={handleButtonClick} selected={selectedButton} />
              <Button buttonName="Administrator" onClick={handleButtonClick} selected={selectedButton} />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Management;
