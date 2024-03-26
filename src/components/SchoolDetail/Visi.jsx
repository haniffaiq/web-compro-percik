import React, { useContext, useState } from "react";
// import { Link } from "react-router-dom";
import AppContext from "../../context/AppContext";
// import Foto from "../../assets/img/unsplash_pAtA8xe_iVM.png";
// import misi from "../../assets/img/misi.png";
import data from "../../assets/json/sekolah.json";

const Visi = (props) => {
  const { globalState, updateGlobalState } = useContext(AppContext);
  let a = props.idSchool;

  return (
    <>
      <div className="p-9">
        <div className="text-center text-3xl lg:text-5xl font-bold mb-10">
          Visi
        </div>
        <div className="text-md lg:text-xl text-center">
          {data.bahasa[a - 1].visi}
        </div>
        <div className="text-center text-3xl lg:text-5xl font-bold mb-10 mt-10">
          Misi
        </div>
        <div className="flex justify-center">
          <img src={require(`../../assets/img${data.bahasa[a - 1].misi}`)} />
        </div>
      </div>
    </>
  );
};

export default Visi;
