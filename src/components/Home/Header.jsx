import React, { useContext, useEffect, useState } from "react";
import { Carousel, ConfigProvider } from "antd";
import AppContext from "../../context/AppContext";
import Coun1Img from "../../assets/img/count1img.jpg";
import Coun2Img from "../../assets/img/50plus.JPG";
import Coun3Img from "../../assets/img/80persen.JPG";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";

const carouselItems = [
  {
    image: require("../../assets/img/Home/H1.webp"),
  },
  {
    image: require("../../assets/img/Home/H2.webp"),
  },
  {
    image: require("../../assets/img/Home/H3.webp"),
  },
  {
    image: require("../../assets/img/Home/H4.webp"),
  },
  {
    image: require("../../assets/img/Home/H5.webp"),
  },
  {
    image: require("../../assets/img/Home/H6.webp"),
  },
  {
    image: require("../../assets/img/Home/H7.webp"),
  },
  {
    image: require("../../assets/img/Home/H8.webp"),
  },
  {
    image: require("../../assets/img/Home/H9.webp"),
  },
];

const carouselItemsMobile = [
  {
    image: require("../../assets/img/Home/mobile1.jpg"),
    title: "SELAMAT DATANG DI WEB RESMI",
    subTitle: "YAYASAN PERGURUAN 'CIKINI'",
    desc: "Terimakasih atas kunjungan Anda, semoga informasi yang diberikan dapat memberi manfaat bagi kita semua",
  },
  {
    image: require("../../assets/img/Home/mobile2.jpg"),
    title: "PERESMIAN GEDUNG SEKRETARIAT",
    subTitle: "YAYASAN PERGURUAN 'CIKINI'",
    desc: "Potong Tumpeng simbol rasa syukur kepada Allah SWT atas Peresmian Gedung Sekretariat Yayasan Perguruan ’Cikini’ oleh Presiden Ke-5 Republik Indonesia Ibu Prof. Dr. (H.C) Hj. Megawati Soekarnoputri.",
  },
  {
    image: require("../../assets/img/Home/mobile3.jpg"),
    desc: 'Dihadiri oleh Pengawas, Pembina, Pengurus Yayasan Perguruan ’Cikini’, Sekretaris Eksekutif beserta staf-nya, Direktur Dikdasmen, Wakil Direktur Dikdasmen, Kepala Sekolah TK-SD-SMP-SMA 1-SMA 2-SMK 1-SMK 2 Musik-SMK 3 Perguruan "Cikini"- SMK Perguruan "Cikini"-KIIC, Rektor ISTN, Wakil Rektor dan Dekan. Kegiatan tersebut dilaksanakan pada hari Senin, 4 Maret 2024 bertempat di Kampus Duren Tiga beralamat di Jl. Duren Tiga Raya No. 1, Pancoran, Jakarta Selatan.',
  },
  // {
  //   image: require("../../assets/img/Home/H4.webp"),
  // },
];

const Header = () => {
  const { globalState, updateGlobalState } = useContext(AppContext);
  console.log(globalState.globalProperty);
  const count1 = useMotionValue(0);
  const rounded1 = useTransform(count1, Math.round);

  const count2 = useMotionValue(0);
  const rounded2 = useTransform(count2, Math.round);

  const count3 = useMotionValue(0);
  const rounded3 = useTransform(count3, Math.round);

  const [isMobile, setIsMobile] = useState(false);

  console.log(globalState.globalProperty);

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

  const customDotRender = (index, { isActive }) => {
    const dotStyle = {
      width: "10px",
      height: "10px",
      borderRadius: "50%",
      backgroundColor: isActive ? "#1890ff" : "#fff",
      margin: "0 3px",
    };

    return <span style={dotStyle} />;
  };
  useEffect(() => {
    const animation1 = animate(count1, 5000, { duration: 5 });
    const animation2 = animate(count2, 50, { duration: 5 });
    const animation3 = animate(count3, 80, { duration: 5 });

    return () => {
      animation1.stop();
      animation2.stop();
      animation3.stop();
    };
  }, []);

  return (
    <div>
      <ConfigProvider
        theme={{
          components: {
            Carousel: {
              dotHeight: 10,
              dotWidth: 10,
              dotActiveWidth: 10,
            },
          },
        }}
      >
        {!isMobile && (
          <Carousel autoplay>
            {carouselItems.map((item, index) => (
              <div key={index} className="h-[300px] lg:h-[810px] relative">
                <div
                  className="h-full bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${item.image})`,
                  }}
                />
                {index === 10 && (
                  <div className="absolute bottom-0 left-0 w-full text-center p-10">
                    <div className="text-white text-[15px] lg:text-[25px] font-[600]">
                      {item.title}
                    </div>
                    <div className="text-white text-[12px] lg:text-[20px] font-[600]">
                      {item.subtitle}
                    </div>
                    <div className="flex justify-center">
                      <button className="border bg-[#2F80ED] text-white py-1 lg:py-2 mt-2 px-2 lg:px-4 text-[10px] lg:text-md border-none rounded-md font-bold">
                        {item.buttonText}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </Carousel>
        )}

        {isMobile && (
          <Carousel autoplay>
            {carouselItemsMobile.map((item, index) => (
              <div key={index} className="flex flex-col ">
                {/* <div
                  className="h-full bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${item.image})`,
                  }}
                /> */}
                {item.image && (
                  <img className="h-full w-full" src={item.image} alt="Item" />
                )}
                <div className="bg-[#034EA2] text-center flex flex-col min-h-[200px] justify-center items-center">
                  <div className="text-[#3AE7FF] text-xl font-bold">
                    {item.title ? item.title : ""}
                  </div>
                  <div className="text-white text-xl font-bold">
                    {item.subTitle ? item.subTitle : ""}
                  </div>
                  <div className="mr-[20px] ml-[20px] text-white">
                    {item.desc ? item.desc : ""}
                  </div>
                </div>

                {/* <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div> */}

                {/* {index === 10 && ( */}
                {/* )} */}
                {/* <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center p-5 lg:p-0 lg:ml-24">
              <div className="text-white text-center lg:text-left text-[25px] lg:text-[50px] font-[600]">
                {item.title}
              </div>
              <div className="text-white text-center lg:text-left text-[25px] lg:text-[45px] font-[600]">
                {item.subtitle}
              </div>
              <div className="flex justify-center lg:justify-start">
                <button className="border bg-[#2F80ED] text-white py-1 lg:py-2 mt-2 px-2 lg:px-4 text-[10px] lg:text-md border-none rounded-md font-bold">
                  {item.buttonText}
                </button>
              </div>
            </div> */}
              </div>
            ))}
          </Carousel>
        )}
      </ConfigProvider>

      <div className="lg:grid lg:grid-cols-3 flex flex-col lg:gap-0 h-[auto]">
        <div
          className="py-2 lg:py-12 flex flex-col items-center justify-center lg:bg-cover bg-center relative"
          style={{
            backgroundImage: `url(${Coun1Img})`,
            backgroundSize: "cover",
          }}
        >
          <div className="absolute inset-0 bg-[#FAAE35] bg-opacity-80"></div>{" "}
          {/* Overlay kuning */}
          <div className="flex text-6xl lg:text-9xl lg:text-white text-white relative z-10">
            <motion.h1 className="font-bold font-sans ">{rounded1}</motion.h1>
            <h1 className="text-6xl lg:text-9xl font-bold font-sans">+</h1>
          </div>
          <div className="text-center text-[15px] lg:text-[25px] font-[600] lg:text-white text-white tracking-wider lg:w-full w-[310px] relative z-10  font-sans px-12">
            Mendidik pelajar/mahasiswa berkualitas
            yang siap dengan dunia kerja
          </div>
        </div>
        <div
          className="py-2 lg:py-12 flex flex-col items-center justify-center lg:bg-cover bg-center relative"
          style={{
            backgroundImage: `url(${Coun2Img})`,
            backgroundSize: "cover",
          }}
        >
          <div className="absolute inset-0 bg-[#30B8A9] bg-opacity-80"></div>{" "}
          {/* Overlay merah */}
          <div className="flex text-6xl lg:text-9xl lg:text-white text-white relative z-10">
            <motion.h1 className="font-bold font-sans">{rounded2}</motion.h1>
            <div className="text-6xl lg:text-9xl font-bold font-sansfont-bold">+</div>
          </div>

          <div className="text-center text-[15px] lg:text-[25px] font-[600] lg:text-white text-white tracking-wider lg:w-full w-[310px] relative z-10 font-sans px-12">
            Menorehkan beberapa prestasi bergengsi
            baik tingkat regional maupun nasional
          </div>
        </div>
        <div
          className="py-2 lg:py-12 flex flex-col items-center justify-center lg:bg-cover bg-center relative"
          style={{
            backgroundImage: `url(${Coun3Img})`,
            backgroundSize: "cover",
          }}
        >
          <div className="absolute inset-0 bg-[#7888C4] bg-opacity-80"></div>{" "}
          {/* Overlay biru */}
          <div className="flex text-6xl lg:text-9xl lg:text-white text-white relative z-10">
            <motion.h1 className="font-bold font-sans">{rounded3}</motion.h1>
            <div className="text-6xl lg:text-9xl font-bold font-sans">%</div>
          </div>
          <div className="text-center text-[15px] lg:text-[25px] font-[600] lg:text-white text-white tracking-wider lg:w-full w-[310px] relative z-10  font-sans px-12">
            Tingkat keberhasilan pelajar/mahasiswa
            yang diterima kerja
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
