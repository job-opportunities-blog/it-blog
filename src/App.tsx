// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/navigation";
import Footer from "./components/footer";
import Home from "./pages/home";
import Article from "./pages/articles";
import About from "./pages/about";
import Contact from "./pages/contact";
import ArticleDetails from "./pages/articleDetails";
import ScrollToTop from "./components/scrollToTop";

function App() {
  return (
    <>
      <div className="bg-blue-50">
        <BrowserRouter>
          <Nav />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/articles" element={<Article />} />
            <Route path="/articles/:id" element={<ArticleDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
