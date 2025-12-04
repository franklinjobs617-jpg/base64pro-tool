/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html", // 告诉它扫描根目录下的所有 .html 文件
    "./guide/**/*.html",// 告诉它扫描 guide 目录下的所有 .html文件
    "./ko/**/*.html" // 告诉它扫描 guide 目录下的所有 .html文件
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4F46E5",
        secondary: "#C70076",
        accent: "#F59E0B",
        neutral: "#1F2937",
        light: "#F9FAFB",
      },
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
      },
    },
  },
  plugins: [],
}

