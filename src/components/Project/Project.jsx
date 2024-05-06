import React, { useContext } from "react";
import { Link } from "react-router-dom";

import AppContext from "../../context/AppContext";

import data from "../../assets/json/project.json";
import ProjectTittle from "./ProjectTittle";
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
      <ProjectTittle />
      <div className="flex gap-1 ml-[125px] py-9 mt-[28px]">
        <Link to="/" className="text-lg">
          {globalState.globalProperty === "IND" ? "Home" : "Home"}
        </Link>
        <span className="text-lg"> &gt; </span>
        <Link to="/management" className="font-bold text-lg">
          {globalState.globalProperty === "IND" ? "Proyek" : "Project"}
        </Link>
      </div>
      <div className="page-tittle">
        {/* <p>{globalState.globalProperty === "IND" ? "PROYEK" : "PROJECT"}</p> */}
        <div className="text-center text-3xl lg:text-5xl font-bold mb-10 ">{globalState.globalProperty === "IND" ? "PROYEK" : "PROJECT"}</div>
      </div>
      <div className="image-list-container">
        {sortedProject.map((item) => (
          <Link key={item.id} to={`/project-detail?id=${item.id}&tittle=${item.tittleProyek}&desc=${item.deskripsiProyek}&img=${item.urlImage}`} className="image-list-wrapper">
            <img loading="lazy" src={require(`../../assets/img/project/${item.urlImage}`)} alt="img" />
            <p className="overlay-text-tittle">{item.tittleProyek}</p>
            <div className="yellow-bar-project"></div>
            <p className="overlay-text-desc">{item.deskripsiProyek.length > 199 ? `${item.deskripsiProyek.slice(0, 199)}...` : item.deskripsiProyek}</p>
            <Link key={item.id} to={`/project-detail?id=${item.id}&tittle=${item.tittleProyek}&desc=${item.deskripsiProyek}&img=${item.urlImage}`} className="link-layout">
              <p>{globalState.globalProperty === "IND" ? "Selengkapnya" : "More"}</p>
            </Link>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Project;
