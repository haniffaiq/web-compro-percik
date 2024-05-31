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
            <div className="p-5 lg:p-8 lg:mx-16 ">
                <div className="text-center text-3xl lg:text-5xl font-bold mb-10 bg-[#034694] text-white py-2 ">
                    SAMBUTAN
                </div>
                <div className="grid grid-cols-1 lg:gap-4 lg:grid-cols-4">
                    <div></div>
                    {selectedData.map((value, index) => {
                        return (
                            <div
                                className=""
                            >
                                <div className="mt-0 lg:mt-10 lg:gap-0 gap-5">
                                    <div className="flex flex-col justify-center items-center">
                                        <div className="">
                                            <img
                                                loading="lazy"
                                                src={require(`../../assets/${value.img}`)}
                                                alt="img"
                                                className="object-cover rounded-lg lg:w-[391px] "
                                            />
                                        </div>
                                        <div className="">
                                            <div className="text-lg lg:text-lg font-bold lg:mt-2">{value.name}</div>
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
                <Link to="/sambutan" className="flex mt-4 item-center justify-center">
                    <button className="text-[20px] text-center bg-black lg:px-6 lg:py-2 w-auto p-1 text-white px-3 rounded-md">
                        {globalState.globalProperty === "IND" ? "Selengkapnya >>" : "See More >>"}
                    </button>
                </Link>

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

export default SambutanCard;
