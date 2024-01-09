import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AppContext from "../../context/AppContext";
import Foto from "../../assets/img/unsplash_pAtA8xe_iVM.png";

const AboutUs = () => {
  const { globalState, updateGlobalState } = useContext(AppContext);

  return (
    <>
      <div className="p-8">
        <div className="text-center text-5xl font-bold mb-10">Tentang Kami</div>
        <div className="border w-full bg-[#09588D] rounded-xl p-14">
          <div className="grid grid-cols-2 mt-10">
            <div className="text-white">
              <div className="text-4xl font-bold">Ucapan Dari Pimpinan</div>
              <div className="text-[25px]">Ir. Budiono Kartohadiprojo</div>
              <div className="flex flex-col gap-5 text-lg mt-10">
                <div>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Iusto excepturi dolorem eius, doloribus repellat assumenda
                  provident error, asperiores inventore distinctio vel
                  perferendis illo quas magni numquam quo nesciunt vitae
                  quibusdam?
                </div>
                <div>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Iusto excepturi dolorem eius, doloribus repellat assumenda
                  provident error, asperiores inventore distinctio vel
                  perferendis illo quas magni numquam quo nesciunt vitae
                  quibusdam?
                </div>
                <div>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Iusto excepturi dolorem eius, doloribus repellat assumenda
                  provident error, asperiores inventore distinctio vel
                  perferendis illo quas magni numquam quo nesciunt vitae
                  quibusdam?
                </div>
              </div>
            </div>
            <div className="flex justify-end h-[500px]">
              <img src={Foto} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
