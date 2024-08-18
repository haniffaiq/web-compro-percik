import React, { useContext, useState, useEffect } from "react";
import BaganPict from "../../assets/img/BaganPercikFix.png";
import BaganMobile from "../../assets/img/BaganPercikFix.png";
import AppContext from "../../context/AppContext";

const Struktur = () => {
  function isMobile() {
    return window.innerWidth <= 768; // You can adjust the width threshold as needed
  }
  const { globalState, updateGlobalState } = useContext(AppContext);
  const [isMobileScreen, setIsMobileScreen] = useState(isMobile());

  useEffect(() => {
    const handleResize = () => {
      setIsMobileScreen(isMobile());
    };

    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function MobileView() {
    return (
      <div className="lg:px-0 lg:py-4 lg:ml-32 lg:pl-[145px] lg:pr-28 lg:my-[50px] w-full h-full">
        <img src={BaganMobile} alt="bagan-organisasi" />
      </div>
    );
  }

  function DesktopView() {
    return (
      <div className="p-2 lg:px-0 lg:py-4 lg:ml-0 lg:pl-[0px] lg:pr-0 lg:my-[50px]">
        <img src={BaganPict} alt="bagan-organisasi" />
      </div>
    );
  }

  return (
    <>
      <div className="lg:lg:flex flex-col items-center justify-center lg:flex-row lg:justify-start ">
        <div className="w-full lg:py-[28px] bg-[#E2E5E9]">
          <div className="text-black text-[22px] lg:text-6xl mt-[-10px] lg:mt-0 ml-0 lg:ml-32 py-6 text-center lg:text-left lg:px-[145px]" style={{ fontFamily: "Hedvig Letters Serif, serif" }}>
            <div>
              {globalState.globalProperty === "IND" ? (
                <>
                  Bagan Organisasi <br /> Yayasan Perguruan 'CIKINI'
                </>
              ) : (
                <>
                  Organizational Structure <br /> Yayasan Perguruan 'CIKINI'
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="p-9 lg:px-0 lg:py-4 lg:ml-32 lg:pl-[145px] lg:pr-28 lg:my-[50px]">{isMobileScreen ? <MobileView /> : <DesktopView />}</div>
    </>
  );
};

export default Struktur;
