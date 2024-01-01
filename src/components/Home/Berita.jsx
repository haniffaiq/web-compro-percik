import React, { useContext } from "react";
import { Carousel, ConfigProvider } from "antd";
import AppContext from "../../context/AppContext";
import Rec1 from "../../assets/img/Rectangle108.png";
import Logo from "../../assets/icon/ant-design_user-outlined.svg";

const Berita = () => {
  const { globalState, updateGlobalState } = useContext(AppContext);
  console.log(globalState, "DIHeader");

  return (
    <>
      <div className="flex flex-col gap-2 p-14 bg-[#CCEAFF]">
        <div className="flex justify-between ">
          <div className="text-3xl font-bold mb-10">BERITA DAN ACARA</div>
          <div className="text-sm">SELENGKAPNYA {">>"}</div>
        </div>
        <div className="grid grid-cols-4 gap-5">
          <div className="border flex flex-col items-center bg-white shadow-lg rounded-lg p-3">
            <img src={Rec1} className="radius-lg object-cover w-full " />
            <div>
              <div className="text-start text-[#8d8f91] text-sm mt-3 mb-3">
                14 Juni 2022
              </div>
              <div className="font-bold text-2xl mb-5">
                Pembaruan Ruang Kelas Demi Kenyamanan Belajar
              </div>
              <div className=" text-md tracking-wider mb-5">
                Bulsheets say its helping over 10,000 ompanies automate their
                finance data.
              </div>
              <div className="flex gap-3 items-center">
                <div>
                  <img src={Logo} alt="logo" />
                </div>
                <div className="text-[#8d8f91]">Bloomberg</div>
              </div>
            </div>
          </div>
          <div className="border flex flex-col items-center bg-white shadow-md rounded-lg p-3">
            <img src={Rec1} className="radius-lg object-cover w-full " />
            <div>
              <div className="text-start text-[#8d8f91] text-sm mt-3 mb-3">
                14 Juni 2022
              </div>
              <div className="font-bold text-2xl mb-5">
                Pembaruan Ruang Kelas Demi Kenyamanan Belajar
              </div>
              <div className=" text-md tracking-wider mb-5">
                Bulsheets say its helping over 10,000 ompanies automate their
                finance data.
              </div>
              <div className="flex gap-3 items-center">
                <div>
                  <img src={Logo} alt="logo" />
                </div>
                <div className="text-[#8d8f91]">Bloomberg</div>
              </div>
            </div>
          </div>
          <div className="border flex flex-col items-center bg-white shadow-md rounded-lg p-3">
            <img src={Rec1} className="radius-lg object-cover w-full " />
            <div>
              <div className="text-start text-[#8d8f91] text-sm mt-3 mb-3">
                14 Juni 2022
              </div>
              <div className="font-bold text-2xl mb-5">
                Pembaruan Ruang Kelas Demi Kenyamanan Belajar
              </div>
              <div className=" text-md tracking-wider mb-5">
                Bulsheets say its helping over 10,000 ompanies automate their
                finance data.
              </div>
              <div className="flex gap-3 items-center">
                <div>
                  <img src={Logo} alt="logo" />
                </div>
                <div className="text-[#8d8f91]">Bloomberg</div>
              </div>
            </div>
          </div>
          <div className="border flex flex-col items-center bg-white shadow-md rounded-lg p-3">
            <img src={Rec1} className="radius-lg object-cover w-full " />
            <div>
              <div className="text-start text-[#8d8f91] text-sm mt-3 mb-3">
                14 Juni 2022
              </div>
              <div className="font-bold text-2xl mb-5">
                Pembaruan Ruang Kelas Demi Kenyamanan Belajar
              </div>
              <div className=" text-md tracking-wider mb-5">
                Bulsheets say its helping over 10,000 ompanies automate their
                finance data.
              </div>
              <div className="flex gap-3 items-center">
                <div>
                  <img src={Logo} alt="logo" />
                </div>
                <div className="text-[#8d8f91]">Bloomberg</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Berita;
