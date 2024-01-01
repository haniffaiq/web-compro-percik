import React, { useContext } from "react";
import { Carousel, ConfigProvider } from "antd";
import AppContext from "../../context/AppContext";
import Rec1 from "../../assets/img/Rectangle18.png";
import Rec2 from "../../assets/img/Rectangle182.png";
import Rec3 from "../../assets/img/Rectangle183.png";
import Loc from "../../assets/icon/Group 3.svg";

const Sekolah = () => {
  const { globalState, updateGlobalState } = useContext(AppContext);
  console.log(globalState, "DIHeader");

  return (
    <>
      <div className="flex flex-col gap-2 p-14">
        <div className="flex justify-between ">
          <div className="text-3xl font-bold mb-10">DAFTAR SEKOLAH</div>
          <div className="text-sm">SELENGKAPNYA {">>"}</div>
        </div>
        <div className="grid grid-cols-3 gap-28">
          <div className="h-[400px] w-[400px]">
            <div
              className="h-full object-cover rounded-xl"
              style={{
                backgroundImage: `url(${Rec1})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              <div className="flex flex-col justify-end h-full p-5">
                <div className="font-bold text-3xl text-white">
                  SD Perguruan Cikini
                </div>
                <div className="flex gap-2 items-center">
                  <img src={Loc} alt="loc" />
                  <div className="text-white">
                    Jl.xxxxxxx No.xxxxx Kotaxxxxxx
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[400px] w-[400px]">
            <div
              className="h-full object-cover rounded-xl"
              style={{
                backgroundImage: `url(${Rec2})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              <div className="flex flex-col justify-end h-full p-5">
                <div className="font-bold text-3xl text-white">
                  SMP Perguruan Cikini
                </div>
                <div className="flex gap-2 items-center">
                  <img src={Loc} alt="loc" />
                  <div className="text-white">
                    Jl.xxxxxxx No.xxxxx Kotaxxxxxx
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[400px] w-[400px]">
            <div
              className="h-full object-cover rounded-xl"
              style={{
                backgroundImage: `url(${Rec3})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              <div className="flex flex-col justify-end h-full p-5">
                <div className="font-bold text-3xl text-white">
                  SMA Perguruan Cikini
                </div>
                <div className="flex gap-2 items-center">
                  <img src={Loc} alt="loc" />
                  <div className="text-white">
                    Jl.xxxxxxx No.xxxxx Kotaxxxxxx
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sekolah;
