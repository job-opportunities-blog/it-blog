import React from "react";
import HeroSection from "../components/heroSection";
import ArticleCard from "../components/articlesCard";

const Home: React.FC = () => {
  return (
    <>
      <HeroSection />
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Latest Articles
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <ArticleCard
              id={1}
              title="Understanding React Hooks"
              summary="A deep dive into React Hooks and how they can simplify your functional components."
              author="Jane Doe"
              date="June 10, 2024"
              category="React"
              link="/articles/react-hooks"
            />
            <ArticleCard
              id={2}
              title="CSS Grid vs. Flexbox: When to Use Which"
              summary="An in-depth comparison of CSS Grid and Flexbox for modern web layouts."
              author="John Smith"
              date="June 8, 2024"
              category="CSS"
              link="/articles/css-grid-vs-flexbox"
            />
            <ArticleCard
              id={3}
              title="Getting Started with TypeScript"
              summary="A beginner's guide to TypeScript and how it can improve your JavaScript code."
              author="Alice Johnson"
              date="June 5, 2024"
              category="TypeScript"
              link="/articles/getting-started-with-typescript"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
