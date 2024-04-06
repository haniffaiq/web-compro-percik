import React, { useContext, useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import AppContext from "../../context/AppContext";
import GalleryProjectDetail from "./GalleryProjectDetail";
import DanaDetail from "./DanaDetail";
import data from "../../assets/json/project.json";
import IconDownload from "../../assets/img/download.webp";
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
      <div className="flex gap-1 ml-[35px] py-9">
        <Link to="/" className="">
          {globalState.globalProperty === "IND" ? "Home" : "Home"}
        </Link>
        <span> / </span>
        <Link to="/project" className="">
          {globalState.globalProperty === "IND" ? "Detail Proyek" : "Project Details"}
        </Link>
      </div>

      <div className="project-detail-main-container mx-12">
        {globalState.globalProperty === "IND" ? (
          <h1>
            {projectDatasBahasa.tittleProyek.split('\n').map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </h1>
        ) : (
          <h1>
            {projectDatasEnglish.tittleProyek.split('\n').map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
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
          <button className="button-download-style" onClick={handleDownloadPDF}>
            <img loading="lazy" src={IconDownload} className="button-image-style" alt="download-icon" />
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
