import React from "react";
import { Link } from "react-router-dom";

interface ArticleCardProps {
  article: {
    id: number;
    title: string;
    summary: string;
    author: string;
    date: string;
    category: string;
  };
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  article: { id, title, summary, author, date, category },
}) => {
  return (
    <article className="bg-white rounded-xl overflow-hidden shadow-[0_5px_15px_rgba(59,130,246,0.15)] hover:shadow-[0_15px_20px_rgba(59,130,246,0.25)] hover:-translate-y-1 transition-all duration-300">
      <div className="p-6">
        {/* Category & Read Time */}
        {category && (
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
              {category}
            </span>
          </div>
        )}

        {/* Title */}
        <h3 className="text-xl font-semibold text-gray-800 mb-4">{title}</h3>

        {/* Summary */}
        <p className="text-gray-600 mb-6">{summary}</p>

        {/* Footer: Author, Date & Read More */}
        <div className="flex items-center gap-x-2 justify-between">
          <div className="text-sm text-gray-500">
            {author && (
              <span className="font-medium text-gray-700">{author}</span>
            )}
            {author && date && <span className="mx-2">•</span>}
            {date && <span>{date}</span>}
          </div>

          <Link
            to={`/articles/${id}`}
            className="bg-blue-600 text-white py-2 px-4 rounded-full font-medium hover:bg-blue-700 transition-colors duration-200"
          >
            Read More →
          </Link>
        </div>
      </div>
    </article>
  );
};

export default ArticleCard;
