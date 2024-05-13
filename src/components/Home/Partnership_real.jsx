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
      <div className="lg:lg:flex flex-col items-center justify-center lg:flex-row">
        <div className="relative bg-[#E1E1E1] lg:bg-[#E1E1E1] w-full lg:pt-[28px] lg:mb-[28px]">
          <p className="text-black text-lg font-bold lg:text-3xl mt-16 lg:mt-0 py-2 text-center relative z-20">{globalState.globalProperty === "IND" ? "PARTNERSHIP" : "PARTNERSHIP"}</p>
        </div>





      </div>
      <div class="flex flex-col gap-2 items-center py-8 ">
        <div class="flex justify-center lg:gap-36 lg:h-full lg:w-full h-[50px] w-[350px] overflow-y-hidden container">
          <div class="flex items-center">
            <img loading="lazy" src={Bni} class="" alt="logo" />
          </div>
          <div class="flex items-center">
            <img loading="lazy" src={Lipi} class="" alt="logo" />
          </div>
          <div class="flex items-center">
            <img loading="lazy" src={Telkomsel} class="" alt="logo" />
          </div>
        </div>
      </div>

    </>
  );
};

export default PartnershipReal;
