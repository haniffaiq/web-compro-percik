import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AppContext from "../../context/AppContext";
import Instagram from "../../assets/icon/Instagram.svg";
import Twitter from "../../assets/icon/Twitter.svg";
import Facebook from "../../assets/icon/Facebook.svg";
import Youtube from "../../assets/icon/Youtube.svg";
import Tiktok from "../../assets/icon/Tik Tok.svg";
import Whatsapp from "../../assets/icon/WhatsApp.svg";

const Footer = () => {
  //   const { globalState, updateGlobalState } = useContext(AppContext);

  return (
    <>
      <div className="bg-[#09588D] w-full grid grid-cols-7 py-[40px] pl-[35px] pr-[35px]">
        <div className="col-span-3 ">
          <div className="text-white font-[600] text-2xl mb-5">
            Yayasan Perguruan Cikini
          </div>
          <div className="text-[#C1CACF] text-lg">
            Jl. Telekomunikasi, no.1, Dayeuh Kolot, Kota Bandung
          </div>
          <div className="text-[#C1CACF] text-lg">08886453759898</div>
          <div className="text-[#C1CACF] text-lg">
            admin@perguruancikini.com
          </div>
        </div>
        <div className="col-span-2 flex flex-col gap-3">
          <div className="text-white font-[600] text-xl">Follow Us</div>
          <div className="flex gap-4">
            <img src={Instagram} alt="Instagram" className="h-[30px]" />
            <img src={Twitter} alt="Twitter" className="h-[30px]" />
            <img src={Facebook} alt="Facebook" className="h-[30px]" />
            <img src={Youtube} alt="Youtube" className="h-[30px]" />
            <img src={Tiktok} alt="Tiktok" className="h-[30px]" />
          </div>
          <div className="text-[#C1CACF] text-lg">
            Privacy Policy | Disclaimer
          </div>
        </div>
        <div className="col-span-2 flex flex-col gap-3">
          <div className="flex justify-center">
            <button className="border py-3 px-7 rounded-full flex gap-3 items-center bg-[#E06D1A] border-none">
              <img src={Whatsapp} alt="Whatsapp" className="h-[40px]" />
              <div className="font-[600] text-white">Kontak Admin</div>
            </button>
          </div>
          <div className="text-[#C1CACF] text-lg text-center">
            Informasi Selengkapnya Hubungi Kami
          </div>
        </div>
        <div className="mt-[35px] w-full col-span-3 text-[#C1CACF]">
          @ 2024 Yayasan Perguruan Cikini
        </div>
      </div>
    </>
  );
};

export default Footer;
