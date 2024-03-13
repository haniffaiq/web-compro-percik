import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AppContext from "../../context/AppContext";
import ManagementTittle from "./ManagementTittle";
import TopSectionPict from "./TopSectionPicture";
import "./ManagementStyle.css";
import data from "../../assets/json/management.json";

const Button = ({ buttonName, onClick, selected }) => (
  <button className={selected === buttonName ? "selected" : ""} onClick={() => onClick(buttonName)}>
    {buttonName.toUpperCase()}
  </button>
);

const Management = () => {
  const { globalState } = useContext(AppContext);
  const [selectedButton, setSelectedButton] = useState(globalState.globalProperty === "IND" ? "Pembina" : "Advisor");

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setSelectedButton(globalState.globalProperty === "IND" ? "Pembina" : "Advisor");
    console.log(globalState.globalProperty);
  }, [globalState.globalProperty]);

  return (
    <>
      <div className="flex gap-1 ml-[35px] py-9">
        <Link to="/">{globalState.globalProperty === "IND" ? "Home" : "Home"}</Link>
        <span> / </span>
        <Link to="/management">{globalState.globalProperty === "IND" ? "Manajemen" : "Management"}</Link>
      </div>

      <ManagementTittle />

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
            <Button buttonName="Supervisor" onClick={handleButtonClick} selected={selectedButton} />
            <Button buttonName="Administrator" onClick={handleButtonClick} selected={selectedButton} />
          </>
        )}
      </div>

      <TopSectionPict selectedButton={selectedButton} manajemenData={globalState.globalProperty === "IND" ? data.bahasa : data.english} />
    </>
  );
};

export default Management;
