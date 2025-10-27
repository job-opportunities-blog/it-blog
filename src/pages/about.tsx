import React from "react";

const About: React.FC = () => {
  return (
    <>
      <section className="bg-blue-50 py-20 mt-20">
        <header className="max-w-6xl mx-auto text-gray-800 text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-3 tracking-tigh">
            Tentang <span className="text-blue-600">Blog Peluang Karier IT</span>
          </h1>
          <p className="mt-2 text-lg opacity-90">
            Sumber Anda untuk melihat apa saja peluang kerja di bidang TI.
          </p>
        </header>
      </section>

      <section className="py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <p className="text-gray-600 leading-relaxed mb-4">
            Dunia teknologi terus berkembang pesat, dan bersama dengan itu,
            muncul pula berbagai peluang karier baru untuk para lulusan IT, Bloh
            ini hadir untuk membantu kamu memahami arah dunia kerja digital —
            mulai dari peran tradisional seperti{" "}
            <span className="font-semibold text-gray-700">Web Developer</span>{" "}
            dan{" "}
            <span className="font-semibold text-gray-700">
              Network Engineer
            </span>
            , hingga bidang yang sedang naik daun seperti{" "}
            <span className="font-semibold text-gray-700">Data Analyst</span>{" "}
            dan{" "}
            <span className="font-semibold text-gray-700">Cybersecurity</span>.
          </p>

          <p className="text-gray-600 leading-relaxed mb-4">
            Kami percaya bahwa setiap lulusan IT memiliki potensi besar untuk
            berkembang — asal dibekali dengan wawasan yang tepat tentang dunia
            kerja dan tren teknologi terkini. Karena itu, blog ini berfokus pada
            artikel-artikel ringan namun informatif tentang{" "}
            <span className="italic">
              peluang kerja, skill yang dibutuhkan,
            </span>{" "}
            dan <span className="italic">arah perkembangan industri IT</span>.
          </p>

          <p className="text-gray-600 leading-relaxed mb-4">
            Setiap konten yang kami tulis dirancang agar mudah dipahami oleh
            mahasiswa, fresh graduate, maupun profesional muda yang sedang
            mencari arah karier. Di sini, kamu bisa menemukan insight seputar
            dunia{" "}
            <span className="font-semibold text-gray-700">
              frontend dan backend development, keamanan jaringan, analisis
              data, hngga cybersecurity
            </span>
            .
          </p>
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-x-6 pt-2 pb-12 px-4 bg-blue-50 max-w-6xl mx-auto">
        <div className="max-w-6xl mx-auto bg-white mt-10 p-6 rounded-2xl shadow-[0_15px_20px_rgba(59,130,246,0.25)]">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-700 text-center pt-2 pb-2">
              Tujuan Blog Ini Dibuat
          </h2>
          <hr className="py-2 text-gray-400"></hr>
          <ul className="list-disc list-inside text-gray-600 leading-relaxed px-3 pb-3">
            <li>
              Membantu lulusan IT memahami berbagai jalur karier yang tersedia di
              dunia teknologi.
            </li>
            <li>
              Menyajikan artikel informatif tentang tren indstri dan skill yang
              sedang dibutuhkan.
            </li>
            <li>
              Memberikan inspirasi agar pembaca terus belajar dan mengasah
              kemampuan digitalnya.
            </li>
            <li>
              Menjadi sumber referensi bagi mahasiswa dan profesional muda yang
              ingin meniti karier di bidang IT.
            </li>
          </ul>
        </div>

        <div className="max-w-6xl mx-auto px-8 bg-blue-600 mt-10 p-6 rounded-2xl shadow-[0_15px_20px_rgba(59,130,246,0.25)]">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center pt-2 pb-2">
            Kenapa Blog Ini Dibuat?
          </h2>
          <hr className="py-2 text-white" />
          <p className="text-white leading-relaxed pb-3">
            Banyak lulusan IT yang memiliki kemampuan teknis, tapi belum tah harus
            mulai dari mana dalam meniti karier. Melalui blog ini, kami ingin
            memberikan arah dan motivasi agar kamu bisa menemukan bidang yang
            paling sesuai dengan passion dan potensimu di dunia teknologi. Karena
            karier di IT bukan hanya tentang kode — tapi tentang bagaimana kamu
            bisa menciptakan solusi yang bermanfaat bagi banyak orang.
          </p>
        </div>
      </section>

      <section className="bg-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-gray-600 leading-relaxed mb-4">
            Melalui blog ini, kami berharap dapat menjadi teman belajar dan sumber inspirasi bagi siapa pun yang tertarik meniti karier di dunia teknologi informasi. Setiap artikel yang kami tulis merupakan langkah kecil untuk membantu kamu memahami arah perkembangan industri IT, mengenali peluang yang ada, dan menyiapkan diri menghadapi tantangan masa depan. Mari tumbuh bersama, berbagi wawasan, dan membangun ekosistem digital yang semakin kuat di Indonesia.
          </p>

          <p className="text-gray-600 leading-relaxed pb-4">
            Kami percaya bahwa kesuksesan di dunia IT berawal dari informasi yang tepat dan kemauan untuk terus belajar. Melalui blog ini, kami berkomitmen menghadirkan berbagai wawasan, tips, serta peluang karier yang relevan dengan perkembangan industri teknologi. Tetap ikuti kami untuk mendapatkan update terbaru dan jadilah bagian dari generasi profesional IT yang siap bersaing di era digital.
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
