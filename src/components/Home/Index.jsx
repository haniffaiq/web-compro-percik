import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AppContext from "../../context/AppContext";
import Header from "./Header";
import About from "./About";
import Partnership from "./Partnership";
import Sekolah from "./Sekolah";
import Berita from "./Berita";

const Home = () => {
  const { globalState, updateGlobalState } = useContext(AppContext);
  const [isMobile, setIsMobile] = useState(false);

  console.log(globalState.globalProperty );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Ubah 768 sesuai dengan breakpoint yang Anda inginkan
    };

    handleResize(); // Panggil handleResize saat pertama kali komponen dimount

    window.addEventListener("resize", handleResize); // Tambahkan event listener untuk merespon perubahan ukuran layar

    return () => {
      window.removeEventListener("resize", handleResize); // Hapus event listener saat komponen unmount
    };
  }, []);

  return (
    <>
      <Header />
      <About />
      <Partnership />
      <Sekolah />
      {/* {!isMobile && } */}
      {/* <Berita /> */}
    </>
  );
};

export default Home;
