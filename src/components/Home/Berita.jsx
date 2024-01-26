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
      <div className="flex flex-col gap-2 p-5 lg:p-14 bg-[#CCEAFF]">
        <div className="flex justify-between ">
          <div className="text-xl lg:text-3xl font-bold mb-10">
            BERITA DAN ACARA
          </div>
          <div className="lg:flex hidden text-sm">Selengkapnya {">>"}</div>
        </div>
        <div className="flex w-[350px] lg:w-full overflow-y-hidden lg:overflow-hidden lg:grid lg:grid-cols-4 gap-5">
          {currentData.slice(0, 4).map((item) => (
            <Link key={item.id} to={`/event-detail?id=${item.id}&headline=${item.headline}&desc=${item.deskripsi}&img=${item.urlImage}&maker=${item.maker}&date=${item.date}`} className="border flex flex-col items-center bg-white shadow-lg rounded-lg p-3 min-w-[200px] lg:w-full">

              <img src={require(`../../assets/${item.urlImage}`)} alt={item.alt} className="radius-lg object-cover w-full " />
              <div>
                <div className="text-start text-[#8d8f91] text-xs lg:text-sm mt-3 mb-3">
                  {item.date}
                </div>
                <div className="font-bold text-[14px] lg:text-2xl mb-5">
                  {item.headline}
                </div>
                <div className="text-[12px] lg:text-2xl text-md tracking-wider mb-5">
                  {item.deskripsi}
                </div>
                <div className="flex gap-3 items-center">
                  <div>
                    <img src={Logo} alt="logo" />
                  </div>
                  <div className="text-[#8d8f91]">{item.maker}</div>
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
