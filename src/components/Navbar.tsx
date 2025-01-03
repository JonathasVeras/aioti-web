"use client";
import React, { useState, useEffect } from "react";

const Navbar: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Salva o estado do modo no localStorage e aplica a classe no HTML
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  // Carrega o estado inicial do modo
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      setDarkMode(true);
    }
  }, []);

  return (
    <nav className="bg-primary dark:bg-primary-dark text-white dark:text-gray-100">
      <div className="hidden md:flex flex-col h-screen w-64 p-4">
        {/* Navbar para Desktop */}
        <a href="/" className="text-lg font-bold mb-4">
          AIOTI WEB
        </a>
        <ul className="flex flex-col gap-4">
          <li>
            <a href="/" className="hover:bg-blue-700 dark:hover:bg-gray-700 p-2 rounded">
              Home
            </a>
          </li>
          <li>
            <a href="/travels" className="hover:bg-blue-700 dark:hover:bg-gray-700 p-2 rounded">
              Viagens
            </a>
          </li>
        </ul>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="mt-auto bg-blue-700 dark:bg-gray-700 text-white dark:text-gray-200 hover:bg-blue-600 dark:hover:bg-gray-600 p-2 rounded"
        >
          {darkMode ? "Modo Claro" : "Modo Escuro"}
        </button>
      </div>

      <div className="md:hidden flex flex-row w-full p-4">
        {/* Navbar para Mobile */}
        <a href="/" className="text-lg font-bold mr-auto">
          AIOTI WEB
        </a>
        <ul className="flex flex-row gap-4">
          <li>
            <a href="/" className="hover:bg-blue-700 dark:hover:bg-gray-700 p-2 rounded">
              Home
            </a>
          </li>
          <li>
            <a href="/travels" className="hover:bg-blue-700 dark:hover:bg-gray-700 p-2 rounded">
              Viagens
            </a>
          </li>
        </ul>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="ml-4 bg-blue-700 dark:bg-gray-700 text-white dark:text-gray-200 hover:bg-blue-600 dark:hover:bg-gray-600 p-2 rounded"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
