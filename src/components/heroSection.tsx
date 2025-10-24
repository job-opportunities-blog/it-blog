import React from "react";

const HeroSection: React.FC = () => {
  return (
    <>
      <section className="bg-gray-100 py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Welcome to the IT Blog
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            Your source for the latest in technology, programming, and IT
            trends.
          </p>
          <a
            href="/articles"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-blue-700 transition"
          >
            Explore Articles
          </a>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
