import React, { useContext, useEffect } from "react";
import { Carousel, ConfigProvider } from "antd";
import AppContext from "../../context/AppContext";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

const carouselItems = [
  {
    image: require("../../assets/img/header/img_header1.jpg"), // replace with your image path
    title: "Mari Bergabung dengan Kami",
    subtitle: "Mari Kita Menciptakan Anak Didik yang Berbakat",
    buttonText: "Kunjungi Kami",
  },
  {
    image: require("../../assets/img/header/img_header2.JPG"), // replace with your image path
    title: "Mari Bergabung dengan Kami",
    subtitle: "Mari Kita Menciptakan Anak Didik yang Berbakat",
    buttonText: "Kunjungi Kami",
  },
  {
    image: require("../../assets/img/header/img_header3.jpg"), // replace with your image path
    title: "Mari Bergabung dengan Kami",
    subtitle: "Mari Kita Menciptakan Anak Didik yang Berbakat",
    buttonText: "Kunjungi Kami",
  },
  {
    image: require("../../assets/img/header/img_header4.jpg"), // replace with your image path
    title: "Mari Bergabung dengan Kami",
    subtitle: "Mari Kita Menciptakan Anak Didik yang Berbakat",
    buttonText: "Kunjungi Kami",
  },
];

const Header = () => {
  const { globalState, updateGlobalState } = useContext(AppContext);
  console.log(globalState, "DIHeader");
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
              className="h-full object-cover"
              style={{
                backgroundImage: `url(${item.image})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>

            {index === 0 && (
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

      <div className="bg-[#295D97] lg:pt-24 lg:pb-24 lg:grid lg:grid-cols-3 flex flex-col lg:gap-5">
        <div className="py-2 lg:py-0 flex flex-col items-center justify-center lg:ml-24 lg:bg-transparent bg-[#EEF8FF]">
          <div className="flex text-6xl lg:text-8xl font-semibold lg:text-white text-black">
            <motion.h1>{rounded1}</motion.h1>+
          </div>
          <div className="text-center text-[15px] lg:text-[19px] text-[#6A858C] lg:text-white tracking-wider lg:w-full w-[310px]">
            Mendidik Pelajar / Mahasiswa berkualitas yang siap dengan dunia
            kerja
          </div>
        </div>
        <div className="py-2 lg:py-0 flex flex-col items-center justify-center lg:border-l lg:border-r border-[#C0CFD3] lg:bg-transparent bg-[#FFFCEE]">
          <div className="flex text-6xl lg:text-8xl font-semibold lg:text-white text-black">
            <motion.h1>{rounded2}</motion.h1>+
          </div>
          <div className="text-center text-[15px] lg:text-[19px] text-[#6A858C] lg:text-white tracking-wider lg:w-full w-[310px]">
            Menorehkan beberapa prestasi bergengsibaik tingkat regional maupun
            nasional
          </div>
        </div>
        <div className="py-2 lg:py-0 flex flex-col items-center justify-center lg:mr-24 lg:bg-transparent bg-[#F3EEFF]">
          <div className="flex text-6xl lg:text-8xl font-semibold lg:text-white text-black">
            <motion.h1>{rounded3}</motion.h1>%
          </div>
          <div className="text-center text-[15px] lg:text-[19px] text-[#6A858C] lg:text-white tracking-wider lg:w-full w-[310px]">
            Tingkat Keberhasilan Pelajar/Mahasiswayang diterima kerja
          </div>
        </div>
      </div>
    </ConfigProvider>
  );
};

export default Header;
