import React, { useContext, useEffect } from "react";
import { Carousel, ConfigProvider } from "antd";
import AppContext from "../../context/AppContext";
import Coun1Img from "../../assets/img/count1img.jpg";
import Coun2Img from "../../assets/img/50plus.JPG";
import Coun3Img from "../../assets/img/80persen.JPG";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";

const carouselItems = [
  {
    image: require("../../assets/img/Home/H1.png"), // replace with your image path
    title: "Mari Bergabung dengan Kami",
    subtitle: "Mari Kita Menciptakan Anak Didik yang Berbakat",
    buttonText: "Kunjungi Kami",
  },
  {
    image: require("../../assets/img/Home/H2.png"), // replace with your image path
    title: "Mari Bergabung dengan Kami",
    subtitle: "Mari Kita Menciptakan Anak Didik yang Berbakat",
    buttonText: "Kunjungi Kami",
  },
  {
    image: require("../../assets/img/Home/H3.png"), // replace with your image path
    title: "Mari Bergabung dengan Kami",
    subtitle: "Mari Kita Menciptakan Anak Didik yang Berbakat",
    buttonText: "Kunjungi Kami",
  },
  {
    image: require("../../assets/img/Home/H1.png"), // replace with your image path
    title: "Mari Bergabung dengan Kami",
    subtitle: "Mari Kita Menciptakan Anak Didik yang Berbakat",
    buttonText: "Kunjungi Kami",
  },
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
        <Carousel autoplay>
          {carouselItems.map((item, index) => (
            <div key={index} className="h-[300px] lg:h-[700px] relative">
              <div
                className="h-full bg-cover bg-center"
                style={{
                  backgroundImage: `url(${item.image})`
                }}
              />
              {/* <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div> */}

              {index === 10 && (
                <div className="absolute bottom-0 left-0 w-full text-center p-10">
                  <div className="text-white text-[15px] lg:text-[25px] font-[600]">{item.title}</div>
                  <div className="text-white text-[12px] lg:text-[20px] font-[600]">{item.subtitle}</div>
                  <div className="flex justify-center">
                    <button className="border bg-[#2F80ED] text-white py-1 lg:py-2 mt-2 px-2 lg:px-4 text-[10px] lg:text-md border-none rounded-md font-bold">{item.buttonText}</button>
                  </div>
                </div>
              )}
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


      </ConfigProvider>

      <div className="lg:grid lg:grid-cols-3 flex flex-col lg:gap-0 h-[auto]">
        <div className="py-2 lg:py-12 flex flex-col items-center justify-center lg:bg-cover bg-center relative" style={{ backgroundImage: `url(${Coun1Img})`, backgroundSize: 'cover' }}>
          <div className="absolute inset-0 bg-[#FAAE35] bg-opacity-80"></div> {/* Overlay kuning */}
          <div className="flex text-6xl lg:text-8xl font-bold lg:text-white text-white relative z-10">
            <motion.h1>{rounded1}</motion.h1>+
          </div>
          <div className="text-center text-[15px] lg:text-[19px] font-bold lg:text-white text-white tracking-wider lg:w-full w-[310px] relative z-10">Mendidik Pelajar / Mahasiswa berkualitas yang siap dengan dunia kerja</div>
        </div>
        <div className="py-2 lg:py-12 flex flex-col items-center justify-center lg:bg-cover bg-center relative" style={{ backgroundImage: `url(${Coun2Img})`, backgroundSize: 'cover' }}>
          <div className="absolute inset-0 bg-[#30B8A9] bg-opacity-80"></div> {/* Overlay merah */}
          <div className="flex text-6xl lg:text-8xl font-bold lg:text-white text-white relative z-10">
            <motion.h1>{rounded2}</motion.h1>+
          </div>
          <div className="text-center text-[15px] lg:text-[19px] font-bold lg:text-white text-white tracking-wider lg:w-full w-[310px] relative z-10">Menorehkan beberapa prestasi bergengsibaik tingkat regional maupun nasional</div>
        </div>
        <div className="py-2 lg:py-12 flex flex-col items-center justify-center lg:bg-cover bg-center relative" style={{ backgroundImage: `url(${Coun3Img})`, backgroundSize: 'cover' }}>
          <div className="absolute inset-0 bg-[#7888C4] bg-opacity-80"></div> {/* Overlay biru */}
          <div className="flex text-6xl lg:text-8xl font-bold lg:text-white text-white relative z-10">
            <motion.h1>{rounded3}</motion.h1>%
          </div>
          <div className="text-center text-[15px] lg:text-[19px] font-bold lg:text-white text-white tracking-wider lg:w-full w-[310px] relative z-10">Tingkat Keberhasilan Pelajar/Mahasiswayang diterima kerja</div>
        </div>
      </div>
    </div>

  );
};

export default Header;
