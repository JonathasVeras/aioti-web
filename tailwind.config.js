/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: '#1b63cb',
          dark: '#051a3a',
        },
        secondary: {
          DEFAULT: '#bed5da',
        },
        third: {
          DEFAULT: '#24adde',
        },
      },
    },
  },
  plugins: [],
}

