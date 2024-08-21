/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        text_color: "#FFFFFF",
        input_bg: "rgba(28, 28, 28, 0.2)",
        login_color: "#20242D",
        bg_btn: "#1C1C1C",
        bg_btn_dark: "#C6C7F8",
      }
    },
  },
  plugins: [],
}

