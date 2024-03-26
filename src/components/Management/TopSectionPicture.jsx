import React, { useContext, useState } from "react";
// import { Link } from "react-router-dom";
import AppContext from "../../context/AppContext";
import Modal from "../Modal/Modal";
import "./ManagementStyle.css";

const TopSectionPict = ({ selectedButton, manajemenData }) => {
  const { globalState, updateGlobalState } = useContext(AppContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedManagement, setSelectedManagement] = useState(null);

  const openModal = (managementData) => {
    setSelectedManagement(managementData);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const filteredData = manajemenData.filter((item) => item.jabatanManajemen === selectedButton);

  if (filteredData.length === 0) {
    return <div>No data available for {selectedButton}</div>;
  }

  return (
    <div>
      {filteredData.map(({ id, namaLengkapManajemen, jabatanManajemen, deskripsiManajemen, imageSourceManajemen }) => (
        <div className="top-section-pict-container" onClick={() => openModal({ namaLengkapManajemen, deskripsiManajemen })}>
          <div className="pict-list-management-wrapper">
            <div className="management-image-wrapper" key={id}>
              <img src={require(`../../assets/${imageSourceManajemen}`)} alt="img" />
            </div>
            <div className="management-text-wrapper">
              <p className="overlay-text-management-tittle">{namaLengkapManajemen}</p>
              <p className="overlay-text-management-desc">{deskripsiManajemen}</p>
            </div>
          </div>
        </div>
      ))}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {selectedManagement && (
          <>
            <h2>{selectedManagement.namaLengkapManajemen}</h2>
            <p>{selectedManagement.deskripsiManajemen}</p>
            <button onClick={closeModal}>tutup</button>
          </>
        )}
      </Modal>
    </div>
  );
};

export default TopSectionPict;
