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
                  Saya dengan senang hati menyambut Anda dalam lingkungan pendidikan kami yang berfokus pada pengembangan karakter, keunggulan akademik, dan kreativitas. Bersama-sama, kami berkomitmen untuk membimbing setiap siswa mencapai
                  potensi terbaik mereka, menginspirasi keingintahuan, dan membentuk pemimpin masa depan yang tangguh.
                </div>
                <div>Terima kasih atas kepercayaan Anda kepada kami. Kami berharap bahwa perjalanan pendidikan di Perguruan Cikini akan menjadi fondasi yang kokoh untuk kesuksesan dan prestasi sepanjang hidup.</div>
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
