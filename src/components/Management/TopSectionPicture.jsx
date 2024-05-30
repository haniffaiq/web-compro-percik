import React, { useContext } from "react";
import AppContext from "../../context/AppContext";
import logoYPC from "../../assets/img/logo YPC_PUTIH.png";
// import { Link } from "react-router-dom";

import "./ManagementStyle.css";

const TopSectionPict = ({ selectedButton, manajemenData }) => {
  const { globalState } = useContext(AppContext);
  const filteredData = manajemenData.filter((item) => item.jabatanManajemen === selectedButton);

  if (filteredData.length === 0) {
    return <div>No data available for {selectedButton}</div>;
  }

  if (selectedButton === "Pembina" || selectedButton === "Pengawas") {
    return (
      <div className="parent-container">
        {filteredData.map(({ id, namaLengkapManajemen, jabatanManajemen, deskripsiManajemen, imageSourceManajemen }) => (
          <div className="top-section-pict-container">
            <div className="pict-list-management-wrapper">
              <div className="management-image-wrapper" key={id}>
                <img loading="lazy" src={require(`../../assets/${imageSourceManajemen}`)} alt="img" />
              </div>
              <div className="management-text-wrapper">
                <p className="overlay-text-management-tittle">{namaLengkapManajemen}</p>

                <div className="overlay-text-management-desc">
                  {deskripsiManajemen.split("\n").map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
            <div className="gray-sepparator"></div>
          </div>
        ))}
      </div>
    );
  }

  if (selectedButton === "Pengurus") {
    return (
      <div className="parent-container">
        {filteredData.map(({ id, namaLengkapManajemen, jabatanManajemen, deskripsiManajemen, imageSourceManajemen }, index) => (
          <div className="top-section-pict-container">
            <div className="pict-list-management-wrapper-pengurus">
              <div className="management-image-wrapper" key={id}>
                <img loading="lazy" src={require(`../../assets/${imageSourceManajemen}`)} alt="img" />
              </div>
              <div className="management-text-wrapper">
                <p className="overlay-text-management-tittle">{namaLengkapManajemen}</p>

                <div className="overlay-text-management-desc">
                  {deskripsiManajemen.split("\n").map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
            <div className={` ${index === 0 ? "special-pak-budi-gray-sepparator" : "gray-sepparator-pengurus"}`} key={id}></div>
          </div>
        ))}
      </div>
    );
  }
};

export default TopSectionPict;
