import React, { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import AppContext from "../../context/AppContext";
import LogoWriter from "../../assets/icon/ant-design_user-outlined.svg";
import IconDownload from "../../assets/img/download.png";
import "./EventDetailStyle.css";

const EventDetail = () => {
  const { globalState, updateGlobalState } = useContext(AppContext);
  const location = useLocation();
  const queryParameters = new URLSearchParams(location.search);
  return (
    <>
      <div className="flex gap-1 ml-[35px] py-9">
        <Link to="/" className="">
          {globalState.globalProperty === "IND" ? "Home" : "Home"}
        </Link>
        <span> / </span>
        <Link to="/project" className="">
          {globalState.globalProperty === "IND" ? "Detail Berita & Acara" : "News & Event Details"}
        </Link>
      </div>
      <div className="event-detail-main-container">
        <h2>{queryParameters.get("headline")}</h2>
        <div className="date-writer-layout">
          <div className="date-layout">
            <img src={LogoWriter} alt="Image" />
            <p>{queryParameters.get("date")}</p>
          </div>
          <div className="writter-layout">
            <img src={LogoWriter} alt="Image" />
            <p>{queryParameters.get("maker")}</p>
          </div>
        </div>
        <img className="event-image-main-layout" src={require(`../../assets/${queryParameters.get("img")}`)} alt="image headline" />
        <div className="isi-desc-event">
          <p>{queryParameters.get("desc")}</p>
        </div>
        <div className="detail-selengkapnya-layout">
          <p>Untuk Detail selengkapnya, dapat didownload pada link dibawah ini :</p>
          <button className="detail-selengkapnya-button-layout">
            <img src={IconDownload} />
            <p>Download Berita</p>
          </button>
        </div>
      </div>
    </>
  );
};

export default EventDetail;
