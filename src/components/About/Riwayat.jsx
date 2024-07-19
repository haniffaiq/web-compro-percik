import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AppContext from "../../context/AppContext";
import Pandu from "../../assets/img/history/ibu_pandu.webp";

const sejarah = {
  1: {
    id: "1",
    imgUrl: require("../../assets/img/history/ibu_pandu.webp"),
    title: "Era Merintis dan Perjuangan (1942 - 1951)",
    content:
      "Pada tahun 1942, di tengah era perjuangan menuju kemerdekaan Republik Indonesia, Ibu Pandu Soeradhiningrat mengambil inisiatif untuk membuka kursus Bahasa Indonesia. Saat itu, tentara Jepang menutup sekolah-sekolah peninggalan Hindia Belanda, tetapi memberikan kebebasan berbicara dalam Bahasa Indonesia kepada rakyat pribumi. Ibu Pandu melihat peluang ini sebagai sarana untuk mencerdaskan anak bangsa dan menanamkan semangat perjuangan tanpa memandang status sosial, agama, dan politik. Kursus dimulai dengan 12 murid di rumah Dr. Rasyid, Jakarta, dibantu oleh guru bernama Ibu Mien Soemadji. Seiring bertambahnya jumlah murid, kursus berubah fungsi menjadi Sekolah Rakyat Partikelir 'MAYUMI' pada tanggal 1 Agustus 1942, dan hanya dalam waktu 3 bulan, tepatnya pada tanggal 1 November 1942, sekolah 'MAYUMI' dipindahkan ke Jalan Cikini Raya No. 76 karena jumlah murid yang terus meningkat mencapai 200 orang. Perjuangan Ibu Pandu dan perkembangan sekolahnya mencerminkan tekad untuk mencerdaskan generasi muda Indonesia di tengah keterbatasan dan perubahan kondisi pada masa itu.",
  },
  2: {
    id: "2",
    imgUrl: require("../../assets/img/history/1.webp"),
    title: "Era Pembentukan (1952 - 1959)",
    content:
      "Perjuangan tanpa henti terus berlanjut di era pasca Proklamasi Kemerdekaan Republik Indonesia. Pada tanggal 27 September 1952, Yayasan Wakaf MAYUMI berganti nama menjadi Yayasan Sekolah 'CIKINI' dengan akta notaris MR. Soewandi, terus berusaha mewujudkan cita-cita luhur bangsa dan menjadi pelopor untuk turut mencerdaskan kehidupan bangsa Indonesia. Bapak Soemadji dan Bapak Moh. Amin memulai kelas percontohan untuk sekolah menengah pertama di bawah pohon sawo yang terkenal dengan sebutan 'kelas Pohon Sawo', dengan siswa pertama, Bapak Mohamad Arief Nazir MS (Ipul), dan Ibu Sri Widjajanti Moersadik (Wiwik). SMP I 'Cikini' diresmikan pada tanggal 15 Agustus 1956, disusul dengan SMP II 'Cikini' pada malam harinya, yang dibuka pada tanggal 15 Agustus 1957. Peristiwa penting dalam sejarah Sekolah 'Cikini' terjadi pada tanggal 30 November 1957, saat perayaan ulang tahun ke-15, yang dikenal sebagai 'Peristiwa Cikini', yaitu percobaan pelemparan granat terhadap Presiden pertama Republik Indonesia, Ir. Soekarno. Atas anugerah Tuhan, Presiden selamat dan tetap sehat. Seiring berjalannya waktu, Yayasan Sekolah Cikini terus berkembang. Setelah berdirinya TK, SD, SMP I, dan SMP II, pada tanggal 1 September 1959, didirikanlah SMA dengan Bapak Boediman sebagai Kepala Sekolahnya, dengan menggunakan gedung di Jalan Cikini Raya No. 74 yang sebelumnya ditempati oleh Dr. Theo Ban Hien.",
  },
  3: {
    id: "3",
    imgUrl: require("../../assets/img/history/2.webp"),
    title: "Era Kejayaan (1960 - 1995)",
    content:
      "Pada tahun 1980-an, Yayasan Perguruan 'Cikini' mengalami perkembangan pesat, terutama di Jalan Cikini Raya 74-76 Jakarta Pusat. Perguruan 'Cikini' atau yang kerap disingkat 'Percik' menjadi sekolah swasta di daerah Menteng Jakarta Pusat yang sangat diminati oleh pejuang dan tokoh negeri untuk menyekolahkan anak-anak mereka. Baik pimpinan negara, politikus, tokoh militer, pengusaha ternama, maupun rakyat biasa antusias menyekolahkan anaknya di Perguruan 'Cikini'. Seiring bertambahnya murid SMA, pada tahun 1986, SMA berdikari dan pindah lokasi ke Jalan PLN Duren Tiga Jakarta Selatan, dengan tujuan meningkatkan sarana dan prasarana sehingga kualitas dan kuantitas SMA dapat terus ditingkatkan. Perguruan 'Cikini' terus berkembang dengan bergabungnya ATN (Akademi Teknik Nasional) yang sekarang dikenal sebagai ISTN (Institut Sains & Teknologi Nasional) di Jagakarsa Jakarta Selatan. ISTN telah menghasilkan ribuan Sarjana Teknik yang turut berjuang membangun negeri. Dengan jenjang pendidikan mulai dari TK, SD, SMP, SMA, hingga Perguruan Tinggi, Perguruan 'Cikini' menjawab kebutuhan pendidikan di era globalisasi. Pada tanggal 3 September 1979, STM didirikan di Jakarta Utara, dan pendidikan nonformal dimulai pada tahun 1994 dengan Pendidikan Musik di berbagai cabang di sekitar Jakarta. Yayasan Perguruan 'Cikini' memiliki moto 'Turut Berbakti Membangun Negeri,' yang dijalankan secara konsisten, menghasilkan generasi penerus perjuangan bangsa, termasuk pemimpin nasional, politikus ternama, pengusaha nasional, dan tokoh-tokoh lainnya di berbagai bidang kehidupan. Banyak alumni yang menjadi tokoh-tokoh nasional, seperti Ibu Megawati Soekarnoputri, Bapak Akbar Tanjung, Bapak Agung Laksono, Bapak Hayono Isman, Bapak Soebronto Laras, dan masih banyak lagi. Dengan demikian, Perguruan 'Cikini' dapat disebut sebagai sekolah yang berhasil mencetak generasi emas bangsa, dan tetap eksis hingga saat ini.",
  },
  4: {
    id: "4",
    imgUrl: require("../../assets/img/history/3.webp"),
    title: "Masa Ujian Berat Bagi Perguruan 'CIKINI' (1996 - 2000)",
    content:
      "Di tengah pergolakan politik negara dan tekanan dari banyak kebijakan pemerintah terhadap perguruan swasta, pada penghujung tahun 1990-an dan awal abad Milenium pada tahun 2000, Perguruan 'Cikini' menghadapi ujian berat. Terutama terlihat pada SMA Perguruan 'Cikini' di Jalan PLN Duren Tiga, di mana jumlah siswa mengalami penurunan drastis dari 950 siswa menjadi hanya 225 siswa. Penurunan tersebut dapat diatribusikan pada keterlibatan banyak mahasiswa ISTN dalam kegiatan politik dan kekerasan, yang berdampak pada kurangnya minat untuk kuliah di ISTN. Fenomena serupa juga terjadi pada tingkatan TK, SD, dan SMP, meskipun penurunan jumlah siswa di tingkatan tersebut hanya berkisar 25%, tidak sejauh penurunan pada tingkat SMA dan perguruan tinggi. Perguruan 'Cikini,' yang telah berjuang selama lebih dari setengah abad dan mencapai puncak kejayaannya, sangat disayangkan mengalami penurunan yang tajam dalam waktu kurang dari lima tahun saat memasuki abad ke-21.",
  },
  5: {
    id: "5",
    imgUrl: require("../../assets/img/history/4.webp"),
    title: "Penataan Kembali (2000 - Sekarang)",
    content:
      "Beberapa faktor yang menyebabkan menurunnya minat masyarakat pada perguruan swasta melibatkan kebijakan dan perhatian pemerintah yang signifikan terhadap bidang pendidikan. Sekolah-sekolah negeri saat ini menawarkan fasilitas yang sangat baik dan tanpa biaya, menjadikannya favorit masyarakat. Hal ini menjadi tantangan serius bagi perguruan swasta, bahkan beberapa di antaranya mengalami kesulitan menghadapi perubahan tersebut dan akhirnya gulung tikar. Di sisi lain, banyak perguruan swasta baru yang muncul dengan modal kuat, membangun sekolah berfasilitas modern dan berbiaya tinggi, sering kali berorientasi pada model International School yang hanya terjangkau oleh masyarakat kalangan atas. Meskipun dihadapkan pada tantangan besar, Perguruan 'Cikini' bersyukur masih mampu berkarya dan pantang menyerah, memegang teguh amanah sebagai 'Sekolah Perjuangan.' Dengan kerja keras, keyakinan, dan semangat juang yang tinggi, Perguruan 'Cikini' berkomitmen untuk mengembalikan minat masyarakat seperti pada masa kejayaannya, termasuk dengan pendirian Sekolah Menengah Kejuruan (SMK 2) bidang Musik pada tahun 2005 di Jalan PLN Duren Tiga, Jakarta Selatan, serta Sekolah Menengah Kejuruan (SMK 3) di Srengseng Sawah. Perguruan 'Cikini' terus bertransformasi dari sekolah masa lalu yang tertinggal dalam fasilitas dan prasarana menjadi institusi pendidikan yang sesuai dengan perkembangan saat ini, namun tetap mempertahankan identitas sebagai 'Sekolah Perjuangan.' Ini tercermin dalam kualitas pendidikan dasar dan menengah yang tetap konsisten, terbukti dengan hasil ujian nasional yang mencapai 100% kelulusan untuk setiap jenjang pendidikan dalam tiga tahun terakhir. Bahkan, di tingkat SD dan SMP, nilai rata-ratanya melampaui angka 8. Peminatan untuk perguruan tinggi juga mengalami kenaikan, terutama pada jurusan Farmasi dan penyelenggaraan kelas karyawan. Oleh karena itu, upaya perbaikan fasilitas pendidikan akan terus diupayakan dengan tekad kuat, demi menjaga dan meningkatkan kualitas pendidikan di Perguruan 'Cikini' khususnya, di seluruh negeri.",
  },
};

const history = {
  1: {
    id: "1",
    imgUrl: require("../../assets/img/history/ibu_pandu.webp"),
    title: "The Pioneering and Struggle Era (1942 - 1951)",
    content:
      "In 1942, amidst the struggle towards the independence of the Republic of Indonesia, Ibu Pandu Soeradhiningrat took the initiative to open a course in the Indonesian language. At that time, the Japanese army closed down schools left behind by the Dutch East Indies, but granted freedom to speak in Indonesian to the native people. Ibu Pandu saw this opportunity as a means to educate the nation's children and instill the spirit of struggle without regard to social status, religion, and politics. The course began with 12 students at Dr. Rasyid's house in Jakarta, assisted by a teacher named Ibu Mien Soemadji. As the number of students increased, the course transformed into the Particular People's School 'MAYUMI' on August 1, 1942, and in just 3 months, on November 1, 1942, 'MAYUMI' school was moved to Jalan Cikini Raya No. 76 because the number of students continued to increase, reaching 200 people. The struggle of Ibu Pandu and the development of her school reflected the determination to educate the young generation of Indonesia amidst limitations and changes in conditions at that time.",
  },
  2: {
    id: "2",
    imgUrl: require("../../assets/img/history/ibu_pandu.webp"),
    title: "The Formation Era (1952 - 1959)",
    content:
      "The relentless struggle continued in the post-Proclamation era of the Independence of the Republic of Indonesia. On September 27, 1952, the MAYUMI Wakaf Foundation changed its name to the 'CIKINI' School Foundation with a notarial deed by MR. Soewandi, continuing to strive to realize the noble ideals of the nation and pioneers to contribute to educating the Indonesian people. Mr. Soemadji and Mr. Moh. Amin started a pilot class for junior high school under the famous sawo tree known as the 'Sawo Tree class,' with the first students, Mr. Mohamad Arief Nazir MS (Ipul), and Mrs. Sri Widjajanti Moersadik (Wiwik). SMP I 'Cikini' was inaugurated on August 15, 1956, followed by SMP II 'Cikini' in the evening, which was opened on August 15, 1957. An important event in the history of 'Cikini' School occurred on November 30, 1957, during the 15th anniversary celebration, known as the 'Cikini Event,' which was an attempt to grenade the first President of the Republic of Indonesia, Ir. Soekarno. By God's grace, the President survived and remained healthy. Over time, the 'Cikini' School Foundation continued to grow. After the establishment of TK, SD, SMP I, and SMP II, on September 1, 1959, SMA was established with Mr. Boediman as the Principal, using the building at Jalan Cikini Raya No. 74 which was previously occupied by Dr. Theo Ban Hien.",
  },
  3: {
    id: "3",
    imgUrl: require("../../assets/img/history/ibu_pandu.webp"),
    title: "THE Glory Era (1960 - 1995)",
    content:
      "In the 1980s, the 'Cikini' School Foundation experienced rapid development, especially in Jalan Cikini Raya 74-76 Jakarta Pusat. 'Cikini' School, or often abbreviated as 'Percik,' became a private school in the Menteng area of Central Jakarta that was highly sought after by patriots and national figures to educate their children. Both national leaders, politicians, military figures, renowned entrepreneurs, and ordinary people enthusiastically enrolled their children in 'Cikini' School. As the number of high school students increased, in 1986, SMA became independent and relocated to Jalan PLN Duren Tiga South Jakarta, with the aim of improving facilities and infrastructure so that the quality and quantity of SMA could be continuously increased. 'Cikini' School continued to develop with the joining of ATN (National Technical Academy) which is now known as ISTN (National Institute of Science & Technology) in Jagakarsa South Jakarta. ISTN has produced thousands of engineering graduates who have contributed to the nation's development. With an education system ranging from kindergarten, elementary, junior high, high school, to college, 'Cikini' School meets the educational needs in the era of globalization. On September 3, 1979, STM was established in North Jakarta, and non-formal education began in 1994 with Music Education in various branches around Jakarta. The 'Cikini' School Foundation has the motto 'Participating in Building the Nation,' which is consistently implemented, producing the next generation of national leaders, renowned politicians, national entrepreneurs, and other figures in various fields of life. Many alumni have become national figures, such as Ibu Megawati Soekarnoputri, Mr. Akbar Tanjung, Mr. Agung Laksono, Mr. Hayono Isman, Mr. Soebronto Laras, and many others. Thus, 'Cikini' School can be said to be a school that has successfully produced the nation's golden generation and continues to exist to this day.",
  },
  4: {
    id: "4",
    title: "A Tough Test Period For 'CIKINI' School (1996 - 2000)",
    content:
      "In the midst of the political turmoil in the country and the pressure from many government policies towards private schools, at the end of the 1990s and the beginning of the Millennium in 2000, 'Cikini' School faced a tough test. This was especially evident in 'Cikini' School's SMA on Jalan PLN Duren Tiga, where the number of students drastically decreased from 950 students to only 225 students. This decrease can be attributed to the involvement of many ISTN students in political and violent activities, which led to a lack of interest in studying at ISTN. A similar phenomenon also occurred at the TK, SD, and SMP levels, although the decrease in the number of students at these levels was only around 25%, not as much as the decrease at the high school and college levels. 'Cikini' School, which had struggled for more than half a century and reached its peak, was very unfortunate to experience a sharp decline in less than five years upon entering the 21st century.",
  },
  5: {
    id: "5",
    imgUrl: require("../../assets/img/history/ibu_pandu.webp"),
    title: "Reorganization (2000 - Present)",
    content:
      "Several factors have caused a decline in public interest in private schools, involving significant government policies and attention to the education sector. State schools currently offer excellent facilities and are free of charge, making them favored by the public. This poses a serious challenge to private schools, with some of them struggling to cope with these changes and eventually closing down. On the other hand, many new private schools have emerged with strong capital, building modern and high-cost schools, often oriented towards the International School model that is only affordable by the upper class. Despite facing significant challenges, 'Cikini' School is grateful to still be able to work and never give up, holding firmly to the trust as a 'School of Struggle.' With hard work, conviction, and a high fighting spirit, 'Cikini' School is committed to restoring public interest as it was in its heyday, including the establishment of Vocational High Schools (SMK 2) in the field of Music in 2005 on Jalan PLN Duren Tiga, South Jakarta, and Vocational High Schools (SMK 3) in Srengseng Sawah. 'Cikini' School continues to transform from a school of the past that lagged behind in facilities and infrastructure into an educational institution that is in line with current developments, while still maintaining its identity as a 'School of Struggle.' This is reflected in the consistent quality of primary and secondary education, as evidenced by national examination results that have reached a 100% pass rate for every level of education in the last three years. Even at the elementary and junior high school levels, the average scores exceed 8. Interest in higher education has also increased, especially in the Pharmacy department and the organization of evening classes. Therefore, efforts to improve educational facilities will continue to be pursued with strong determination, in order to maintain and improve the quality of education at 'Cikini' School in particular, and throughout the country.",
  },
};

const Riwayat = () => {
  const { globalState, updateGlobalState } = useContext(AppContext);
  const [html, setHtml] = useState({ __html: "" });
  console.log(globalState.globalProperty);

  let selectedData = {};
  if (globalState.globalProperty === "IND") {
    selectedData = sejarah;
  } else {
    selectedData = history;
  }

  let filosofiDesc =
    "FILOSOFI lambang Perguruan “Cikini” masih sesuai dengan aslinya sejak pembuatan awal, kecuali ejaan lama diganti dengan ejaan baru pada tulisan “Tjikini” menjadi “Cikini”.Lambang Perguruan “Cikini” adalah karya dari Bapak Dukut Hendronoto (Pak Ooq), orang tua murid, guru gambar SMP Perguruan Cikini dan cartoonist pada Perusahaan Film Negara (PFN) .\n\n<b>GAMBAR:</b>\nBusur siap sedia meluncurkan anak panahnya ke tujuan yang lurus, mengarah ke atas.\n\n<b>KETERANGAN:</b>\nBusur : Guru\nAnak Panah : Murid\nMatahari : Cahaya tujuan\nTinggi : Pendidikan\nBuku : Pengetahuan\n\n<b>MEMBERI ARTI:</b>\nGuru memberi dorongan dan bimbingan kepada murid untuk tujuan lurus menuju setinggi-tingginya dengan berdasarkan penerangan, pendidikan, dan pengetahuan.";
  let descLoader = () => {
    setHtml({
      __html: `<div>${filosofiDesc.replace(/\n/g, "<br>")}</div>`,
    });
  };

  useEffect(() => {
    descLoader();
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="ml-[20px] mr-[20px] lg:ml-[0px] lg:mr-[0px]">
        <div className="lg:lg:flex flex-col items-center justify-center lg:flex-row lg:justify-start">
          <div className=" w-full lg:py-[28px]">
            <div className="text-black text-[28px] lg:text-6xl mt-12 lg:mt-20 lg:ml-[-60px] py-2 lg:text-center lg:text-left lg:px-[145px] w-[280px] ml-[20px] lg:w-full" style={{ fontFamily: "Hedvig Letters Serif, serif" }}>
              {globalState.globalProperty === "IND" ? "Riwayat Singkat Perguruan 'CIKINI'" : "'CIKINI' School Brief History"}
            </div>
            {/* <div className="border-t-7 border-yellow-400 w-[103px] lg:absolute left-[125px] lg:border-[6px]"></div> */}
          </div>
        </div>
        <div className="px-5 lg:px-8 lg:mx-16 lg:pl-[145px]">
          <div className="w-full rounded-xl">
            {Object.keys(selectedData).map((key) => (
              <div key={selectedData[key].id} className="flex flex-col lg:grid lg:grid-cols mt-0 lg:mt-10 lg:gap-0 gap-5 py-5 rounded-lg">
                {/* <div className="flex flex-col items-center">
                <img
                  loading="lazy"
                  src={selectedData[key].imgUrl}
                  className="lg:object-cover flex h-[300px] lg:h-[300px]"
                  alt="selectedData[key].imgUrl"
                />
                <div className="text-end font-semibold">Ibu Pandu Soeradhiningrat</div>
              </div> */}
                <div className="lg:mx-5 lg:ml-16">
                  <div className="lg:text-[20px] text-[20px] lg:text-[42px] text-black" style={{ fontFamily: "Hedvig Letters Serif, serif" }}>
                    {selectedData[key].title}
                  </div>
                  <div className="flex flex-col gap-5 text-[16px] lg:text-[24px] mt-5 lg:mt-10 lg:mb-10 text-black w-full lg:w-auto text-left leading-normal ">{selectedData[key].content}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Riwayat;
