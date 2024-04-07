import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AppContext from "../../context/AppContext";
import "./EventStyle.css";
import Logo from "../../assets/icon/ant-design_user-outlined.svg";
import Pagination from "./Pagination";
import data from "../../assets/json/events.json";

const itemsPerPage = 8;
const parseDate = (dateString) => {
  const [day, month, year] = dateString.split("/").map(Number);
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
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let sortedData = {};
  if (globalState.globalProperty === "IND") {
    sortedData = [...data.bahasa].sort((a, b) => {
      const dateA = parseDate(a.date);
      const dateB = parseDate(b.date);
      return dateB - dateA;
    });
  } else {
    sortedData = [...data.english].sort((a, b) => {
      const dateA = parseDate(a.date);
      const dateB = parseDate(b.date);
      return dateB - dateA;
    });
  }
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = sortedData.slice(startIndex, endIndex);

  function truncateText(text, maxLength) {
    const words = text.split(" ");

    if (words.length > maxLength) {
      const truncatedText = words.slice(0, maxLength).join(" ");
      return `${truncatedText} ...`;
    }

    return text;
  }
  return (
    <>
      <div className="flex gap-1 ml-[35px] py-9">
        <Link to="/" className="">
          {globalState.globalProperty === "IND" ? "Home" : "Home"}
        </Link>
        <span> / </span>
        <Link to="/event" className="">
          {globalState.globalProperty === "IND" ? "Kegiatan" : "Event"}
        </Link>
      </div>
      {/* <div className="page-tittle-event">
        <p>{globalState.globalProperty === "IND" ? "KEGIATAN" : "EVENT"}</p>
      </div> */}

      <div className="text-center text-3xl lg:text-5xl font-bold mb-10 ">
        {globalState.globalProperty === "IND" ? "KEGIATAN" : "EVENT"}
      </div>
      <div className="gallery">
        {currentData.map((item) => (
          <Link key={item.id} to={`/event-detail?id=${item.id}&headline=${item.headline}&desc=${item.deskripsi}&img=${item.urlImage}&maker=${item.maker}&date=${item.date}`} className="gallery-item">
            <div>
              <div>
                <img loading="lazy" src={require(`../../assets/${item.urlImage}`)} alt={item.alt} />
              </div>
              <div className="gallery-text-item ">
                <p className="date-style">{item.date}</p>
                <p className="gallery-text-item-headline">{item.headline}</p>
                <p className="gallery-text-item-deskripsi">{truncateText(item.deskripsi, 10)}</p>
                <div className="maker-layout">
                  <img loading="lazy" src={Logo} alt="logo" />
                  <p className="gallery-text-item-maker">{item.maker}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <Pagination totalItems={sortedData.length} itemsPerPage={itemsPerPage} currentPage={currentPage} onPageChange={handlePageChange} />
    </>
  );
};

export default Event;
