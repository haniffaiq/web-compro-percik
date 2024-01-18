import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AppContext from "../../context/AppContext";
import Foto from "../../assets/img/Rectangle108school.png";
import Wisuda from "../../assets/icon/ph_student-light.svg";
import Logo from "../../assets/icon/ant-design_user-outlined.svg";
import Loc from "../../assets/icon/loc.svg";
import Telf from "../../assets/icon/telfon.svg";
import data from "../../assets/json/achivement.json"

const PrestasiComponent = ({author, date, title, description, location }) => (
  <button className="border rounded-lg p-3 flex flex-col">
    <img className="flex justify-center w-full" src={Foto} alt="foto" />
    <div className="text-start text-2xl mt-5">{title}</div>
    <div className="flex gap-3 text-start mt-3">
      <img src={Logo} alt="logo" />
      <div className="text-[#8d8f91] flex-grow">{author}</div>
    </div>
    <div className="flex gap-3 text-start mt-3">
      <div className="text-[#8d8f91] flex-grow">{description}</div>
    </div>
    <div className="flex gap-3 items-start text-start mt-3">
      <div className="text-[#8d8f91]">{location}</div>
    </div>
    <div className="flex gap-3 text-start mt-3">
      <div className="text-[#8d8f91]">{date}</div>
    </div>
  </button>
);

const Prestasi = () => {
  const { globalState, updateGlobalState } = useContext(AppContext);
  const sortedPrestasi = data.achievementsData.sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <>
<div className="p-8">
    <div className="text-center text-5xl font-bold mb-10">Prestasi Unggulan</div>
    <div className="grid grid-cols-3 gap-10">
      {sortedPrestasi.map((achievement, index) => (
        <PrestasiComponent key={index} {...achievement} />
      ))}
    </div>
    <div className="mt-20 w-full border bg-[#E6F7FF] border-[#1890FF] p-5">
      <div className="flex justify-between">
        <div className="flex flex-col gap-2">
          <div className="font-bold text-xl">Anda Sudah Daftar PPDB ???</div>
          <div>Yuk daftar PPDB secara daring dan tanpa ribet Sekarang juga</div>
        </div>
        <div className="flex items-center">
          <button className="border py-3 px-3 border-none bg-[#09588D] text-white font-bold text-sm rounded-lg">
            Ayo Daftar Sekarang !
          </button>
        </div>
      </div>
    </div>
  </div>
    </>
  );
};

export default Prestasi;
