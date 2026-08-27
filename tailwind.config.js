export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "jmv-orange": "#E65100",
        "jmv-orange-burnt": "#BF360C",
        "jmv-brown": "#2C1D11",
        "jmv-charcoal": "#1A1A1A",
        "jmv-ivory": "#FAFAFA",
        "jmv-grey": "#F3F4F6",
      },
      fontFamily: {
        sans: ["Manrope", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 12px 30px -22px rgba(44, 29, 17, 0.2)",
      },
    },
  },
  plugins: [],
};
