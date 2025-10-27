import React from "react";
import Image from "../components/image";
import { Link } from "react-router-dom";

const Contact: React.FC = () => {
  return (
    <>
      <section className="py-16 mt-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            Hubungi Kami
          </h1>
          <p className="text-gray-600 leading-relaxed mb-8">
            Kami senang menerima pertanyaan, masukan, atau kerja sama terkait
            pengembangan karier di dunia IT. Tim kami siap membantu memberikan
            informasi yang relevan seputar bidang teknologi, desain, dan
            analisis data.
          </p>

          <div className="space-y-6 text-gray-600">
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Alamat
              </h2>
              <p>Dukuhwaru, Tegal, Jawa Tengah, Indonesia</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Email
              </h2>
              <p>
                <Link
                  to="mailto:ariyanandryan@gmail.com"
                  className="text-blue-600 hover:underline hover:text-blue-700 transition-colors duration-200"
                >
                  ariyanandryan@gmail.com
                </Link>
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Media Sosial
              </h2>
              <div className="flex gap-2 pt-2 pb-4">
                <Image
                  name="linkedin"
                  className="w-6 h-6 opacity-90 hover:opacity-100 transition-opacity duration-200"
                />
                <Image
                  name="instagram"
                  className="w-6 h-6 opacity-90 hover:opacity-100 transition-opacity duration-200"
                />
                <Image
                  name="facebook"
                  className="w-6 h-6 opacity-90 hover:opacity-100 transition-opacity duration-200"
                />
              </div>
              <div className="border-l-2 border-blue-600 pl-4">
                <ul className="leading-relaxed space-y-1">
                  <li className="md:flex space-x-2">
                    <Link
                      to="https://www.linkedin.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-600 hover:underline hover:text-blue-700 transition-colors duration-200"
                    >
                      LinkedIn – Karier IT Indonesia
                    </Link>
                  </li>
                  <li className="md:flex space-x-2">
                    <Link
                      to="https://www.instagram.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-600 hover:underline hover:text-blue-700 transition-colors duration-200"
                    >
                      Instagram – @karierit.id
                    </Link>
                  </li>
                  <li className="md:flex space-x-2">
                    <Link
                      to="https://facebook.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-600 hover:underline hover:text-blue-700 transition-colors duration-200"
                    >
                      Facebook – Peluang Karier IT
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <p className="mt-12 text-sm text-gray-600">
            Terima kasih telah mengunjungi{" "}
            <span className="font-medium">Karier IT</span>. Mari bersama
            membangun masa depan digital yang lebih baik!
          </p>
        </div>
      </section>
    </>
  );
};

export default Contact;
