import React, { useContext, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import AppContext from "../../context/AppContext";
import LogoWriter from "../../assets/icon/ant-design_user-outlined.svg";
import IconDownload from "../../assets/img/download.png";
import data from "../../assets/json/data.json";
import "./EventDetailStyle.css";
import html2pdf from 'html2pdf.js';
const EventDetail = () => {
  const { globalState, updateGlobalState } = useContext(AppContext);
  const location = useLocation();
  const queryParameters = new URLSearchParams(location.search);

  const sortedData = data.beritaData.sort((a, b) => new Date(b.date) - new Date(a.date));
  const slicedData = sortedData.slice(0, 3);
  const contentRef = useRef();

  const handleDownloadPDF = () => {
    const content = contentRef.current;
    if (content) {
      const pdfOptions = {
        margin: 10,
        filename: `${queryParameters.get("headline")}_news_event_detail.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
      };

      html2pdf().from(content).set(pdfOptions).save();
    }
  };
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

      <div  className="container-event">


        <div ref={contentRef}>
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
        </div>

        <div className="detail-selengkapnya-event-layout">
          <p>Untuk Detail selengkapnya, dapat didownload pada link dibawah ini :</p>
          <button className="detail-selengkapnya-event-button-layout" onClick={handleDownloadPDF}>
            <img src={IconDownload} />
            <p>Download Berita</p>
          </button>
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
      </div>



      {/* <div className="berita-lainnya-layout">
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
      </div> */}
    </>
  );
};

export default EventDetail;
