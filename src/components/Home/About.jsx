import React, { useContext } from "react";
import { Carousel, ConfigProvider } from "antd";
import AppContext from "../../context/AppContext";
import AboutImg from "../../assets/img/Home/Home_About.png";
import { Link } from "react-router-dom";
import selengkapnya from "../../assets/img/Home/Selengkapnya.png";

const bahasa = (
  <>
    Yayasan Perguruan "CIKINI" telah mencatat prestasi gemilang sebagai lembaga pendidikan dengan track record yang memukau. Sejak berdiri yayasan ini telah melahirkan banyak individu hebat yang kini berkontribusi di berbagai sektor di
    Indonesia. Alumni Perguruan "CIKINI" menjadi bukti nyata akan dedikasi yayasan dalam membentuk generasi yang unggul dan berprestasi. <br />
    <br />
    Yayasan Perguruan "CIKINI" terus berinovasi tanpa meninggalkan tradisi yang kuat. Dengan memadukan kekayaan tradisional dan semangat inovatif, yayasan ini memberikan pendidikan yang tidak hanya relevan dengan perkembangan jaman, tetapi
    juga memberdayakan generasi penerus untuk menghadapi masa depan. Dukungan masyarakat, guru-guru yang berdedikasi, dan komitmen terhadap pendidikan berkualitas menjadikan Yayasan Perguruan "CIKINI" sebagai pionir dalam membentuk karakter
    dan kecerdasan anak bangsa.
  </>
);

const english = (
  <>
    {" "}
    Yayasan Perguruan "CIKINI" (CIKINI Educational Foundation). has achieved remarkable success as an educational institution with an impressive track record. Since its establishment, this foundation has produced many outstanding
    individuals who now contribute to various sectors in Indonesia. The alumni of Yayasan Perguruan "CIKINI" stand as concrete evidence of the foundation's dedication to shaping an excellent and accomplished generation. <br />
    <br />
    Yayasan Perguruan "CIKINI" continues to innovate without abandoning its strong traditions. By combining traditional richness with an innovative spirit, the foundation provides an education that is not only relevant to current
    developments but also empowers the next generation to face the future. Community support, dedicated teachers, and a commitment to quality education make the Yayasan Perguruan "CIKINI" a pioneer in shaping the character and intelligence
    of the nation's children.
  </>
);
const About = () => {
  const { globalState, updateGlobalState } = useContext(AppContext);
  // console.log(globalState, "DIHeader");
  console.log(globalState.globalProperty);

  return (
    <>
      <div className="flex flex-col gap-2 items-center lg:px-[250px]">
        <div className="text-center lg:text-start text-2xl lg:text-[54px] py-[58px]" style={{ fontFamily: "Hedvig Letters Serif, serif" }}>
          {globalState.globalProperty === "IND" ? "TENTANG KAMI" : "ABOUT US"} <br />
        </div>
        <div className="bg-white rounded-lg overflow-hidden lg:grid lg:grid-row-2 gap-5 w-full lg:px-24 px-4 ">
          <div className="justify-center flex">
            <img loading="lazy" className="w-auto" src={AboutImg} alt="img" />
          </div>
          <div className="flex flex-col justify-center items-center py-6 lg:py-8 leading-normal ">
            <div className="text-sm lg:text-xl lg:text-md mb-4 lg:mb-10 leading-normal px-4 text-left lg:px-24" style={{ fontFamily: "Maven Pro" }}>
              {globalState.globalProperty === "IND" ? bahasa : english} <br />
            </div>
            <Link to="/about" className="flex mt-auto item-center justify-center">
              <button className="text-[18px] text-center bg-black lg:px-6 lg:py-2 w-auto p-1 text-white px-3 rounded-md" style={{ letterSpacing: 4 }}>
                {globalState.globalProperty === "IND" ? "SELENGKAPNYA >>" : "SEE MORE >>"}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
