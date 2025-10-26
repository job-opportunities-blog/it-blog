import React from "react";
import ArticleCard from "../components/articlesCard";
import { articles } from "../data/articles";

const Article: React.FC = () => {
  return (
    <>
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3">
          <div className="md:col-span-3">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">Articles</h1>
            <p className="text-gray-600 mb-10">
              Explore our collection of articles on various IT topics, including
              programming, web development, cybersecurity, and more.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
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
