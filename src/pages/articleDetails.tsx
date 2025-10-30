import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, User, Clock } from "lucide-react";
import { articles } from "../data/articles";
import { useDarkMode } from "../components/DarkModeContext";

const ArticleDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const article = articles.find((art) => art.id === Number(id));
  const { darkMode } = useDarkMode();

  if (!article) {
    return (
      <div
        className={`min-h-screen flex items-center justify-center px-4 transition-colors duration-300 ${
          darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-800"
        }`}
      >
        <div
          className={`text-center p-12 rounded-3xl shadow-xl max-w-md transition-colors duration-300 ${
            darkMode ? "bg-gray-800" : "bg-white"
          }`}
        >
          <div className="text-6xl mb-6">📄</div>
          <h2 className="text-3xl font-bold mb-4">Artikel Tidak Ditemukan</h2>
          <p className="mb-6 opacity-80">
            Artikel yang Anda cari tidak ada atau telah dihapus.
          </p>
          <Link
            to="/articles"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-200 shadow-lg hover:scale-105 bg-blue-600 text-white"
          >
            <ArrowLeft className="w-4 h-4" />
            Kembali ke Artikel
          </Link>
        </div>
      </div>
    );
  }

  const cleanContent = article.content.replace(
    /color:\s*#[0-9a-fA-F]{6};?/g,
    "",
  );

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-gray-200" : "bg-gray-50 text-gray-800"
      }`}
    >
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4">
        <div className="max-w-4xl mx-auto">
          <Link
            to="/articles"
            className={`inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full font-medium transition-all duration-200 hover:scale-105 ${
              darkMode
                ? "bg-blue-900 text-blue-300"
                : "bg-blue-100 text-blue-700"
            }`}
          >
            <ArrowLeft className="w-4 h-4" />
            Kembali
          </Link>

          <div
            className={`rounded-3xl p-8 md:p-12 shadow-2xl transition-all duration-300 ${
              darkMode
                ? "bg-gradient-to-br from-gray-800 to-gray-900"
                : "bg-gradient-to-br from-white to-gray-50"
            }`}
          >
            {/* Category */}
            <div className="mb-6">
              <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold bg-blue-600 text-white">
                {article.category || "Teknologi"}
              </span>
            </div>

            {/* Title */}
            <h1
              className={`text-3xl md:text-5xl font-bold mb-6 leading-tight ${
                darkMode ? "text-gray-100" : "text-gray-800"
              }`}
            >
              {article.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap gap-6 text-sm opacity-80">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>5 min read</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-8 px-4 pb-16">
        <div className="max-w-4xl mx-auto">
          <article
            className={`rounded-3xl p-8 md:p-12 shadow-xl transition-colors duration-300 ${
              darkMode ? "bg-gray-800 text-gray-200" : "bg-white text-gray-800"
            }`}
          >
            <div
              className="article-content leading-relaxed"
              dangerouslySetInnerHTML={{ __html: cleanContent }}
            />

            <div
              className={`mt-12 pt-8 flex flex-wrap gap-4 border-t ${
                darkMode ? "border-gray-700" : "border-gray-200"
              }`}
            >
              <Link
                to="/articles"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-200 shadow-lg hover:scale-105 bg-blue-600 text-white"
              >
                <ArrowLeft className="w-4 h-4" />
                Lihat Artikel Lainnya
              </Link>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default ArticleDetails;
