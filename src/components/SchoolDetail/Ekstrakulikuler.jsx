import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AppContext from "../../context/AppContext";
// import Foto from "../../assets/img/image 23.png";
import Wisuda from "../../assets/icon/ph_student-light.svg";
import Loc from "../../assets/icon/loc.svg";
import Telf from "../../assets/icon/telfon.svg";
import Foto from "../../assets/img/Rectangle108school.png";
import data from "../../assets/json/school";

const Ekstrakulikuler = (props) => {
  const { globalState, updateGlobalState } = useContext(AppContext);
  let a = props.idSchool;
  return (
    <>
      {console.log(data.bahasa[a - 1].ekstrakulikuler)}
      <div className="p-5 lg:p-8">
        <div className="text-5xl font-bold">Ekstrakulikuler</div>
        <div className="flex w-[350px] overflow-y-hidden lg:overflow-hidden lg:w-full gap-5 lg:gap-10 mt-5">
          {data.bahasa[a - 1].ekstrakulikuler.map((value, index) => {
            return (
              <button className="h-full  lg:h-full  border rounded-lg p-3 flex flex-col">
                <img
                  className="flex justify-center min-w-[200px]"
                  src={Foto}
                  alt="foto"
                />
                <div className="text-start text-md lg:text-2xl mt-5">
                  {value.title}
                </div>
                <div className="flex gap-3 text-start mt-3">
                  <div className="text-[#8d8f91] flex-grow text-xs lg:text-md max-w-[300px]">
                    {value.desc}
                  </div>
                </div>
              </button>
            );
          })}
          {/* <button className="h-full  lg:h-full  border rounded-lg p-3 flex flex-col">
            <img
              className="flex justify-center min-w-[200px]"
              src={Foto}
              alt="foto"
            />
            <div className="text-start text-md lg:text-2xl mt-5">
              Sepak Bola
            </div>
            <div className="flex gap-3 text-start mt-3">
              <div className="text-[#8d8f91] flex-grow text-xs lg:text-md">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad
                animi, iste saepe dignissimos, est minus sequi nam quidem
                blanditiis esse iusto repudiandae error enim autem earum dolores
                quam atque voluptatem.
              </div>
            </div>
          </button>
          <button className="h-full  lg:h-full  border rounded-lg p-3 flex flex-col">
            <img
              className="flex justify-center min-w-[200px]"
              src={Foto}
              alt="foto"
            />
            <div className="text-start text-md lg:text-2xl mt-5">
              Sepak Bola
            </div>
            <div className="flex gap-3 text-start mt-3">
              <div className="text-[#8d8f91] flex-grow text-xs lg:text-md">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad
                animi, iste saepe dignissimos, est minus sequi nam quidem
                blanditiis esse iusto repudiandae error enim autem earum dolores
                quam atque voluptatem.
              </div>
            </div>
          </button>
          <button className="h-full  lg:h-full  border rounded-lg p-3 flex flex-col">
            <img
              className="flex justify-center min-w-[200px]"
              src={Foto}
              alt="foto"
            />
            <div className="text-start text-md lg:text-2xl mt-5">
              Sepak Bola
            </div>
            <div className="flex gap-3 text-start mt-3">
              <div className="text-[#8d8f91] flex-grow text-xs lg:text-md">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad
                animi, iste saepe dignissimos, est minus sequi nam quidem
                blanditiis esse iusto repudiandae error enim autem earum dolores
                quam atque voluptatem.
              </div>
            </div>
          </button>
          <button className="h-full  lg:h-full  border rounded-lg p-3 flex flex-col">
            <img
              className="flex justify-center min-w-[200px]"
              src={Foto}
              alt="foto"
            />
            <div className="text-start text-md lg:text-2xl mt-5">
              Sepak Bola
            </div>
            <div className="flex gap-3 text-start mt-3">
              <div className="text-[#8d8f91] flex-grow text-xs lg:text-md">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad
                animi, iste saepe dignissimos, est minus sequi nam quidem
                blanditiis esse iusto repudiandae error enim autem earum dolores
                quam atque voluptatem.
              </div>
            </div>
          </button> */}
        </div>
      </div>
    </>
  );
};

export default Ekstrakulikuler;
