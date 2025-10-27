import React from "react";
import { Link } from "react-router-dom";
import Image from "./image";

const HeroSection: React.FC = () => {
  return (
    <>
      <section className="relative h-[400px] md:h-[550px] lg:h-[650px] overflow-hidden">
        <Image
          name="programer-job"
          alt="programmer"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
            Blog Peluang Karier IT
          </h1>
          <p className="text-base md:text-lg mb-6">
            Sumber Anda untuk melihat apa saja peluang kerja di bidang TI.
          </p>
          <Link
            to="/articles"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium transition-colors duration-200"
          >
            Explore Articles
          </Link>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
