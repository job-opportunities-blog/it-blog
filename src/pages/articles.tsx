import React, { useState } from "react";
import { Search, Filter } from "lucide-react";
import ArticleCard from "../components/articlesCard";
import { articles } from "../data/articles";
import { useDarkMode } from "../components/DarkModeContext";

const Article: React.FC = () => {
  const { darkMode } = useDarkMode();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredArticles = articles.filter((article) =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? "bg-gray-900" : "bg-white"
      }`}
    >
      {/* Hero Section */}
      <section className="pt-20">
        <header
          className={`text-center py-20 px-4 transition-all duration-300 ${
            darkMode
              ? "bg-gradient-to-br from-blue-900 to-blue-800"
              : "bg-gradient-to-br from-blue-600 to-blue-500"
          }`}
        >
          <div className="max-w-4xl mx-auto">
            <div
              className={`inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-6 transition-colors duration-300 ${
                darkMode ? "bg-white/10 text-white" : "bg-white/20 text-white"
              }`}
            >
              📚 Pusat Pengetahuan
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Jelajahi Artikel Populer & Terbaru
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
              Jelajahi koleksi artikel kami tentang berbagai topik IT, termasuk
              pemrograman, pengembangan web, keamanan siber, dan banyak lagi.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mt-8">
              <div className="relative">
                <Search
                  className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                />
                <input
                  type="text"
                  placeholder="Cari artikel..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className={`w-full pl-12 pr-4 py-4 rounded-full shadow-lg focus:outline-none focus:ring-4 transition-all duration-300 ${
                    darkMode
                      ? "bg-gray-800 text-gray-100 border-2 border-gray-700"
                      : "bg-white text-gray-900 border-2 border-gray-200"
                  }`}
                />
              </div>
            </div>
          </div>
        </header>
      </section>

      {/* Articles Section */}
      <section
        className={`py-16 px-4 transition-colors duration-300 ${
          darkMode ? "bg-gray-900" : "bg-gray-50"
        }`}
      >
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="mb-12">
            <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
              <div>
                <h2
                  className={`text-4xl font-bold mb-3 transition-colors duration-300 ${
                    darkMode ? "text-gray-100" : "text-gray-900"
                  }`}
                >
                  Artikel Unggulan
                </h2>
                <div
                  className={`h-1 w-20 rounded-full ${
                    darkMode ? "bg-blue-500" : "bg-blue-600"
                  }`}
                />
              </div>
              <div
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors duration-300 ${
                  darkMode
                    ? "bg-gray-800 border border-gray-700"
                    : "bg-white border border-gray-200"
                }`}
              >
                <Filter
                  className={`w-4 h-4 ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                />
                <span
                  className={`text-sm font-medium transition-colors duration-300 ${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  {filteredArticles.length} Artikel
                </span>
              </div>
            </div>

            <p
              className={`text-lg transition-colors duration-300 ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Berikut merupakan artikel unggulan kami tentang berbagai topik
              seputar IT, mulai dari pemrograman, pengembangan aplikasi website
              atau mobile, keamanan siber, dan masih banyak lagi.
            </p>
          </div>

          {/* Articles Grid */}
          {filteredArticles.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-8">
              {filteredArticles.map((article) => (
                <ArticleCard
                  key={article.id}
                  article={article}
                  darkMode={darkMode}
                />
              ))}
            </div>
          ) : (
            <div
              className={`text-center py-16 rounded-3xl transition-colors duration-300 ${
                darkMode ? "bg-gray-800" : "bg-white"
              }`}
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3
                className={`text-2xl font-bold mb-2 transition-colors duration-300 ${
                  darkMode ? "text-gray-100" : "text-gray-800"
                }`}
              >
                Artikel Tidak Ditemukan
              </h3>
              <p
                className={`transition-colors duration-300 ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Coba kata kunci yang berbeda
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section
        className={`py-16 px-4 transition-colors duration-300 ${
          darkMode ? "bg-gray-800" : "bg-white"
        }`}
      >
        <div className="max-w-4xl mx-auto text-center">
          <div
            className={`rounded-3xl p-12 shadow-2xl transition-all duration-300 ${
              darkMode
                ? "bg-gradient-to-br from-blue-900 to-blue-800"
                : "bg-gradient-to-br from-blue-600 to-blue-500"
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ingin Tahu Lebih Banyak?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Dapatkan update artikel terbaru dan tips seputar dunia IT langsung
              ke email Anda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Email Anda"
                className={`w-full px-6 py-3 rounded-full focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-300 ${
                  darkMode
                    ? "bg-gray-800 text-gray-100"
                    : "bg-white text-gray-900"
                }`}
              />
              <button
                className={`px-8 py-3 rounded-full font-semibold whitespace-nowrap transition-all duration-300 hover:scale-105 shadow-lg bg-white ${
                  darkMode ? "text-blue-800" : "text-blue-600"
                }`}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Article;
