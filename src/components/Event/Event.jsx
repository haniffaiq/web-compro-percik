import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AppContext from "../../context/AppContext";
import "./EventStyle.css";
import Logo from "../../assets/icon/ant-design_user-outlined.svg";
import logoYPCBiru from "../../assets/img/logo YPC_biru 3.png";
import data from "../../assets/json/events.json";

const Pagination = ({ totalItems, itemsPerPage, currentPage, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className="pagination">
      <button onClick={() => onPageChange(Math.max(1, currentPage - 1))}>{"<"}</button>
      {pages.map((page) => (
        <button key={page} onClick={() => onPageChange(page)} className={currentPage === page ? "active" : ""}>
          {page}
        </button>
      ))}
      <button onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}>{">"}</button>
    </div>
  );
};

const Event = () => {
  const { globalState } = useContext(AppContext);
  const [currentPage, setCurrentPage] = useState(1);

  const sortedData = globalState.globalProperty === "IND" ? [...data.bahasa] : [...data.english];

  const totalPages = Math.ceil(sortedData.length / 6);
  const startIndex = (currentPage - 1) * 6;
  const endIndex = startIndex + 6;
  const currentData = sortedData.slice(startIndex, endIndex).filter((item, index, self) => {
    return (
      self.findIndex((t) => t.id === item.id) === index // Ensure uniqueness by ID
    );
  });

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  function truncateText(text, maxLength) {
    const words = text.split(" ");

    if (words.length > maxLength) {
      const truncatedText = words.slice(0, maxLength).join(" ");
      return `${truncatedText} ...`;
    }

    return text;
  }

  return (
    <>
      <div>
        <div className="lg:flex flex-col items-center justify-center lg:flex-row lg:justify-start hidden">
          <div className="tittle-container mb-[-28px] bg-[#ebebeb] lg:mb-0 lg:bg-transparent w-full">
            <p className="text-black  text-3xl lg:text-5xl lg:px-[145px]" style={{ fontFamily: "Hedvig Letters Serif, serif" }}>
              {globalState.globalProperty === "IND" ? "Warta" : "News"}
            </p>
          </div>
        </div>
      </div>
      <div className="flex gap-1 lg:ml-[125px] py-2 mt-[28px] justify-center lg:justify-start justify-center lg:justify-start  justify-center lg:justify-start lg:px-[145px]">
        <Link to="/" className="text-lg">
          {globalState.globalProperty === "IND" ? "BERANDA" : "HOME"}
        </Link>
        <span className="text-lg"> &gt; </span>
        <Link to="/event" className="font-bold lg:text-lg text-sm tracking-widest" style={{ fontFamily: "Maven Pro" }}>
          {globalState.globalProperty === "IND" ? "WARTA" : "NEWS"}
        </Link>
      </div>
      <div className="p-5 lg:p-8 lg:mx-[150px]">
        <div className="mx-auto px-4 sm:px-6 lg:mx-16">
          <div className="flex flex-col gap-4 lg:gap-10 lg:grid lg:grid-cols-2 ">
            {currentData.map((item) => (
              <Link key={item.id} to={`/event-detail?id=${item.id}&headline=${item.headline}&desc=${item.deskripsi}&img=${item.urlImage}&maker=${item.maker}&date=${item.date}`} className="border-2 rounded-t-[20px] h-[1000px] ">
                <div>
                  <div>
                    <img loading="lazy" src={require(`../../assets/${item.urlImage}`)} alt={item.alt} className="rounded-t-[20px]" />
                  </div>
                  <div className="">
                    <p className="font-bold lg:text-[32px] py-6 justify-center pl-[37px] w-[488px]" style={{ fontFamily: "Hedvig Letters Serif, serif" }}>
                      {item.headline}
                    </p>
                    <p className="lg:text-[22px] leading-normal pl-[37px] w-[515px]">{truncateText(item.deskripsi, 50)}</p>
                    {/* <div className="maker-layout pl-[37px]">
                      <img loading="lazy" src={Logo} alt="logo" />
                      <p className="">{item.maker}</p>
                      <div>
                        <p className="date-style">{item.date}</p>
                      </div>
                    </div> */}

                    <div className="flex mt-[35px] mx-[170px]">
                      <button className="text-[15px] text-center bg-black lg:px-6 lg:py-2 w-[249px] h-[40px] p-1 text-white px-3 rounded-md">{globalState.globalProperty === "IND" ? "SELENGKAPNYA >>" : "SEE MORE >>"}</button>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Pagination totalItems={sortedData.length} itemsPerPage={6} currentPage={currentPage} onPageChange={handlePageChange} />
    </>
  );
};

export default Event;
