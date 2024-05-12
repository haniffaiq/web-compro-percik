import React, { useContext, useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import AppContext from "../../context/AppContext";
import data from "../../assets/json/about.json";
import Modal from "../Modal/Modal";
import { IoMdClose } from "react-icons/io";

const AboutUs = () => {
  const { globalState, updateGlobalState } = useContext(AppContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedManagement, setSelectedManagement] = useState(null);

  const openModal = (index, title, name, img) => {
    setSelectedManagement({ index, title, name, img });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  let selectedData = {};
  if (globalState.globalProperty === "IND") {
    selectedData = data.bahasa;
  } else {
    selectedData = data.english;
  }

  const [html, setHtml] = useState({ __html: "" });
  const [html2, setHtml2] = useState({ __html: "" });
  // const [html3, setHtml3] = useState({ __html: "" });

  let descLoader = () => {
    setHtml({
      __html: `<div>${selectedData[0].desc.replace(/\n/g, "<br><br>")}</div>`,
    });
    setHtml2({
      __html: `<div>${selectedData[1].desc.replace(/\n/g, "<br><br>")}</div>`,
    });
    // setHtml3({
    //   __html: `<div>${selectedData[2].desc.replace(/\n/g, "<br><br>")}</div>`,
    // });
  };

  useEffect(() => {
    descLoader();
  }, []);

  return (
    <>
      <div className="p-5 lg:p-8">
        {/* <div className="text-center text-3xl lg:text-5xl font-bold mb-10 ">
          TENTANG KAMI
        </div> */}
        {selectedData.map((value, index) => {
          return (
            <div
              className="w-full rounded-xl mt-10 flex"
            >
              <div className="hidden lg:grid grid-cols-4 mt-0 lg:mt-10 lg:gap-0 gap-5">
                <div className="lg:col-span-3 lg:grid lg:grid-cols-3 border-4 rounded-lg">
                  <div className="flex justify-center h-full lg:h-[600px] lg:w-auto align-center">
                    <img
                      loading="lazy"
                      src={require(`../../assets/${value.img}`)}
                      alt="img"
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <div className="lg:col-span-2 p-5 lg:p-14">
                    <div className="text-[12px] lg:text-4xl font-bold">
                      {value.title}
                    </div>
                    <div className="text-[10px] lg:text-[25px] font-bold">{value.name}</div>
                    <div className="flex flex-col gap-5 text-[4px] lg:text-lg mt-5 lg:mt-10 ">
                      {index == 0 ? (
                        <div dangerouslySetInnerHTML={html} />
                      ) : index == 1 ? (
                        <div dangerouslySetInnerHTML={html2} />
                      ) : (
                        <div></div>
                      )}
                    </div>
                  </div>
                </div>

                {index == 0 ? (
                  <div className="border-4 h-full">
                    <div className="mb-[-28px] lg:mb-0 p-8 justify-center align-center text-center w-full">
                      <div className="text-black font-segoeui text-3xl font-bold lg:text-5xl">{globalState.globalProperty === "IND" ? "DAFTAR PPDB" : "REGISTER PPDB"}</div>
                      <div className="text-black font-segoeui text-lg font-bold lg:text-lg">{globalState.globalProperty === "IND" ? "Pendaftaran Peserta Didik Baru" : "Register New Students"}</div>
                      <div className="text-black font-segoeui text-lg font-semibold bg-[#ebebeb] hover:bg-yellow-400 rounded-full mt-8 py-2">{globalState.globalProperty === "IND" ? "TK PERGURUAN 'CIKINI'" : "TK PERGURUAN 'CIKINI'"}</div>
                      <div className="text-black font-segoeui text-lg font-semibold bg-[#ebebeb] hover:bg-yellow-400 rounded-full mt-4 py-2">{globalState.globalProperty === "IND" ? "SD PERGURUAN 'CIKINI'" : "SD PERGURUAN 'CIKINI'"}</div>
                      <div className="text-black font-segoeui text-lg font-semibold bg-[#ebebeb] hover:bg-yellow-400 rounded-full mt-4 py-2">{globalState.globalProperty === "IND" ? "SMP PERGURUAN 'CIKINI'" : "SMP PERGURUAN 'CIKINI'"}</div>
                      <div className="text-black font-segoeui text-lg font-semibold bg-[#ebebeb] hover:bg-yellow-400 rounded-full mt-4 py-2">{globalState.globalProperty === "IND" ? "SMA 1 PERGURUAN 'CIKINI'" : "SMA 1 PERGURUAN 'CIKINI'"}</div>
                      <div className="text-black font-segoeui text-lg font-semibold bg-[#ebebeb] hover:bg-yellow-400 rounded-full mt-4 py-2">{globalState.globalProperty === "IND" ? "SMA 2 PERGURUAN 'CIKINI'" : "SMA 2 PERGURUAN 'CIKINI'"}</div>
                      <div className="text-black font-segoeui text-lg font-semibold bg-[#ebebeb] hover:bg-yellow-400 rounded-full mt-4 py-2">{globalState.globalProperty === "IND" ? "SMK 1 PERGURUAN 'CIKINI'" : "SMK 1 PERGURUAN 'CIKINI'"}</div>
                      <div className="text-black font-segoeui text-lg font-semibold bg-[#ebebeb] hover:bg-yellow-400 rounded-full mt-4 py-2">{globalState.globalProperty === "IND" ? "SMK 2 MUSIK" : "SMK 2 MUSIK"}</div>
                      <div className="text-black font-segoeui text-lg font-semibold bg-[#ebebeb] hover:bg-yellow-400 rounded-full mt-4 py-2">{globalState.globalProperty === "IND" ? "PERGURUAN 'CIKINI'" : "PERGURUAN 'CIKINI'"}</div>
                      <div className="text-black font-segoeui text-lg font-semibold bg-[#ebebeb] hover:bg-yellow-400 rounded-full mt-4 py-2">{globalState.globalProperty === "IND" ? "SMK 3 PERGURUAN 'CIKINI'" : "SMK 3 PERGURUAN 'CIKINI'"}</div>
                      <div className="text-black font-segoeui text-lg font-semibold bg-[#ebebeb] hover:bg-yellow-400 rounded-full mt-4 py-2">{globalState.globalProperty === "IND" ? "SMK PERGURUAN 'CIKINI'" : "SMK PERGURUAN 'CIKINI'"}</div>
                      <div className="text-black font-segoeui text-lg font-semibold bg-[#ebebeb] hover:bg-yellow-400 rounded-full mt-4 py-2">{globalState.globalProperty === "IND" ? "SMK KIIC KARAWANG'" : "SMK KIIC KARAWANG'"}</div>
                      <div className="text-black font-segoeui text-lg font-semibold bg-[#ebebeb] hover:bg-yellow-400 rounded-full mt-4 py-2">{globalState.globalProperty === "IND" ? "ISTN (INSTITUT SAINS DAN TEKNOLOGI NASIONAL)" : "ISTN (INSTITUT SAINS DAN TEKNOLOGI NASIONAL)"}</div>
                    </div>
                  </div>
                ) : (
                  <div className="border-4 h-full">
                    <div className="mb-[-28px] lg:mb-0 p-8 justify-center align-center text-center w-full">
                    <div className="text-black font-segoeui text-lg font-bold lg:text-lg">{globalState.globalProperty === "IND" ? "MEMBUKA PENDAFTARAN PESERTA DIDIK BARU UNTUK TAHUN PELAJARAN 2024/2025" : "MEMBUKA PENDAFTARAN PESERTA DIDIK BARU UNTUK TAHUN PELAJARAN 2024/2025"}</div>
                    <div className="text-black font-segoeui text-lg font-bold lg:text-lg  mt-16 text-left">{globalState.globalProperty === "IND" ? "Atau langsung Daftar langsung :" : "Atau langsung Daftar langsung :"}</div>
                    <div className="text-black font-segoeui text-lg lg:text-lg text-left	mt-8 ">{globalState.globalProperty === "IND" ? "Jl. Duren Tiga Raya No.1, Duren Tiga, Kec. Pancoran, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12760" : "Jl. Duren Tiga Raya No.1, Duren Tiga, Kec. Pancoran, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12760"}</div>

                    </div>
                  </div>
                )}

              </div>



              {/* Mobile */}
              <div
                onClick={() =>
                  openModal(index, value.title, value.name, value.img)
                }
                className="lg:hidden grid grid-cols-2 mt-0 lg:mt-10 lg:gap-0 gap-5"
              >
                <div className="flex flex-col justify-between  p-5 lg:p-14">
                  <div className="">
                    <div className="text-[14px] lg:text-4xl font-bold">
                      {value.title}
                    </div>
                    <div className="text-[20px] lg:text-[25px]">
                      {value.name}
                    </div>
                    {/* <div className="flex flex-col gap-5 text-[4px] lg:text-sm mt-5 lg:mt-10 ">
                      {index == 0 ? (
                        <div dangerouslySetInnerHTML={html} />
                      ) : index == 1 ? (
                        <div dangerouslySetInnerHTML={html2} />
                      ) : (
                        <div></div>
                      )}
                    </div> */}
                  </div>
                  <button
                    onClick={() =>
                      openModal(index, value.title, value.name, value.img)
                    }
                    className="text-[12px] mt-24 text-left"
                  >
                    Lihat Sambutan
                  </button>
                </div>
                <div className="flex justify-end h-full lg:h-full">
                  <img
                    loading="lazy"
                    src={require(`../../assets/${value.img}`)}
                    alt="img"
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          );
        })}
        <div className="lg:hidden flex">
          <Modal isOpen={isModalOpen} onClose={closeModal}>
            {selectedManagement && (
              <>
                <button
                  onClick={closeModal}
                  className="flex justify-end w-full"
                >
                  <IoMdClose />
                </button>
                <div className="modal-konten-container">
                  {/* <img
                    loading="lazy"
                    src={require(`../../assets/${selectedManagement.img}`)}
                    alt="popup"
                  ></img> */}
                  <div>
                    <div className="text-[20px] font-semibold text-start">
                      {selectedManagement.title}
                    </div>
                    <div className="text-[24px] mt-5 font-bold text-start">
                      {selectedManagement.name}
                    </div>
                    <div className="mt-3">
                      {selectedManagement.index == 0 ? (
                        <div dangerouslySetInnerHTML={html} />
                      ) : selectedManagement.index == 1 ? (
                        <div dangerouslySetInnerHTML={html2} />
                      ) : (
                        <div></div>
                      )}
                    </div>
                  </div>
                </div>
              </>
            )}
          </Modal>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
