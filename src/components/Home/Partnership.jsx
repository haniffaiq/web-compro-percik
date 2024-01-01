import React, { useContext } from "react";
import { Carousel, ConfigProvider } from "antd";
import AppContext from "../../context/AppContext";
import Lipi from "../../assets/icon/Group 2.svg";
import Bni from "../../assets/icon/Layer_x5F_1.svg";
import Telkomsel from "../../assets/icon/Layer_x0020_1.svg";

const Partnership = () => {
  const { globalState, updateGlobalState } = useContext(AppContext);
  console.log(globalState, "DIHeader");

  return (
    <>
      <div className="flex flex-col gap-2 items-center p-14 bg-[#E4E4E4]">
        <div className="text-5xl font-bold mb-10">Partnership</div>
        <div className="flex gap-28">
          <img src={Lipi} />
          <img src={Bni} />
          <img src={Telkomsel} />
        </div>
      </div>
    </>
  );
};

export default Partnership;
