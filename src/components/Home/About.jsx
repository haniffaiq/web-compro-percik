import React, { useContext } from "react";
import { Carousel, ConfigProvider } from "antd";
import AppContext from "../../context/AppContext";
import AboutImg from "../../assets/img/Rectangle 15.jpg";
import { Link } from "react-router-dom";

const About = () => {
  const { globalState, updateGlobalState } = useContext(AppContext);
  console.log(globalState, "DIHeader");

  return (
    <>
      <div className="flex flex-col gap-2 items-start lg:items-center p-5 lg:p-14">
        <div className="text-2xl lg:text-5xl font-bold mb-5 lg:mb-10 lg:text-center text-start">
          Tentang Kami
        </div>
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-5 w-full">
          <div className="flex justify-center">
            <img src={AboutImg} alt="img" />
          </div>
          <div className="flex flex-col justify-between ">
            <div className="text-center lg:text-start">
              <div className="font-bold text-md lg:text-3xl mb-4 lg:mb-10">
                Yayasan dengan Track Record Memukau
              </div>
              <div className="text-sm lg:text-md mr-0 lg:mr-24 mb-4 lg:mb-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At aut
                maiores debitis, aperiam tempore ea, soluta, optio doloribus
                nobis dolores minima perferendis beatae. Iusto quisquam amet
                numquam. Excepturi, saepe fuga.
              </div>
              <div className="text-sm lg:text-md mr-0 lg:mr-24">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At aut
                maiores debitis, aperiam tempore ea, soluta, optio doloribus
                nobis dolores minima perferendis beatae. Iusto quisquam amet
                numquam. Excepturi, saepe fuga.
              </div>
            </div>
            <Link to="/about">
              <div className="flex justify-center lg:justify-start">
                <button className=" flex items-end justify-center lg:justify-start lg:mt-0 mt-10 font-semibold">
                  Selengkapnya {">>>"}
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
