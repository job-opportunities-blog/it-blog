import React from "react";
import Image from "../components/image";
import { Link } from "react-router-dom";

const Contact: React.FC = () => {
  return (
    <>
      <section className="py-20 mt-16 bg-white px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Bagian kiri: Info Kontak */}
          <div>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Hubungi Kami
            </h1>
            <p className="text-gray-600 leading-relaxed mb-8">
              Kami senang menerima pertanyaan, masukan, atau kerja sama terkait
              pengembangan karier di dunia IT. Tim kami siap membantu memberikan
              informasi yang relevan seputar bidang teknologi, desain, dan
              analisis data.
            </p>

            <div className="space-y-8">
              {/* Alamat */}
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  Alamat
                </h2>
                <p className="text-gray-700">
                  Jl. Raya Barat Dukuhwaru, Jatibarang-Slawi Km. 7, Kab. Tegal, Jawa Tengah 52451
                </p>
              </div>

              {/* Email */}
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  Email
                </h2>
                <Link
                  to="mailto:info@pbjt.ac.id"
                  className="text-blue-600 hover:underline hover:text-blue-700 transition-colors"
                >
                  info@pbjt.ac.id
                </Link>
              </div>

              {/* Media Sosial */}
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  Media Sosial
                </h2>

                <div className="flex items-center gap-4 mb-4">
                  <Image
                    name="linkedin"
                    className="w-7 h-7 opacity-100 hover:opacity-60 transition-opacity duration-200"
                  />
                  <Image
                    name="instagram"
                    className="w-7 h-7 opacity-100 hover:opacity-60 transition-opacity duration-200"
                  />
                  <Image
                    name="facebook"
                    className="w-7 h-7 opacity-100 hover:opacity-60 transition-opacity duration-200"
                  />
                </div>

                <div className="border-l-3 border-blue-500 pl-4 bg-blue-50/40 py-2">
                  <ul className="space-y-2 text-gray-700">
                    <li>
                      <Link
                        to="https://www.linkedin.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-600 transition-colors"
                      >
                        LinkedIn – Politeknik Baja Tegal
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="https://www.instagram.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-700 transition-colors"
                      >
                        Instagram – @poltekbajategal
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="https://facebook.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-700 transition-colors"
                      >
                        Facebook – Politeknik Baja Tegal
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <p className="mt-12 text-sm text-gray-600">
              Terima kasih telah mengunjungi{" "}
              <span className="font-medium text-gray-800">Karier IT</span>. Mari
              bersama membangun masa depan digital yang lebih baik!
            </p>

            <div>
              <ul className="flex items-center mt-6 space-x-2">
                <li>
                  <Image name="pbjt" className="w-16" />
                </li>
                <li>
                  <Image name="kampus-vokasi" className="w-24" />
                </li>
                <li>
                  <Image name="banpt" className="w-12" />
                </li>
                <li>
                  <Image name="informatika" className="w-16" />
                </li>
              </ul>
            </div>
          </div>

          {/* Bagian kanan: ilustrasi atau gambar */}
          <div className="flex justify-center">
            <Image
              name="/contact"
              alt="Contact illustration"
              className="w-full max-w-md"
            />
          </div>
        </div>

        {/* Tambahan: Google Maps Embed */}
        <div className="mt-12 rounded-lg overflow-hidden shadow-md max-w-5xl mx-auto border border-gray-600">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.3384921906913!2d109.09088537588181!3d-6.96933459303129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6fbea052a6d491%3A0x52531df16443a7f!2sPOLITEKNIK%20BAJA%20TEGAL!5e0!3m2!1sid!2sid!4v1761622045260!5m2!1sid!2sid" className="w-full h-[50vh]"></iframe>
        </div>
      </section>
    </>
  );
};

export default Contact;
