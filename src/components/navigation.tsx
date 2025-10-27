import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Image from "./image";

const Nav: React.FC = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (!isHomePage) return;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  return (
    <header
      className={`
      fixed top-0 left-0 w-full z-50 
      transition-all duration-300
      ${
        isHomePage
          ? isScrolled || isMenuOpen
            ? "bg-white shadow-blue-100 shadow-sm"
            : "bg-transparent"
          : "bg-white shadow-blue-100 shadow-sm"
      }
    `}
    >
      <nav className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Brand */}
          <div
            className={`
            text-2xl font-bold 
            transition-colors duration-300
            ${isHomePage && !isScrolled && !isMenuOpen ? "text-gray-100" : "text-gray-800"}
          `}
          >
            <Link to="/" className="flex items-center space-x-2">
              <Image name="infinity" className="w-12 h-12" shadow={false} />
              <h1>
                <span className="text-blue-600">IT</span> Blog
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <ul className="hidden md:flex space-x-8">
            <li>
              <Link
                to="/"
                className={`
                  transition
                  ${
                    isHomePage && !isScrolled
                      ? "text-gray-100 hover:text-gray-300"
                      : "text-gray-600 hover:text-gray-900"
                  }
                `}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/articles"
                className={`
                  transition
                  ${
                    isHomePage && !isScrolled
                      ? "text-gray-100 hover:text-gray-300"
                      : "text-gray-600 hover:text-gray-900"
                  }
                `}
              >
                Articles
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`
                  transition
                  ${
                    isHomePage && !isScrolled
                      ? "text-gray-100 hover:text-gray-300"
                      : "text-gray-600 hover:text-gray-800"
                  }
                `}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`
                  transition
                  ${
                    isHomePage && !isScrolled
                      ? "text-gray-100 hover:text-gray-300"
                      : "text-gray-600 hover:text-gray-800"
                  }
                `}
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Mobile Hamburger Button */}
          <button
            className={`
              md:hidden transition
              ${isHomePage && !isScrolled && !isMenuOpen ? "text-gray-100 hover:text-gray-300" : "text-gray-600 hover:text-gray-800"}
            `}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu dengan Animasi Slide Down */}
        <div
          className={`
            md:hidden overflow-hidden transition-all duration-300 ease-in-out
            ${isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
          `}
        >
          <ul className="space-y-2 pt-4 pb-4">
            <li className="transform transition-all duration-300 delay-75">
              <Link
                to="/"
                className="block text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition py-2 px-3 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li className="transform transition-all duration-300 delay-100">
              <Link
                to="/articles"
                className="block text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition py-2 px-3 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Articles
              </Link>
            </li>
            <li className="transform transition-all duration-300 delay-150">
              <Link
                to="/about"
                className="block text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition py-2 px-3 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li className="transform transition-all duration-300 delay-200">
              <Link
                to="/contact"
                className="block text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition py-2 px-3 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
