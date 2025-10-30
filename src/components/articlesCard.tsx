import React from "react";
import { Link } from "react-router-dom";
import { Calendar, User, ArrowRight, Clock } from "lucide-react";

interface ArticleCardProps {
  article: {
    id: number;
    title: string;
    summary: string;
    author: string;
    date: string;
    category: string;
  };
  darkMode?: boolean;
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  article: { id, title, summary, author, date, category },
  darkMode = false,
}) => {
  return (
    <article
      className={`group rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] relative ${
        darkMode
          ? "bg-gray-800/80 shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.6)]"
          : "bg-white shadow-[0_10px_30px_rgba(59,130,246,0.15)] hover:shadow-[0_15px_40px_rgba(59,130,246,0.25)]"
      }`}
    >
      <div className="p-8">
        {/* Category Badge */}
        {category && (
          <div className="flex items-center justify-between mb-4">
            <span
              className={`inline-flex items-center gap-2 text-xs font-bold px-4 py-2 rounded-full transition-all duration-300 ${
                darkMode
                  ? "bg-blue-900/50 text-blue-300"
                  : "bg-blue-50 text-blue-900"
              }`}
            >
              <span
                className={`w-2 h-2 rounded-full ${
                  darkMode ? "bg-blue-400" : "bg-blue-600"
                }`}
              ></span>
              {category}
            </span>
            <div
              className={`flex items-center gap-1 text-xs transition-colors duration-300 ${
                darkMode ? "text-gray-500" : "text-gray-600"
              }`}
            >
              <Clock className="w-3 h-3" />
              <span>5 min</span>
            </div>
          </div>
        )}

        {/* Title */}
        <Link to={`/articles/${id}`} className="block mb-4 group">
          <h3
            className={`text-2xl font-bold mb-3 leading-tight transition-all duration-300 group-hover:text-blue-500 ${
              darkMode ? "text-gray-100" : "text-gray-900"
            }`}
          >
            {title}
          </h3>
        </Link>

        {/* Decorative Line */}
        <div
          className={`h-1 w-16 rounded-full mb-4 transition-all duration-300 group-hover:w-24 ${
            darkMode ? "bg-blue-500" : "bg-blue-600"
          }`}
        />

        {/* Summary */}
        <p
          className={`mb-6 line-clamp-3 transition-colors duration-300 ${
            darkMode ? "text-gray-400" : "text-gray-600"
          }`}
        >
          {summary}
        </p>

        {/* Footer */}
        <div
          className={`flex items-center justify-between pt-4 border-t transition-colors duration-300 ${
            darkMode ? "border-gray-700" : "border-gray-200"
          }`}
        >
          {/* Author & Date */}
          <div className="flex flex-col gap-2">
            {author && (
              <div className="flex items-center gap-2">
                <User
                  className={`w-4 h-4 ${
                    darkMode ? "text-gray-500" : "text-gray-600"
                  }`}
                />
                <span
                  className={`text-sm font-semibold transition-colors duration-300 ${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  {author}
                </span>
              </div>
            )}
            {date && (
              <div className="flex items-center gap-2">
                <Calendar
                  className={`w-4 h-4 ${
                    darkMode ? "text-gray-500" : "text-gray-600"
                  }`}
                />
                <span
                  className={`text-sm transition-colors duration-300 ${
                    darkMode ? "text-gray-500" : "text-gray-600"
                  }`}
                >
                  {date}
                </span>
              </div>
            )}
          </div>

          {/* Read More Button */}
          <Link
            to={`/articles/${id}`}
            className={`flex items-center gap-2 py-3 px-6 rounded-full font-semibold transition-all duration-300 hover:gap-3 shadow-lg hover:shadow-xl group/btn ${
              darkMode
                ? "bg-blue-600 hover:bg-blue-700 text-white"
                : "bg-blue-600 hover:bg-blue-700 text-white"
            }`}
          >
            <span>Baca</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
          </Link>
        </div>
      </div>

      {/* Hover Glow Effect */}
      <div
        className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-3xl ${
          darkMode
            ? "bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.15)_0%,_transparent_70%)]"
            : "bg-[radial-gradient(circle_at_center,_rgba(37,99,235,0.05)_0%,_transparent_70%)]"
        }`}
      />
    </article>
  );
};

export default ArticleCard;