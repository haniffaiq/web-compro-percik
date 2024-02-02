import React, { useContext, useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";
import AppContext from "../../context/AppContext";
import GalleryProjectDetail from "./GalleryProjectDetail";
import data from "../../assets/json/project.json";
import IconDownload from "../../assets/img/download.png";
import "./ProjectDetailStyle.css";
import html2pdf from "html2pdf.js";

const ProjectDetail = () => {
  const { globalState, updateGlobalState } = useContext(AppContext);
  const location = useLocation();
  const queryParameters = new URLSearchParams(location.search);

  const contentRef = useRef();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleDownloadPDF = () => {
    const content = contentRef.current;
    if (content) {
      const pdfOptions = {
        margin: 10,
        filename: `${queryParameters.get("tittle")}_Project_detail.pdf`,
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
        <div className="project-detail-main-container-pdf" ref={contentRef}>
          <h2>{queryParameters.get("tittle")}</h2>
          <div className="image-detail-layout">
            <img src={require(`../../assets/img/project/${queryParameters.get("img")}`)} alt="img" />
          </div>
          <div className="desc-main-container-pdf">
            {sortedData.bahasa.Paragraf.map((ParagrafText) => (
              <div className="desc-container-layout-pdf">
                <p>{ParagrafText}</p>
              </div>
            ))}
          </div>
          <div className="desc-main-container-pdf">
            {sortedData.english.Paragraf.map((ParagrafText) => (
              <div className="desc-container-layout-pdf">
                <p>{ParagrafText}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  return (
    <>
      <div className="flex gap-1 ml-[35px] py-9">
        <Link to="/" className="">
          {globalState.globalProperty === "IND" ? "Home" : "Home"}
        </Link>
        <span> / </span>
        <Link to="/project" className="">
          {globalState.globalProperty === "IND" ? "Detail Proyek" : "Project Details"}
        </Link>
      </div>

      <div className="project-detail-main-container">
        <h2>{queryParameters.get("tittle")}</h2>
        <div className="image-detail-layout">
          <img src={require(`../../assets/img/project/${queryParameters.get("img")}`)} alt="img" />
        </div>
        <div className="desc-main-container">
          {sortedData.bahasa.Paragraf.map((ParagrafText) => (
            <div className="desc-container-layout">
              <p>{ParagrafText}</p>
            </div>
          ))}
        </div>
        <div className="desc-main-container">
          {sortedData.english.Paragraf.map((ParagrafText) => (
            <div className="desc-container-layout">
              <p>{ParagrafText}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="detail-selengkapnya-layout">
        <p className="detail-selengkapnya-text">Untuk Detail selengkapnya, dapat didownload pada link dibawah ini :</p>
        <div className="button-container">
          <button className="button-download-style" onClick={handleDownloadPDF}>
            <img src={IconDownload} className="button-image-style" alt="download-image" />
            <p className="button-text-style">Download PDF</p>
          </button>
        </div>
      </div>

      <GalleryProjectDetail Getid={queryParameters.get("id")} />
      {/* Buat trigger pdf nya */}
      <ComponentPDF />
    </>
  );
};

export default ProjectDetail;
