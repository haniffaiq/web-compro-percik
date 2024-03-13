import React, { useContext, useState } from "react";
// import { Link } from "react-router-dom";
// import AppContext from "../../context/AppContext";
// import Instagram from "../../assets/icon/Instagram.svg";
// import Twitter from "../../assets/icon/Twitter.svg";
// import Facebook from "../../assets/icon/Facebook.svg";
// import Youtube from "../../assets/icon/Youtube.svg";
// import Tiktok from "../../assets/icon/Tik Tok.svg";
import Whatsapp from "../../assets/icon/WhatsApp.svg";

const Footer = () => {
  //   const { globalState, updateGlobalState } = useContext(AppContext);

  return (
    <>
      <div className="bg-[#09588D] w-full flex flex-col lg:grid grid-cols-7 p-5 lg:p-14">
        <div className="col-span-3 ">
          <div className="text-white font-[600] text-2xl mb-5">Yayasan Perguruan Cikini</div>
          <div className="text-[#C1CACF] text-lg">Jl. Pegangsaan Timur No.10, RT.14/RW.4, Cikini, Kec. Menteng, Kota Jakarta Pusat, DKI Jakarta 10330</div>
          <div className="text-[#C1CACF] text-lg">08886453759898</div>
          <div className="text-[#C1CACF] text-lg">admin@perguruancikini.com</div>
        </div>
        <div className="col-span-2 lg:mt-0 mt-5 flex flex-col gap-3 ">
          {/* <div className="text-white font-[600] text-xl">Follow Us</div>
          <div className="flex gap-4">
            <img src={Instagram} alt="Instagram" className="h-[30px]" />
            <img src={Twitter} alt="Twitter" className="h-[30px]" />
            <img src={Facebook} alt="Facebook" className="h-[30px]" />
            <img src={Youtube} alt="Youtube" className="h-[30px]" />
            <img src={Tiktok} alt="Tiktok" className="h-[30px]" />
          </div>
          <div className="text-[#C1CACF] text-lg">Privacy Policy | Disclaimer</div> */}
        </div>
        <div className="col-span-2 flex flex-col gap-3 mt-5 lg:mt-0">
          <div className="flex justify-start lg:justify-center">
            <a
              href="https://wa.me/62811151502?text=Halo%20Admin,%20saya%20tertarik%20dengan%20layanan%20anda"
              // href="https://wa.me/62811151502"
              target="_blank"
              rel="noopener noreferrer"
              className="border py-2 lg:py-3 px-7 rounded-xl lg:rounded-full flex gap-3 items-center bg-[#E06D1A] border-none text-white font-[600]"
            >
              <img src={Whatsapp} alt="Whatsapp" className="h-[40px]" />
              Kontak Admin
            </a>
          </div>
          <div className="text-[#C1CACF] text-lg text-start lg:text-center">Informasi Selengkapnya Hubungi Kami</div>
        </div>
        <div className="mt-2 lg:mt-[35px] w-full col-span-3 text-[#C1CACF]">@ 2024 Yayasan Perguruan Cikini</div>
      </div>
    </>
  );
};

export default Footer;
