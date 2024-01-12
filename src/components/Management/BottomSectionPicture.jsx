import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AppContext from "../../context/AppContext";
import "./ManagementStyle.css";

import ManajemenImg from "../../assets/img/unsplash_pAtA8xe_iVM.png";

const BottomSectionPict = () => {
  const { globalState, updateGlobalState } = useContext(AppContext);

  const memberManajemenData = [
    {
      namaLengkapMemberManajemen: "Ir. Triawan Saleh",
      jabatanManajemen: "Anggota",
      deskripsiMemberManajemen: "Norem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.",
      imageSourceManajemen: ManajemenImg,
    },
    {
      namaLengkapMemberManajemen: "Ir. Triawan Saleh",
      jabatanManajemen: "Anggota",
      deskripsiMemberManajemen: "Norem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.",
      imageSourceManajemen: ManajemenImg,
    },
    {
      namaLengkapMemberManajemen: "Ir. Triawan Saleh",
      jabatanManajemen: "Anggota",
      deskripsiMemberManajemen: "Norem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.",
      imageSourceManajemen: ManajemenImg,
    },
    {
      namaLengkapMemberManajemen: "Ir. Triawan Saleh",
      jabatanManajemen: "Anggota",
      deskripsiMemberManajemen: "Norem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.",
      imageSourceManajemen: ManajemenImg,
    },
    {
      namaLengkapMemberManajemen: "Ir. Triawan Saleh",
      jabatanManajemen: "Anggota",
      deskripsiMemberManajemen: "Norem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.",
      imageSourceManajemen: ManajemenImg,
    },
  ];

  return (
    <div>
      <div className="bottom-section-pict-container">
        {memberManajemenData.map((item) => (
          <div className="pict-list-management-member-wrapper">
            <div className="management-member-image-wrapper">
              <img src={item.imageSourceManajemen} alt="img" />
            </div>
            <div className="management-member-text-wrapper">
              <p className="overlay-text-management-member-tittle">{item.namaLengkapMemberManajemen}</p>
              <p className="overlay-text-management-member-role">{item.jabatanManajemen}</p>
              <p className="overlay-text-management-member-desc">{item.deskripsiMemberManajemen}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BottomSectionPict;
