import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AppContext from "../../context/AppContext";
import data from "../../assets/json/about";
import Logo from "../../assets/logo/logo.svg";

const Prinsip = () => {
  const { globalState, updateGlobalState } = useContext(AppContext);
  const [html, setHtml] = useState({ __html: "" });

  // Teks dalam bahasa Indonesia
  let PrinsipDescIndo =
    "Prinsip lambang Perguruan “Cikini” masih sesuai dengan aslinya sejak pembuatan awal, kecuali ejaan lama diganti dengan ejaan baru pada tulisan “Tjikini” menjadi “Cikini”.Lambang Perguruan “Cikini” adalah karya dari Bapak Dukut Hendronoto (Pak Ooq), orang tua murid, guru gambar SMP Perguruan Cikini dan cartoonist pada Perusahaan Film Negara (PFN) .\n\n<b>GAMBAR:</b>\nBusur siap sedia meluncurkan anak panahnya ke tujuan yang lurus, mengarah ke atas.\n\n<b>KETERANGAN:</b>\nBusur : Guru\nAnak Panah : Murid\nMatahari : Cahaya tujuan\nTinggi : Pendidikan\nBuku : Pengetahuan\n\n<b>MEMBERI ARTI:</b>\nGuru memberi dorongan dan bimbingan kepada murid untuk tujuan lurus menuju setinggi-tingginya dengan berdasarkan penerangan, pendidikan, dan pengetahuan.";

  // Teks dalam bahasa Inggris
  let PrinsipDescEnglish =
    "The philosophy of the emblem of 'Cikini' School remains true to its original form since its inception, except for the old spelling replaced with the new spelling in the inscription 'Tjikini' becoming 'Cikini'. The emblem of 'Cikini' School is the work of Mr. Dukut Hendronoto (Pak Ooq), parent of a student, drawing teacher at Cikini Junior High School, and cartoonist at the State Film Company (PFN).\n\n<b>IMAGE:</b>\nThe bow is ready to launch its arrow towards a straight target, aiming upwards.\n\n<b>DESCRIPTION:</b>\nBow: Teacher\nArrow: Student\nSun: The light of purpose\nHeight: Education\nBook: Knowledge\n\n<b>SIGNIFICANCE:</b>\nThe teacher provides encouragement and guidance to the student towards a straight goal to reach the highest point based on enlightenment, education, and knowledge.";

  let descLoader = () => {
    // Menentukan teks yang akan ditampilkan berdasarkan nilai globalProperty
    const descText = globalState.globalProperty === "IND" ? PrinsipDescIndo : PrinsipDescEnglish;

    // Menetapkan HTML yang akan disetel sebagai state untuk ditampilkan
    setHtml({
      __html: `<div>${descText.replace(/\n/g, "<br>")}</div>`,
    });
  };

  useEffect(() => {
    descLoader();
  }, [globalState.globalProperty]); // Memperbarui teks ketika globalProperty berubah

  return (
    <>
      <div className="lg:lg:flex flex-col items-center justify-center lg:flex-row lg:justify-start ">
        <div className=" w-full lg:py-[28px] bg-[#E2E5E9]">
          <div className="text-black text-[28px] lg:text-6xl mt-5 lg:mt-0 ml-0 lg:ml-32 py-6 text-center lg:text-left lg:px-[145px] " style={{ fontFamily: "Hedvig Letters Serif, serif" }}>
            {globalState.globalProperty === "IND" ? "Prinsip Dasar" : "Basic Principals"}
          </div>
          {/* <div className="border-t-7 border-yellow-400 w-[103px] lg:absolute left-[125px] lg:border-[6px]"></div> */}
        </div>
      </div>
      <div className="p-9 lg:px-0 lg:py-4 lg:ml-32 lg:pl-[145px]">
        <div className="w-full rounded-xl lg:my-10 ">
          <div className="leading-normal">
            <div className="text-white py-5 px-5 lg:px-0 lg:py-2 lg:col-span-2 lg:row-span-2 ">
              <div className="flex flex-col gap-5 text-[16px] lg:text-[24px] mt-[-10px] lg:mt-0 text-black leading-normal px-4 lg:pr-28">
                <ul className="list-outside list-disc mx-[10px] w-[220px]">
                  <li>{globalState.globalProperty === "IND" ? "Universal dan obyektif dalam ilmu pengetahuan untuk mencapai kenyataan dan kebenaran." : "Universal and objective in knowledge to achieve reality and truth."}</li>
                  <li>{globalState.globalProperty === "IND" ? "Kebebasan akademik yang dilaksanakan dengan hikmah dan bertanggungjawab." : "Academic freedom exercised with wisdom and responsibility."}</li>
                  <li>{globalState.globalProperty === "IND" ? "Keadaban, kemanfaatan, kebahagiaan, kemanusiaan, dan kesejahteraan." : "Civility, usefulness, happiness, humanity, and welfare."}</li>
                  <li>{globalState.globalProperty === "IND" ? "Aktualisasi nilai-nilai kebangsaan dan Pancasila dalam kehidupan akademik." : "Actualization of national values and Pancasila in academic life."}</li>
                  <li>{globalState.globalProperty === "IND" ? "Pendidikan yang unggul." : "Excellent education."}</li>
                  <li>
                    {globalState.globalProperty === "IND"
                      ? "Pengembangan IPTEK secara kreatif dan inovatif untuk mewujudkan keunggulan bangsa."
                      : "Development of science and technology creatively and innovatively to achieve national excellence."}
                  </li>
                  <li>
                    {globalState.globalProperty === "IND"
                      ? "Pemanfaatan hasil IPTEK untuk memberdayakan masyarakat serta mendukung pembangunan nasional dan daerah."
                      : "Utilization of science and technology outcomes to empower communities and support national and regional development."}
                  </li>
                  <li>{globalState.globalProperty === "IND" ? "Pengayaan budaya untuk mendukung kemandirian serta keutuhan bangsa dan negara." : "Cultural enrichment to support independence and the integrity of the nation and state."}</li>
                  <li>
                    {globalState.globalProperty === "IND"
                      ? "Transformasi organisasi dan pengelolaan untuk mengembangkan keunggulan akademik serta meningkatkan efisiensi dan produktivitas melalui penerapan prinsip “sentralisasi administrasi keuangan, desentralisasi akademik dan riset”."
                      : "Organizational and management transformation to develop academic excellence and increase efficiency and productivity through the implementation of the principle 'financial administration centralization, academic and research decentralization'."}
                  </li>
                  <li>
                    {globalState.globalProperty === "IND"
                      ? "Penyediaan sarana dan prasarana kampus untuk mendukung posisi Perguruan 'Cikini' ke taraf mutu internasional."
                      : "Provision of campus facilities and infrastructure to support the position of Perguruan 'Cikini' to international quality standards."}
                  </li>
                  <li>{globalState.globalProperty === "IND" ? "Pengembangan jaringan kerjasama menuju pembangunan masyarakat yang demokratis." : "Development of cooperation networks towards building a democratic society."}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Prinsip;
