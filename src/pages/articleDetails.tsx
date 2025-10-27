import { useParams, Link } from "react-router-dom";
import { articles } from "../data/articles";

const ArticleDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const article = articles.find((art) => art.id === Number(id));

  if (!article) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          Article Not Found
        </h2>
        <p className="text-gray-600">
          The article you are looking for does not exist.
        </p>
        <Link
          to="/articles"
          className="text-blue-600 hover:underline mt-4 inline-block"
        >
          Back to Articles
        </Link>
      </div>
    );
  }

  return (
    <>
      <section className="max-w-6xl mx-auto px-4 pt-32">
        <div className="bg-white rounded-2xl shadow-[0_15px_20px_rgba(59,130,246,0.25)] p-6 mb-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="py-8 px-6 items-center gap-4">
              <h1 className="text-4xl font-bold text-gray-800 mb-6">
                {article.title}
              </h1>
              <hr className="text-gray-500 py-4" />
              <div className="md:col-span-2 flex text-sm text-gray-500">
                <span className="font-medium text-gray-700">
                  {article.author}
                </span>
                <span className="mx-2">•</span>
                <span className="text-gray-500">{article.date}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 my-16">
        <div className="bg-white rounded-2xl shadow-[0_15px_20px_rgba(59,130,246,0.25)] p-6 mb-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="px-6 items-center">
              {/* Display HTML content */}
              <div
                dangerouslySetInnerHTML={{ __html: article.content || "" }}
              />
              <div className="py-8">
                <Link
                  to="/articles"
                  className="bg-blue-600 text-white py-2 px-4 rounded-full font-medium hover:bg-blue-700 transition-colors duration-200"
                >
                  ← Back to Articles
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ArticleDetails;
