import React, { useContext } from "react";
import { Carousel, ConfigProvider } from "antd";
import AppContext from "../../context/AppContext";
import AboutImg from "../../assets/img/Rectangle 15.jpg";

const About = () => {
  const { globalState, updateGlobalState } = useContext(AppContext);
  console.log(globalState, "DIHeader");

  return (
    <>
      <div className="flex flex-col gap-2 items-center p-14">
        <div className="text-5xl font-bold mb-10">Tentang Kami</div>
        <div className="grid grid-cols-2 gap-5 w-full">
          <div className="flex justify-center">
            <img src={AboutImg} alt="img" />
          </div>
          <div className="flex flex-col justify-between ">
            <div>
              <div className="font-bold text-3xl mb-10">
                Yayasan dengan Track Record Memukau
              </div>
              <div className="mr-24 mb-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At aut
                maiores debitis, aperiam tempore ea, soluta, optio doloribus
                nobis dolores minima perferendis beatae. Iusto quisquam amet
                numquam. Excepturi, saepe fuga.
              </div>
              <div className="mr-24">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At aut
                maiores debitis, aperiam tempore ea, soluta, optio doloribus
                nobis dolores minima perferendis beatae. Iusto quisquam amet
                numquam. Excepturi, saepe fuga.
              </div>
            </div>
            <div className=" flex items-end">Selengkapnya {">>>"}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
