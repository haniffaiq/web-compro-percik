import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AppContext from "../../context/AppContext";
// import Foto from "../../assets/img/image 23.png";
import Wisuda from "../../assets/icon/ph_student-light.svg";
import Loc from "../../assets/icon/loc.svg";
import Telf from "../../assets/icon/telfon.svg";
import Foto from "../../assets/img/school/facility/Ruang Kerja.png";
import data from "../../assets/json/school";

const Fasilitas = (props) => {
  const { globalState, updateGlobalState } = useContext(AppContext);
  let a = props.idSchool;
  let selectedData = {}
  if (globalState.globalProperty === "IND") {
    selectedData = data.bahasa
  }
  else{
    selectedData = data.english
  }
  return (
    <>
      <div className="p-5 lg:p-8">
        <div className="text-5xl font-bold">Fasilitas</div>
        <div className="flex overflow-x-auto w-[350px] lg:w-full gap-5 lg:gap-10 mt-5">
          {selectedData[a - 1].fasilitas.map((value, index) => {
            return (
              <button key={index} className="h-full border rounded-lg p-3 flex flex-col ">
                <img
                  className="flex justify-center min-w-[200px]"
                  src={require(`../../assets/img/school/facility${value.imgUrl}`)}
                  alt="foto"
                />
                <div className="text-start text-md lg:text-2xl mt-5">
                  {value.title}
                </div>
                <div className="flex gap-3 text-start mt-3">
                  <div className="text-[#8d8f91] flex-grow text-xs lg:text-md max-w-[300px]">
                    {value.desc}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

    </>
  );
};

export default Fasilitas;
