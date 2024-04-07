import React, { useContext } from "react";
import { Carousel, ConfigProvider } from "antd";
import AppContext from "../../context/AppContext";
import AboutImg from "../../assets/img/UPACARA5.webp";
import { Link } from "react-router-dom";

const About = () => {
  const { globalState, updateGlobalState } = useContext(AppContext);
  // console.log(globalState, "DIHeader");
  console.log(globalState.globalProperty );

  return (
    <>
      <div className="flex flex-col gap-2 items-start lg:items-center p-5 lg:p-14">
        <div className="text-2xl lg:text-5xl font-bold mb-5 lg:mb-10 lg:text-center text-start">TENTANG KAMI</div>
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-5 w-full">
          <div className="flex justify-center rounded-lg">
            <img loading="lazy" className="rounded-lg" src={AboutImg} alt="img" />
          </div>
          <div className="flex flex-col justify-start ">
            <div className="text-center lg:text-start">
              <div className="font-bold text-md lg:text-3xl mb-4 lg:mb-10 text-start">YAYASAN DENGAN TRACK RECORD MEMUKAU</div>
              <div className="text-sm lg:text-md mr-0 lg:mr-24 mb-4 lg:mb-10 text-start">
                Yayasan Perguruan Cikini telah mencatat prestasi gemilang sebagai lembaga pendidikan dengan track record yang memukau. Sejak berdiri, yayasan ini telah melahirkan banyak individu hebat yang kini berkontribusi di berbagai
                sektor di Indonesia. Alumni Perguruan Cikini menjadi bukti nyata akan dedikasi yayasan dalam membentuk generasi yang unggul dan berprestasi. <br />
                <br />
                Filosofi lambang Perguruan Cikini, karya dari Bapak Dukut Hendronoto, tetap terjaga dan menjadi ciri khas yang melekat. Meskipun mengalami sedikit perubahan ejaan, lambang ini mempertahankan nilai-nilai asli sejak awal
                pembuatannya. Kesetiaan yayasan terhadap filosofi ini mencerminkan komitmen mereka untuk mempertahankan akar dan prinsip-prinsip yang menjadikan Perguruan Cikini sebagai institusi pendidikan terkemuka. <br /> <br />
                Yayasan Perguruan Cikini terus berinovasi tanpa meninggalkan tradisi yang kuat. Dengan memadukan kekayaan tradisional dan semangat inovatif, yayasan ini memberikan pendidikan yang tidak hanya relevan dengan perkembangan
                zaman, tetapi juga memberdayakan generasi penerus untuk menghadapi masa depan. Dukungan masyarakat, guru-guru yang berdedikasi, dan komitmen terhadap pendidikan berkualitas menjadikan Yayasan Perguruan Cikini sebagai pionir
                dalam membentuk karakter dan kecerdasan anak bangsa.
              </div>
            </div>
            <Link to="/about">
              <div className="flex justify-center lg:justify-start">
                <button className=" flex items-end justify-center lg:justify-start lg:mt-0 mt-10 font-semibold">Selengkapnya {">>>"}</button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
