import React, { useContext } from "react";
// import { Carousel, ConfigProvider } from "antd";
import AppContext from "../../context/AppContext";
import Lipi from "../../assets/icon/Group 2.svg";
import Bni from "../../assets/icon/Layer_x5F_1.svg";
import Telkomsel from "../../assets/icon/Layer_x0020_1.svg";
import Logo from "../../assets/logo/logo_white.png";

const PartnershipReal = () => {
  const { globalState, updateGlobalState } = useContext(AppContext);
  console.log(globalState.globalProperty);

  return (
    <>
      <div className="lg:lg:flex flex-col items-center justify-center lg:flex-row">
        <div className=" bg-[#E1E1E1] lg:bg-[#E1E1E1] w-full lg:pt-[28px] lg:mb-[28px]">
          <p className="text-black text-lg font-bold lg:text-3xl mt-16 lg:mt-0 lg:ml-32 py-2 text-center">{globalState.globalProperty === "IND" ? "PARTNERSHIP" : "PARTNERSHIP"}</p>
        </div>
      </div>
      <div className="flex flex-col gap-2 items-center p-3">
        <div className="flex justify-center gap-5 lg:gap-28 lg:h-[150px] lg:w-full h-[50px] w-[350px] overflow-y-hidden container">
          {/* <div className="h-full border py-3"> */}
          <div>
            <img loading="lazy" src={Bni} className="" alt="logo" />
          </div>
          <div>
            <img loading="lazy" src={Lipi} className="" alt="logo" />
          </div>
          <div>
            <img loading="lazy" src={Telkomsel} className="" alt="logo" />
          </div>
          {/* <img loading="lazy" src={Logo} className="h-full" alt="logo" />
          <img loading="lazy" src={Logo} className="h-full" alt="logo" />
          <img loading="lazy" src={Logo} className="h-full" alt="logo" />
          <img loading="lazy" src={Logo} className="h-full" alt="logo" />
          <img loading="lazy" src={Logo} className="h-full" alt="logo" />
          <img loading="lazy" src={Logo} className="h-full" alt="logo" />
          <img loading="lazy" src={Logo} className="h-full" alt="logo" /> */}
          {/* </div> */}
        </div>
      </div>
    </>
  );
};

export default PartnershipReal;
