import React, { useContext } from "react";
// import { Carousel, ConfigProvider } from "antd";
import AppContext from "../../context/AppContext";
// import Lipi from "../../assets/icon/Group 2.svg";
// import Bni from "../../assets/icon/Layer_x5F_1.svg";
// import Telkomsel from "../../assets/icon/Layer_x0020_1.svg";
import Logo from "../../assets/logo/logo_white.png";

const Partnership = () => {
  const { globalState, updateGlobalState } = useContext(AppContext);
  console.log(globalState.globalProperty);

  return (
    <>
      <div className="flex flex-col gap-2 items-center p-3 bg-[#034DA2] lg:bg-[#034DA2]">
        <div className="flex justify-center gap-5 lg:gap-28 lg:h-[150px] lg:w-full h-[50px] w-[350px] overflow-y-hidden container">
          {/* <div className="h-full border py-3"> */}
          <div>
            <img loading="lazy" src={Logo} className="h-full" alt="logo" />
          </div>
          <div className="text-white text-[2.5vw] lg:text-[2vw] flex flex-col justify-center align-center text-center">
            <div className=" font-bold"> {globalState.globalProperty === "IND" ? "YAYASAN PERGURUAN ’CIKINI’ ADALAH PIONIR" : "THE 'CIKINI' EDUCATIONAL FOUNDATION IS A PIONEER"} <br /></div>
            <div>{globalState.globalProperty === "IND" ? "dalam membentuk karakter dan kecerdasan anak bangsa." : "in shaping the character and intelligence of the nation's children"}</div>
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

export default Partnership;
