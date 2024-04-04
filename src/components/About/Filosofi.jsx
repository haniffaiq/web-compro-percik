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
      <div className="p-5 lg:p-8">
        <div className="text-center text-3xl lg:text-5xl font-bold mb-10">FILOSOFI LAMBANG</div>
        <div className="w-full rounded-xl ">
          <div className="grid grid-rows-2 mt-0 lg:mt-10 lg:gap-0 gap-5">
            <div className="flex lg:justify-center justify-center items-center h-full lg:h-full ">
              <img loading="lazy" src={Logo} className="lg:object-cover flex h-full" />
            </div>
            <div className="text-white p-5 lg:p-14 ">
              {/* <div className="text-[12px] lg:text-3xl font-bold text-black">YAYASAN DENGAN TRACK RECORD MEMUKAU</div> */}
              {/* <div className="text-[10px] lg:text-[25px]">{value.name}</div> */}
              <div className="flex flex-col gap-5 text-[7px] lg:text-sm mt-5 lg:mt-10 text-black">{<div dangerouslySetInnerHTML={html} />}</div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Filosofi;
