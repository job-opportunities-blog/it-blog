import React from "react";
import { Link } from "react-router-dom";
import Image from "../components/image";
import { Mail, MapPin, Send } from "lucide-react";
import { useDarkMode } from "../components/DarkModeContext";

const Contact: React.FC = () => {
  const { darkMode } = useDarkMode();

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${darkMode ? "bg-gray-900" : "bg-gray-50"}`}
    >
      {/* Hero Section */}
      <section className="pt-20 pb-12 px-4 mt-20">
        <div className="max-w-6xl mx-auto text-center">
          <div
            className={`
          inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-6 
          transition-colors duration-300 
          ${darkMode ? "bg-blue-900 text-blue-300" : "bg-blue-100 text-blue-700"}
        `}
          >
            📬 Hubungi Kami
          </div>
          <h1
            className={`
          text-4xl md:text-5xl font-bold mb-6 
          transition-colors duration-300 
          ${darkMode ? "text-gray-100" : "text-gray-800"}
        `}
          >
            Mari{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
              Terhubung
            </span>
          </h1>
          <p
            className={`
          text-xl max-w-2xl mx-auto leading-relaxed 
          transition-colors duration-300 
          ${darkMode ? "text-gray-300" : "text-gray-600"}
        `}
          >
            Kami senang menerima pertanyaan, masukan, atau kerja sama terkait
            pengembangan karier di dunia IT.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            {/* Address Card */}
            <div
              className={`
            rounded-2xl p-6 shadow-lg border 
            transition-all duration-300 hover:shadow-xl 
            ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"}
          `}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`
                w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 
                transition-colors duration-300 
                ${darkMode ? "bg-blue-500" : "bg-blue-600"}
              `}
                >
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2
                    className={`text-xl font-bold mb-2 ${darkMode ? "text-gray-100" : "text-gray-800"}`}
                  >
                    Alamat Kami
                  </h2>
                  <p
                    className={`${darkMode ? "text-gray-300" : "text-gray-600"} leading-relaxed`}
                  >
                    Jl. Raya Barat Dukuhwaru, Jatibarang-Slawi Km. 7, Kab.
                    Tegal, Jawa Tengah 52451
                  </p>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div
              className={`
            rounded-2xl p-6 shadow-lg border transition-all duration-300 hover:shadow-xl 
            ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"}
          `}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`
                w-12 h-12 rounded-lg flex items-center justify-center
                transition-colors duration-300 
                ${darkMode ? "bg-blue-500" : "bg-blue-600"}
              `}
                >
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2
                    className={`text-xl font-bold mb-2 ${darkMode ? "text-gray-100" : "text-gray-800"}`}
                  >
                    Email
                  </h2>
                  <Link
                    to="mailto:info@pbjt.ac.id"
                    className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
                  >
                    info@pbjt.ac.id
                  </Link>
                </div>
              </div>
            </div>

            {/* Social Media Card */}
            <div
              className={`
            rounded-2xl p-6 shadow-lg border transition-all duration-300 hover:shadow-xl 
            ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"}
          `}
            >
              <h2
                className={`text-xl font-bold mb-4 ${darkMode ? "text-gray-100" : "text-gray-800"}`}
              >
                Media Sosial
              </h2>

              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center transition-colors cursor-pointer">
                  <Image
                    name="linkedin"
                    className="w-5 h-5 brightness-0 invert"
                  />
                </div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 flex items-center justify-center transition-colors cursor-pointer">
                  <Image
                    name="instagram"
                    className="w-5 h-5 brightness-0 invert"
                  />
                </div>
                <div className="w-10 h-10 rounded-full bg-blue-500 hover:bg-blue-600 flex items-center justify-center transition-colors cursor-pointer">
                  <Image
                    name="facebook"
                    className="w-5 h-5 brightness-0 invert"
                  />
                </div>
              </div>

              <div
                className={`
              rounded-lg p-4 border-l-4 
              ${darkMode ? "bg-blue-900/20 border-blue-500" : "bg-blue-50 border-blue-600"}
            `}
              >
                <ul className="space-y-3">
                  {[
                    {
                      name: "LinkedIn – Politeknik Baja Tegal",
                      href: "https://www.linkedin.com/",
                    },
                    {
                      name: "Instagram – @poltekbajategal",
                      href: "https://www.instagram.com/",
                    },
                    {
                      name: "Facebook – Politeknik Baja Tegal",
                      href: "https://facebook.com/",
                    },
                  ].map((social, idx) => (
                    <li key={idx}>
                      <Link
                        to={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-2 hover:text-blue-600 transition-colors ${
                          darkMode ? "text-gray-300" : "text-gray-700"
                        }`}
                      >
                        <Send className="w-4 h-4" />
                        {social.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Partner & Akreditasi */}
            <div
              className={`
            rounded-2xl p-6 shadow-lg border transition-all duration-300 hover:shadow-xl 
            ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"}
          `}
            >
              <h3
                className={`text-xl font-bold mb-6 text-center ${darkMode ? "text-gray-100" : "text-gray-800"}`}
              >
                Partner & Akreditasi
              </h3>

              <div className="max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-4 space-x-2 md:gap-x-4 lg:gap-x-2 gap-y-10 place-items-center pb-10">
                <Image
                  name="pbjt"
                  className="w-32 md:w-16 lg:w-20 opacity-80 hover:opacity-100 transition-opacity"
                />
                <Image
                  name="kampus-vokasi"
                  className="w-34 md:w-20 lg:w-24 opacity-80 hover:opacity-100 transition-opacity"
                />
                <Image
                  name="banpt"
                  className="w-28 md:w-16 lg:w-20 opacity-80 hover:opacity-100 transition-opacity"
                />
                <Image
                  name="informatika"
                  className="w-32 md:w-16 lg:w-20 opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>
            </div>
          </div>

          {/* Illustration */}
          <div className="flex justify-center items-start">
            <div
              className={`
            rounded-3xl p-8 shadow-2xl border transition-all duration-300 
            ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"}
          `}
            >
              <Image
                name="/contact"
                alt="Contact illustration"
                className="w-full max-w-md mx-auto"
              />
              <div className="mt-6 text-center">
                <p
                  className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}
                >
                  Terima kasih telah mengunjungi{" "}
                  <span
                    className={`font-semibold ${darkMode ? "text-gray-100" : "text-gray-800"}`}
                  >
                    Karier IT
                  </span>
                  . Mari bersama membangun masa depan digital yang lebih baik!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2
            className={`text-3xl font-bold mb-8 text-center ${darkMode ? "text-gray-100" : "text-gray-800"}`}
          >
            Lokasi Kami
          </h2>
          <div
            className={`
          rounded-3xl overflow-hidden shadow-2xl border 
          ${darkMode ? "border-gray-700" : "border-gray-200"}
        `}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.3384921906913!2d109.09088537588181!3d-6.96933459303129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6fbea052a6d491%3A0x52531df16443a7f!2sPOLITEKNIK%20BAJA%20TEGAL!5e0!3m2!1sid!2sid!4v1761622045260!5m2!1sid!2sid"
              className="w-full h-[450px]"
              loading="lazy"
              title="Lokasi Politeknik Baja Tegal"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className={`py-16 px-4 transition-colors duration-300 ${darkMode ? "bg-gray-800" : "bg-white"}`}
      >
        <div className="max-w-4xl mx-auto text-center">
          <div
            className={`
          rounded-3xl p-12 shadow-2xl transition-all duration-300 
          bg-gradient-to-br 
          ${darkMode ? "from-blue-800 to-indigo-800" : "from-blue-600 to-indigo-600"}
        `}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Siap Memulai Perjalanan?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Jelajahi peluang karier IT dan bergabunglah dengan komunitas kami
            </p>
            <Link
              to="/articles"
              className={`
            inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold 
            transition-all duration-300 hover:scale-105 shadow-lg bg-white 
            ${darkMode ? "text-blue-800" : "text-blue-600"}
          `}
            >
              Lihat Artikel
              <Send className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
