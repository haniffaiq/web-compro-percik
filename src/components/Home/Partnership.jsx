import React, { useContext } from "react";
import { Carousel, ConfigProvider } from "antd";
import AppContext from "../../context/AppContext";
import Lipi from "../../assets/icon/Group 2.svg";
import Bni from "../../assets/icon/Layer_x5F_1.svg";
import Telkomsel from "../../assets/icon/Layer_x0020_1.svg";
import Logo from "../../assets/logo/logo.svg";

const Partnership = () => {
  const { globalState, updateGlobalState } = useContext(AppContext);
  console.log(globalState, "DIHeader");

  return (
    <>
      <div className="flex flex-col gap-2 items-center p-3 bg-[#EEF6FF] lg:bg-[#F3F3F3]">
        <div className="flex justify-center gap-5 lg:gap-28 lg:h-[200px] lg:w-full h-[50px] w-[350px] overflow-y-hidden container">
          {/* <div className="h-full border py-3"> */}
          <div>
            <img src={Logo} className="h-full" alt="logo" />
          </div>
          {/* <img src={Logo} className="h-full" alt="logo" />
          <img src={Logo} className="h-full" alt="logo" />
          <img src={Logo} className="h-full" alt="logo" />
          <img src={Logo} className="h-full" alt="logo" />
          <img src={Logo} className="h-full" alt="logo" />
          <img src={Logo} className="h-full" alt="logo" />
          <img src={Logo} className="h-full" alt="logo" /> */}
          {/* </div> */}
        </div>
      </div>
    </>
  );
};

export default Partnership;
