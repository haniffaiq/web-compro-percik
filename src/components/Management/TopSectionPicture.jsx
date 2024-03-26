import React, { useContext, useState } from "react";
// import { Link } from "react-router-dom";
import AppContext from "../../context/AppContext";
import "./ManagementStyle.css";

const TopSectionPict = ({ selectedButton, manajemenData }) => {
  const { globalState, updateGlobalState } = useContext(AppContext);
  const filteredData = manajemenData.filter((item) => item.jabatanManajemen === selectedButton);

  if (filteredData.length === 0) {
    return <div>No data available for {selectedButton}</div>;
  }

  return (
    <div>
      <div className="top-section-pict-container">
        {filteredData.map(({ id, namaLengkapManajemen, jabatanManajemen, deskripsiManajemen, imageSourceManajemen }) => (
          <div className="pict-list-management-wrapper">
            <div className="management-image-wrapper" key={id}>
              <img src={require(`../../assets/${imageSourceManajemen}`)} alt="img" />
            </div>
            <div className="management-text-wrapper">
              <p className="overlay-text-management-tittle">{namaLengkapManajemen}</p>
              <p className="overlay-text-management-desc">{deskripsiManajemen.length > 300 ? deskripsiManajemen.slice(0, 300) + '...' : deskripsiManajemen}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopSectionPict;
