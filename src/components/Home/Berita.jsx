import React, { useContext, useState } from "react";
import { Carousel, ConfigProvider } from "antd";
import AppContext from "../../context/AppContext";
import Rec1 from "../../assets/img/Rectangle108.png";
import Logo from "../../assets/icon/ant-design_user-outlined.svg";
import { Link } from "react-router-dom";
import data from "../../assets/json/data.json";


const itemsPerPage = 12;
const Berita = () => {
  const { globalState, updateGlobalState } = useContext(AppContext);
  console.log(globalState, "DIHeader");
  const [currentPage, setCurrentPage] = useState(1);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const sortedPrestasi = data.beritaData.sort((a, b) => new Date(b.date) - new Date(a.date));
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = sortedPrestasi.slice(startIndex, endIndex)

  return (
    <>
      <div className="flex flex-col gap-2 p-14 bg-[#CCEAFF]">
        <div className="flex justify-between ">
          <div className="text-3xl font-bold mb-10">BERITA DAN ACARA</div>
          <div className="text-sm">SELENGKAPNYA {">>"}</div>
        </div>
        <div className=" grid grid-cols-4 gap-5">
          {currentData.slice(0, 4).map((item) => (
            <Link key={item.id} to={`/event-detail?id=${item.id}&headline=${item.headline}&desc=${item.deskripsi}&img=${item.urlImage}&maker=${item.maker}&date=${item.date}`} className="gallery-item shadow-xl">
              <div>
                <div>
                  <img src={require(`../../assets/${item.urlImage}`)} alt={item.alt} />
                </div>
                <p className="date-style">{item.date}</p>
                <div className="gallery-text-item ">
                  <p className="gallery-text-item-headline">{item.headline}</p>
                  <p className="gallery-text-item-deskripsi">{item.deskripsi}</p>
                  <div className="maker-layout">
                    <img src={Logo} alt="logo" />
                    <p className="gallery-text-item-maker">{item.maker}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Berita;
