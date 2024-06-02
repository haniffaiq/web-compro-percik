import React, { useContext, useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import AppContext from "../../context/AppContext";
import data from "../../assets/json/about.json";
import Modal from "../Modal/Modal";
import { IoMdClose } from "react-icons/io";

const Sambutan = () => {
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
      <div className="p-9 lg:px-0 lg:py-4 lg:ml-32">
        {/* <div className="text-center text-3xl lg:text-5xl font-bold mb-10 ">
          TENTANG KAMI
        </div> */}
        {selectedData.map((value, index) => {
          return (
            <div
              className="w-full rounded-xl lg:my-10 flex "
            >
              <div className="hidden lg:grid grid-cols-4 mt-0 lg:mt-10 lg:gap-0 gap-5">
                <div className="lg:col-span-3 lg:grid lg:grid-cols-3 border-4 rounded-lg">
                  <div className="flex justify-center h-full lg:h-[500px] lg:w-auto align-center">
                    <img
                      loading="lazy"
                      src={require(`../../assets/${value.img}`)}
                      alt="img"
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <div className="lg:col-span-2 p-5 lg:p-6">
                    <div className="text-[12px] lg:text-4xl font-bold">
                      {value.title}
                    </div>
                    <div className="text-[4px] lg:text-lg font-bold lg:mt-2">{value.name}</div>
                    <div className="flex flex-col gap-1 text-[4px] lg:text-lg mt-5 lg:mt-10 ">
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
                  <div className="h-full flex justify-center items-start">
                    <div className="px-8 align-center text-center w-full">
                      <div className="text-black  text-3xl font-bold lg:text-5xl">{globalState.globalProperty === "IND" ? "DAFTAR PPDB" : "REGISTER PPDB"}</div>
                      <div className="text-black  text-lg font-bold lg:text-lg">{globalState.globalProperty === "IND" ? "Pendaftaran Peserta Didik Baru" : "Register New Students"}</div>
                      <div className="text-black  text-lg font-semibold bg-[#ebebeb] hover:bg-yellow-400 rounded-full mt-8 py-2 ">{globalState.globalProperty === "IND" ? "TK Perguruan 'Cikini'" : "TK Perguruan 'Cikini'"}</div>
                      <div className="text-black  text-lg font-semibold bg-[#ebebeb] hover:bg-yellow-400 rounded-full mt-6 py-2 ">{globalState.globalProperty === "IND" ? "SD Perguruan 'Cikini'" : "SD Perguruan 'Cikini'"}</div>
                      <div className="text-black  text-lg font-semibold bg-[#ebebeb] hover:bg-yellow-400 rounded-full mt-6 py-2 ">{globalState.globalProperty === "IND" ? "SMP Perguruan 'Cikini'" : "SMP Perguruan 'Cikini'"}</div>
                      <div className="text-black  text-lg font-semibold bg-[#ebebeb] hover:bg-yellow-400 rounded-full mt-6 py-2 ">{globalState.globalProperty === "IND" ? "SMA 1 Perguruan 'Cikini'" : "SMA 1 Perguruan 'Cikini'"}</div>
                      <div className="text-black  text-lg font-semibold bg-[#ebebeb] hover:bg-yellow-400 rounded-full mt-6 py-2 ">{globalState.globalProperty === "IND" ? "SMA 2 Perguruan 'Cikini'" : "SMA 2 Perguruan 'Cikini'"}</div>
                      <div className="text-black  text-lg font-semibold bg-[#ebebeb] hover:bg-yellow-400 rounded-full mt-6 py-2 ">{globalState.globalProperty === "IND" ? "SMK 1 Perguruan 'Cikini'" : "SMK 1 Perguruan 'Cikini'"}</div>
                      <div className="text-black  text-lg font-semibold bg-[#ebebeb] hover:bg-yellow-400 rounded-full mt-6 py-2 ">{globalState.globalProperty === "IND" ? "SMK 2 MUSIK" : "SMK 2 MUSIK"}</div>
                      <div className="text-black  text-lg font-semibold bg-[#ebebeb] hover:bg-yellow-400 rounded-full mt-6 py-2 ">{globalState.globalProperty === "IND" ? "Perguruan 'Cikini'" : "Perguruan 'Cikini'"}</div>
                      <div className="text-black  text-lg font-semibold bg-[#ebebeb] hover:bg-yellow-400 rounded-full mt-6 py-2 ">{globalState.globalProperty === "IND" ? "SMK 3 Perguruan 'Cikini'" : "SMK 3 Perguruan 'Cikini'"}</div>
                      <div className="text-black  text-lg font-semibold bg-[#ebebeb] hover:bg-yellow-400 rounded-full mt-6 py-2 ">{globalState.globalProperty === "IND" ? "SMK Perguruan 'Cikini'" : "SMK Perguruan 'Cikini'"}</div>
                      <div className="text-black  text-lg font-semibold bg-[#ebebeb] hover:bg-yellow-400 rounded-full mt-6 py-2 ">{globalState.globalProperty === "IND" ? "SMK KIIC KARAWANG" : "SMK KIIC KARAWANG"}</div>
                      <div className="text-black  text-lg font-semibold bg-[#ebebeb] hover:bg-yellow-400 rounded-full mt-6 py-2" style={{ whiteSpace: 'pre-line' }}> {globalState.globalProperty === "IND" ? "ISTN \n (Institut Sains & Teknologi Nasional)" : "ISTN \n (Institut Sains & Teknologi Nasional)"}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="h-full flex flex-col justify-end">
                    <div className="mb-[-28px] lg:mb-0 p-8 justify-center align-center text-;eft w-full">
                      <div className="text-black  text-lg font-bold lg:text-2xl" style={{ whiteSpace: 'pre-line' }} >{globalState.globalProperty === "IND" ? "MEMBUKA PENDAFTARAN \n PESERTA DIDIK BARU \n UNTUK TAHUN PELAJARAN \n 2024/2025" : "OPENING REGISTRATION \n FOR NEW STUDENTS \n FOR THE ACADEMIC YEAR \n 2024/2025"}</div>
                      <div className="text-black  text-lg font-bold lg:text-lg  mt-16 text-left" style={{ whiteSpace: 'pre-line' }} >{globalState.globalProperty === "IND" ? "Atau Daftar langsung :" : "Onsite Registration :"}</div>
                      <div className="text-black  text-lg lg:text-lg text-left	mt-8 " style={{ whiteSpace: 'pre-line' }}>{globalState.globalProperty === "IND" ? "Jl. Duren Tiga Raya No.1, \n Duren Tiga, Kec. Pancoran, \n Kota Jakarta Selatan, \n Daerah Khusus Ibukota \n Jakarta 12760" : "Jl. Duren Tiga Raya No.1, \n Duren Tiga, Kec. Pancoran,\n South Jakarta, \n Special Capital Region of \n Jakarta 12760"}</div>

                    </div>
                  </div>
                )}

              </div>



              {/* Mobile */}
              <div
                onClick={() =>
                  openModal(index, value.title, value.name, value.img)
                }
                className="lg:hidden grid grid-cols-2 mt-0 lg:mt-10 lg:gap-0 gap-5 border-4 rounded-lg "
              >
                <div className="flex flex-cols-2 h-[full] ">
                  <img
                    loading="lazy"
                    src={require(`../../assets/${value.img}`)}
                    alt="img"
                    className="object-cover rounded-lg"
                  />


                  <div className="flex flex-col justify-between  p-5 lg:p-14">
                    <div className="">
                      <div className="text-[16px] lg:text-4xl font-bold leading-normal	">
                        {value.title}
                      </div>
                      <div className="text-[16px] lg:text-[25px] font-bold leading-normal	">
                        {value.name}
                      </div>
                    </div>
                    <button
                      onClick={() =>
                        openModal(index, value.title, value.name, value.img)
                      }
                      className="text-[12px] text-center bg-[#40E0D0] lg:px-6 lg:py-2 w-[120px] rounded-lg p-1"
                    >
                      Lihat Sambutan
                    </button>
                  </div>
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
                    <div className="text-[20px] font-semibold text-start leading-normal	">
                      {selectedManagement.title}
                    </div>
                    <div className="text-[24px] mt-5 font-bold text-start leading-normal	">
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

export default Sambutan;
