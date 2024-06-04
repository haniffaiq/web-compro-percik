import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AppContext from "../../context/AppContext";
import data from "../../assets/json/akreditasi.json";

const Modal = ({ imgUrl, onClose }) => {
  const handleModalClick = (event) => {
    // Menutup modal hanya jika yang diklik adalah latar belakang modal itu sendiri
    if (event.target.classList.contains("bg-black")) {
      onClose();
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={handleModalClick}>
      <div className="bg-white p-8 rounded-lg">
        <img src={require(`../../assets/img/sk/${imgUrl}`)} alt="Certificate" className="max-w-full max-h-full" />
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
          Close
        </button>
      </div>
    </div>
  );
};

const Akreditasi = () => {
  const { globalState, updateGlobalState } = useContext(AppContext);
  let Selecteddata = data.bahasa;
  const [showModal, setShowModal] = useState(false);
  const [selectedImg, setSelectedImg] = useState("");

  const handleCardClick = (imgUrl) => {
    setSelectedImg(imgUrl);
    setShowModal(true);
  };
  return (
    <>
      <div className="lg:lg:flex flex-col items-center justify-center lg:flex-row lg:justify-start ">
        <div className=" w-full lg:py-[28px] bg-[#E2E5E9]">
          <div className="text-black text-xl lg:text-5xl mt-16 lg:mt-0 ml-0 lg:ml-32 py-2 text-center lg:text-left lg:px-[145px]" style={{ fontFamily: "Hedvig Letters Serif, serif" }}>
            {globalState.globalProperty === "IND" ? "SK Akreditasi" : "Accreditation Decree"}
          </div>
          {/* <div className="border-t-7 border-yellow-400 w-[103px] lg:absolute left-[125px] lg:border-[6px]"></div> */}
        </div>
      </div>
      <div className="p-9 lg:px-0 lg:py-4 lg:ml-32 lg:pl-[145px] lg:pr-28">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          {Selecteddata.map((item, index) => (
            <div key={index} className="w-full" onClick={() => handleCardClick(item.imgurl)}>
              <div className="border-4 rounded-lg p-3 h-full grid grid-row-4" style={{ height: "100%" }}>
                <div className="text-[#000] text-[14px] flex justify-center lg:text-lg font-bold">{item.title}</div>
                <div className="text-[#000] text-[14px] flex justify-center lg:text-lg">{item.subtitle}</div>
                <div className="text-[#034694] text-[14px] flex justify-center lg:text-lg font-bold">{item.owner}</div>
                <div className="text-[#000] text-[14px] flex justify-center lg:text-lg">{item.npsn}</div>
              </div>
            </div>
          ))}
        </div>

        {showModal && <Modal imgUrl={selectedImg} onClose={() => setShowModal(false)} />}
      </div>
    </>
  );
};

export default Akreditasi;
