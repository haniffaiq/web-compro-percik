import React, { useContext } from "react";
import AppContext from "../../context/AppContext";

const Kerjasama = () => {
  const { globalState, updateGlobalState } = useContext(AppContext);

  return (
    <>
      <div className="mt-[70px] lg:px-9 lg:py-4 lg:mx-[250px]">
        <div className="text-center text-3xl lg:text-2xl font-bold mb-10 bg-[#034694] text-white py-4 rounded-xl" style={{ letterSpacing: 14 }}>
          {globalState.globalProperty === "IND" ? "KERJA SAMA DENGAN PIHAK LAIN" : "COOPERATION WITH OTHER PARTIES"}
        </div>
        <ul class="list-disc flex justify-center grid justify-items-center flex-col gap-[50px] mt-[86px]">
          <li className="w-[350px] lg:w-[1000px] text-left text-md lg:text-2xl mt-[0px] leading-normal" style={{ fontFamily: "Maven Pro" }}>
            {globalState.globalProperty === "IND"
              ? "Kerja sama pendidikan dengan PT Kertas Nusantara Kalimantan Timur | Kerja sama pendidikan dengan Yayasan Vidatra (PT Badak) Bontang, Kalimantan Timur | Kerja sama pendidikan dengan Yayasan KPS (Kontraktor Production Sharing) Balikpapan, Kalimantan Timur | Kerja sama pendidikan dengan Sangata Prima Coal, Sangata, Kalimantan Timur | Kerjasama Pendidikan Vokosi dengan PT Harapan Anang Bakri & Sons, PT Maligi Permata Industri Estate Karawang Jawa Barat | Kerja sama kesehatan dengan penyelenggara asuransi kesehatan | Kerja sama asuransi dengan PT Jaminan Sosial Tenaga Kerja.."
              : "Educational cooperation with PT Kertas Nusantara, East Kalimantan | Educational cooperation with Vidatra Foundation (PT Badak), Bontang, East Kalimantan | Educational cooperation with KPS Foundation (Contractor Production Sharing), Balikpapan, East Kalimantan | Educational cooperation with Sangata Prima Coal, Sangata, East Kalimantan | Health cooperation with health insurance providers | Insurance cooperation with PT Jaminan Sosial Tenaga Kerja."}
          </li>
          <li className="w-[350px] lg:w-[1000px] text-left text-md lg:text-2xl mt-[0px] leading-normal" style={{ fontFamily: "Maven Pro" }}>
            {globalState.globalProperty === "IND"
              ? "Yayasan Perguruan “CIKINI” dengan Sekolah Nasional KPS (Kontraktor Production Sharing) Balikpapan Kalimantan Timur mengelola Pendidikan TK, SD dan SMP KPS Balikpapan mulai Tahun 1976 berakhir tahun 2004, pihak Yayasan Sekolah Nasional KPS ingin berupaya mandiri dalam pengelolaan sekolah sendiri."
              : "The Perguruan 'CIKINI' Foundation and the KPS National School (Contractor Production Sharing) in Balikpapan, East Kalimantan, managed the education of KPS Balikpapan Kindergarten, Elementary School, and Junior High School from 1976 until 2004. The KPS National School Foundation aimed to independently manage its own schools."}
          </li>
          <li className="w-[350px] lg:w-[1000px] text-left text-md lg:text-2xl mt-[0px] leading-normal" style={{ fontFamily: "Maven Pro" }}>
            {globalState.globalProperty === "IND"
              ? "Yayasan Perguruan “CIKINI” dengan Yayasan Pendidikan Prima Swarga Bara Sangata Kalimantan Timur, mengelola bidang manajemen  Pendidikan TK, SD, SMP  mulai Tahun 1990 berakhir tahun 1993."
              : "The Perguruan 'CIKINI' Foundation and the Prima Swarga Bara Education Foundation in Sangata, East Kalimantan, managed the education management of Kindergarten, Elementary School, and Junior High School from 1990 until 1993."}
          </li>
          <li className="w-[350px] lg:w-[1000px] text-left text-md lg:text-2xl mt-[0px] leading-normal" style={{ fontFamily: "Maven Pro" }}>
            {globalState.globalProperty === "IND"
              ? "Yayasan Perguruan “CIKINI” dengan PT. Kertas Nusantara di Mangkajang Kalimantan Timur mengelola Pendidikan TK, SD, SMP dan SMA mulai tahun 1998 berakhir Tahun 2012, pihak  PT. Kertas Nusantara ingin berupaya mandiri dalam mengelola Sekolah sendiri."
              : "The Perguruan 'CIKINI' Foundation and PT. Kertas Nusantara in Mangkajang, East Kalimantan, managed the education of Kindergarten, Elementary School, Junior High School, and Senior High School from 1998 until 2012. PT. Kertas Nusantara aimed to independently manage its own schools."}
          </li>
          <li className="w-[350px] lg:w-[1000px] text-left text-md lg:text-2xl mt-[0px] leading-normal" style={{ fontFamily: "Maven Pro" }}>
            {globalState.globalProperty === "IND"
              ? "Yayasan Perguruan “CIKINI” dengan Yayasan Pendidikan Vidya Patra di Komplek PT. Badak Bontang Kalimantan Timur mengelola Pendidikan SD,SMP dan SMA  dari Tahun 2010 s.d 2012 untuk proses transformasi dari PT Badak Bontang ke YPVDP (Yayasan Pendidikan Vidya Dahana Patra) sampai mandiri dalam mengelola opesional sekolah."
              : "The Perguruan 'CIKINI' Foundation collaborated with the Vidya Patra Education Foundation in the PT. Badak complex in Bontang, East Kalimantan, to manage the education of Elementary School, Junior High School, and Senior High School from 2010 to 2012. This collaboration aimed for the transformation process from PT. Badak Bontang to YPVDP (Vidya Dahana Patra Education Foundation) until independently managing the school's operations."}
          </li>
          <li className="w-[350px] lg:w-[1000px] text-left text-md lg:text-2xl mt-[0px] leading-normal" style={{ fontFamily: "Maven Pro" }}>
            {globalState.globalProperty === "IND"
              ? "Yayasan Perguruan “CIKINI”  dengan PT. Harapan  Anang Bakri & Sons, PT. Maligi Permata Industrial Estate Karawang mendirikan Pendidikan Vokasi (SMK Perguruan CIKINI-KIIC dan Politeknik Perguruan CIKINI-KIIC) di Kawasan Industri KIIC Karawang mulai Tahun 2021 sampai dengan sekarang."
              : "The Perguruan 'CIKINI' Foundation, in collaboration with PT. Harapan Anang Bakri & Sons and PT. Maligi Permata Industrial Estate Karawang, established Vocational Education (CIKINI-KIIC Vocational High School and CIKINI-KIIC Polytechnic) in the KIIC Industrial Area, Karawang, starting from 2021 until now."}
          </li>
        </ul>
      </div>
      <div className="flex justify-center grid justify-item-center my-[100px]">
        <div className="border-t-2 lg:w-[1218px] w-[300px] border-gray-200"></div>
      </div>
    </>
  );
};

export default Kerjasama;
