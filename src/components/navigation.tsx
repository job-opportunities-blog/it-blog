import React, { useState } from "react";
import { Link } from "react-router-dom";

const Nav: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Brand */}
          <div className="text-2xl font-bold text-gray-800">
            <a href="/">IT Blog</a>
          </div>

          {/* Desktop Navigation Links */}
          <ul className="hidden md:flex space-x-8">
            <li>
              <Link
                to="/"
                className="text-gray-600 hover:text-gray-900 transition"
              >
                Home
              </Link>
            </li>
            <li>
              <a
                href="/articles"
                className="text-gray-600 hover:text-gray-900 transition"
              >
                Articles
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="text-gray-600 hover:text-gray-900 transition"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="text-gray-600 hover:text-gray-900 transition"
              >
                Contact
              </a>
            </li>
          </ul>

          {/* Mobile Hamburger Button */}
          <button
            className="md:hidden text-gray-600"
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

        {/* Mobile Menu */}
        {isMenuOpen && (
          <ul className="md:hidden mt-4 space-y-2 pb-4">
            <li>
              <a
                href="/"
                className="block text-gray-600 hover:text-gray-900 transition py-2"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/articles"
                className="block text-gray-600 hover:text-gray-900 transition py-2"
              >
                Articles
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="block text-gray-600 hover:text-gray-900 transition py-2"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="block text-gray-600 hover:text-gray-900 transition py-2"
              >
                Contact
              </a>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Nav;
