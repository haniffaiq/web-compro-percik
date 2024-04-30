import React, { useContext } from "react";
import { Link } from "react-router-dom";

import AppContext from "../../context/AppContext";

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
      <div>
        <div className="lg:flex flex-col items-center justify-center lg:flex-row lg:justify-start hidden">
          <div className="tittle-container mb-[-28px] bg-[#ebebeb] lg:mb-0 lg:bg-transparent w-full">
            <p className="text-black font-segoeui text-3xl font-bold lg:text-5xl">
              {globalState.globalProperty === "IND" ? "PROYEK" : "PROJECT"}
            </p>
          </div>
          <div className="yellow-bar-header border-t-7 border-yellow-400 w-103 absolute top-218 left-125 lg:static lg:border-0"></div>
        </div>
      </div>
      <div className="flex gap-1 ml-[125px] py-9 mt-[28px]">
        <Link to="/" className="text-lg">
          {globalState.globalProperty === "IND" ? "BERANDA" : "HOME"}
        </Link>
        <span className="text-lg"> &gt; </span>
        <Link to="/project" className="font-bold text-lg">
          {globalState.globalProperty === "IND" ? "PROYEK" : "PROJECT"}
        </Link>
      </div>


      <div className="image-list-container">
        {sortedProject.map((item) => (
          <Link key={item.id} to={`/project-detail?id=${item.id}&tittle=${item.tittleProyek}&desc=${item.deskripsiProyek}&img=${item.urlImage}`} className="image-list-wrapper">
            <div className="image-overlay">

              <div className="overlay-layout">
                <p className="overlay-text-tittle">{item.tittleProyek}</p>
                <p className="overlay-text-desc">{item.deskripsiProyek.length > 350 ? `${item.deskripsiProyek.slice(0, 350)}...` : item.deskripsiProyek}</p>
              </div>
            </div>
            <img loading="lazy" src={require(`../../assets/img/project/${item.urlImage}`)} alt="img" />

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
