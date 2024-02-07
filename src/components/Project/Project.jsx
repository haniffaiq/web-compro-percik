import React, { useContext, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import AppContext from "../../context/AppContext";
import ProjekImg from "../../assets/img/construction_unsplash.jpg";
import data from "../../assets/json/project.json";
import "./ProjectStyle.css";

const parseDate = (dateString) => {
  const [day, month, year] = dateString.split("/").map(Number);
  return new Date(year, month - 1, day);
};

const Project = () => {
  const { globalState, updateGlobalState } = useContext(AppContext);
  // const sortedProject = data.projectData.sort((a, b) => new Date(b.date) - new Date(a.date));
  let sortedProject = {};
  if (globalState.globalProperty === "IND") {
    sortedProject = [...data.bahasa].sort((a, b) => {
      const dateA = parseDate(a.date);
      const dateB = parseDate(b.date);
      return dateB - dateA;
    });
  } else {
    sortedProject = [...data.english].sort((a, b) => {
      const dateA = parseDate(a.date);
      const dateB = parseDate(b.date);
      return dateB - dateA;
    });
  }
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
      <div className="page-tittle">
        <p>{globalState.globalProperty === "IND" ? "Proyek" : "Project"}</p>
      </div>
      <div className="image-list-container">
        {sortedProject.map((item) => (
          <Link key={item.id} to={`/project-detail?id=${item.id}&tittle=${item.tittleProyek}&desc=${item.deskripsiProyek}&img=${item.urlImage}`} className="image-list-wrapper">
            <div className="image-overlay"></div> {/* Tambahkan div untuk lapisan transparan */}
            <img src={require(`../../assets/img/project/${item.urlImage}`)} alt="img" />
            <div className="overlay-layout">
              <p className="overlay-text-tittle">{item.tittleProyek}</p>
              <p className="overlay-text-desc">{item.deskripsiProyek.length > 400 ? `${item.deskripsiProyek.slice(0, 400)}...` : item.deskripsiProyek}</p>
            </div>
            <Link key={item.id} to={`/project-detail?id=${item.id}&tittle=${item.tittleProyek}&desc=${item.deskripsiProyek}&img=${item.urlImage}`} className="link-layout">
              <p>{globalState.globalProperty === "IND" ? "Selengkapnya..." : "More..."}</p>
            </Link>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Project;
