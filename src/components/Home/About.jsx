import React, { useContext } from "react";
import { Carousel, ConfigProvider } from "antd";
import AppContext from "../../context/AppContext";
import AboutImg from "../../assets/img/Home/Home_About.png";
import { Link } from "react-router-dom";
import selengkapnya from "../../assets/img/Home/Selengkapnya.png"
const About = () => {
  const { globalState, updateGlobalState } = useContext(AppContext);
  // console.log(globalState, "DIHeader");
  console.log(globalState.globalProperty);

  return (
    <>
      <div className="flex flex-col gap-2 items-start lg:items-center pt-12 lg:p-24 lg:mt-20 lg:bg-[#D9D9D9]">
        <div className="text-center lg:text-start text-2xl lg:text-5xl font-bold mb-5 lg:mb-10">TENTANG KAMI</div>


        <div className="bg-white rounded-lg overflow-hidden shadow-lg lg:grid lg:grid-cols-2 gap-5 w-full lg:p-24">
          <div>
            <img loading="lazy" className="w-full h-auto" src={AboutImg} alt="img" />
          </div>
          <div className="flex flex-col justify-start p-6 lg:justify-between">
            <div className="text-sm lg:text-md mb-4 lg:mb-10">
            Yayasan Perguruan Cikini telah mencatat prestasi gemilang sebagai lembaga pendidikan dengan track record yang memukau. Sejak berdiri, yayasan ini telah melahirkan banyak individu hebat yang kini berkontribusi di berbagai
              sektor di Indonesia. Alumni Perguruan Cikini menjadi bukti nyata akan dedikasi yayasan dalam membentuk generasi yang unggul dan berprestasi. <br />
              <br />
              Filosofi lambang Perguruan Cikini, karya dari Bapak Dukut Hendronoto, tetap terjaga dan menjadi ciri khas yang melekat. Meskipun mengalami sedikit perubahan ejaan, lambang ini mempertahankan nilai-nilai asli sejak awal
              pembuatannya. Kesetiaan yayasan terhadap filosofi ini mencerminkan komitmen mereka untuk mempertahankan akar dan prinsip-prinsip yang menjadikan Perguruan Cikini sebagai institusi pendidikan terkemuka. <br /> <br />
              Yayasan Perguruan Cikini terus berinovasi tanpa meninggalkan tradisi yang kuat. Dengan memadukan kekayaan tradisional dan semangat inovatif, yayasan ini memberikan pendidikan yang tidak hanya relevan dengan perkembangan
              zaman, tetapi juga memberdayakan generasi penerus untuk menghadapi masa depan. Dukungan masyarakat, guru-guru yang berdedikasi, dan komitmen terhadap pendidikan berkualitas menjadikan Yayasan Perguruan Cikini sebagai pionir
              dalam membentuk karakter dan kecerdasan anak bangsa.
            </div>
            <Link to="/about" className="mt-auto">
              <button className="font-semibold">
                <img src={selengkapnya} alt="Selengkapnya" />
              </button>
            </Link>
          </div>
        </div>

      </div>


    </>
  );
};

export default About;
