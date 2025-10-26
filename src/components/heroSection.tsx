import React from "react";
import { Link } from "react-router-dom";

const HeroSection: React.FC = () => {
  return (
    <>
      <section className="bg-gradient-to-r from-gray-100 to-gray-300 text-gray-800 py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Blog Peluang Karier IT
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            Sumber Anda untuk melihat apa saja peluang kerja di bidang TI.
          </p>
          <Link
            to="/articles"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-blue-700 transition"
          >
            Explore Articles
          </Link>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
