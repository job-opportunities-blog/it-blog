import React from "react";
import Image from "../components/image";

const Contact: React.FC = () => {
  return (
    <>
      <section className="py-16 px-4 bg-white">
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
                <a
                  href="mailto:info@karierit.id"
                  className="text-blue-600 hover:underline hover:text-blue-700 transition-colors duration-200"
                >
                  info@karierit.id
                </a>
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Media Sosial
              </h2>
              <ul className="space-y-1 leading-relaxed">
                <li className="md:flex space-x-2">
                  <a
                    href="https://www.linkedin.com/company/karierit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-600 hover:underline hover:text-blue-700 transition-colors duration-200"
                  >
                    <Image
                      name="linkedin"
                      className="w-6 h-6 opacity-90 hover:opacity-100 transition-opacity duration-200"
                    />
                    LinkedIn – Karier IT Indonesia
                  </a>
                </li>
                <li className="md:flex space-x-2">
                  <a
                    href="https://www.instagram.com/karierit.id"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-600 hover:underline hover:text-blue-700 transition-colors duration-200"
                  >
                    <Image
                      name="instagram"
                      className="w-6 h-6 opacity-90 hover:opacity-100 transition-opacity duration-200"
                    />
                    Instagram – @karierit.id
                  </a>
                </li>
                <li className="md:flex space-x-2">
                  <a
                    href="https://twitter.com/karierit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-600 hover:underline hover:text-blue-700 transition-colors duration-200"
                  >
                    <Image
                      name="facebook"
                      className="w-6 h-6 opacity-90 hover:opacity-100 transition-opacity duration-200"
                    />
                    Facebook – Peluang Karier IT
                  </a>
                </li>
              </ul>
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
