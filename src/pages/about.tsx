import React from "react";

const About: React.FC = () => {
  return (
    <>
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <header className="bg-gradient-to-r from-gray-100 to-gray-300 text-gray-800 text-center py-16 mb-8">
            <h1 className="text-4xl font-bold">
              Tentang Blog Peluang Karier IT
            </h1>
            <p className="mt-2 text-lg opacity-90">
              Sumber Anda untuk melihat apa saja peluang kerja di bidang TI.
            </p>
          </header>

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
            artikel=artikel ringan namun informatif tentang{" "}
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

          <h2 className="text-2xl font-semibold text-gray-700 mt-10 mb-3">
            Tujuan Kami
          </h2>
          <ul className="list-disc list-inside text-gray-600 leading-relaxed space-y-2 pl-3">
            <li>
              Membantu lulusan IT memahami berbagai jalur karier yang tersedia
              di dunia teknologi.
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

          <h2 className="text-2xl font-semibold text-gray-700 mt-10 mb-3">
            Kenapa Blog Ini Dibuat?
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Banyak lulusan IT yang memiliki kemampuan teknis, tapi belum tah
            harus mulai dari mana dalam meniti karier. Melalui blog ini, kami
            ingin memberikan arah dan motivasi agar kamu bisa menemukan bidang
            yang paling sesuai dengan passion dan potensimu di dunia teknologi.
            Karena karier di IT bukan hanya tentang kode — tapi tentang
            bagaimana kamu bisa menciptakan solusi yang bermanfaat bagi banyak
            orang.
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
