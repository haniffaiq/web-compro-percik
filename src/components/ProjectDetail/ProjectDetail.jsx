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
  const projectDatasBahasa = data.bahasa.find((item) => (item.id = queryParameters.get("id")));
  const projectDatasEnglish = data.english.find((item) => (item.id = queryParameters.get("id")));

  const contentRef = useRef();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // console.log("Data" ,queryParameters.get("id"));
  // console.log("Data Project" ,projectDatasEnglish);
  const handleDownloadPDF = () => {
    const content = contentRef.current;
    if (content) {
      const pdfOptions = {
        margin: 10,
        filename: `${queryParameters.get("tittle")}_Project_detail.pdf`,
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "mm", format: "a4", orientation: "landscape" },
      };

      html2pdf().from(content).set(pdfOptions).save();
    }
  };

  const ComponentPDF = () => {
    return (
      <div style={{ display: "none" }}>
        <div className="project-detail-main-container-pdf" ref={contentRef}>
          <h2>{queryParameters.get("tittle")}</h2>
          <div className="image-detail-layout-pdf">
            <img src={require(`../../assets/img/project/${queryParameters.get("img")}`)} alt="img" />
          </div>

          {globalState.globalProperty === "IND" ? (
            <div>
              <div className="desc-main-container-pdf">
                {projectDatasBahasa.Paragraf.map((ParagrafText) => (
                  <div className="desc-container-layout-pdf">
                    <p>{ParagrafText}</p>
                  </div>
                ))}
              </div>
              <div className="dana-detail-container">
                <div className="dana-detail-content-layout">
                  {projectDatasBahasa.rincianDanaPict.map((DanaPict) => (
                    <div>
                      <img src={require(`../../assets/img/project/${DanaPict}`)} alt="rincian-dana" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div>
              <div className="desc-main-container-pdf">
                {projectDatasEnglish.Paragraf.map((ParagrafText) => (
                  <div className="desc-container-layout-pdf">
                    <p>{ParagrafText}</p>
                  </div>
                ))}
              </div>

              <div className="dana-detail-container">
                <div className="dana-detail-content-layout">
                  {projectDatasEnglish.rincianDanaPict.map((DanaPict) => (
                    <div>
                      <img src={require(`../../assets/img/project/${DanaPict}`)} alt="rincian-dana" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
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
        {globalState.globalProperty === "IND" ? (
          <div className="desc-main-container">
            {projectDatasBahasa.Paragraf.map((ParagrafText) => (
              <div className="desc-container-layout">
                <p>{ParagrafText}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="desc-main-container">
            {projectDatasEnglish.Paragraf.map((ParagrafText) => (
              <div className="desc-container-layout">
                <p>{ParagrafText}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="detail-selengkapnya-layout">
        <p className="detail-selengkapnya-text">{globalState.globalProperty === "IND" ? "Untuk Detail selengkapnya, dapat didownload pada link dibawah ini :" : "For more detailed information, you can download it at the link below :"}</p>
        <div className="button-container">
          <button className="button-download-style" onClick={handleDownloadPDF}>
            <img src={IconDownload} className="button-image-style" alt="download-icon" />
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
