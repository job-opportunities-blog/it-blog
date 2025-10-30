import React from "react";
import HeroSection from "../components/heroSection";
import ArticleCard from "../components/articlesCard";
import { articles } from "../data/articles";
import { useDarkMode } from "../components/DarkModeContext";

const Home: React.FC = () => {
  const { darkMode } = useDarkMode();

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? "bg-gray-900" : "bg-white"
      }`}
    >
      <HeroSection />

      <section
        className={`py-16 px-4 transition-colors duration-300 ${
          darkMode
            ? "bg-gray-900 shadow-[0_-2px_8px_rgba(17,24,39,0.5)]"
            : "bg-white shadow-[0_-2px_8px_rgba(243,244,246,1)]"
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <h1
            className={`text-4xl font-bold mb-8 text-center transition-colors duration-300 ${
              darkMode ? "text-gray-100" : "text-gray-800"
            }`}
          >
            Artikel Terbaru
          </h1>

          <div className="grid md:grid-cols-2 gap-8">
            {articles.slice(0, 4).map((article) => (
              <ArticleCard
                key={article.id}
                article={article}
                darkMode={darkMode}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
