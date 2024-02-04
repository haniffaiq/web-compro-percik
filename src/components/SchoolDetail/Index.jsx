import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import AppContext from "../../context/AppContext";
import Header from "./Header";
import Fasilitas from "./Fasilitas";
import Ekstrakulikuler from "./Ekstrakulikuler";
import Galeri from "./Galeri";
import Visi from "./Visi";
import Sambutan from "./Foto";
// import AboutUs from "./About";
// import Visi from "./Visi";
// import Prestasi from "./Prestasi";
// import Galeri from "./Galeri";
// import Misi from "./Misi";

const SchoolDetail = (props) => {
  const { globalState, updateGlobalState } = useContext(AppContext);
  console.log(globalState, "DIAbout");
  const location = useLocation();
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
    console.log(id);
  }, [id]);

  return (
    <>
      {/* {console.log(props, "INIPROPS")} */}
      <div className="hidden lg:flex gap-1 ml-[40px] py-9">
        <Link to="/" className="">
          {globalState.globalProperty === "IND" ? "Home" : "Home"}
        </Link>
        <span> / </span>
        <Link to="/about" className="">
          {globalState.globalProperty === "IND"
            ? "Detail Sekolah"
            : "School Detail"}
        </Link>
      </div>
      <Header idSchool={id} />
      <Sambutan />
      <Visi />
      <Fasilitas idSchool={id} />
      <Ekstrakulikuler idSchool={id} />
      <Galeri idSchool={id} />
    </>
  );
};

export default SchoolDetail;
