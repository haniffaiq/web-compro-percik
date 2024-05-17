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
      <div>
        <div className="lg:flex flex-col items-center justify-center lg:flex-row lg:justify-start hidden">
          <div className="tittle-container mb-[-28px] bg-[#ebebeb] lg:mb-0 lg:bg-transparent w-full">
            <p className="text-black font-segoeui text-3xl font-bold lg:text-5xl">{globalState.globalProperty === "IND" ? "Proyek" : "Project"}</p>
          </div>
          <div className="yellow-bar-header border-t-7 border-yellow-400 w-103 absolute top-218 left-125 lg:static lg:border-0"></div>
        </div>
      </div>
      <div className="flex gap-1 lg:ml-[125px] py-9 mt-[28px] justify-center lg:justify-start">
        <Link to="/" className="text-lg">
          {globalState.globalProperty === "IND" ? "Beranda" : "Home"}
        </Link>
        <span className="text-lg"> &gt; </span>
        <Link to="/project" className="font-bold text-lg">
          {globalState.globalProperty === "IND" ? "Proyek" : "Project"}
        </Link>
      </div>
      <div className="page-tittle">
        {/* <p>{globalState.globalProperty === "IND" ? "PROYEK" : "PROJECT"}</p> */}
        <div className="text-center text-3xl lg:text-5xl font-bold mb-10 ">{globalState.globalProperty === "IND" ? "RENCANA PEMBANGUNAN SEKOLAH" : "PLANNED SCHOOL CONSTRUCTION"}</div>
      </div>

      <div className="image-list-container">
        {sortedProject.map((item) => (
          <Link key={item.id} to={`/project-detail?id=${item.id}&tittle=${item.tittleProyek}&desc=${item.deskripsiProyek}&img=${item.urlImage}`} className="image-list-wrapper">
            <img loading="lazy" src={require(`../../assets/img/project/${item.urlImage}`)} alt="img" />
            <p className="overlay-text-tittle">{item.tittleProyek}</p>
            <p className="overlay-text-desc">{item.deskripsiProyek.length > 270 ? `${item.deskripsiProyek.slice(0, 270)}...` : item.deskripsiProyek}</p>
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
