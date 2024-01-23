import React, { useContext, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import AppContext from "../../context/AppContext";
import ProjekImg from "../../assets/img/construction_unsplash.jpg";
import data from "../../assets/json/data.json";
import "./ProjectStyle.css";

const Project = () => {
  const { globalState, updateGlobalState } = useContext(AppContext);
  const sortedProject = data.projectData.sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <>
      <div className="flex gap-1 ml-[35px] py-9 ">
        <Link to="/" className="">
          {globalState.globalProperty === "IND" ? "Home" : "Home"}
        </Link>
        <span> / </span>
        <Link to="/project" className="">
          {globalState.globalProperty === "IND" ? "Proyek" : "Project"}
        </Link>
      </div>
      <div className="page-tittle flex justify-center">
        <p>{globalState.globalProperty === "IND" ? "Proyek" : "Project"}</p>
      </div>
      <div className="image-list-container">
        {sortedProject.map((item) => (
          <Link key={item.id} to={`/project-detail?id=${item.id}&tittle=${item.tittleProyek}&desc=${item.deskripsiProyek}&img=${item.urlImage}`} className="image-list-wrapper">
            <img src={require(`../../assets/${item.urlImage}`)} alt="img" />
            <p className="overlay-text-tittle">{item.tittleProyek}</p>
            <p className="overlay-text-desc">{item.deskripsiProyek.length > 400 ? `${item.deskripsiProyek.slice(0, 400)}` : item.deskripsiProyek}</p>
            <Link key={item.id} to={`/project-detail?id=${item.id}&tittle=${item.tittleProyek}&desc=${item.deskripsiProyek}&img=${item.urlImage}`} className="link-layout">
              <p>Selengkapnya...</p>
            </Link>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Project;
