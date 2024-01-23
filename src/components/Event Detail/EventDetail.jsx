import React, { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import AppContext from "../../context/AppContext";
import LogoWriter from "../../assets/icon/ant-design_user-outlined.svg";
import IconDownload from "../../assets/img/download.png";
import data from "../../assets/json/data.json";
import "./EventDetailStyle.css";

const EventDetail = () => {
  const { globalState, updateGlobalState } = useContext(AppContext);
  const location = useLocation();
  const queryParameters = new URLSearchParams(location.search);

  const sortedData = data.beritaData.sort((a, b) => new Date(b.date) - new Date(a.date));
  const slicedData = sortedData.slice(0, 3);

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
      </div>
      <div className="isi-desc-event">
        <p>{queryParameters.get("desc")}</p>
      </div>
      <div className="detail-selengkapnya-event-layout">
        <p>Untuk Detail selengkapnya, dapat didownload pada link dibawah ini :</p>
        <button className="detail-selengkapnya-event-button-layout">
          <img src={IconDownload} />
          <p>Download Berita</p>
        </button>
      </div>
      <div className="daftar-ppdb-layout">
        <div className="sudah-daftar-layout">
          <h4>Anda Sudah Daftar PPDB??</h4>
          <p>Yuk daftar PPDB secara daring dan tanpa ribet Sekarang Juga</p>
        </div>
        <button className="detail-selengkapnya-event-button-layout">
          <p>Ayo Daftar Sekarang !</p>
        </button>
      </div>
      <div className="berita-lainnya-layout">
        <h2>Berita Lainnya</h2>
        <div className="berita-lainnya-gallery">
          {slicedData.map((item) => (
            <Link key={item.id} to={`/event-detail?id=${item.id}&headline=${item.headline}&desc=${item.deskripsi}&img=${item.urlImage}&maker=${item.maker}&date=${item.date}`} className="gallery-item">
              <div>
                <div>
                  <img src={require(`../../assets/${item.urlImage}`)} alt={item.alt} />
                </div>
                <p className="date-style">{item.date}</p>
                <div className="gallery-text-item">
                  <p className="gallery-text-item-headline">{item.headline}</p>
                  <p className="gallery-text-item-deskripsi">{item.deskripsi}</p>
                  <div className="maker-layout">
                    <img src={LogoWriter} alt="logo" />
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

export default EventDetail;
