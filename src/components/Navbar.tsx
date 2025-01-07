"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaHome, FaCarAlt, FaBars, FaTimes } from "react-icons/fa";

export const linkPersonalization: string = `hover:bg-blue-700 dark:hover:bg-gray-700 rounded text-xl`;
export const buttonDivPersonalization: string = `flex items-center gap-2`;

const Navbar: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

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
      <div className="flex">
        <div
          className={`${
            isCollapsed ? "w-16" : "w-64"
          } flex flex-col h-screen p-4 bg-primary dark:bg-primary-dark transition-all duration-300`}
        >
          
          
          <div className={`flex items-center ${isCollapsed ? "justify-center" : "justify-between"}`}>
            <Image
              src="/logo_png_transparent.png"
              alt="Logo"
              width={isCollapsed ? 0 : 50}
              height={isCollapsed ? 0 : 50}
              className={`${isCollapsed ? "md:hidden" : "object-contain"}`}
            />
            {/* Botão para colapsar */}
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="p-4 text-2xl focus:outline-none self-end"
            >
              {isCollapsed ? <FaBars /> : <FaTimes />}
            </button>
          </div>
          
          <ul className="grid grid-cols-1 gap-4 items-center mt-10">
            <li>
              <Link href="/" className={linkPersonalization}>
                <div className={`${buttonDivPersonalization} ${isCollapsed ? "justify-center" : ""}`}>
                  <FaHome />
                  {!isCollapsed && <span>Home</span>}
                </div>
              </Link>
            </li>
            <li>
              <Link href="/travels" className={linkPersonalization}>
                <div className={`${buttonDivPersonalization} ${isCollapsed ? "justify-center" : ""}`}>
                  <FaCarAlt />
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

        <div className="md:hidden flex flex-row w-full p-4">
          {/* Navbar para Mobile */}
          <ul className="flex flex-row gap-4">
            <li>
              <Link href="/" className="hover:bg-blue-700 dark:hover:bg-gray-700 p-2 rounded">
                Home
              </Link>
            </li>
            <li>
              <Link href="/travels" className="hover:bg-blue-700 dark:hover:bg-gray-700 p-2 rounded">
                Viagens
              </Link>
            </li>
          </ul>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="ml-4 bg-blue-700 dark:bg-gray-700 text-white dark:text-gray-200 hover:bg-blue-600 dark:hover:bg-gray-600 p-2 rounded"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;