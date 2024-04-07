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
        <div className="text-center text-3xl lg:text-5xl font-bold mb-10 ">
          TENTANG KAMI
        </div>
        {selectedData.map((value, index) => {
          return (
            <div
              // style={{
              //   background:
              //     "linear-gradient(279deg, #0033ff 12.46%, rgba(9, 88, 141, 0) 150%)",
              // }}
              style={{
                background:
                  "linear-gradient(100deg, #0033ff 12.46%, rgba(9, 88, 141, 0) 150%)",
              }}
              className="w-full rounded-xl mt-10"
            >
              <div className="hidden lg:grid grid-cols-2 mt-0 lg:mt-10 lg:gap-0 gap-5">
                <div className="text-white p-5 lg:p-14">
                  <div className="text-[12px] lg:text-4xl font-bold">
                    {value.title}
                  </div>
                  <div className="text-[10px] lg:text-[25px]">{value.name}</div>
                  <div className="flex flex-col gap-5 text-[4px] lg:text-sm mt-5 lg:mt-10 ">
                    {index == 0 ? (
                      <div dangerouslySetInnerHTML={html} />
                    ) : index == 1 ? (
                      <div dangerouslySetInnerHTML={html2} />
                    ) : (
                      <div></div>
                    )}
                  </div>
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

              {/* Mobile */}
              <div
                onClick={() =>
                  openModal(index, value.title, value.name, value.img)
                }
                className="lg:hidden grid grid-cols-2 mt-0 lg:mt-10 lg:gap-0 gap-5"
              >
                <div className="flex flex-col justify-between text-white p-5 lg:p-14">
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
                  <img
                    loading="lazy"
                    src={require(`../../assets/${selectedManagement.img}`)}
                    alt="popup"
                  ></img>
                  <div className="modal-konten-deskripsi-container">
                    <div className="text-[20px] font-semibold text-center">
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
