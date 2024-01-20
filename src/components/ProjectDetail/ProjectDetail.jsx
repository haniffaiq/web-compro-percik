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
        <img src={require(`../../assets/${queryParameters.get("img")}`)} alt="img" />
        <div className="desc-container-layout">
          {projectDatas.Paragraf.map((ParagrafText, index) => (
            <div key={index}>
              <p>{ParagrafText}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="detail-selengkapnya-layout">
        <p>Untuk Detail selengkapnya, dapat didownload pada link dibawah ini :</p>
        <button className="detail-selengkapnya-button-layout">
          <img src={IconDownload} />
          <p>Download PDF</p>
        </button>
      </div>
      <GalleryProjectDetail Getid={queryParameters.get("id")} />
    </>
  );
};

export default ProjectDetail;
