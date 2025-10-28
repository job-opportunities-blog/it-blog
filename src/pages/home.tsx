import React from "react";
import HeroSection from "../components/heroSection";
import ArticleCard from "../components/articlesCard";
import { articles } from "../data/articles";

const Home: React.FC = () => {
  return (
    <>
      <HeroSection />
      <section className="py-16 px-4 bg-white shadow-[0_-2px_8px_rgba(243,244,246,1)]">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
            Artikel Terbaru
          </h1>
          <div className="grid md:grid-cols-2 gap-8">
            {articles.slice(0, 4).map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
