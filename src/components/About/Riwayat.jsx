import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AppContext from "../../context/AppContext";
import Pandu from "../../assets/img/Ibu.webp";
import Sejarah from "../../assets/img/sejarah.webp";

const Riwayat = () => {
  const { globalState, updateGlobalState } = useContext(AppContext);
  const [html, setHtml] = useState({ __html: "" });
  let filosofiDesc =
    "FILOSOFI lambang Perguruan “Cikini” masih sesuai dengan aslinya sejak pembuatan awal, kecuali ejaan lama diganti dengan ejaan baru pada tulisan “Tjikini” menjadi “Cikini”.Lambang Perguruan “Cikini” adalah karya dari Bapak Dukut Hendronoto (Pak Ooq), orang tua murid, guru gambar SMP Perguruan Cikini dan cartoonist pada Perusahaan Film Negara (PFN) .\n\n<b>GAMBAR:</b>\nBusur siap sedia meluncurkan anak panahnya ke tujuan yang lurus, mengarah ke atas.\n\n<b>KETERANGAN:</b>\nBusur : Guru\nAnak Panah : Murid\nMatahari : Cahaya tujuan\nTinggi : Pendidikan\nBuku : Pengetahuan\n\n<b>MEMBERI ARTI:</b>\nGuru memberi dorongan dan bimbingan kepada murid untuk tujuan lurus menuju setinggi-tingginya dengan berdasarkan penerangan, pendidikan, dan pengetahuan.";
  let descLoader = () => {
    setHtml({
      __html: `<div>${filosofiDesc.replace(/\n/g, "<br>")}</div>`,
    });
  };

  useEffect(() => {
    descLoader();
  }, []);
  return (
    <>
      <div className="p-5 lg:p-8">
        <div className="text-center text-3xl lg:text-5xl font-bold mb-10">RIWAYAT SINGKAT PERGURUAN CIKINI</div>
        <div
          className="w-full rounded-xl "
          style={{
            background: "linear-gradient(104deg, #DBDBDB 4.33%, #FFF 33.28%, #FFF 65.71%, #D7D6D6 93.89%)",
          }}
        >
          <div className="flex flex-col-reverse lg:grid lg:grid-cols-3 mt-0 lg:mt-10 lg:gap-0 gap-5 p-5 rounded-lg">
            <div className="col-span-2">
              <div className="text-[12px] lg:text-4xl font-bold text-black">ERA MERINTIS DAN PERJUANGAN (1942 - 1951)</div>
              <div className="flex flex-col gap-5 text-[7px] lg:text-lg mt-5 lg:mt-10 text-black w-full lg:w-[800px] text-justify">
                Pada tahun 1942, di tengah era perjuangan menuju kemerdekaan Republik Indonesia, Ibu Pandu Soeradhiningrat mengambil inisiatif untuk membuka kursus Bahasa Indonesia. Saat itu, tentara Jepang menutup sekolah-sekolah
                peninggalan Hindia Belanda, tetapi memberikan kebebasan berbicara dalam Bahasa Indonesia kepada rakyat pribumi. Ibu Pandu melihat peluang ini sebagai sarana untuk mencerdaskan anak bangsa dan menanamkan semangat perjuangan
                tanpa memandang status sosial, agama, dan politik. Kursus dimulai dengan 12 murid di rumah Dr. Rasyid, Jakarta, dibantu oleh guru bernama Ibu Mien Soemadji. Seiring bertambahnya jumlah murid, kursus berubah fungsi menjadi
                Sekolah Rakyat Partikelir "MAYUMI" pada tanggal 1 Agustus 1942, dan hanya dalam waktu 3 bulan, tepatnya pada tanggal 1 November 1942, sekolah "MAYUMI" dipindahkan ke Jalan Cikini Raya No. 76 karena jumlah murid yang terus
                meningkat mencapai 200 orang. Perjuangan Ibu Pandu dan perkembangan sekolahnya mencerminkan tekad untuk mencerdaskan generasi muda Indonesia di tengah keterbatasan dan perubahan kondisi pada masa itu.
              </div>
            </div>
            <div className="flex flex-col items-center gap-5">
              <img src={Pandu} className="lg:object-cover flex h-[300px] lg:h-full" />
              <div className="text-end font-semibold">Ibu Pandu Soeradhiningrat</div>
            </div>
          </div>
          <div className="flex justify-center w-full p-5">
            <img src={Sejarah} className="lg:object-cover flex h-full w-full" />
          </div>
          <div className="p-5">
            <div className="text-[12px] lg:text-4xl font-bold text-black">ERA PEMBENTUKAN (1952 - 1959)</div>
            <div className="flex flex-col gap-5 text-[7px] lg:text-lg mt-5 lg:mt-10 text-black  text-justify">
              Perjuangan yang tak pernah berhenti melanjutkan perjalanan di era pasca Proklamasi Kemerdekaan Republik Indonesia. Pada tanggal 27 September 1952, Badan Wakaf MAYUMI berganti nama menjadi Yayasan Perguruan "CIKINI" dengan akte
              notaris MR. Soewandi, terus berupaya mewujudkan cita-cita luhur bangsa dan perintis untuk berkontribusi dalam mencerdaskan rakyat Indonesia. Bapak Soemadji dan Bapak Moh. Amin memulai kelas percontohan untuk SMP di bawah pohon
              sawo yang terkenal sebagai "kelas Pohon Sawo," dengan murid pertama, Bapak Mohamad Arief Nazir MS (Ipul), dan Ibu Sri Widjajanti Moersadik (Wiwik). SMP I Perguruan "Cikini" diresmikan pada tanggal 15 Agustus 1956, diikuti oleh
              SMP II Perguruan "Cikini" sore hari, yang dibuka pada tanggal 15 Agustus 1957. Peristiwa penting dalam sejarah Perguruan "Cikini" terjadi pada tanggal 30 November 1957, saat perayaan ulang tahun ke-15, yang dikenal sebagai
              "Peristiwa Cikini," yaitu upaya penggranatan terhadap Presiden RI pertama, Ir. Soekarno. Berkat pertolongan Tuhan, Presiden selamat dan tetap sehat. Seiring waktu, Yayasan Perguruan "Cikini" terus berkembang. Setelah didirikan
              TK, SD, SMP I, dan SMP II, pada tanggal 1 September 1959, SMA didirikan dengan Kepala Sekolah Bapak Boediman, menggunakan gedung di Jalan Cikini Raya No. 74 yang sebelumnya dihuni oleh Dr. Theo Ban Hien.
            </div>
          </div>
          <div className="p-5">
            <div className="text-[12px] lg:text-4xl font-bold text-black">ERA KEJAYAAN (1960 - 1995)</div>
            <div className="flex flex-col gap-5 text-[7px] lg:text-lg mt-5 lg:mt-10 text-black  text-justify">
              Pada tahun 1980-an, Yayasan Perguruan "Cikini" mengalami perkembangan pesat, terutama di Jalan Cikini Raya 74-76 Jakarta Pusat. Perguruan "Cikini" atau yang kerap disingkat "Percik" menjadi sekolah swasta di daerah Menteng
              Jakarta Pusat yang sangat diminati oleh pejuang dan tokoh negeri untuk menyekolahkan anak-anak mereka. Baik pimpinan negara, politikus, tokoh militer, pengusaha ternama, maupun rakyat biasa antusias menyekolahkan anaknya di
              Perguruan "Cikini". Seiring bertambahnya murid SMA, pada tahun 1986, SMA berdikari dan pindah lokasi ke Jalan PLN Duren Tiga Jakarta Selatan, dengan tujuan meningkatkan sarana dan prasarana sehingga kualitas dan kuantitas SMA
              dapat terus ditingkatkan. Perguruan "Cikini" terus berkembang dengan bergabungnya ATN (Akademi Teknik Nasional) yang sekarang dikenal sebagai ISTN (Institut Sains & Teknologi Nasional) di Jagakarsa Jakarta Selatan. ISTN telah
              menghasilkan ribuan Sarjana Teknik yang turut berjuang membangun negeri. Dengan jenjang pendidikan mulai dari TK, SD, SMP, SMA, hingga Perguruan Tinggi, Perguruan "Cikini" menjawab kebutuhan pendidikan di era globalisasi. Pada
              tanggal 3 September 1979, STM didirikan di Jakarta Utara, dan pendidikan nonformal dimulai pada tahun 1994 dengan Pendidikan Musik di berbagai cabang di sekitar Jakarta. Yayasan Perguruan "Cikini" memiliki moto "Turut Berbakti
              Membangun Negeri," yang dijalankan secara konsisten, menghasilkan generasi penerus perjuangan bangsa, termasuk pemimpin nasional, politikus ternama, pengusaha nasional, dan tokoh-tokoh lainnya di berbagai bidang kehidupan.
              Banyak alumni yang menjadi tokoh-tokoh nasional, seperti Ibu Megawati Soekarnoputri, Bapak Akbar Tanjung, Bapak Agung Laksono, Bapak Hayono Isman, Bapak Soebronto Laras, dan masih banyak lagi. Dengan demikian, Perguruan
              "Cikini" dapat disebut sebagai "Sekolah Perjuangan."
            </div>
          </div>
          <div className="p-5">
            <div className="text-[12px] lg:text-4xl font-bold text-black">MASA UJIAN BERAT BAGI PERGURUAN “CIKINI” (1996 - 2000)</div>
            <div className="flex flex-col gap-5 text-[7px] lg:text-lg mt-5 lg:mt-10 text-black  text-justify">
              Di tengah pergolakan politik negara dan tekanan dari banyak kebijakan pemerintah terhadap perguruan swasta, pada penghujung tahun 1990-an dan awal abad Milenium pada tahun 2000, Perguruan "Cikini" menghadapi ujian berat.
              Terutama terlihat pada SMA Perguruan "Cikini" di Jalan PLN Duren Tiga, di mana jumlah siswa mengalami penurunan drastis dari 950 siswa menjadi hanya 225 siswa. Penurunan tersebut dapat diatribusikan pada keterlibatan banyak
              mahasiswa ISTN dalam kegiatan politik dan kekerasan, yang berdampak pada kurangnya minat untuk kuliah di ISTN. Fenomena serupa juga terjadi pada tingkatan TK, SD, dan SMP, meskipun penurunan jumlah siswa di tingkatan tersebut
              hanya berkisar 25%, tidak sejauh penurunan pada tingkat SMA dan perguruan tinggi. Perguruan "Cikini," yang telah berjuang selama lebih dari setengah abad dan mencapai puncak kejayaannya, sangat disayangkan mengalami penurunan
              yang tajam dalam waktu kurang dari lima tahun saat memasuki abad ke-21.
            </div>
          </div>
          <div className="p-5">
            <div className="text-[12px] lg:text-4xl font-bold text-black">PENATAAN KEMBALI (2000 - Sekarang)</div>
            <div className="flex flex-col gap-5 text-[7px] lg:text-lg mt-5 lg:mt-10 text-black  text-justify">
              Beberapa faktor yang menyebabkan menurunnya minat masyarakat pada perguruan swasta melibatkan kebijakan dan perhatian pemerintah yang signifikan terhadap bidang pendidikan. Sekolah-sekolah negeri saat ini menawarkan fasilitas
              yang sangat baik dan tanpa biaya, menjadikannya favorit masyarakat. Hal ini menjadi tantangan serius bagi perguruan swasta, bahkan beberapa di antaranya mengalami kesulitan menghadapi perubahan tersebut dan akhirnya gulung
              tikar. Di sisi lain, banyak perguruan swasta baru yang muncul dengan modal kuat, membangun sekolah berfasilitas modern dan berbiaya tinggi, sering kali berorientasi pada model International School yang hanya terjangkau oleh
              masyarakat kalangan atas. Meskipun dihadapkan pada tantangan besar, Perguruan "Cikini" bersyukur masih mampu berkarya dan pantang menyerah, memegang teguh amanah sebagai "Sekolah Perjuangan." Dengan kerja keras, keyakinan, dan
              semangat juang yang tinggi, Perguruan "Cikini" berkomitmen untuk mengembalikan minat masyarakat seperti pada masa kejayaannya, termasuk dengan pendirian Sekolah Menengah Kejuruan (SMK 2) bidang Musik pada tahun 2005 di Jalan
              PLN Duren Tiga, Jakarta Selatan, serta Sekolah Menengah Kejuruan (SMK 3) di Srengseng Sawah. Perguruan "Cikini" terus bertransformasi dari sekolah masa lalu yang tertinggal dalam fasilitas dan prasarana menjadi institusi
              pendidikan yang sesuai dengan perkembangan saat ini, namun tetap mempertahankan identitas sebagai "Sekolah Perjuangan." Ini tercermin dalam kualitas pendidikan dasar dan menengah yang tetap konsisten, terbukti dengan hasil
              ujian nasional yang mencapai 100% kelulusan untuk setiap jenjang pendidikan dalam tiga tahun terakhir. Bahkan, di tingkat SD dan SMP, nilai rata-ratanya melampaui angka 8. Peminatan untuk perguruan tinggi juga mengalami
              kenaikan, terutama pada jurusan Farmasi dan penyelenggaraan kelas karyawan. Oleh karena itu, upaya perbaikan fasilitas pendidikan akan terus diupayakan dengan tekad kuat, demi menjaga dan meningkatkan kualitas pendidikan di
              Perguruan "Cikini" khususnya, serta di seluruh negeri.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Riwayat;
