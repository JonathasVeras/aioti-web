"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaHome, FaCarAlt, FaBars, FaTimes } from "react-icons/fa";

const linkPersonalization = `
  flex items-center gap-2 text-lg 
  hover:bg-blue-600 dark:hover:bg-gray-600 
  px-4 py-2 rounded-lg transition-all duration-200
`;

const Navbar: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      setDarkMode(true);
    }
  }, []);

  return (
    <nav className="bg-blue-700 dark:bg-gray-700 text-white">
      {/* Navbar para Desktop */}
      <div
        className={`hidden md:flex flex-col h-screen transition-all duration-300 p-4 ${
          isCollapsed ? "w-16" : "w-64"
        } bg-blue-700 dark:bg-gray-700`}
      >
        <div className={`flex items-center ${isCollapsed ? "justify-center" : "justify-between"}`}>
          <Image
            src="/logo_png_transparent.png"
            alt="Logo"
            width={isCollapsed ? 40 : 50}
            height={isCollapsed ? 40 : 50}
            className="object-contain"
          />
          {!isCollapsed && <span className="text-lg font-bold">Projeto AOITI</span>}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-4 text-2xl focus:outline-none self-end"
          >
            {isCollapsed ? <FaBars /> : <FaTimes />}
          </button>
        </div>

        <ul className="space-y-4 mt-10">
          <li>
            <Link href="/" className={linkPersonalization}>
              <div className={`flex items-center ${isCollapsed ? "justify-center" : "gap-2"}`}>
                <FaHome className="text-xl" />
                {!isCollapsed && <span>Home</span>}
              </div>
            </Link>
          </li>
          <li>
            <Link href="/travels" className={linkPersonalization}>
              <div className={`flex items-center ${isCollapsed ? "justify-center" : "gap-2"}`}>
                <FaCarAlt className="text-xl" />
                {!isCollapsed && <span>Viagens</span>}
              </div>
            </Link>
          </li>
        </ul>

        <div className="mt-auto flex justify-center">
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)}
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              <span className="md:hidden ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                {darkMode ? "Modo Escuro" : "Modo Claro"}
              </span>
            </label>
          </div>
      </div>

      {/* Navbar para Mobile */}
      <div className="md:hidden flex items-center justify-between p-4 bg-gray-800 dark:bg-gray-900">
        <div className="flex items-center gap-2">
          <Image
            src="/logo_png_transparent.png"
            alt="Logo"
            width={40}
            height={40}
            className="object-contain"
          />
          <span className="text-lg font-bold">Projeto AOITI</span>
        </div>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-white text-2xl"
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Menu Mobile Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-blue-700 dark:bg-gray-700 text-white p-4">
          <ul className="space-y-4">
            <li>
              <Link
                href="/"
                className={linkPersonalization}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <FaHome className="text-xl" />
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link
                href="/travels"
                className={linkPersonalization}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <FaCarAlt className="text-xl" />
                <span>Viagens</span>
              </Link>
            </li>
          </ul>
          <button
            onClick={() => {
              setDarkMode(!darkMode);
              setIsMobileMenuOpen(false);
            }}
            className="mt-4 bg-blue-700 dark:bg-gray-700 text-white hover:bg-gray-600 dark:hover:bg-gray-500 px-4 py-2 rounded-lg w-full transition-all duration-200"
          >
            {darkMode ? "☀️ Modo Claro" : "🌙 Modo Escuro"}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
