import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AppContext from "../../context/AppContext";
import Foto from "../../assets/img/Rectangle108school.png";
import Wisuda from "../../assets/icon/ph_student-light.svg";
import Logo from "../../assets/icon/ant-design_user-outlined.svg";
import Loc from "../../assets/icon/loc.svg";
import Telf from "../../assets/icon/telfon.svg";

const achievementsData = [
  {
    "author" : "Pandu Wirakusuma",
    "date": "14 Januari 2024",
    "title": "Sekolah Dasar hingga Menengah Perguruan Cikini",
    "description": "Mengukir Prestasi Unggul di Tingkat Kota",
    "location": "Jakarta Pusat"
  },
  {
    "author" : "Pandu Wirakusuma",
    "date": "15 Januari 2024",
    "title": "SMA Perguruan Cikini, Jakarta Selatan, Menyongsong Prestasi Akademik dan Kreativitas",
    "description": "SMA Perguruan Cikini di Jakarta Selatan menonjolkan pencapaian akademik dan kreativitas siswa. Dengan kurikulum yang berkualitas dan fasilitas modern, kami membentuk para pemimpin masa depan yang berprestasi.",
    "location": "Jakarta Selatan"
  },
  {
    "author" : "Pandu Wirakusuma",
    "date": "16 Januari 2024",
    "title": "SMK 1 Perguruan Cikini, Jakarta Utara, Menyelami Dunia Profesional dengan Keahlian Unggul",
    "description": "SMK 1 Perguruan Cikini di Jakarta Utara menawarkan pendidikan vokasional berkualitas tinggi, membekali siswa dengan keahlian unggul dalam persiapan menuju dunia profesional yang dinamis.",
    "location": "Jakarta Utara"
  },
  {
    "author" : "Pandu Wirakusuma",
    "date": "17 Januari 2024",
    "title": "SMK 2 Perguruan Cikini, Jakarta Selatan, Menjadi Tumpuan Utama bagi Bakat Musik Berkelas",
    "description": "SMK 2 Perguruan Cikini di Jakarta Selatan menggabungkan pendidikan umum dan keahlian musik, menciptakan lingkungan di mana bakat musikal berkembang dan menghasilkan prestasi di tingkat nasional.",
    "location": "Jakarta Selatan"
  },
  {
    "author" : "Pandu Wirakusuma",
    "date": "18 Januari 2024",
    "title": "SMK 3 Perguruan Cikini, Jakarta Selatan, Membangun Generasi Unggul dengan Fokus Keahlian",
    "description": "SMK 3 Perguruan Cikini di Jakarta Selatan menawarkan program pendidikan yang berfokus pada keahlian tertentu, mempersiapkan siswa untuk sukses di dunia pekerjaan dengan keunggulan kompetitif.",
    "location": "Jakarta Selatan"
  },
  {
    "author" : "Pandu Wirakusuma",
    "date": "19 Januari 2024",
    "title": "SMA 2 Perguruan Cikini, Jakarta Selatan, Menjadi Tempat Inspiratif bagi Pencapaian Akademik",
    "description": "SMA 2 Perguruan Cikini di Jakarta Selatan mengeksplorasi potensi siswa dalam pencapaian akademik dan kegiatan ekstrakurikuler membentuk pribadi yang berprestasi",
    "location": "Jakarta Selatan"
  }
  // Tambahkan data prestasi lainnya sesuai kebutuhan
];
const PrestasiComponent = ({author, date, title, description, location }) => (
  <button className="border rounded-lg p-3 flex flex-col">
    <img className="flex justify-center w-full" src={Foto} alt="foto" />
    <div className="text-start text-2xl mt-5">{title}</div>
    <div className="flex gap-3 text-start mt-3">
      <img src={Logo} alt="logo" />
      <div className="text-[#8d8f91] flex-grow">{author}</div>
    </div>
    <div className="flex gap-3 text-start mt-3">
      <div className="text-[#8d8f91] flex-grow">{description}</div>
    </div>
    <div className="flex gap-3 items-start text-start mt-3">
      <div className="text-[#8d8f91]">{location}</div>
    </div>
    <div className="flex gap-3 text-start mt-3">
      <div className="text-[#8d8f91]">{date}</div>
    </div>
  </button>
);

const Prestasi = () => {
  const { globalState, updateGlobalState } = useContext(AppContext);
  
  return (
    <>
<div className="p-8">
    <div className="text-center text-5xl font-bold mb-10">Prestasi Unggulan</div>
    <div className="grid grid-cols-3 gap-10">
      {achievementsData.map((achievement, index) => (
        <PrestasiComponent key={index} {...achievement} />
      ))}
    </div>
    <div className="mt-20 w-full border bg-[#E6F7FF] border-[#1890FF] p-5">
      <div className="flex justify-between">
        <div className="flex flex-col gap-2">
          <div className="font-bold text-xl">Anda Sudah Daftar PPDB ???</div>
          <div>Yuk daftar PPDB secara daring dan tanpa ribet Sekarang juga</div>
        </div>
        <div className="flex items-center">
          <button className="border py-3 px-3 border-none bg-[#09588D] text-white font-bold text-sm rounded-lg">
            Ayo Daftar Sekarang !
          </button>
        </div>
      </div>
    </div>
  </div>
    </>
  );
};

export default Prestasi;
