import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";
import AppContext from "../../context/AppContext";
import GalleryProjectDetail from "./GalleryProjectDetail";
import data from "../../assets/json/data.json";
import IconDownload from "../../assets/img/download.png";
import "./ProjectDetailStyle.css";

const ProjectDetail = () => {
  const { globalState, updateGlobalState } = useContext(AppContext);
  const location = useLocation();
  const queryParameters = new URLSearchParams(location.search);
  const projectId = queryParameters.get("id");
  const projectDatas = data.projectData.find((item) => (item.id = projectId));

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
          <img src={require(`../../assets/${queryParameters.get("img")}`)} alt="img" />
        </div>
        <div className="desc-main-container">
          {projectDatas.Paragraf.map((ParagrafText, index) => (
            <div key={index} className="desc-container-layout">
              <p>{ParagrafText}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="detail-selengkapnya-layout">
        <p className="detail-selengkapnya-text">Untuk Detail selengkapnya, dapat didownload pada link dibawah ini :</p>
        <div className="button-container">
          <button className="button-download-style">
            <img src={IconDownload} className="button-image-style" alt="download-image" />
            <p className="button-text-style">Download PDF</p>
          </button>
        </div>
      </div>

      <GalleryProjectDetail Getid={queryParameters.get("id")} />
    </>
  );
};

export default ProjectDetail;
