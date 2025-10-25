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
    <article className="bg-white border rounded-lg overflow-hidden hover:shadow-lg transition">
      <div className="p-6">
        {/* Category & Read Time */}
        {category && (
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-semibold text-indigo-600">
              {category}
            </span>
          </div>
        )}

        {/* Title */}
        <h3 className="text-xl font-semibold text-gray-800 mb-4 hover:text-indigo-600 transition">
          <Link to={`/articles/${id}`}>{title}</Link>
        </h3>

        {/* Summary */}
        <p className="text-gray-600 mb-6">{summary}</p>

        {/* Footer: Author, Date & Read More */}
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-500">
            {author && (
              <span className="font-medium text-gray-700">{author}</span>
            )}
            {author && date && <span className="mx-2">•</span>}
            {date && <span>{date}</span>}
          </div>

          <Link
            to={`/articles/${id}`}
            className="text-blue-600 hover:underline font-medium"
          >
            Read More →
          </Link>
        </div>
      </div>
    </article>
  );
};

export default ArticleCard;
