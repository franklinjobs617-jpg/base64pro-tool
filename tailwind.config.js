/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html", // 告诉它扫描根目录下的所有 .html 文件
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

