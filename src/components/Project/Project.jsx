import React, { useContext, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import AppContext from "../../context/AppContext";
import ProjekImg from "../../assets/img/construction_unsplash.jpg";
import ProjectDetail from "../ProjectDetail/ProjectDetail";
import "./ProjectStyle.css";

const Project = () => {
  const { globalState, updateGlobalState } = useContext(AppContext);

  const projectData = [
    {
      id: 1,
      tittleProyek: "Proyek pemindahan sekolah 1",
      deskripsiProyek:
        "Norem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent",
      imageSource: ProjekImg,
    },
    {
      id: 2,
      tittleProyek: "Proyek pemindahan sekolah",
      deskripsiProyek:
        "Norem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent",
      imageSource: ProjekImg,
    },
    {
      id: 3,
      tittleProyek: "Proyek pemindahan sekolah",
      deskripsiProyek:
        "Norem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent",
      imageSource: ProjekImg,
    },
  ];

  return (
    <>
      <div className="flex gap-1 ml-[35px] py-9">
        <Link to="/" className="">
          {globalState.globalProperty === "IND" ? "Home" : "Home"}
        </Link>
        <span> / </span>
        <Link to="/project" className="">
          {globalState.globalProperty === "IND" ? "Proyek" : "Project"}
        </Link>
      </div>
      <div className="page-tittle">
        <p>{globalState.globalProperty === "IND" ? "Proyek" : "Project"}</p>
      </div>
      <div className="image-list-container">
        {projectData.map((item) => (
          <Link key={item.id} to={`/project-detail?id=${item.id}&tittle=${item.tittleProyek}&desc=${item.deskripsiProyek}&img=${item.imageSource}`} className="image-list-wrapper">
            <img src={item.imageSource} alt="img" />
            <p className="overlay-text-tittle">{item.tittleProyek}</p>
            <p className="overlay-text-desc">{item.deskripsiProyek}</p>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Project;
