import React, { useContext } from "react";
import AppContext from "../../context/AppContext";

const Kerjasama = () => {
  const { globalState, updateGlobalState } = useContext(AppContext);

  return (
    <>
      <div className="mt-[70px] ">
        <div className="text-center text-3xl lg:text-2xl font-bold mb-10 bg-[#034694] text-white py-4 lg:mx-[250px] mx-[20px]" style={{ letterSpacing: 14 }}>
          {globalState.globalProperty === "IND" ? "KERJA SAMA DENGAN PIHAK LAIN" : "COOPERATION WITH OTHER PARTIES"}
        </div>
        <div className="flex justify-center grid justify-items-center flex-col gap-[36px] ">
          <div className="text-[25px] lg:text-[40px] text-[#034694] mt-[15px]" style={{ fontFamily: "Hedvig Letters Serif, serif" }}>
            {globalState.globalProperty === "IND" ? "PENDIDIKAN FORMAL" : "FORMAL EDUCATION"}
          </div>
          <div className="w-[400px] lg:w-[1122px] text-center text-md lg:text-2xl mt-[0px] leading-normal" style={{ fontFamily: "Maven Pro" }}>
            {globalState.globalProperty === "IND"
              ? "TK Perguruan “CIKINI” | SD Perguruan “CIKINI” | SMP Perguruan “CIKINI” | SMA 1 Perguruan “CIKINI” | SMA 2 Perguruan “CIKINI” | SMK 1 Perguruan “CIKINI” | SMK 2 Musik Perguruan “CIKINI” | SMK 3 Perguruan “CIKINI” | SMK Perguruan “CIKINI” - Karawang International Industrial City (KIIC) | Institut Sains dan Teknologi Nasional (ISTN). "
              : "Perguruan “CIKINI” Schools: Kindergarten “CIKINI” | Elementary School “CIKINI” | Junior High School “CIKINI” | Senior High School 1 “CIKINI” | Senior High School 2 “CIKINI” | Vocational High School 1 “CIKINI” | Music Vocational High School 2 '“CIKINI” | Vocational High School 3 “CIKINI” | Vocational High School “CIKINI” - Karawang International Industrial City (KIIC) | National Institute of Science and Technology (ISTN)."}
          </div>
          <div className="text-[25px] lg:text-[40px] text-[#034694] mt-[20px]" style={{ fontFamily: "Hedvig Letters Serif, serif" }}>
            {globalState.globalProperty === "IND" ? "PENDIDIKAN NONFORMAL" : "NON-FORMAL EDUCATION"}
          </div>
          <div className="w-[400px] lg:w-[1122px] text-center text-md lg:text-2xl mt-[-3px]" style={{ fontFamily: "Maven Pro" }}>
            {globalState.globalProperty === "IND"
              ? "Pusat pelatihan Suzuki “CIKINI” | Kursus Musik - Lembaga Pendidikan Musik Perguruan “CIKINI”."
              : "Suzuki Training Center “CIKINI” | Music Course - Perguruan “CIKINI” Music Education Institute."}
          </div>
          <div className="text-[25px] text-center w-[300px] lg:w-full lg:text-[40px] text-[#034694] mt-[20px]" style={{ fontFamily: "Hedvig Letters Serif, serif" }}>
            {globalState.globalProperty === "IND" ? "KERJA SAMA DENGAN PIHAK LAIN" : "COOPERATION WITH OTHER PARTIES"}
          </div>
          <div className="w-[400px] lg:w-[1122px] text-center text-md lg:text-2xl mt-[0px] leading-normal" style={{ fontFamily: "Maven Pro" }}>
            {globalState.globalProperty === "IND"
              ? "Kerja sama pendidikan dengan PT Kertas Nusantara Kalimantan Timur | Kerja sama pendidikan dengan Yayasan Vidatra (PT Badak) Bontang, Kalimantan Timur | Kerja sama pendidikan dengan Yayasan KPS (Kontrak tor Production Sharing) Balikpapan, Kalimantan Timur | Kerja sama pendidikan dengan Sangata Prima Coal, Sangata, Kalimantan Timur | Kerja sama kesehatan dengan penyelenggara asuransi kesehatan | Kerja sama asuransi dengan PT Jaminan Sosial Tenaga Kerja."
              : "Educational cooperation with PT Kertas Nusantara, East Kalimantan | Educational cooperation with Vidatra Foundation (PT Badak), Bontang, East Kalimantan | Educational cooperation with KPS Foundation (Contractor Production Sharing), Balikpapan, East Kalimantan | Educational cooperation with Sangata Prima Coal, Sangata, East Kalimantan | Health cooperation with health insurance providers | Insurance cooperation with PT Jaminan Sosial Tenaga Kerja."}
          </div>
        </div>
      </div>
      <div className="flex justify-center grid justify-item-center my-[100px]">
        <div className="border-t-2 lg:w-[1218px] w-[300px] border-gray-200"></div>
      </div>
    </>
  );
};

export default Kerjasama;
