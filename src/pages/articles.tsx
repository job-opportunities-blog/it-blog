import React from "react";
import ArticleCard from "../components/articlesCard";
import { articles } from "../data/articles";

const Article: React.FC = () => {
  return (
    <>
      <section className="mx-auto pt-20">
        <header className="bg-blue-600 text-gray-800 text-center py-20">
          <div className="text-center mb-6">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Jelajahi Artikel Populer & Terbaru
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Jelajahi koleksi artikel kami tentang berbagai topik IT, termasuk
              pemrograman, pengembangan web, keamanan siber, dan banyak lagi.
            </p>
          </div>
        </header>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2">
          <div className="md:col-span-2">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">
              Artikel Unggulan
            </h1>
            <p className="text-gray-600 mb-10">
              Berikut merupakan artikel unggulan kami tentang berbagai topik
              seputar IT, mulai dari pemrograman, pengembangan aplikasi website
              atau mobile, keamanan siber, dan masih banyak lagi.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              {articles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Article;
