import React from "react";
import { useDarkMode } from "../components/DarkModeContext";

const About: React.FC = () => {
  const { darkMode } = useDarkMode();

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-gray-100" : "bg-white text-gray-800"
      }`}
    >
      {/* Hero Section */}
      <section
        className={`py-20 mt-20 bg-gradient-to-br transition-colors duration-300 ${
          darkMode ? "from-gray-900 to-blue-900" : "from-blue-50 to-indigo-100"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div
            className={`inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-6 transition-colors duration-300 ${
              darkMode
                ? "bg-blue-900 text-blue-300"
                : "bg-blue-100 text-blue-700"
            }`}
          >
            💡 Tentang Kami
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Jelajahi{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
              Peluang Karier IT
            </span>
          </h1>
          <p
            className={`text-xl max-w-3xl mx-auto leading-relaxed ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Sumber terpercaya untuk menemukan dan memahami berbagai peluang
            kerja di bidang teknologi informasi yang terus berkembang.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section
        className={`py-16 px-4 transition-colors duration-300 ${
          darkMode ? "bg-gray-900" : "bg-white"
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <div
            className={`rounded-2xl shadow-lg p-8 md:p-12 border transition-colors duration-300 ${
              darkMode
                ? "bg-gray-800 border-gray-700"
                : "bg-white border-gray-100"
            }`}
          >
            <div className="grid md:grid-cols-2 gap-8 items-start">
              {/* Kiri */}
              <div>
                <h2
                  className={`text-2xl md:text-3xl font-bold mb-6 ${
                    darkMode ? "text-gray-100" : "text-gray-900"
                  }`}
                >
                  Mengapa Dunia IT Menarik?
                </h2>
                <p
                  className={`leading-relaxed mb-6 ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  Dunia teknologi terus berkembang pesat, dan bersama dengan
                  itu, muncul pula berbagai peluang karier baru untuk para
                  lulusan IT. Blog ini hadir untuk membantu kamu memahami arah
                  dunia kerja digital.
                </p>

                <div className="space-y-4">
                  {[
                    "Web Developer & Network Engineer",
                    "Data Analyst & Cybersecurity",
                    "AI Engineer & Cloud Specialist",
                    "Mobile Developer & DevOps",
                  ].map((role, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div
                        className={`w-2 h-2 rounded-full ${
                          darkMode ? "bg-blue-500" : "bg-blue-700"
                        }`}
                      ></div>
                      <span
                        className={`font-medium ${
                          darkMode ? "text-gray-200" : "text-gray-700"
                        }`}
                      >
                        {role}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Kanan */}
              <div
                className={`rounded-xl p-6 border transition-colors duration-300 ${
                  darkMode
                    ? "bg-blue-900/20 border-blue-800"
                    : "bg-blue-50 border-blue-200"
                }`}
              >
                <h3
                  className={`text-xl font-bold mb-4 ${
                    darkMode ? "text-gray-100" : "text-gray-900"
                  }`}
                >
                  Tren Terkini
                </h3>
                <p
                  className={`mb-4 ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  Dari peran tradisional hingga bidang yang sedang naik daun,
                  kami membahas semua yang perlu kamu ketahui.
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Cloud Computing",
                    "AI/ML",
                    "Cybersecurity",
                    "Data Science",
                    "IoT",
                  ].map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-sm rounded-full font-medium bg-blue-600 text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section
        className={`py-16 px-4 transition-colors duration-300 ${
          darkMode ? "bg-gray-800" : "bg-gray-50"
        }`}
      >
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
          {/* Tujuan */}
          <div
            className={`group rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border ${
              darkMode
                ? "bg-gray-900 border-gray-700"
                : "bg-white border-gray-100"
            }`}
          >
            <div
              className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ${
                darkMode ? "bg-blue-500" : "bg-blue-700"
              }`}
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Tujuan Blog Ini
            </h2>
            <div className="space-y-4">
              {[
                "Membantu lulusan IT memahami berbagai jalur karier yang tersedia",
                "Menyajikan artikel informatif tentang tren industri dan skill yang dibutuhkan",
                "Memberikan inspirasi untuk terus belajar dan mengasah kemampuan digital",
                "Menjadi referensi bagi mahasiswa dan profesional muda",
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div
                    className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                      darkMode ? "bg-emerald-500" : "bg-emerald-600"
                    }`}
                  ></div>
                  <p
                    className={`leading-relaxed ${
                      darkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Kenapa Dibuat */}
          <div
            className={`group rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 text-white bg-gradient-to-br ${
              darkMode
                ? "from-blue-900 to-indigo-900"
                : "from-blue-600 to-indigo-600"
            }`}
          >
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Kenapa Blog Ini Dibuat?
            </h2>
            <p className="leading-relaxed mb-6 text-blue-200">
              Banyak lulusan IT yang memiliki kemampuan teknis, tapi belum tahu
              harus mulai dari mana dalam meniti karier. Melalui blog ini, kami
              ingin memberikan arah dan motivasi.
            </p>
            <div className="rounded-lg p-4 bg-white/10">
              <p className="italic text-blue-200">
                "Karier di IT bukan hanya tentang kode — tapi tentang bagaimana
                kamu bisa menciptakan solusi yang bermanfaat bagi banyak orang."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section
        className={`py-16 px-4 transition-colors duration-300 ${
          darkMode ? "bg-gray-900" : "bg-white"
        }`}
      ></section>
    </div>
  );
};

export default About;
