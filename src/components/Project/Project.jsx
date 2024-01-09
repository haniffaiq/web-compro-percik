import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AppContext from "../../context/AppContext";
import "./ProjectStyle.css";

import ProjekImg from "../../assets/img/construction_unsplash.jpg";

const Project = () => {
  const { globalState, updateGlobalState } = useContext(AppContext);

  const projectData = [
    {
      tittleProyek: "Proyek pemindahan sekolah",
      deskripsiProyek:
        "Norem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent",
      imageSource: ProjekImg,
    },
    {
      tittleProyek: "Proyek pemindahan sekolah",
      deskripsiProyek:
        "Norem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent",
      imageSource: ProjekImg,
    },
    {
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
          <div className="image-list-wrapper">
            <img src={item.imageSource} alt="img" />
            <p className="overlay-text-tittle">{item.tittleProyek}</p>
            <p className="overlay-text-desc">{item.deskripsiProyek}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Project;
