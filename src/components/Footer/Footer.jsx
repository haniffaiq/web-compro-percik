import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AppContext from "../../context/AppContext";
import Instagram from "../../assets/icon/Instagram.svg";
import Twitter from "../../assets/icon/Twitter.svg";
import Facebook from "../../assets/icon/Facebook.svg";
import Youtube from "../../assets/icon/Youtube.svg";
import Tiktok from "../../assets/icon/Tik Tok.svg";
import Whatsapp from "../../assets/icon/WhatsApp.svg";
import Logo from "../../assets/logo/logo_white.png";

const Footer = () => {
  //   const { globalState, updateGlobalState } = useContext(AppContext);

  return (
    <>
      <hr className="bg-[#034DA2] h-4 w-full border-none" />
      <div className="bg-[#012958] w-full flex flex-col lg:grid grid-cols-6 p-5 lg:p-14 lg:px-[150px]">

        <div className="col-span-3 lg:flex">
          <div>
            <div className="lg:flex items-center mb-2">
              <div className="mr-2 mb-2 flex justify-center">
                <img src={Logo} alt="Logo Yayasan" className="w-16 h-16 mr-4" />
              </div>
              <div className="text-white font-[600] lg:text-3xl text-md lg:text-start text-center">YAYASAN PERGURUAN CIKINI</div>
            </div>
            <div className="text-[#C1CACF] lg:text-2xl text-sm lg:text-start text-center">Jl. Cikini Raya No. 74-76, Jakarta Pusat 10330</div>
            <div className="text-white font-[600] lg:text-3xl text-md  mt-8  lg:text-start text-center">Sekretariat Yayasan Perguruan ’Cikini’ </div>
            <div className="text-[#C1CACF] lg:text-2xl text-sm mt-4 lg:text-start text-center">Jl. Duren Tiga Raya No. 1, Duren Tiga, Kec. Pancoran</div>
            <div className="text-[#C1CACF] lg:text-2xl text-sm mt-1 lg:text-start text-center">Jakarta Selatan 12760</div>
            <div className="text-[#C1CACF] lg:text-2xl text-sm mt-1 lg:text-start text-center">Phone: 021-27534786</div>
            <div className="text-[#C1CACF] lg:text-2xl text-sm mt-1 lg:text-start text-center">E-mail : ypcikini@indo.net.id</div>
            <div className="mt-2 lg:mt-[35px] w-full col-span-3 text-[#C1CACF] lg:text-start text-center">@ 2024 Yayasan Perguruan Cikini</div>
          </div>
        </div>

        <div className="col-span-3 flex flex-col gap-3 mt-5 lg:mt-0 lg:justify-center lg:items-end">
          <div className="flex flex-col justify-center items-center lg:w-auto">
            <div className="flex justify-center lg:justify-center">
              <a
                href="https://wa.me/62811151502?text=Halo%20Admin,%20saya%20tertarik%20dengan%20layanan%20anda"
                // href="https://wa.me/62811151502"
                target="_blank"
                rel="noopener noreferrer"
                className="border py-2 lg:py-3 px-12 rounded-xl lg:rounded-full flex gap-3 items-center bg-[#E06D1A] border-none text-white font-[600]"
              >
                <img loading="lazy" src={Whatsapp} alt="Whatsapp" className="h-[40px]" />
                <div className="lg:text-2xl">Kontak Admin</div>
                
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
            <div className="text-[#C1CACF] text-lg text-start lg:text-center lg:mt-4">Informasi Selengkapnya Hubungi Kami</div>
          </div>
        </div>

      </div>
    </>
  );
};

export default Footer;
