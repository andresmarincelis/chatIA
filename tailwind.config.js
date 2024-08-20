/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        button_color: "#1C1C1C",
        text_color: "#FFFFFF",
        input_bg: "rgba(28, 28, 28, 0.2)"
      }
    },
  },
  plugins: [],
}

