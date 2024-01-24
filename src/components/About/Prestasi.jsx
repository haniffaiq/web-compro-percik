import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AppContext from "../../context/AppContext";
import Foto from "../../assets/img/Rectangle108school.png";
import Wisuda from "../../assets/icon/ph_student-light.svg";
import Logo from "../../assets/icon/ant-design_user-outlined.svg";
import Loc from "../../assets/icon/loc.svg";
import Telf from "../../assets/icon/telfon.svg";
import data from "../../assets/json/data.json";

const itemsPerPage = 6;
const PrestasiComponent = ({ author, date, title, description, location }) => (
  <button className="h-full  lg:h-full  border rounded-lg p-3 flex flex-col">
    <img className="flex justify-center min-w-[200px]" src={Foto} alt="foto" />
    <div className="text-start text-md lg:text-2xl mt-5">{title}</div>
    <div className="flex gap-3 text-start mt-3">
      <img src={Logo} alt="logo" />
      <div className="text-[#8d8f91] flex-grow text-xs lg:text-md">
        {author}
      </div>
    </div>
    <div className="flex gap-3 text-start mt-3">
      <div className="text-[#8d8f91] flex-grow text-xs lg:text-md">
        {description}
      </div>
    </div>
    <div className="flex gap-3 items-start text-start mt-3">
      <div className="text-[#8d8f91] text-xs lg:text-md">{location}</div>
    </div>
    <div className="flex gap-3 text-start mt-3">
      <div className="text-[#8d8f91] text-xs lg:text-md">{date}</div>
    </div>
  </button>
);

const Prestasi = () => {
  const { globalState, updateGlobalState } = useContext(AppContext);
  const sortedPrestasi = data.achievementsData.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  const [currentPage, setCurrentPage] = useState(1);

  // Menghitung indeks awal dan akhir untuk item pada halaman saat ini
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentPrestasi = sortedPrestasi.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const totalPages = Math.ceil(sortedPrestasi.length / itemsPerPage);

  const changePage = (page) => {
    setCurrentPage(page);
  };
  return (
    <>
      <div className="p-5 lg:p-8">
        <div className="text-center text-3xl lg:text-5xl font-bold mb-10">
          Prestasi Unggulan
        </div>
        <div className="flex w-[350px] overflow-y-hidden lg:overflow-hidden lg:w-full lg:grid lg:grid-cols-3 gap-5 lg:gap-10">
          {currentPrestasi.map((achievement, index) => (
            <PrestasiComponent key={index} {...achievement} />
          ))}
        </div>
        <div className="flex items-center justify-center mt-4">
          <button
            className="border py-3 px-3 border-none bg-[#09588D] text-white font-bold text-sm rounded-lg"
            onClick={() => changePage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Sebelumnya
          </button>
          <span className="mx-4">
            {currentPage} dari {totalPages}
          </span>
          <button
            className="border py-3 px-3 border-none bg-[#09588D] text-white font-bold text-sm rounded-lg"
            onClick={() => changePage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Selanjutnya
          </button>
        </div>
        <div className="mt-20 w-full border bg-[#E6F7FF] border-[#1890FF] p-5">
          <div className="flex justify-between gap-0 lg:gap-5">
            <div className="flex flex-col gap-2 w-[170px] lg:w-full">
              <div className="font-bold text-[10px] lg:text-xl">
                Anda Sudah Daftar PPDB ???
              </div>
              <div className="text-[8px] lg:text-lg">
                Yuk daftar PPDB secara daring dan tanpa ribet Sekarang juga
              </div>
            </div>
            <div className="flex items-center">
              <button className="border py-3 px-3 border-none bg-[#09588D] text-white font-bold text-[7px] lg:text-sm rounded-lg">
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
