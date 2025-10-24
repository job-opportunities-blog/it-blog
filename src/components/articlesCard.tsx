import React from "react";

interface ArticleCardProps {
  id: number;
  title: string;
  summary: string;
  author?: string;
  date?: string;
  category?: string;
  link: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  title,
  summary,
  author,
  date,
  category,
  link,
}) => {
  return (
    <article className="bg-white border rounded-lg overflow-hidden hover:shadow-lg transition">
      <div className="p-6">
        {/* Category & Read Time */}
        {category && (
          <div className="flex items-center justify-between mb-3">
            {category && (
              <span className="text-sm font-semibold text-indigo-600">
                {category}
              </span>
            )}
          </div>
        )}

        {/* Title */}
        <h3 className="text-xl font-semibold text-gray-800 mb-4 hover:text-indigo-600 transition">
          <a href={link}>{title}</a>
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

          <a href={link} className="text-blue-600 hover:underline font-medium">
            Read More →
          </a>
        </div>
      </div>
    </article>
  );
};

export default ArticleCard;
