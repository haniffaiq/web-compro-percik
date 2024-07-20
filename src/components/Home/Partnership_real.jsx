import React, { useContext } from "react";
// import { Carousel, ConfigProvider } from "antd";
import AppContext from "../../context/AppContext";
import Lipi from "../../assets/img/Home/BNI.webp";
import Bni from "../../assets/img/Home/BSI.webp";
import Telkomsel from "../../assets/img/Home/mandiri.webp";

const PartnershipReal = () => {
  const { globalState, updateGlobalState } = useContext(AppContext);
  console.log(globalState.globalProperty);

  return (
    <>
      <div className="lg:mb-[55px]">
        <div className="lg:lg:flex flex-col items-center justify-center lg:flex-row ">
          <div className="relative bg-[#034694] lg:bg-[#034694] lg:w-[118] lg:mx-0 mx-20 rounded-lg">
            <div className="text-white text-lg font-bold lg:text-xl lg:mt-0 text-center relative z-20 lg:py-[2px] lg:px-[20px]" style={{ letterSpacing: 4 }}>
              {globalState.globalProperty === "IND" ? "BANK" : "BANK"}
            </div>
          </div>
        </div>
        <div class="flex lg:flex-row py-16 px-[90px] lg:mx-[200px] items-center ">
          <div class="flex flex-col lg:flex-row justify-center lg:gap-28 lg:h-full lg:w-full h-full gap-12 ">
            <div class="flex items-center ">
              <img loading="lazy" src={Bni} class="w-[300px] lg:w-full" alt="logo" />
            </div>
            <div class="flex items-center">
              <img loading="lazy" src={Lipi} class="w-[300px] lg:w-full" alt="logo" />
            </div>
            <div class="flex items-center">
              <img loading="lazy" src={Telkomsel} class="w-[300px] lg:w-full" alt="logo" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PartnershipReal;
