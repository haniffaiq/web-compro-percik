import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";
import AppContext from "../../context/AppContext";
import "./ProjectDetailStyle.css";

const ProjectDetail = () => {
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
          {globalState.globalProperty === "IND" ? "Detail Proyek" : "Project Details"}
        </Link>
      </div>
      <div>
        <h2>{queryParameters.get("tittle")}</h2>
        <img src={queryParameters.get("img")} alt="img" />
        <p>{queryParameters.get("desc")}</p>
      </div>
    </>
  );
};

export default ProjectDetail;
