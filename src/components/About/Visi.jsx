import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AppContext from "../../context/AppContext";
import misi from "../../assets/img/misi.webp";

const Visi = () => {
  const { globalState, updateGlobalState } = useContext(AppContext);

  return (
    <>
      <div className="lg:lg:flex flex-col items-center justify-center lg:flex-row lg:justify-start ">
        <div className="  w-full lg:py-[28px]">
          <div className="text-black text-xl lg:text-5xl mt-16 lg:mt-0 ml-0 lg:ml-32 py-2 text-center lg:text-left lg:px-[145px]" style={{ fontFamily: 'Hedvig Letters Serif, serif' }}>
            {globalState.globalProperty === "IND"
              ? "Visi, Misi dan Value"
              : "Vision, Mission and Values"}
          </div>
          {/* <div className="border-t-7 border-yellow-400 w-[103px] lg:absolute left-[125px] lg:border-[6px]"></div> */}
        </div>
      </div>
      <div className="p-9 lg:px-0 lg:py-4 lg:ml-32 lg:pl-[145px] lg:pr-28">
        <div className="lg:text-start text-center text-3xl lg:text-3xl font-bold my-12">Visi</div>
        <div className="text-md lg:text-xl text-start">
          Menjadi center of excellence bidang pendidikan dalam mencetak generasi panutan yang amanah, berwawasan kebangsaan, pancasilais, berbudi pekerti luhur, dan mandiri sesuai perkembangan zaman, dengan tetap menjaga keberlangsungan Yayasan Perguruan “CIKINI”. Misi Mengembangkan kurikulum unggulan untuk menghasilkan insan yang kompeten dan adaptif terhadap perubahan teknologi. Membangun fasilitas sarana dan prasarana yang unggul. Membangun pusat pengembanga dan penelitian kebangsaan. Menjalin kerjasama, kolaborasi dan jejaring industri Memberikan manfaat kepada bangsa dan negara. Value
        </div>
        <div className="lg:text-start text-center text-3xl lg:text-3xl font-bold my-12">Misi</div>
        <div className="flex flex-col gap-5 text-sm lg:text-lg mt-5 lg:mt-0 text-black leading-normal px-4">
          <ul className="list-inside list-disc">
            <li>Mengembangkan kurikulum unggulan untuk menghasilkan insan yang kompeten dan adaptif terhadap perubahan teknologi.</li>
            <li>Membangun fasilitas sarana dan prasarana yang unggul.</li>
            <li>Membangun pusat pengembanga dan penelitian kebangsaan.</li>
            <li>Menjalin kerjasama, kolaborasi dan jejaring industri Memberikan manfaat kepada bangsa dan negara.</li>
          </ul>
        </div>
        <div className="lg:text-start text-center text-3xl lg:text-3xl font-bold my-12">Value</div>
        <div className="grid grid-row gap-0 my-5 text-black leading-normal px-4">

          <div className="lg:flex lg:flex-row grid grid-row-3 align-center">
            <div className="text-white font-bold text-sm lg:text-3xl px-4 py-6 w-[50px] hidden lg:block  bg-indigo-950">P</div>
            <div className="font-bold text-sm lg:text-3xl px-0 py-6 w-[300px]  hidden lg:block text-indigo-950">rofesional</div>
            <div className="font-bold text-3xl lg:text-3xl lg:px-0 lg:py-6 w-[300px]  block lg:hidden text-indigo-950">Profesional</div>
            <div className="text-white font-bold text-sm lg:text-3xl w-[8px] my-4 hidden lg:block  bg-indigo-950"></div>
            <div className="text-sm lg:text-lg lg:px-2 lg:py-4 py-4 w-auto leading-normal " style={{ whiteSpace: 'pre-line' }}>{globalState.globalProperty === "IND" ? "BEKERJA SECARA KOMPETEN DENGAN JIWA PATRIOTIK KEBANGSAAN, DAN KETELADANAN \n DALAM BERPERILAKU LUHUR SERTA MENJUNJUNG TINGGI ETIKA PROFESI." : "BEKERJA SECARA KOMPETEN DENGAN JIWA PATRIOTIK KEBANGSAAN, DAN KETELADANAN \n DALAM BERPERILAKU LUHUR SERTA MENJUNJUNG TINGGI ETIKA PROFESI."}</div>

          </div>
          <div className="lg:flex lg:flex-row grid grid-row-3 align-center">
            <div className="text-white font-bold text-sm lg:text-3xl px-4 py-6 w-[50px] hidden lg:block  bg-indigo-700">E</div>
            <div className="font-bold text-sm lg:text-3xl px-0 py-6 w-[300px]  hidden lg:block  text-indigo-700">xcelent</div>
            <div className="font-bold text-3xl lg:text-3xl lg:px-0 lg:py-6 w-[300px]  block lg:hidden text-indigo-700">Excelent</div>

            <div className="text-white font-bold text-sm lg:text-3xl w-[8px] my-4 hidden lg:block  bg-indigo-700"></div>
            <div className="text-sm lg:text-lg lg:px-2 lg:py-4 py-4 w-auto leading-normal " style={{ whiteSpace: 'pre-line' }}>{globalState.globalProperty === "IND" ? "BEKERJA DENGAN BERPEDOMAN PADA STANDAR TERBAIK UNTUK MEMBERIKAN HASIL YANG \n UNGGUL." : "BEKERJA DENGAN BERPEDOMAN PADA STANDAR TERBAIK UNTUK MEMBERIKAN HASIL YANG \n UNGGUL."}</div>

          </div>
          <div className="lg:flex lg:flex-row grid grid-row-3 align-center">
            <div className="text-white font-bold text-sm lg:text-3xl px-4 py-6 w-[50px] hidden lg:block  bg-indigo-500">R</div>
            <div className="font-bold text-sm lg:text-3xl px-0 py-6 w-[300px]  hidden lg:block  text-indigo-500">eligius</div>
            <div className="font-bold text-3xl lg:text-3xl lg:px-0 lg:py-6 w-[300px]  block lg:hidden text-indigo-500">Religius</div>

            <div className="text-white font-bold text-sm lg:text-3xl w-[8px] my-4 hidden lg:block  bg-indigo-500"></div>
            <div className="text-sm lg:text-lg lg:px-2 lg:py-4 py-4 w-auto leading-normal " style={{ whiteSpace: 'pre-line' }}>{globalState.globalProperty === "IND" ? "BEKERJA DENGAN MENJUNJUNG TINGGI NILAI-NILAI RELIGI DAN MENGEDEPANKAN EMPATI,\n TOLERANSI SERTA SALING MENGHORMATI." : "BEKERJA DENGAN MENJUNJUNG TINGGI NILAI-NILAI RELIGI DAN MENGEDEPANKAN EMPATI,\n TOLERANSI SERTA SALING MENGHORMATI."}</div>

          </div>
          <div className="lg:flex lg:flex-row grid grid-row-3 align-center">
            <div className="text-white font-bold text-sm lg:text-3xl px-4 py-6 w-[50px] hidden lg:block  bg-indigo-400">C</div>
            <div className="font-bold text-sm lg:text-3xl px-0 py-6 w-[300px]  hidden lg:block  text-indigo-400">ontribution</div>
            <div className="font-bold text-3xl lg:text-3xl lg:px-0 lg:py-6 w-[300px]  block lg:hidden text-indigo-400">Contribution</div>

            <div className="text-white font-bold text-sm lg:text-3xl w-[8px] my-4 hidden lg:block  bg-indigo-400"></div>
            <div className="text-sm lg:text-lg lg:px-2 lg:py-4 py-4 w-auto leading-normal " style={{ whiteSpace: 'pre-line' }}>{globalState.globalProperty === "IND" ? "MEMBERIKAN MANFAAT NYATA DENGAN TULUS DAN IKHLAS KEPADA BANGSA, NEGARA, DAN \n MASYARAKAT." : "MEMBERIKAN MANFAAT NYATA DENGAN TULUS DAN IKHLAS KEPADA BANGSA, NEGARA, DAN \n MASYARAKAT."}</div>

          </div>
          <div className="lg:flex lg:flex-row grid grid-row-3 align-center">
            <div className="text-white font-bold text-sm lg:text-3xl px-4 py-6 w-[50px] hidden lg:block  bg-indigo-300">I</div>
            <div className="font-bold text-sm lg:text-3xl px-0 py-6 w-[300px]  hidden lg:block  text-indigo-300">ntegrity</div>
            <div className="font-bold text-3xl lg:text-3xl lg:px-0 lg:py-6 w-[300px]  block lg:hidden text-indigo-300">Integrity</div>

            <div className="text-white font-bold text-sm lg:text-3xl w-[8px] my-4 hidden lg:block  bg-indigo-300"></div>
            <div className="text-sm lg:text-lg lg:px-2 lg:py-4 py-4 w-auto leading-normal " style={{ whiteSpace: 'pre-line' }}>{globalState.globalProperty === "IND" ? "KOMITMEN SATUNYA KATA DENGAN PERBUATAN DAN BERSIKAP JUJUR DALAM MELAKSANAKAN \n TUGAS SESUAI PRINSIP-PRINSIP." : "KOMITMEN SATUNYA KATA DENGAN PERBUATAN DAN BERSIKAP JUJUR DALAM MELAKSANAKAN \n TUGAS SESUAI PRINSIP-PRINSIP."}</div>

          </div>
          <div className="lg:flex lg:flex-row grid grid-row-3 align-center">
            <div className="text-white font-bold text-sm lg:text-3xl px-4 py-6 w-[50px] hidden lg:block flex bg-indigo-200">K</div>
            <div className="font-bold text-sm lg:text-3xl px-0 py-6 w-[300px]  hidden lg:block  text-indigo-200">nowledgeable</div>
            <div className="font-bold text-3xl lg:text-3xl lg:px-0 lg:py-6 w-[300px]  block lg:hidden text-indigo-200">Knowledgeable</div>

            <div className="text-white font-bold text-sm lg:text-3xl w-[8px] my-4 hidden lg:block bg-indigo-200"></div>
            <div className="text-sm lg:text-lg lg:px-2 lg:py-4 py-4 w-auto leading-normal " style={{ whiteSpace: 'pre-line' }}>{globalState.globalProperty === "IND" ? "CERDAS DAN BERWAWASAN LUAS DENGAN SENANTIASA MELAKUKAN PENINGKATAN \n BERKELANJUTAN SESUAI PERKEMBANGAN ZAMAN." : "CERDAS DAN BERWAWASAN LUAS DENGAN SENANTIASA MELAKUKAN PENINGKATAN \n BERKELANJUTAN SESUAI PERKEMBANGAN ZAMAN."}</div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Visi;
