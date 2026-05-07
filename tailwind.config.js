/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./context/**/*.{js,jsx}",
    "./lib/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5C2D0A",
        accent: "#C47A3A",
        gold: "#C47A3A",
        background: "#FEF6EC",
        surface: "#FFFAF4",
        textDark: "#2C1000",
        textMuted: "#8B5E3C",
        border: "#E8C99A",
        success: "#16a34a",
        error: "#dc2626",
        whatsapp: "#25D366"
      },
      fontFamily: {
        heading: ["var(--font-playfair)", "serif"],
        body: ["var(--font-inter)", "sans-serif"]
      },
      boxShadow: {
        card: "0 16px 40px rgba(92, 45, 10, 0.12)"
      }
    }
  },
  plugins: []
};
