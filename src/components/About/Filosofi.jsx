import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AppContext from "../../context/AppContext";
import data from "../../assets/json/about";
import Logo from "../../assets/logo/logo.svg";

const Filosofi = () => {
  const { globalState, updateGlobalState } = useContext(AppContext);
  const [html, setHtml] = useState({ __html: "" });
  let filosofiDesc =
    "FILOSOFI lambang Perguruan “Cikini” masih sesuai dengan aslinya sejak pembuatan awal, kecuali ejaan lama diganti dengan ejaan baru pada tulisan “Tjikini” menjadi “Cikini”.Lambang Perguruan “Cikini” adalah karya dari Bapak Dukut Hendronoto (Pak Ooq), orang tua murid, guru gambar SMP Perguruan Cikini dan cartoonist pada Perusahaan Film Negara (PFN) .\n\n<b>GAMBAR:</b>\nBusur siap sedia meluncurkan anak panahnya ke tujuan yang lurus, mengarah ke atas.\n\n<b>KETERANGAN:</b>\nBusur : Guru\nAnak Panah : Murid\nMatahari : Cahaya tujuan\nTinggi : Pendidikan\nBuku : Pengetahuan\n\n<b>MEMBERI ARTI:</b>\nGuru memberi dorongan dan bimbingan kepada murid untuk tujuan lurus menuju setinggi-tingginya dengan berdasarkan penerangan, pendidikan, dan pengetahuan.";
  let descLoader = () => {
    setHtml({
      __html: `<div>${filosofiDesc.replace(/\n/g, "<br>")}</div>`,
    });
  };

  useEffect(() => {
    descLoader();
  }, []);
  return (
    <>
      {/* <div className="lg:lg:flex flex-col items-center justify-center lg:flex-row lg:justify-start">
        <div className=" bg-[#E1E1E1] lg:bg-[#E1E1E1] w-full lg:pt-[28px] lg:mb-[28px]">
          <p className="text-black font-segoeui text-lg font-bold lg:text-5xl mt-16 lg:mt-0 lg:ml-32 py-2 text-center lg:text-left">{globalState.globalProperty === "IND" ? "FILOSOFI LAMBANG" : "FILOSOFI LAMBANG"}</p>
          <div className="border-t-7 border-yellow-400 w-[103px] lg:absolute left-[125px] lg:border-4"></div>
        </div>
      </div> */}
      <div className="p-5 lg:p-8">
        <div className="w-full rounded-xl ">
          <div className="grid lg:grid-cols-3 grid-rows-2 mt-0 lg:mt-10 lg:gap-0 gap-5 leading-normal	">
            <div className="flex lg:justify-center justify-center items-center h-full lg:h-full lg:row-span-2">
              <img loading="lazy" src={Logo} className="lg:object-cover flex h-full" />
            </div>
            <div className="text-white p-5 lg:p-14 lg:col-span-2 lg:row-span-2 ">
              <div className="flex flex-col gap-5 text-[12px] lg:text-lg mt-5 lg:mt-10 text-black leading-normal">{<div dangerouslySetInnerHTML={html} />}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Filosofi;
