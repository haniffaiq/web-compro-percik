import React, { useContext } from "react";
import { Carousel, ConfigProvider } from "antd";
import AppContext from "../../context/AppContext";
import AboutImg from "../../assets/img/Home/Home_About.png";
import { Link } from "react-router-dom";
import selengkapnya from "../../assets/img/Home/Selengkapnya.png"


const bahasa = <>Yayasan Perguruan Cikini telah mencatat prestasi gemilang sebagai lembaga pendidikan dengan track record yang memukau. Sejak berdiri, yayasan ini telah melahirkan banyak individu hebat yang kini berkontribusi di berbagai
  sektor di Indonesia. Alumni Perguruan Cikini menjadi bukti nyata akan dedikasi yayasan dalam membentuk generasi yang unggul dan berprestasi. <br />
  <br />
  Yayasan Perguruan Cikini terus berinovasi tanpa meninggalkan tradisi yang kuat. Dengan memadukan kekayaan tradisional dan semangat inovatif, yayasan ini memberikan pendidikan yang tidak hanya relevan dengan perkembangan
  zaman, tetapi juga memberdayakan generasi penerus untuk menghadapi masa depan. Dukungan masyarakat, guru-guru yang berdedikasi, dan komitmen terhadap pendidikan berkualitas menjadikan Yayasan Perguruan Cikini sebagai pionir
  dalam membentuk karakter dan kecerdasan anak bangsa.</>

const english = <> Yayasan Perguruan Cikini has achieved remarkable success as an educational institution with an impressive track record. Since its establishment, this foundation has produced many outstanding individuals who are now contributing in various sectors in Indonesia. Alumni of Perguruan Cikini serve as tangible evidence of the foundation's dedication to shaping an excellent and accomplished generation. <br />
<br />
Yayasan Perguruan Cikini continues to innovate without abandoning its strong traditions. By combining traditional richness and innovative spirit, this foundation provides education that is not only relevant to the development of the times, but also empowers the next generation to face the future. Support from the community, dedicated teachers, and a commitment to quality education make Yayasan Perguruan Cikini a pioneer in shaping the character and intelligence of the nation's children.</>
const About = () => {
  const { globalState, updateGlobalState } = useContext(AppContext);
  // console.log(globalState, "DIHeader");
  console.log(globalState.globalProperty);

  return (
    <>
      <div className="flex flex-col gap-2 items-center lg:pt-12 pt-4 lg:p-24 lg:bg-[#D9D9D9]">
        <div className="text-center lg:text-start text-2xl lg:text-5xl font-bold mb-5 lg:mb-10">{globalState.globalProperty === "IND" ? "TENTANG KAMI" : "ABOUT US"} <br /></div>
        <div className="bg-white rounded-lg overflow-hidden shadow-lg lg:grid lg:grid-cols-2 gap-5 w-full lg:p-24 px-4">
          <div>
            <img loading="lazy" className="w-auto" src={AboutImg} alt="img" />
          </div>
          <div className="flex flex-col justify-start lg:pl-8 py-6 lg:py-0 lg:justify-between leading-normal	">
            <div className="text-sm lg:text-xl lg:text-md mb-4 lg:mb-10 leading-normal	">
              {globalState.globalProperty === "IND" ? bahasa : english} <br />
              
            </div>
            <Link to="/about" className="flex mt-auto item-center lg:justify-start justify-center">
              <button className="text-[20px] text-center bg-[#40E0D0] lg:px-6 lg:py-2 w-auto rounded-full p-1 text-white px-3">
              {globalState.globalProperty === "IND" ? "Selengkapnya" : "See More"}
              </button>
            </Link>
          </div>
        </div>

      </div>


    </>
  );
};

export default About;
