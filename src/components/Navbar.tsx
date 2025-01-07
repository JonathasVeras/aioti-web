"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaHome, FaCarAlt, FaBars, FaTimes } from "react-icons/fa";

const linkPersonalization: string = `
  flex items-center gap-2 text-lg 
  hover:bg-blue-600 dark:hover:bg-gray-600 
  px-4 py-2 rounded-lg transition-all duration-200
`;

const Navbar: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    <nav className=" bg-blue-700 dark:bg-gray-700 text-white">
      {/* Navbar para Desktop */}
      <div className="hidden md:flex flex-col h-screen w-64 p-4">
        <div className="flex items-center justify-center mb-8">
          {/* Logo (imagem) e texto centralizado */}
          <div className="flex items-center justify-center gap-2">
            <Image
              src="/logo_png_transparent.png"
              alt="Logo"
              width={50}
              height={50}
              className="object-contain"
            />
            <span className="text-lg font-bold">Projeto AOITI</span>
          </div>
        </div>
        <ul className="space-y-4">
          <li>
            <Link href="/" className={linkPersonalization}>
              <FaHome className="text-xl" />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link href="/travels" className={linkPersonalization}>
              <FaCarAlt className="text-xl" />
              <span>Viagens</span>
            </Link>
          </li>
        </ul>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="mt-auto bg-blue-700 dark:bg-gray-700 text-white hover:bg-gray-600 dark:hover:bg-gray-500 px-4 py-2 rounded-lg flex items-center justify-center transition-all duration-200"
        >
          {darkMode ? "☀️ Modo Claro" : "🌙 Modo Escuro"}
        </button>
      </div>

      {/* Navbar para Mobile */}
      <div className="md:hidden flex items-center justify-between p-4 bg-gray-800 dark:bg-gray-900">
        <div className="flex items-center justify-center gap-2">
          {/* Logo (imagem) e texto centralizado para mobile */}
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
