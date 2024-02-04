import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AppContext from "../../context/AppContext";
import Foto from "../../assets/img/unsplash_pAtA8xe_iVM.png";
import misi from "../../assets/img/misi.png";

const Visi = () => {
  const { globalState, updateGlobalState } = useContext(AppContext);

  return (
    <>
      <div className="p-9">
        <div className="text-center text-3xl lg:text-5xl font-bold mb-10">
          Visi
        </div>
        <div className="text-md lg:text-xl text-center">
          Yayasam Perguruan “Cikini” mengutamakan pendidikan berwawasan
          kebangsaan dan budi pekerti yang luhur dengan memberdayakan kemampuan
          putra-putri bangsa agar dapat mengatasi tantangan masa depan dalam
          kehidupan bermasyarakat dan berbangsa.
        </div>
        <div className="text-center text-3xl lg:text-5xl font-bold mb-10 mt-10">
          Misi
        </div>
        <div className="flex justify-center">
          <img src={misi} />
        </div>
      </div>
    </>
  );
};

export default Visi;
