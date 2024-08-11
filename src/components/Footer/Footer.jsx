import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AppContext from "../../context/AppContext";
import Instagram from "../../assets/icon/Instagram.svg";
import Twitter from "../../assets/icon/Twitter.svg";
import Facebook from "../../assets/icon/Facebook.svg";
import Youtube from "../../assets/icon/Youtube.svg";
import Tiktok from "../../assets/icon/Tik Tok.svg";
import Whatsapp from "../../assets/img/WA.png";
import Logo from "../../assets/logo/logo_white.png";

const Footer = () => {
  const { globalState, updateGlobalState } = useContext(AppContext);

  return (
    <>
      <hr className="bg-[#034DA2] h-4 w-full border-none" />
      <div className="bg-[#012958] w-full flex flex-col lg:grid-cols-7 grid-cols-6 p-5 lg:p-14 lg:px-[150px] pb-[50px]">
        <div className="col-span-3 lg:flex">
          <div>
            <div className="lg:flex mb-2 lg:ml-[165px]">
              <div className="mr-0 mb-2 flex lg:flex-row flex-col justify-center items-center">
                <img src={Logo} alt="Logo Yayasan" className="lg:w-[155px] lg:h-[155px] w-[125px] h-[125px] mr-4 lg:mt-[20px] " />

                <div>
                  <div className="text-white font-[600] lg:text-3xl text-md  mt-8  lg:text-start text-center" style={{ fontFamily: "Maven Pro" }}>
                    Sekretariat Yayasan Perguruan ’Cikini’{" "}
                  </div>
                  <div className="text-[#C1CACF] lg:text-2xl text-sm mt-4 lg:text-start text-center" style={{ fontFamily: "Maven Pro" }}>
                    Jl. Duren Tiga Raya No. 1, Duren Tiga, Kec. Pancoran
                  </div>
                  <div className="text-[#C1CACF] lg:text-2xl text-sm mt-1 lg:text-start text-center" style={{ fontFamily: "Maven Pro" }}>
                    Jakarta Selatan 12760
                  </div>
                  <div className="text-[#C1CACF] lg:text-2xl text-sm mt-1 lg:text-start text-center" style={{ fontFamily: "Maven Pro" }}>
                    Phone: 021-27534786
                  </div>
                  <div className="text-[#C1CACF] lg:text-2xl text-sm mt-1 lg:text-start text-center" style={{ fontFamily: "Maven Pro" }}>
                    E-mail : ypcikini@indo.net.id
                  </div>
                  <div className="mt-8 lg:mt-[35px] w-full col-span-3 text-sm text-[#C1CACF] lg:text-start text-center" style={{ fontFamily: "Maven Pro" }}>
                    @ 2024 Yayasan Perguruan Cikini
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-3 flex flex-col gap-3 mt-5 lg:mt-0 lg:justify-center lg:ml-[920px]">
          <div className="flex flex-col justify-center items-center lg:w-auto">
            <div className="flex justify-center lg:mt-[-120px] ">
              <a
                href="https://wa.me/62811151502?text=Halo%20Admin,%20saya%20tertarik%20dengan%20layanan%20anda"
                // href="https://wa.me/62811151502"
                target="_blank"
                rel="noopener noreferrer"
                className="border py-2 lg:py-3 px-12 rounded-xl lg:rounded-lg flex gap-3 items-center bg-[#03CBCD] border-none text-black font-[600]"
              >
                <img loading="lazy" src={Whatsapp} alt="Whatsapp" className="h-[40px]" />
                <div className="lg:text-2xl " style={{ fontFamily: "Maven Pro" }}>
                  Kontak Admin
                </div>
              </a>
            </div>
            <div className="col-span-2 lg:mt-0 mt-5 flex flex-col gap-3 ">
              {/* <div className="text-white font-[600] text-xl text-center">Follow Us</div> */}
              {/* <div className="flex gap-4">
            <img loading="lazy" src={Instagram} alt="Instagram" className="h-[30px]" />
            <img loading="lazy" src={Twitter} alt="Twitter" className="h-[30px]" />
            <img loading="lazy" src={Facebook} alt="Facebook" className="h-[30px]" />
            <img loading="lazy" src={Youtube} alt="Youtube" className="h-[30px]" />
            <img loading="lazy" src={Tiktok} alt="Tiktok" className="h-[30px]" />
          </div> */}
            </div>
            <div className="text-[#C1CACF] lg:text-lg text-sm text-start lg:text-center lg:mt-4" style={{ fontFamily: "Maven Pro" }}>
              {globalState.globalProperty === "IND" ? "Informasi Selengkapnya Hubungi Kami" : "For more information contact us"}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
