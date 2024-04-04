import React, { useContext, useEffect, useState } from "react";
import { ReactComponent as Logo } from "../../assets/logo/logo.svg";
import INFlag from "../../assets/icon/in.svg";
import ENFlag from "../../assets/icon/en.svg";
import burger from "../../assets/icon/pajamas_hamburger.svg";
import { Link, useLocation } from "react-router-dom";
import AppContext from "../../context/AppContext";

const Navbar = () => {
  const { globalState, updateGlobalState } = useContext(AppContext);
  const location = useLocation();

  const [navbarOpen, setNavbarOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);
  const [scrollTimeout, setScrollTimeout] = useState(null);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    const isVisible = prevScrollPos > currentScrollPos;
    setPrevScrollPos(currentScrollPos);

    clearTimeout(scrollTimeout);
    setScrollTimeout(
      setTimeout(() => {
        setVisible(true);
      }, 500)
    );

    if (isVisible) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const navbarClasses = `w-full border-b shadow-lg sticky top-0 z-50 bg-white transition-opacity duration-300 ${
    !visible && "opacity-0"
  }`;

  return (
    <div className={navbarClasses}>
      <div className="flex justify-between lg:grid lg:grid-cols-8 ml-[15px] lg:ml-[30px] mr-[15px] lg:mr-[30px] m-2 items-center">
        <div className="flex gap-0 lg:gap-3 col-span-3">
          <Link to="/" className="">
            <Logo />
          </Link>
          <Link
            to="/"
            className="font-bold text-md lg:text-xl flex items-center"
          >
            YAYASAN PERGURUAN CIKINI
          </Link>
        </div>
        <button
          onClick={() => setNavbarOpen(!navbarOpen)}
          className="flex items-center lg:hidden"
        >
          <img loading="lazy" src={burger} alt="Menu" />
        </button>

        <div className="hidden lg:flex items-center gap-4 w-full col-span-3">
          <Link
            to="/"
            className={
              location.pathname === "/"
                ? " text-black font-[600]"
                : "text-[#6B7280] font-[600]"
            }
          >
            {globalState.globalProperty === "IND" ? "Beranda" : "Home"}
          </Link>
          <Link
            to="/about"
            className={
              location.pathname === "/about"
                ? "text-black font-[600]"
                : "text-[#6B7280] font-[600]"
            }
          >
            {globalState.globalProperty === "IND" ? "Tentang Kami" : "About Us"}
          </Link>
          <Link
            to="/school"
            className={
              location.pathname === "/school" ||
              location.pathname === "/school-detail/1" ||
              location.pathname === "/school-detail/2" ||
              location.pathname === "/school-detail/3" ||
              location.pathname === "/school-detail/4" ||
              location.pathname === "/school-detail/5"
                ? "text-black font-[600]"
                : "text-[#6B7280] font-[600]"
            }
          >
            {globalState.globalProperty === "IND" ? "Sekolah" : "School"}
          </Link>
          <Link
            to="/project"
            className={
              location.pathname === "/project"
                ? "text-black font-[600]"
                : "text-[#6B7280] font-[600]"
            }
          >
            {globalState.globalProperty === "IND" ? "Proyek" : "Project"}
          </Link>
          <Link
            to="/event"
            className={
              location.pathname === "/event"
                ? "text-black font-[600]"
                : "text-[#6B7280] font-[600]"
            }
          >
            {globalState.globalProperty === "IND" ? "Kegiatan" : "Event"}
          </Link>
          <Link
            to="/management"
            className={
              location.pathname === "/management"
                ? "text-black font-[600]"
                : "text-[#6B7280] font-[600]"
            }
          >
            {globalState.globalProperty === "IND" ? "Manajemen" : "Management"}
          </Link>
        </div>
        <div className="hidden w-full lg:flex justify-end items-center col-span-2 py-2">
          <div className="border-2 rounded-[8px] grid grid-cols-2 border-[#09588D]">
            <button
              onClick={() => updateGlobalState({ globalProperty: "IND" })}
              className={
                globalState.globalProperty === "IND"
                  ? "bg-[#09588D] rounded-l-[3px] rounded-r-[8px] duration-300 w-full h-full  font-bold text-white flex gap-2"
                  : " font-bold text-black flex gap-2 duration-300"
              }
            >
              <div className="flex ml-[1px] items-center gap-1">
                <img
                  className="border rounded-full border-black"
                  src={INFlag}
                  alt="IN Flag"
                />
                <div>ID</div>
              </div>
            </button>
            <button
              onClick={() => updateGlobalState({ globalProperty: "ENG" })}
              className={
                globalState.globalProperty === "ENG"
                  ? " bg-[#09588D] rounded-r-[3px] rounded-l-[8px] duration-300 w-full h-full  font-bold text-white flex gap-2"
                  : " font-bold text-black flex gap-2 "
              }
            >
              <div className="flex ml-[1px] items-center gap-1">
                <img
                  className="border rounded-full border-black"
                  src={ENFlag}
                  alt="IN Flag"
                />
                <div className="">EN</div>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="lg:hidden flex">
        <div
          className={
            "lg:flex flex-grow items-center pt-5 pb-5" +
            (navbarOpen ? " " : " hidden")
          }
          id="example-navbar-danger"
        >
          <div className="flex flex-col lg:hidden text-center gap-5 list-none lg:ml-auto">
            <Link
              to="/"
              className={
                location.pathname === "/"
                  ? " text-black font-[600]"
                  : "text-[#6B7280] font-[600]"
              }
              onClick={() => setNavbarOpen(false)}
            >
              {globalState.globalProperty === "IND" ? "Beranda" : "Home"}
            </Link>
            <Link
              to="/about"
              className={
                location.pathname === "/about"
                  ? "text-black font-[600]"
                  : "text-[#6B7280] font-[600]"
              }
              onClick={() => setNavbarOpen(false)}
            >
              {globalState.globalProperty === "IND"
                ? "Tentang Kami"
                : "About Us"}
            </Link>
            <Link
              to="/school"
              className={
                location.pathname === "/school"
                  ? "text-black font-[600]"
                  : "text-[#6B7280] font-[600]"
              }
              onClick={() => setNavbarOpen(false)}
            >
              {globalState.globalProperty === "IND" ? "Sekolah" : "School"}
            </Link>
            <Link
              to="/project"
              className={
                location.pathname === "/project"
                  ? "text-black font-[600]"
                  : "text-[#6B7280] font-[600]"
              }
              onClick={() => setNavbarOpen(false)}
            >
              {globalState.globalProperty === "IND" ? "Proyek" : "Project"}
            </Link>
            <Link
              to="/event"
              className={
                location.pathname === "/event"
                  ? "text-black font-[600]"
                  : "text-[#6B7280] font-[600]"
              }
              onClick={() => setNavbarOpen(false)}
            >
              {globalState.globalProperty === "IND" ? "Kegiatan" : "Event"}
            </Link>
            <Link
              to="/management"
              className={
                location.pathname === "/management"
                  ? "text-black font-[600]"
                  : "text-[#6B7280] font-[600]"
              }
              onClick={() => setNavbarOpen(false)}
            >
              {globalState.globalProperty === "IND"
                ? "Manajemen"
                : "Management"}
            </Link>
            <div className="border-2 rounded-[8px] ml-32 mr-32 grid grid-cols-2 border-[#09588D]">
              <button
                onClick={() => updateGlobalState({ globalProperty: "IND" })}
                className={
                  globalState.globalProperty === "IND"
                    ? "bg-[#09588D] rounded-l-[3px] rounded-r-[8px] duration-300 w-full font-bold text-white flex gap-2"
                    : " font-bold text-black flex gap-2 duration-300"
                }
              >
                <div className="flex ml-[1px] items-center gap-1">
                  <img
                    className="border rounded-full border-black"
                    src={INFlag}
                    alt="IN Flag"
                  />
                  <div>ID</div>
                </div>
              </button>
              <button
                onClick={() => updateGlobalState({ globalProperty: "ENG" })}
                className={
                  globalState.globalProperty === "ENG"
                    ? " bg-[#09588D] rounded-r-[3px] rounded-l-[8px] duration-300 w-full font-bold text-white flex gap-2"
                    : " font-bold text-black flex gap-2 "
                }
              >
                <div className="flex ml-[1px] items-center gap-1">
                  <img
                    className="border rounded-full border-black"
                    src={ENFlag}
                    alt="IN Flag"
                  />
                  <div className="">EN</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
