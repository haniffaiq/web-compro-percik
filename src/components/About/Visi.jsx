import React, { useContext, useEffect, useState } from "react";
import AppContext from "../../context/AppContext";
import ValueInd from "../../assets/img/VALUE IND.png";
import ValueEn from "../../assets/img/VALUE ENG.png";
import ValueIdMobile from "../../assets/img/VALUE MOBILE_eng.jpg"; //ini emg kebalik wkwkw
import ValueEnMobile from "../../assets/img/VALUE MOBILE_idn.jpg";

const Visi = () => {
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
    return <div className="ml-[-22px] text-black leading-normal w-[350px] mt-[-40px]">{globalState.globalProperty === "IND" ? <img src={ValueIdMobile} alt="value-pict-indo" /> : <img src={ValueEnMobile} alt="value-pict-en" />}</div>;
  }

  function DesktopView() {
    return <div className="grid grid-row gap-0 my-5 text-black leading-normal px-4">{globalState.globalProperty === "IND" ? <img src={ValueInd} alt="value-pict-indo" /> : <img src={ValueEn} alt="value-pict-en" />}</div>;
  }

  return (
    <>
      <div className="lg:lg:flex flex-col items-center justify-center lg:flex-row lg:justify-start ">
        <div className="  w-full lg:py-[28px] bg-[#E2E5E9]">
          <div className="text-black text-[28px] lg:text-6xl mt-[-20px] lg:mt-0 ml-0 lg:ml-32 py-6 text-center lg:text-left lg:px-[145px]" style={{ fontFamily: "Hedvig Letters Serif, serif" }}>
            {globalState.globalProperty === "IND" ? (
              <>
                Visi, Misi <br /> dan Value
              </>
            ) : (
              <>
                Vision, Mission <br /> and Values
              </>
            )}
          </div>
          {/* <div className="border-t-7 border-yellow-400 w-[103px] lg:absolute left-[125px] lg:border-[6px]"></div> */}
        </div>
      </div>
      <div className="p-9 lg:px-0 lg:py-4 lg:ml-32 lg:pl-[145px] lg:pr-28">
        <div className="lg:text-start text-center text-3xl my-12 mt-[-10px] lg:mt-[50px] lg:text-[42px]" style={{ fontFamily: "Hedvig Letters Serif, serif" }}>
          {globalState.globalProperty === "IND" ? "Visi" : "Vision"}
        </div>
        <div className="text-md lg:text-[24px] text-start leading-normal lg:mt-[0px] mt-[-30px] mx-[40px] w-[250px]">
          {globalState.globalProperty === "IND"
            ? "Menjadi center of excellence bidang pendidikan dalam mencetak generasi panutan yang amanah, berwawasan kebangsaan, pancasilais, berbudi pekerti luhur, dan mandiri sesuai perkembangan zaman, dengan tetap menjaga keberlangsungan Yayasan Perguruan “CIKINI”. Misi Mengembangkan kurikulum unggulan untuk menghasilkan insan yang kompeten dan adaptif terhadap perubahan teknologi. Membangun fasilitas sarana dan prasarana yang unggul. Membangun pusat pengembangan dan penelitian kebangsaan. Menjalin kerjasama, kolaborasi dan jejaring industri Memberikan manfaat kepada bangsa dan negara."
            : "To become a center of excellence in education by producing exemplary generations who are trustworthy, nationalistic, Pancasila-oriented, noble in character, and independent, in accordance with the times, while maintaining the sustainability of Yayasan Perguruan “CIKINI”.Develop an outstanding curriculum to produce competent individuals who are adaptive to technological changes.Build excellent facilities and infrastructure.Establish a center for national development and research.Establish cooperation, collaboration, and industrial networks.Provide benefits to the nation and country."}
        </div>
        <div className="lg:text-start text-center text-3xl lg:text-[42px] py-12 mt-[-20px]" style={{ fontFamily: "Hedvig Letters Serif, serif" }}>
          {globalState.globalProperty === "IND" ? "Misi" : "Mission"}
        </div>
        <div className="flex flex-col gap-5 text-md lg:text-[24px] mt-[-30px] lg:mt-0 text-black leading-normal px-4">
          <ul className="list-disc mx-[40px] w-[220px]">
            <li>
              {" "}
              {globalState.globalProperty === "IND"
                ? "Mengembangkan kurikulum unggulan untuk menghasilkan insan yang kompeten dan adaptif terhadap perubahan teknologi."
                : "Develop an outstanding curriculum to produce competent individuals who are adaptive to technological changes."}
            </li>
            <li> {globalState.globalProperty === "IND" ? "Membangun fasilitas sarana dan prasarana yang unggul." : "Build excellent facilities and infrastructure."}</li>
            <li> {globalState.globalProperty === "IND" ? "Membangun pusat pengembangan dan penelitian kebangsaan." : "Establish a center for national development and research."}</li>
            <li>
              {" "}
              {globalState.globalProperty === "IND"
                ? "Menjalin kerjasama, kolaborasi dan jejaring industri Memberikan manfaat kepada bangsa dan negara."
                : "Establish cooperation, collaboration, and industrial networks provide benefits to the nation and country."}
            </li>
          </ul>
        </div>
        <div className="lg:text-start text-center text-3xl lg:text-[42px] py-12 mt-[-20px]" style={{ fontFamily: "Hedvig Letters Serif, serif" }}>
          Values
        </div>
        <div className="lg:mb-[60px]">{isMobileScreen ? <MobileView /> : <DesktopView />}</div>
      </div>
    </>
  );
};

export default Visi;
