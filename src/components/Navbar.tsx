"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaHome } from "react-icons/fa";
import { FaCarAlt } from "react-icons/fa";

export const linkPersonalization: string = `hover:bg-blue-700 dark:hover:bg-gray-700 rounded text-xl`
export const buttonDivPersonalization: string = `flex items-center gap-2`

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
        <div className="flex items-center">
          <Image
            src="/logo_png_transparent.png"
            alt="Logo"
            width={50}
            height={50}
            className="object-contain"
          />
        </div>
        <ul className="grid grid-col gap-4 items-center justify-center mt-10">
          <li>
            <Link href="/" className={linkPersonalization}>
              <div className={buttonDivPersonalization}>
                <FaHome />
                Home
              </div>
            </Link>
          </li>
          <li>
            <Link href="/travels" className={linkPersonalization}>
            <div className={buttonDivPersonalization}>
                <FaCarAlt />
                Viagens
              </div>
            </Link>
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
    </nav>
  );
};

export default Navbar;
