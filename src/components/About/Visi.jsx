import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AppContext from "../../context/AppContext";
import Foto from "../../assets/img/unsplash_pAtA8xe_iVM.png";

const Visi = () => {
  const { globalState, updateGlobalState } = useContext(AppContext);

  return (
    <>
      <div className="p-9">
        <div className="text-center text-3xl lg:text-5xl font-bold mb-10">
          Visi
        </div>
        <div className="border w-full bg-[#5FBEFF] rounded-xl p-9 ">
          <div className="justify-center ">
            <div className="border bg-[#09588D]  rounded-lg border-none p-3 justify-center">
              <div>
                <div className="text-white p-1 text-justify">
                  Membangun masyarakat yang berkelanjutan, inklusif, dan
                  memberdayakan setiap individu untuk mencapai potensi maksimal
                  mereka. Kami yakin bahwa melalui tindakan yang berfokus pada
                  keberlanjutan, pendidikan, kesehatan, dan pemberdayaan
                  ekonomi, kita dapat menciptakan perubahan positif yang akan
                  dirasakan oleh generasi sekarang dan mendatang.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Visi;
