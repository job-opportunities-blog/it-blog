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
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            {article.title}
          </h1>
          <div className="md:col-span-2 flex text-sm text-gray-500">
            <span className="font-medium text-gray-700">{article.author}</span>
            <span className="mx-2">•</span>
            <span className="text-gray-500">{article.date}</span>
          </div>

          <hr className="my-8 border-t border-gray-500" />
          {/* Display HTML content */}
          <div dangerouslySetInnerHTML={{ __html: article.content || "" }} />
          <Link
            to="/articles"
            className="text-blue-600 hover:underline mt-4 inline-block"
          >
            Back to Articles
          </Link>
        </div>
      </section>
    </>
  );
};

export default ArticleDetails;
