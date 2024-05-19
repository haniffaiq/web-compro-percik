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
            <p className="text-black font-segoeui text-3xl font-bold lg:text-5xl">{globalState.globalProperty === "IND" ? "Kegiatan" : "Event"}</p>
          </div>
        </div>
      </div>
      <div className="flex gap-1 lg:ml-[125px] py-9 mt-[28px] justify-center lg:justify-start">
        <Link to="/" className="text-lg">
          {globalState.globalProperty === "IND" ? "Beranda" : "Home"}
        </Link>
        <span className="text-lg"> &gt; </span>
        <Link to="/event" className="font-bold text-lg">
          {globalState.globalProperty === "IND" ? "Kegiatan" : "Event"}
        </Link>
      </div>

      <div className="flex align-center justify-center flex-wrap mt-8 gap-4">
        {currentData.map((item) => (
          <Link
            key={item.id}
            to={`/event-detail?id=${item.id}&headline=${item.headline}&desc=${item.deskripsi}&img=${item.urlImage}&maker=${item.maker}&date=${item.date}`}
            className="flex flex-col w-[400px] lg:w-[550px] min-h-[424px] p-4 border-4 rounded-lg shadow-lg hover:bg-[#09588D] hover:text-white mx-4 lg:mx-0"
          >
            <div className="">
              <div>
                <img loading="lazy" src={require(`../../assets/${item.urlImage}`)} alt={item.alt} />
              </div>
              <div className="">
                <p className="font-bold py-2 justify-center">{item.headline}</p>
                <p className="">{truncateText(item.deskripsi, 20)}</p>
                <div className="maker-layout">
                  <img loading="lazy" src={Logo} alt="logo" />
                  <p className="">{item.maker}</p>
                  <div>
                    <p className="date-style">{item.date}</p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <Pagination totalItems={sortedData.length} itemsPerPage={6} currentPage={currentPage} onPageChange={handlePageChange} />
      <div className="kerjasama-yayasan-layout">
        <div className="kerjasama-yayasan-box">
          <div className="image-logo-layout">
            <img src={logoYPCBiru} alt="logo-percik" />
            <div className="separator-border-logo1"></div>
            <div className="separator-border-logo2"></div>
          </div>
          <div className="kerjasama-yayasan-content">
            <h1> {globalState.globalProperty === "IND" ? "KERJASAMA YAYASAN PERGURUAN `CIKINI` DENGAN PIHAK LAIN" : "COLLABORATION OF CIKINI EDUCATIONAL FOUNDATION WITH OTHER PARTIES"}</h1>
            <ol>
              <li className="leading-normal">
                {globalState.globalProperty === "IND"
                  ? "1. Yayasan Perguruan ’Cikini’ Dengan Sekolah Nasional KPS (Kontraktor Production Sharing) Balikpapan Kalimantan Timur mengelola Pendidikan TK,SD dan SMP KPS Balikpapan mulai Tahun 1976 berakhir tahun 2004, pihak Yayasan Sekolah Nasional KPS ingin berupaya mandiri dalam pengelolaan sekolah sendiri."
                  : "1. Currently, the Cikini Educational Foundation collaborates with the National School KPS (Contractor Production Sharing) Balikpapan in East Kalimantan to manage TK, elementary, and junior high school education. The collaboration started in 1976 and ended in 2004. The National School KPS wishes to strive for self-sufficiency in managing its own schools."}
              </li>
              <div className="separator-border"></div>
              <li className="leading-normal">
                {globalState.globalProperty === "IND"
                  ? "2. Yayasan Perguruan ’Cikini’ dengan Yayasan Pendidikan Prima Swarga Bara Sangata Kalimantan Timur, mengelola bidang manajemen  Pendidikan TK, SD, SMP  mulai Tahun 1990 berakhir tahun1993"
                  : "2. Currently, the Cikini Educational Foundation collaborates with the Prima Swarga Bara Education Foundation in Sangata, East Kalimantan, to manage the fields of TK, elementary, and junior high school education. The collaboration started in 1990 and ended in 1993."}
              </li>
              <div className="separator-border"></div>
              <li className="leading-normal">
                {globalState.globalProperty === "IND"
                  ? "3. Yayasan Perguruan ’Cikini’dengan PT. Kertas Nusantara di Mangkajang Kalimantan Timur mengelola Pendidikan TK, SD, SMP dan SMA mulai tahun 1998 berakhir Tahun 2012, pihak  PT Kertas Nusantara ingin berupaya mandiri dalam mengelola Sekolah sendiri."
                  : "3. Currently, the Cikini Educational Foundation collaborates with PT. Kertas Nusantara in Mangkajang, East Kalimantan, to manage TK, elementary, junior high, and senior high school education. The collaboration started in 1998 and ended in 2012. PT Kertas Nusantara aims to strive for self-sufficiency in managing its own schools."}
              </li>
              <div className="separator-border"></div>
              <li className="leading-normal">
                {globalState.globalProperty === "IND"
                  ? "4. Yayasan Perguruan ’Cikini’ dengan Yayasan Pendidikan Vidya Patra di Komplek PT. Badak Bontang Kalimantan Timur mengelola Pendidikan SD,SMP dan SMA  dari Tahun 2010 s.d 2012 untuk proses transformasi dari PT Badak Bontang ke YPVDP (Yayasan Pendidikan Vidya Dahana Patra) sampai mandiri dalam mengelola opesional sekolah."
                  : "4. Currently, the Cikini Educational Foundation collaborates with the Vidya Patra Education Foundation in the PT. Badak Bontang Complex in East Kalimantan to manage primary, junior high, and senior high school education. This collaboration took place from 2010 to 2012 as part of the transformation process from PT. Badak Bontang to YPVDP (Vidya Dahana Patra Education Foundation), leading to self-sufficiency in managing the school's operations."}
              </li>
              <div className="separator-border"></div>
              <li className="leading-normal">
                {globalState.globalProperty === "IND"
                  ? "5. Yayasan Perguruan ’Cikini’ dengan PT. Harapan  Anang Bakri & Sons, PT. Maligi Permata Industrial Estate Karawang mendirikan Pendidikan Vokasi (SMK Perguruan CIKINI-KIIC dan Politeknik Perguruan CIKINI-KIIC) di Kawasan Industri KIIC Karawang mulai Tahun 2021 s.d Sekarang."
                  : "5. Currently, the Cikini Educational Foundation, in collaboration with PT. Harapan Anang Bakri & Sons and PT. Maligi Permata Industrial Estate Karawang, has established Vocational Education (SMK Cikini-KIIC and Polytechnic Cikini-KIIC) in the KIIC Industrial Area, Karawang. This initiative started in 2021 and continues to the present."}
              </li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};

export default Event;
