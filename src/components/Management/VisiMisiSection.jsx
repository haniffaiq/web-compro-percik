import { ReactComponent as Logo } from "../../assets/logo/logo.svg";
import React, { useContext } from "react";
import AppContext from "../../context/AppContext";

const VisiMisiSection = ({ selectedButton }) => {
  const { globalState } = useContext(AppContext);
  if (selectedButton === "Pembina" || selectedButton === "Advisor") {
    return (
      <>
        <div>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "-99px" }}>
            <Logo style={{ width: "99px", height: "99px" }} />
          </div>

          <div className="main-container-layout">
            <div className="tittle-container-template">
              <h1>{globalState.globalProperty === "IND" ? "VISI" : "VISION"}</h1>
            </div>
            <div className="desc-container-template">
              <p>
                {globalState.globalProperty === "IND"
                  ? "Menjadi center of excellence bidang pendidikan dalam mencetak generasi panutan yang amanah, berwawasan kebangsaan, pancasilais, berbudi pekerti luhur, dan mandiri sesuai perkembangan zaman, dengan tetap menjaga keberlangsungan Yayasan Perguruan 'Cikini'."
                  : "Becoming a center of excellence in the field of education, dedicated to producing exemplary generations who are trustworthy, nationalist, adherent to Pancasila, possess noble character, and are self-reliant according to the changing times, while ensuring the continuity of the 'Cikini' Educational Foundation."}
              </p>
            </div>
            <div className="tittle-container-template">
              <h1>{globalState.globalProperty === "IND" ? "MISI" : "MISION"}</h1>
            </div>
            <div className="bullet-points">
              <ul>
                <li>
                  {globalState.globalProperty === "IND"
                    ? "– Mengembangkan kurikulum unggulan untuk menghasilkan insan yang kompeten dan adaptif terhadap perubahan teknologi."
                    : "– Developing outstanding curriculum to produce competent individuals who are adaptive to technological changes."}
                </li>
                <li>{globalState.globalProperty === "IND" ? "– Membangun fasilitas sarana dan prasarana yang unggul." : "– Building superior facilities and infrastructure."}</li>
                <li>{globalState.globalProperty === "IND" ? "– Membangun pusat pengembangan dan penelitian kebangsaan." : "– Establishing a national development and research center."}</li>
                <li>{globalState.globalProperty === "IND" ? "– Menjalin kerjasama, kolaborasi dan jejaring industri." : "– Forging partnerships, collaborations, and industrial networks."}.</li>
                <li>{globalState.globalProperty === "IND" ? "– Memberikan manfaat kepada bangsa dan negara." : "– Contributing to the benefit of the nation and the state."}</li>
              </ul>
            </div>
            <div className="tittle-container-template">
              <h1>{globalState.globalProperty === "IND" ? "VALUE" : "VALUES"}</h1>
            </div>
            <div className="desc-container-template">
              <p>
                {globalState.globalProperty === "IND"
                  ? "– Bekerja secara kompeten dengan jiwa patriotik kebangsaan, dan keteladanan dalam berperilaku luhur serta menjunjung tinggi etika profesi."
                  : "– Working competently with a patriotic spirit, exemplary behavior, and upholding professional ethics."}
              </p>
              <p>{globalState.globalProperty === "IND" ? "– Bekerja dengan berpedoman pada standar terbaik untuk memberikan hasil yang unggul." : "– Working based on the best standards to achieve superior results."}</p>
              <p>
                {globalState.globalProperty === "IND"
                  ? "– Bekerja dengan menjunjung tinggi nilai-nilai religi dan mengedepankan empati, toleransi serta saling menghormati."
                  : "Upholding religious values and promoting empathy, tolerance, and mutual respect."}
              </p>
              <p>{globalState.globalProperty === "IND" ? "– Memberikan manfaat nyata dengan tulus dan ikhlas kepada bangsa, Negara, dan masyarakat." : "Providing genuine and sincere benefits to the nation, state, and society."}</p>
              <p>
                {globalState.globalProperty === "IND"
                  ? "– Komitmen satunya kata dengan perbuatan dan bersikap jujur dalam melaksanakan tugas sesuai prinsip-prinsip."
                  : "Committing to one's word and acting honestly in carrying out tasks according to principles."}
              </p>
              <p>
                {globalState.globalProperty === "IND"
                  ? "– Cerdas dan berwawasan luas dengan senantiasa melakukan peningkatan berkelanjutan sesuai perkembangan zaman"
                  : "Being intelligent and broad-minded, continuously improving in line with the changing times."}
                .
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }

  if (selectedButton === "Pengawas" || selectedButton === "Supervisor") {
    return (
      <>
        <div>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "-99px" }}>
            <Logo style={{ width: "99px", height: "99px" }} />
          </div>
          <div className="main-container-layout-pengawas">
            <div className="tittle-container-template-pengawas">
              <h1>{globalState.globalProperty === "IND" ? "PRINSIP DASAR DALAM MEMBANGUN PENDIDIKAN DI BAWAH YAYASAN PERGURUAN ’CIKINI’" : "FOUNDATIONAL PRINCIPLES IN BUILDING EDUCATION UNDER THE 'CIKINI' EDUCATIONAL FOUNDATION"}</h1>
            </div>
            <div className="bullet-points-pengawas">
              <ul>
                <li>{globalState.globalProperty === "IND" ? "Universal dan obyektif dalam ilmu pengetahuan untuk mencapai kenyataan dan kebenaran." : "Universal and objective in scientific knowledge to achieve reality and truth."}</li>
                <li>{globalState.globalProperty === "IND" ? "Kebebasan akademik yang dilaksanakan dengan hikmah dan bertanggungjawab." : "Academic freedom exercised with wisdom and responsibility."}</li>
                <li>{globalState.globalProperty === "IND" ? "Keadaban, kemanfaatan, kebahagiaan, kemanusiaan dan kesejahteraan." : "Civility, usefulness, happiness, humanity, and well-being."}</li>
                <li>{globalState.globalProperty === "IND" ? "Aktualisasi nilai-nilai kebangsaan dan Pancasila dalam kehidupan akademik." : "Actualization of national values and Pancasila in academic life."}</li>
                <li>{globalState.globalProperty === "IND" ? "Pendidikan yang unggul." : "Excellence in education."}</li>
                <li>
                  {globalState.globalProperty === "IND"
                    ? "Pengembangan IPTEK secara kreatif dan inovatif untuk mewujudkan keunggulan bangsa."
                    : "Creative and innovative development of science and technology to realize national superiority."}
                </li>
                <li>
                  {globalState.globalProperty === "IND"
                    ? "Pemanfaatan hasil IPTEK untuk memberdayakan masyarakat serta mendukung pembangunan nasional dan daerah."
                    : "Utilization of science and technology results to empower society and support national and regional development."}
                </li>
                <li>{globalState.globalProperty === "IND" ? "Pengayaan budaya untuk mendukung kemandirian serta keutuhan bangsa dan negara." : "Cultural enrichment to support national independence and integrity."}</li>
                <li>
                  {globalState.globalProperty === "IND"
                    ? "Transformasi organisasi dan pengelolaan untuk mengembangkan keunggulan akademik serta meningkatkan efisiensi dan produktivitas melalui penerapan prinsip 'sentralisasi administrasi keuangan, desentralisasi akademik dan riset'."
                    : "Organizational transformation and management to develop academic excellence and improve efficiency and productivity through the application of the principle of 'centralization of financial administration, academic and research decentralization'."}
                </li>
                <li>
                  {globalState.globalProperty === "IND"
                    ? "Penyediaan sarana dan prasarana kampus untuk mendukung posisi Perguruan 'Cikini' ke taraf mutu internasional."
                    : "Provision of campus facilities and infrastructure to support the 'Cikini' College's position towards international quality standards."}
                </li>
                <li>{globalState.globalProperty === "IND" ? "Pengembangan jaringan kerjasama menuju pembangunan masyarakat yang demokratis." : "Development of cooperation networks towards the development of a democratic society."}</li>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  }

  if (selectedButton === "Pengurus" || selectedButton === "Administrator") {
    return (
      <div className="pengurus-visi-misi-container">
        <div className="item-desc-tittle-container">
          <h1>{globalState.globalProperty === "IND" ? "PENDIDIKAN FORMAL" : "FORMAL EDUCATION"}</h1>
          <p>
            {globalState.globalProperty === "IND"
              ? "TK Perguruan 'Cikini' | SD Perguruan 'Cikini' | SMP Perguruan 'Cikini' | SMA 1 Perguruan 'Cikini' | SMA 2 Perguruan 'Cikini' | SMK 1 Perguruan 'Cikini' | SMK 2 Musik Perguruan 'Cikini' | SMK 3 Perguruan 'Cikini' | SMK YPC-KIIC | ISTN (Institut Sains dan Teknologi Nasional)"
              : "Cikini School Kindergarten | Cikini School Elementary | Cikini School Junior High | Cikini School Senior High 1 | Cikini School Senior High 2 | Cikini School Vocational High 1 | Cikini School Vocational High 2 Music | Cikini School Vocational High 3 | Cikini School Vocational High YPC-KIIC | ISTN (National Institute of Science and Technology)"}
          </p>
          <h1>{globalState.globalProperty === "IND" ? "PENDIDIKAN NONFORMAL" : "INFORMAL EDUCATION"}</h1>
          <p>
            {globalState.globalProperty === "IND" ? "Pusat pelatihan Suzuki 'Cikini' | Kursus Musik - Lembaga Pendidikan Musik Perguruan 'Cikini'" : "Suzuki Training Center 'Cikini' | Music Course - Music Education Institution 'Cikini'"}
          </p>
          <h1>{globalState.globalProperty === "IND" ? "KERJA SAMA DENGAN INSTITUSI LAIN" : "COLLABORATION WITH OTHER INSTITUTIONS"}</h1>
          <p>
            {globalState.globalProperty === "IND"
              ? "Kerja sama pendidikan dengan PT Kertas Nusantara Kalimantan Timur | Kerja sama pendidikan dengan Yayasan Vidatra (PT Badak) Bontang, Kalimantan Timur | Kerja sama pendidikan dengan Yayasan KPS (Kontrak tor Production Sharing) Balikpapan, Kalimantan Timur | Kerja sama pendidikan dengan Sangata Prima Coal, Sangata, Kalimantan Timur | Kerja sama kesehatan dengan penyelenggara asuransi kesehatan | Kerja sama asuransi dengan PT Jaminan Sosial Tenaga Kerja"
              : "Education collaboration with PT Kertas Nusantara East Kalimantan | Education collaboration with Yayasan Vidatra (PT Badak) Bontang, East Kalimantan | Education collaboration with Yayasan KPS (Production Sharing Contract) Balikpapan, East Kalimantan | Education collaboration with Sangata Prima Coal, Sangata, East Kalimantan | Health collaboration with health insurance providers | Insurance collaboration with PT Jaminan Sosial Tenaga Kerja"}
          </p>
        </div>
      </div>
    );
  }
};

export default VisiMisiSection;
