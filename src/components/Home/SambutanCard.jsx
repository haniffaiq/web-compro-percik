import React, { useContext, useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import AppContext from "../../context/AppContext";
import data from "../../assets/json/about.json";
import Modal from "../Modal/Modal";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

const SambutanCard = () => {
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

    // setHtml3({
    //   __html: `<div>${selectedData[2].desc.replace(/\n/g, "<br><br>")}</div>`,
    // });
  };

  useEffect(() => {
    descLoader();
  }, []);

  return (
    <>
      <div className="lg:px-9 lg:py-4 lg:mx-[250px] w-full lg:w-auto mt-[30px]">
        <div className="text-center text-[22px] lg:text-2xl lg:font-bold mb-10 bg-[#034694] text-white py-4  lg:rounded-xl" style={{ letterSpacing: 1, fontFamily: "Hedvig Letters Serif, serif" }}>
          {globalState.globalProperty === "IND" ? "SAMBUTAN" : "WELCOMING"}
        </div>
        <div className="grid grid-cols-1 lg:gap-5 lg:grid-cols-1">
          <div></div>
          {selectedData.map((value, index) => {
            return (
              <div className="mt-[-60px]">
                <div className="mt-0 lg:mt-10 lg:gap-0 gap-5">
                  <div className="flex flex-col justify-center items-center">
                    <div className="">
                      <img loading="lazy" src={require(`../../assets/${value.img}`)} alt="img" className="object-cover rounded-lg lg:w-[470px] w-[300px]" />
                    </div>
                    <div className="">
                      <div className="text-lg lg:text-2xl font-bold lg:mt-2" style={{ fontFamily: "Maven Pro" }}>
                        {value.name}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mobile */}
                {/* <div
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


                                </div> */}
              </div>
            );
          })}
          <div></div>
        </div>
        <Link to="/about" className="flex item-center justify-center mt-[47px]">
          <button className="text-[12px] lg:text-[18px] text-center bg-black lg:px-6 lg:py-2 w-auto p-1 text-white px-3 rounded-md" style={{ letterSpacing: 4 }}>
            {globalState.globalProperty === "IND" ? "SELENGKAPNYA >>" : "SEE MORE >>"}
          </button>
        </Link>

        <div className="lg:hidden flex">
          <Modal isOpen={isModalOpen} onClose={closeModal}>
            {selectedManagement && (
              <>
                <button onClick={closeModal} className="flex justify-end w-full">
                  <IoMdClose />
                </button>
                <div className="modal-konten-container">
                  {/* <img
                    loading="lazy"
                    src={require(`../../assets/${selectedManagement.img}`)}
                    alt="popup"
                  ></img> */}
                  <div>
                    <div className="text-[20px] font-semibold text-start leading-normal	">{selectedManagement.title}</div>
                    <div className="text-[24px] mt-5 font-bold text-start leading-normal	">{selectedManagement.name}</div>
                    <div className="mt-3">
                      {" "}
                      <div dangerouslySetInnerHTML={html} />
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

export default SambutanCard;
