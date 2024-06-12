import React, { useContext, useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import AppContext from "../../context/AppContext";
import GalleryProjectDetail from "./GalleryProjectDetail";
import DanaDetail from "./DanaDetail";
import data from "../../assets/json/project.json";
import IconDownload from "../../assets/img/download.webp";
import ProjectTittle from "../Project/ProjectTittle";
import download from "../../assets/img/donlod pdf.png";
import "./ProjectDetailStyle.css";
import html2pdf from "html2pdf.js";

const ProjectDetail = () => {
  const { globalState, updateGlobalState } = useContext(AppContext);
  const [html, setHtml] = useState({ __html: "" });
  const [html2, setHtml2] = useState({ __html: "" });
  const location = useLocation();

  const queryParameters = new URLSearchParams(location.search);
  console.log("id project detail nya = ", queryParameters.get("id"));
  const projectDatasBahasa = data.bahasa.find((item) => item.id === parseInt(queryParameters.get("id")));
  const projectDatasEnglish = data.english.find((item) => item.id === parseInt(queryParameters.get("id")));

  let descLoader = () => {
    setHtml({
      __html: `<p>${projectDatasBahasa.Paragraf.replace(/\n/g, "<br><br>")}</p>`,
    });
    setHtml2({
      __html: `<p>${projectDatasEnglish.Paragraf.replace(/\n/g, "<br><br>")}</p>`,
    });
  };

  const contentRef = useRef();
  useEffect(() => {
    window.scrollTo(0, 0);
    descLoader();
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
        {console.log("data indo ", projectDatasBahasa)}
        <div className="project-detail-main-container-pdf" ref={contentRef}>
          <h2>{queryParameters.get("tittle")}</h2>
          <div className="image-detail-layout-pdf">
            <img loading="lazy" src={require(`../../assets/img/project/${queryParameters.get("img")}`)} alt="img" />
          </div>

          {globalState.globalProperty === "IND" ? (
            <div>
              <div className="desc-main-container-pdf">
                <div className="desc-container-layout-pdf">
                  <p dangerouslySetInnerHTML={html} />
                </div>
              </div>
              <DanaDetail Getid={queryParameters.get("id")} />
            </div>
          ) : (
            <div>
              <div className="desc-main-container-pdf">
                <div className="desc-container-layout-pdf">
                  <p dangerouslySetInnerHTML={html2} />
                </div>
              </div>
              <DanaDetail Getid={queryParameters.get("id")} />
            </div>
          )}
        </div>
      </div>
    );
  };
  return (
    <>
      <div>
        <div className="lg:flex flex-col items-center justify-center lg:flex-row lg:justify-start hidden">
          <div className="tittle-container mb-[-28px] bg-[#ebebeb] lg:mb-0 lg:bg-transparent w-full">
            <p className="text-black  text-3xl lg:text-5xl lg:px-[145px]" style={{ fontFamily: "Hedvig Letters Serif, serif" }}>
              {globalState.globalProperty === "IND" ? "Pengembangan" : "Development"}
            </p>
          </div>
          {/* <div className="yellow-bar-header border-t-7 border-yellow-400 w-103 absolute top-218 left-125 lg:static lg:border-0"></div> */}
        </div>
      </div>
      <div className="flex gap-1 lg:ml-[125px] py-2 mt-[28px] justify-center lg:justify-start justify-center lg:justify-start  justify-center lg:justify-start lg:px-[145px] align-center justify-center ">
        <Link to="/" className="text-lg">
          {globalState.globalProperty === "IND" ? "BERANDA" : "HOME"}
        </Link>
        <span className="text-lg"> &gt; </span>
        <Link to="/project" className="font-bold lg:text-lg text-sm tracking-widest" style={{ fontFamily: "Maven Pro" }}>
          {globalState.globalProperty === "IND" ? "DETAIL PENGEMBANGAN" : "DEVELOPMENT DETAILS"}
        </Link>
      </div>

      <div className="project-detail-main-container">
        {globalState.globalProperty === "IND" ? (
          <h1 style={{ whiteSpace: "pre-line" }}>
            <React.Fragment>{projectDatasBahasa.tittleProyek}</React.Fragment>
          </h1>
        ) : (
          <h1>
            <React.Fragment>{projectDatasEnglish.tittleProyek}</React.Fragment>
          </h1>
        )}

        <div className="image-detail-layout">
          <img loading="lazy" src={require(`../../assets/img/project/${queryParameters.get("img")}`)} alt="img" />
        </div>
        {globalState.globalProperty === "IND" ? (
          <div className="desc-main-container">
            <div className="desc-container-layout">
              <p dangerouslySetInnerHTML={html} />
            </div>
          </div>
        ) : (
          <div className="desc-main-container">
            <div className="desc-container-layout">
              <p dangerouslySetInnerHTML={html2} />
            </div>
          </div>
        )}
      </div>

      <div className="detail-selengkapnya-layout">
        <p className="detail-selengkapnya-text">{globalState.globalProperty === "IND" ? "Untuk Detail selengkapnya, dapat didownload pada link dibawah ini :" : "For more detailed information, you can download it at the link below :"}</p>
        <div className="button-container">
          <div class="container-download">
            <div class="line-proyek1"></div>
            <img src={download} alt="Gambar" onClick={handleDownloadPDF} />
            <div class="line-proyek2"></div>
          </div>
          {/* <button className="button-download-style" onClick={handleDownloadPDF}>
            <img loading="lazy" src={IconDownload} className="button-image-style" alt="download-icon" />
            <p className="button-text-style">Download PDF</p>
          </button> */}
        </div>
      </div>

      <GalleryProjectDetail Getid={queryParameters.get("id")} />
      {/* Buat trigger pdf nya */}
      <ComponentPDF />
    </>
  );
};

export default ProjectDetail;
