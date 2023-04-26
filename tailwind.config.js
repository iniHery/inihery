/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");

const base8Multiplication = () => {
  const result = {};
  for (let index = 1; index <= 20; index++) {
    result[`ds-${index}x`] = 8 * index;
  }

  return result;
};

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./containers/**/*.{js,ts,jsx,tsx}",
    "./ds/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      paddinf: "16px",
    },
    extend: {
      fontFamily: {
        aeonik: ["var(--font-aeonik)"],
        jetBrainsMono: ["var(--font-jetBrainsMono)"],
        inter: ["var(--font-inter)"],
      },
      screns: {
        "2xl": "1320px",
      },
      colors: {
        primary: {
          500: "#A855F7",
        },
        "ds-red": {
          50: "#FEF2F2",
          100: "#FEE2E2",
          200: "#FECACA",
          300: "#FCA5A5",
          400: "#F87171",
          500: "#EF4444",
          600: "#DC2626",
          700: "#B91C1C",
          800: "#991B1B",
          900: "#7F1D1D",
        },
        "ds-brand": {
          "01": "#333C90",
          "02": "#4853BD",
          "03": "#5F65D2",
          "04": "#8F8FFF",
          "05": "#B9BDFF",
          "06": "#ECECFA",
        },
        "ds-type": {
          "01": "#FFFFFF",
          "02": "#D7D7DA",
          "03": "#AFB0B6",
          "04": "#888891",
          "05": "#62626A",
          "06": "#494A50",
        },
        "ds-primary": {
          50: "#F8FAFC",
          100: "#F1F5F9",
          200: "#E2E8F0",
          300: "#CBD5E1",
          400: "#94A3B8",
          500: "#64748B",
          600: "#475569",
          700: "#334155",
          800: "#1E293B",
          900: "#0F172A",
        },
        "ds-neutral": {
          50: "#FAFAFA",
          100: "#F5F5F5",
          200: "#E5E5E5",
          300: "#D4D4D4",
          400: "#A3A3A3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
        },
        "ds-danger": {
          "01": "#733333",
          "02": "#B43838",
          "03": "#F14545",
          "04": "#F87E7E",
          "05": "#FAB8B8",
          "06": "#FEECEC",
        },
        "ds-surface": {
          "01": "#0A0A0B",
          "02": "#141415",
          "03": "#1D1E20",
          "04": "#27272A",
          "05": "#313135",
          "06": "#3B3B40",
        },
        "ds-edge": {
          "01": "#24242B",
          "02": "#313135",
          "03": "#3B3B40",
          "04": "#45454A",
        },
        "ds-positive": {
          "01": "#3F7333",
          "02": "#4F973E",
          "03": "#58BA40",
          "04": "#9AE986",
          "05": "#C5FAB8",
          "06": "#EFFFEB",
        },

        "ds-white": "#FFFFFF",
        "ds-black": "#000000",
      },
      fontSize: {
        "2x": "1.556rem",
        "3x": "1.778rem",
        "4x": "2.444rem",
        "5x": "2.889rem",
      },
      padding: base8Multiplication(),
      margin: base8Multiplication(),
      gap: base8Multiplication(),
    },
  },
  plugins: [],
};
