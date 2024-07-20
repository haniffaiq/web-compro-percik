import React, { useContext, useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import AppContext from "../../context/AppContext";
import GalleryProjectDetail from "./GalleryProjectDetail";
import DanaDetail from "./DanaDetail";
import data from "../../assets/json/project.json";
import IconDownload from "../../assets/img/download.webp";
import ProjectTittle from "../Project/ProjectTittle";
import download from "../../assets/img/donlod pdf.png";
import "./ProjectDetailStyle.css";
import html2pdf from "html2pdf.js";

const PDFTest = () => {
  const { globalState, updateGlobalState } = useContext(AppContext);
  const location = useLocation();
  const [html, setHtml] = useState({ __html: "" });
  const [html2, setHtml2] = useState({ __html: "" });

  const queryParameters = new URLSearchParams(location.search);
  console.log("id project detail nya = ", queryParameters.get("id"));
  const projectDatasBahasa = data.bahasa.find((item) => item.id === parseInt(queryParameters.get("id")));
  const projectDatasEnglish = data.english.find((item) => item.id === parseInt(queryParameters.get("id")));

  const contentRef = useRef();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="a4-container">
      <div className="project-detail-main-container-pdf" ref={contentRef}>
        <h2>KAMPUS SRENGSENG-SAWAH, JAGAKARSA JAKARTA-SELATAN</h2>
        <div className="image-detail-layout-pdf">
          <img loading="lazy" src={require(`../../assets/img/project/pembangunan_smk_3/Thumbnail_SMK3.jpg`)} alt="img" />
        </div>

        {globalState.globalProperty === "IND" ? (
          <div>
            <div className="desc-main-container-pdf">
              <div className="desc-container-layout-pdf">
                <p>
                  Dalam rangka meningkatkan pelayanan Pendidikan di Jakarta Selatan dan Depok, Yayasan Perguruan ’CIKINI’ mulai Tahun Pelajaran 2012/2013 membuka sekolah kejuruan baru: SMK 3 Perguruan ’CIKINI’ dengan program keahlian
                  sebagai berikut: <b>Farmasi, Teknik Otomotif, Teknik Jaringan Komputer & Telekomunikasi, Desain Komunikasi Visual, Manajemen Perkantoran & Layangan Bisnis</b>.<br />
                  Kurikulum yang diterapkan menekankan pembelajaran praktik sebanyak 60% dan teori 40%, dengan pendidikan ahlak kepribadian, kegiatan praktek berorganisasi, dan keterampilan kepemimpinan. Hal ini bertujuan menghasilkan
                  lulusan yang siap pakai, terampil, percaya diri, dan memiliki disiplin kerja tinggi.
                  <br />
                  Meskipun SMK 3 Perguruan ’CIKINI’ telah menunjukkan animo yang tinggi dengan jumlah seluruh siswa  saat ini mencapai 1.276 siswa.
                  <br />
                  Sehubungan banyak permintaan dari Orang Tua Siswa mulai Tahun Pelajaran 2020/2021, Yayasan Perguruan ’CIKINI’ membuka SMA 2 Perguruan ’CIKINI’ yang saat ini cukup diminati masyaralat Jakarta Selatan dan Depok yang jumlah
                  siswanya sudah mencapai 644 siswa.<br></br>Mulai Tahun 2025/2026 berencana membuka Pendidikan Taman Bermain & TK 2 Perguruan “CIKINI, SD 2 Perguruan ’CIKINI’, dan SMP 2 Perguruan ’CIKINI’<br></br>Dalam rangka pengembangan
                  tersebut di atas Yayasan Perguruan ’CIKINI’ berencana membangun gedung baru berlantai lima. Proyek ini melibatkan gotong royong dari masyarakat, terutama para alumni Perguruan ’CIKINI’ dan individu yang peduli terhadap
                  kemajuan pendidikan nasional serta industri.
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className="desc-main-container-pdf">
              <div className="desc-container-layout-pdf">
                <p dangerouslySetInnerHTML={html2} />
              </div>
            </div>
            <DanaDetail Getid={queryParameters.get("id")} />
          </div>
        )}
      </div>
    </div>
  );
};

export default PDFTest;
