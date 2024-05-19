import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AppContext from "../../context/AppContext";
import data from "../../assets/json/about";
import Logo from "../../assets/logo/logo.svg";

const Filosofi = () => {
  const { globalState, updateGlobalState } = useContext(AppContext);
  const [html, setHtml] = useState({ __html: "" });

  // Teks dalam bahasa Indonesia
  let filosofiDescIndo =
    "FILOSOFI lambang Perguruan “Cikini” masih sesuai dengan aslinya sejak pembuatan awal, kecuali ejaan lama diganti dengan ejaan baru pada tulisan “Tjikini” menjadi “Cikini”.Lambang Perguruan “Cikini” adalah karya dari Bapak Dukut Hendronoto (Pak Ooq), orang tua murid, guru gambar SMP Perguruan Cikini dan cartoonist pada Perusahaan Film Negara (PFN) .\n\n<b>GAMBAR:</b>\nBusur siap sedia meluncurkan anak panahnya ke tujuan yang lurus, mengarah ke atas.\n\n<b>KETERANGAN:</b>\nBusur : Guru\nAnak Panah : Murid\nMatahari : Cahaya tujuan\nTinggi : Pendidikan\nBuku : Pengetahuan\n\n<b>MEMBERI ARTI:</b>\nGuru memberi dorongan dan bimbingan kepada murid untuk tujuan lurus menuju setinggi-tingginya dengan berdasarkan penerangan, pendidikan, dan pengetahuan.";

  // Teks dalam bahasa Inggris
  let filosofiDescEnglish =
    "The philosophy of the emblem of 'Cikini' School remains true to its original form since its inception, except for the old spelling replaced with the new spelling in the inscription 'Tjikini' becoming 'Cikini'. The emblem of 'Cikini' School is the work of Mr. Dukut Hendronoto (Pak Ooq), parent of a student, drawing teacher at Cikini Junior High School, and cartoonist at the State Film Company (PFN).\n\n<b>IMAGE:</b>\nThe bow is ready to launch its arrow towards a straight target, aiming upwards.\n\n<b>DESCRIPTION:</b>\nBow: Teacher\nArrow: Student\nSun: The light of purpose\nHeight: Education\nBook: Knowledge\n\n<b>SIGNIFICANCE:</b>\nThe teacher provides encouragement and guidance to the student towards a straight goal to reach the highest point based on enlightenment, education, and knowledge.";

  let descLoader = () => {
    // Menentukan teks yang akan ditampilkan berdasarkan nilai globalProperty
    const descText =
      globalState.globalProperty === "IND"
        ? filosofiDescIndo
        : filosofiDescEnglish;

    // Menetapkan HTML yang akan disetel sebagai state untuk ditampilkan
    setHtml({
      __html: `<div>${descText.replace(/\n/g, "<br>")}</div>`,
    });
  };

  useEffect(() => {
    descLoader();
  }, [globalState.globalProperty]); // Memperbarui teks ketika globalProperty berubah

  return (
    <>
      <div className="lg:lg:flex flex-col items-center justify-center lg:flex-row lg:justify-start ">
        <div className=" bg-[#E1E1E1] w-full lg:py-[28px]">
          <div className="text-black text-lg font-bold lg:text-5xl mt-16 lg:mt-0 lg:ml-32 lg:text-left">
            {globalState.globalProperty === "IND"
              ? "Filosofi lambang"
              : "Philosophy of The Emblem"}
          </div>
          {/* <div className="border-t-7 border-yellow-400 w-[103px] lg:absolute left-[125px] lg:border-[6px]"></div> */}
        </div>
      </div>
      <div className="p-5 lg:p-8 lg:mx-16">
        <div className="w-full rounded-xl lg:my-10 ">
          <div className="grid lg:grid-cols-3 grid-rows-2 mt-0 lg:mt-10 lg:gap-0 gap-5 leading-normal	border-4">
            <div className="flex lg:justify-center justify-center items-center h-full lg:h-full lg:row-span-2">
              <img
                loading="lazy"
                src={Logo}
                className="lg:object-cover flex h-[500px]"
              />
            </div>
            <div className="text-white py-5 px-5 lg:px-0 lg:py-14 lg:col-span-2 lg:row-span-2 ">
              <div className="flex flex-col gap-5 text-[12px] lg:text-lg mt-5 lg:mt-0 text-black leading-normal">
                {<div dangerouslySetInnerHTML={html} />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Filosofi;
