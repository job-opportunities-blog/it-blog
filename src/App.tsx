// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import Nav from "./components/navigation";
import Home from "./pages/home";
import Article from "./pages/articles";
import About from "./pages/about";
import Contact from "./pages/contact";
import Footer from "./components/footer";
import ArticleDetails from "./pages/articleDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<Article />} />
          <Route path="/articles/:id" element={<ArticleDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
