import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AppContext from "../../context/AppContext";
import "./EventStyle.css";
import Rec1 from "../../assets/img/Rectangle108.png";
import Logo from "../../assets/icon/ant-design_user-outlined.svg";
import Pagination from "./Pagination";

const itemsPerPage = 12;

const Event = () => {
  const { globalState, updateGlobalState } = useContext(AppContext);
  const [currentPage, setCurrentPage] = useState(1);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const beritaData = [
    {
      id: 1,
      date: "14 Juni 2022",
      headline: "Ex-Rocket Internet, Uber e xecs` SaaS platform bags",
      deskripsi: "Blusheets said its helping over 10,000 companies automate their financial data.",
      maker: "Bloomberg",
      urlImage: Rec1,
      alt: "Image 1",
    },
    {
      id: 2,
      date: "14 Juni 2022",
      headline: "Ex-Rocket Internet, Uber e xecs` SaaS platform bags",
      deskripsi: "Blusheets said its helping over 10,000 companies automate their financial data.",
      maker: "Bloomberg",
      urlImage: Rec1,
      alt: "Image 1",
    },
    {
      id: 3,
      date: "14 Juni 2022",
      headline: "Ex-Rocket Internet, Uber e xecs` SaaS platform bags",
      deskripsi: "Blusheets said its helping over 10,000 companies automate their financial data.",
      maker: "Bloomberg",
      urlImage: Rec1,
      alt: "Image 1",
    },
    {
      id: 4,
      date: "14 Juni 2022",
      headline: "Ex-Rocket Internet, Uber e xecs` SaaS platform bags",
      deskripsi: "Blusheets said its helping over 10,000 companies automate their financial data.",
      maker: "Bloomberg",
      urlImage: Rec1,
      alt: "Image 1",
    },
    {
      id: 5,
      date: "14 Juni 2022",
      headline: "Ex-Rocket Internet, Uber e xecs` SaaS platform bags",
      deskripsi: "Blusheets said its helping over 10,000 companies automate their financial data.",
      maker: "Bloomberg",
      urlImage: Rec1,
      alt: "Image 1",
    },
    {
      id: 6,
      date: "14 Juni 2022",
      headline: "Ex-Rocket Internet, Uber e xecs` SaaS platform bags",
      deskripsi: "Blusheets said its helping over 10,000 companies automate their financial data.",
      maker: "Bloomberg",
      urlImage: Rec1,
      alt: "Image 1",
    },
  ];

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = beritaData.slice(startIndex, endIndex);

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
      <div className="page-tittle">
        <p>{globalState.globalProperty === "IND" ? "Berita & Acara" : "News & Event"}</p>
      </div>
      <div className="gallery">
        {beritaData.map((item, index) => (
          <div key={index} className="gallery-item">
            <div>
              <img src={item.urlImage} alt={item.alt} />
            </div>
            <p className="date-style">{item.date}</p>
            <div className="gallery-text-item">
              <p className="gallery-text-item-headline">{item.headline}</p>
              <p className="gallery-text-item-deskripsi">{item.deskripsi}</p>
              <div className="maker-layout">
                <img src={Logo} alt="logo" />
                <p className="gallery-text-item-maker">{item.maker}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Pagination totalItems={beritaData.length} itemsPerPage={itemsPerPage} currentPage={currentPage} onPageChange={handlePageChange} />
    </>
  );
};

export default Event;
