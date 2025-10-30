import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Image from "./image";
import { useDarkMode } from "./DarkModeContext";
import { Moon, Sun } from "lucide-react";

const Nav: React.FC = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const { darkMode, toggleDarkMode } = useDarkMode();

  useEffect(() => {
    if (!isHomePage) return;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  const navTextColor =
    isHomePage && !isScrolled && !isMenuOpen
      ? "text-gray-100"
      : darkMode
      ? "text-gray-100"
      : "text-gray-800";

  const navBgColor = isHomePage
    ? isScrolled || isMenuOpen
      ? darkMode
        ? "bg-gray-900 shadow-gray-800 shadow-sm"
        : "bg-white shadow-blue-100 shadow-sm"
      : "bg-transparent"
    : darkMode
    ? "bg-gray-900 shadow-gray-800 shadow-sm"
    : "bg-white shadow-blue-100 shadow-sm";

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${navBgColor}`}
    >
      <nav className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div
            className={`text-2xl font-bold transition-colors duration-300 ${navTextColor}`}
          >
            <Link to="/" className="flex items-center space-x-2">
              <Image name="infinity" className="w-12 h-12" shadow={false} />
              <h1>
                <span className="text-blue-600">IT</span> Blog
              </h1>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="flex items-center space-x-6">
            <ul className="hidden md:flex space-x-8">
              {["Home", "Articles", "About", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item === "Home" ? "" : item.toLowerCase()}`}
                    className={`transition ${navTextColor} hover:text-blue-500`}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Dark Mode Button (Desktop) */}
            <button
              onClick={toggleDarkMode}
              className={`hidden md:flex p-2 rounded-full transition-all duration-300 shadow-sm ${
                darkMode
                  ? "bg-gray-700 hover:bg-gray-600"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-gray-700" />
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              className={`md:hidden ${navTextColor}`}
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
        </div>

        {/* Mobile Dropdown */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="space-y-2 pt-4 pb-4">
            {["Home", "Articles", "About", "Contact"].map((item) => (
              <li key={item}>
                <Link
                  to={`/${item === "Home" ? "" : item.toLowerCase()}`}
                  className={`block py-2 px-3 rounded-lg ${
                    darkMode
                      ? "text-gray-200 hover:bg-gray-800"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>

          {/* Dark Mode Button (Mobile) */}
          <div className="flex pb-4">
            <button
              onClick={toggleDarkMode}
              className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium shadow-md transition-all duration-300 ${
                darkMode
                  ? "bg-gray-700 text-yellow-300 hover:bg-gray-600"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
            >
              {darkMode ? (
                <>
                  <Sun className="w-5 h-5" /> Light Mode
                </>
              ) : (
                <>
                  <Moon className="w-5 h-5" /> Dark Mode
                </>
              )}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
