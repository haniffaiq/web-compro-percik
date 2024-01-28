import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AppContext from "../../context/AppContext";
import "./EventStyle.css";
import Rec1 from "../../assets/img/Rectangle108.png";
import Logo from "../../assets/icon/ant-design_user-outlined.svg";
import Pagination from "./Pagination";
import data from "../../assets/json/events.json";

const itemsPerPage = 12;
const parseDate = (dateString) => {
  const [day, month, year] = dateString.split('/').map(Number);
  return new Date(year, month - 1, day);
};

// Fungsi untuk mengonversi objek Date ke string tanggal dengan format DD/MM/YYYY
const formatDate = (dateObject) => {
  const day = dateObject.getDate();
  const month = dateObject.getMonth() + 1;
  const year = dateObject.getFullYear();
  return `${day}/${month}/${year}`;
};
const Event = () => {
  const { globalState, updateGlobalState } = useContext(AppContext);
  const [currentPage, setCurrentPage] = useState(1);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  let sortedPrestasi = {}
  if (globalState.globalProperty == "IND") {
    sortedPrestasi = [...data.bahasa].sort(
      (a, b) => {
        const dateA = parseDate(a.date);
        const dateB = parseDate(b.date);
        return dateB - dateA;
      }
    );
  }
  else{
    sortedPrestasi = [...data.english].sort(
      (a, b) => {
      const dateA = parseDate(a.date);
      const dateB = parseDate(b.date);
      return dateB - dateA;
    }
    );
  }
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = sortedPrestasi.slice(startIndex, endIndex);

  return (
    <>
      <div className="flex gap-1 ml-[35px] py-9">
        <Link to="/" className="">
          {globalState.globalProperty === "IND" ? "Home" : "Home"}
        </Link>
        <span> / </span>
        <Link to="/project" className="">
          {globalState.globalProperty === "IND" ? "Berita & Acara" : "News & Event"}
        </Link>
      </div>
      <div className="page-tittle flex justify-center ">
        <p>{globalState.globalProperty === "IND" ? "Berita & Acara" : "News & Event"}</p>
      </div>
      <div className="gallery ">
        {currentData.map((item) => (
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
      <Pagination totalItems={currentData.length} itemsPerPage={itemsPerPage} currentPage={currentPage} onPageChange={handlePageChange} />
    </>
  );
};

export default Event;
