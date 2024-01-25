import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AppContext from "../../context/AppContext";
import "./ManagementStyle.css";

import ManajemenImg from "../../assets/img/unsplash_pAtA8xe_iVM.png";

const TopSectionPict = () => {
  const { globalState, updateGlobalState } = useContext(AppContext);

  const manajemenData = [
    {
      namaLengkapManajemen: "Ir. Budiono Kartohadiprodjo",
      jabatanManajemen: "Ketua",
      deskripsiManajemen: "Norem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.",
      imageSourceManajemen: ManajemenImg,
    },
    {
      namaLengkapManajemen: "Dr. Setiawan Nazir, M.Kes",
      jabatanManajemen: "Sekretaris",
      deskripsiManajemen: "Norem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.",
      imageSourceManajemen: ManajemenImg,
    },
  ];

  return (
    <div>
      <div className="top-section-pict-container">
        {manajemenData.map((item, index) => (
          <div key={index} className={`pict-list-management-wrapper ${index === 1 ? "custom-style" : ""}`}>
            <div className="management-image-wrapper">
              <img src={item.imageSourceManajemen} alt="img" />
            </div>
            <div className="management-text-wrapper">
              <p className="overlay-text-management-tittle">{item.namaLengkapManajemen}</p>
              <p className="overlay-text-management-role">{item.jabatanManajemen}</p>
              <p className="overlay-text-management-desc">{item.deskripsiManajemen}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopSectionPict;
