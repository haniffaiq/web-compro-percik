import React, { useContext, useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import AppContext from "../../context/AppContext";
import LogoWriter from "../../assets/icon/ant-design_user-outlined.svg";
import IconDownload from "../../assets/img/download.webp";
import download from "../../assets/img/donlod pdf.png";
import data from "../../assets/json/events.json";
import "./EventDetailStyle.css";
import html2pdf from "html2pdf.js";

const itemsPerPage = 12;
const parseDate = (dateString) => {
  const [day, month, year] = dateString.split("/").map(Number);
  return new Date(year, month - 1, day);
};

const EventDetail = () => {
  const { globalState, updateGlobalState } = useContext(AppContext);
  const location = useLocation();
  const queryParameters = new URLSearchParams(location.search);
  let idParameter = queryParameters.get("id");

  function truncateText(text, maxLength) {
    const words = text.split(" ");

    if (words.length > maxLength) {
      const truncatedText = words.slice(0, maxLength).join(" ");
      return `${truncatedText} ...`;
    }

    return text;
  }
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let sortedData = {};
  if (globalState.globalProperty == "IND") {
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
  const slicedData = sortedData.slice(0, 4);
  const contentRef = useRef();
  const selectedItem = sortedData.find((item) => item.id === parseInt(idParameter, 10));
  console.log("ITEM", selectedItem);

  const handleDownloadPDF = () => {
    const content = contentRef.current;
    if (content) {
      const pdfOptions = {
        margin: 10,
        filename: `${queryParameters.get("headline")}_news_event_detail.pdf`,
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
      };

      html2pdf().from(content).set(pdfOptions).save();
    }
  };

  const ComponentPDF = () => {
    return (
      <div style={{ display: "none" }}>
        <div ref={contentRef}>
          <div className="event-detail-main-container-pdf">
            <h2>{selectedItem.headline}</h2>
            <div className="date-writer-layout-pdf">
              <div className="date-layout-pdf">
                <img loading="lazy" src={LogoWriter} alt="Image" />
                <p>{selectedItem.maker}</p>
              </div>
              <div className="writter-layout-pdf">
                {/* <img loading="lazy" src={LogoWriter} alt="Image" /> */}
                <p>{selectedItem.date}</p>
              </div>
            </div>
            <img loading="lazy" className="lg:event-image-main-layout" src={require(`../../assets/${selectedItem.urlImage}`)} alt="image headline" />
          </div>
          <div className="isi-desc-event-pdf">
            {selectedItem.deskripsi.split("\n").map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    );
  };
  return (
    <>
      <div>
        <div className="lg:flex flex-col items-center justify-center lg:flex-row lg:justify-start hidden">
          <div className="tittle-container mb-[-28px] bg-[#ebebeb] lg:mb-0 lg:bg-transparent w-full">
            <p className="text-black font-segoeui text-3xl font-bold lg:text-5xl">{globalState.globalProperty === "IND" ? "KEGIATAN" : "EVENT"}</p>
          </div>
          <div className="yellow-bar-header border-t-7 border-yellow-400 w-103 absolute top-218 left-125 lg:static lg:border-0"></div>
        </div>
      </div>
      <div className="flex gap-1 lg:ml-[125px] py-9 mt-[28px] justify-center lg:justify-start align-center justify-center ">
        <Link to="/" className="text-lg">
          {globalState.globalProperty === "IND" ? "Beranda" : "Home"}
        </Link>
        <span className="text-lg"> &gt; </span>
        <Link to="/management" className="font-bold text-lg">
          {globalState.globalProperty === "IND" ? "Detail Berita & Acara" : "Event & News Details"}
        </Link>
      </div>

      <div className="container-event">
        <div>
          <div className="event-detail-main-container">
            <h2>{selectedItem.headline}</h2>
            <div className="date-writer-layout">
              <div className="date-layout">
                <img loading="lazy" src={LogoWriter} alt="Image" />
                <p>{selectedItem.maker}</p>
              </div>
              <div className="writter-layout">
                {/* <img loading="lazy" src={LogoWriter} alt="Image" /> */}
                <p>{selectedItem.date}</p>
              </div>
            </div>
            <img loading="lazy" className="lg:event-image-main-layout" src={require(`../../assets/${selectedItem.urlImage}`)} alt="image headline" />
          </div>
          <div className="isi-desc-event">
            {selectedItem.deskripsi.split("\n").map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
        <ComponentPDF />
        <div className="detail-selengkapnya-event-layout">
          <p>{globalState.globalProperty === "IND" ? "Untuk Detail selengkapnya, dapat didownload pada link dibawah ini :" : "For more details, please download the following link:"}</p>
          <div class="container-download-event">
            <div class="line-proyek1-event"></div>
            <img src={download} alt="Gambar" onClick={handleDownloadPDF} />
            <div class="line-proyek2-event"></div>
          </div>
        </div>

        {/* <div className="berita-lainnya-layout">
          <h2>Berita Lainnya</h2>
          <div className="berita-lainnya-gallery">
            {slicedData.map((item) => (
              <Link key={item.id} to={`/event-detail?id=${item.id}&headline=${item.headline}&desc=${item.deskripsi}&img=${item.urlImage}&maker=${item.maker}&date=${item.date}`} className="gallery-item shadow-xl">
                <div className="card-layout">
                  <div>
                    <img loading="lazy" src={require(`../../assets/${item.urlImage}`)} alt={item.alt} />
                  </div>
                  <p className="date-style">{item.date}</p>
                  <div className="gallery-text-item">
                    <p className="gallery-text-item-headline">{item.headline}</p>
                    <p className="gallery-text-item-deskripsi">{truncateText(item.deskripsi, 10)}</p>
                    <div className="maker-layout">
                      <img loading="lazy" src={LogoWriter} alt="logo" />
                      <p className="gallery-text-item-maker">{item.maker}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div> */}
      </div>
    </>
  );
};

export default EventDetail;
