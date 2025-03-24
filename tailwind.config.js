import {heroui} from "@heroui/theme"

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      colors: {
        light: {
          default: {
            50: "#fafafa",
            100: "#f2f2f3",
            200: "#ebebec",
            300: "#e3e3e6",
            400: "#dcdcdf",
            500: "#d4d4d8",
            600: "#afafb2",
            700: "#8a8a8c",
            800: "#656567",
            900: "#404041",
            foreground: "#000",
            DEFAULT: "#d4d4d8"
          },
          primary: {
            50: "#e6fddf",
            100: "#c3fab3",
            200: "#a0f686",
            300: "#7cf359",
            400: "#59f02d",
            500: "#36ed00",
            600: "#2dc400",
            700: "#239a00",
            800: "#1a7100",
            900: "#104700",
            foreground: "#000",
            DEFAULT: "#36ed00"
          },
          secondary: {
            50: "#f6f6f6",
            100: "#eaeaea",
            200: "#dddddd",
            300: "#d1d1d1",
            400: "#c4c4c4",
            500: "#b8b8b8",
            600: "#989898",
            700: "#787878",
            800: "#575757",
            900: "#373737",
            foreground: "#000",
            DEFAULT: "#b8b8b8"
          },
          success: {
            50: "#e2f8ec",
            100: "#b9efd1",
            200: "#91e5b5",
            300: "#68dc9a",
            400: "#40d27f",
            500: "#17c964",
            600: "#13a653",
            700: "#0f8341",
            800: "#0b5f30",
            900: "#073c1e",
            foreground: "#000",
            DEFAULT: "#17c964"
          },
          warning: {
            50: "#fef4e4",
            100: "#fce4bd",
            200: "#fad497",
            300: "#f9c571",
            400: "#f7b54a",
            500: "#f5a524",
            600: "#ca881e",
            700: "#9f6b17",
            800: "#744e11",
            900: "#4a320b",
            foreground: "#000",
            DEFAULT: "#f5a524"
          },
          danger: {
            50: "#fee1eb",
            100: "#fbb8cf",
            200: "#f98eb3",
            300: "#f76598",
            400: "#f53b7c",
            500: "#f31260",
            600: "#c80f4f",
            700: "#9e0c3e",
            800: "#73092e",
            900: "#49051d",
            foreground: "#000",
            DEFAULT: "#f31260"
          },
          background: "#101010",
          foreground: "#000000",
          content1: {
            DEFAULT: "#ffffff",
            foreground: "#000"
          },
          content2: {
            DEFAULT: "#f4f4f5",
            foreground: "#000"
          },
          content3: {
            DEFAULT: "#e4e4e7",
            foreground: "#000"
          },
          content4: {
            DEFAULT: "#d4d4d8",
            foreground: "#000"
          },
          focus: "#006FEE",
          overlay: "#000000"
        },
        dark: {
          default: {
            50: "#060606",
            100: "#0d0d0d",
            200: "#131313",
            300: "#1a1a1a",
            400: "#202020",
            500: "#4d4d4d",
            600: "#797979",
            700: "#a6a6a6",
            800: "#d2d2d2",
            900: "#ffffff",
            foreground: "#fff",
            DEFAULT: "#202020"
          },
          primary: {
            50: "#104700",
            100: "#1a7100",
            200: "#239a00",
            300: "#2dc400",
            400: "#36ed00",
            500: "#59f02d",
            600: "#7cf359",
            700: "#a0f686",
            800: "#c3fab3",
            900: "#e6fddf",
            foreground: "#000",
            DEFAULT: "#36ed00"
          },
          secondary: {
            50: "#373737",
            100: "#575757",
            200: "#787878",
            300: "#989898",
            400: "#b8b8b8",
            500: "#c4c4c4",
            600: "#d1d1d1",
            700: "#dddddd",
            800: "#eaeaea",
            900: "#f6f6f6",
            foreground: "#000",
            DEFAULT: "#b8b8b8"
          },
          success: {
            50: "#073c1e",
            100: "#0b5f30",
            200: "#0f8341",
            300: "#13a653",
            400: "#17c964",
            500: "#40d27f",
            600: "#68dc9a",
            700: "#91e5b5",
            800: "#b9efd1",
            900: "#e2f8ec",
            foreground: "#000",
            DEFAULT: "#17c964"
          },
          warning: {
            50: "#4a320b",
            100: "#744e11",
            200: "#9f6b17",
            300: "#ca881e",
            400: "#f5a524",
            500: "#f7b54a",
            600: "#f9c571",
            700: "#fad497",
            800: "#fce4bd",
            900: "#fef4e4",
            foreground: "#000",
            DEFAULT: "#f5a524"
          },
          danger: {
            50: "#49051d",
            100: "#73092e",
            200: "#9e0c3e",
            300: "#c80f4f",
            400: "#f31260",
            500: "#f53b7c",
            600: "#f76598",
            700: "#f98eb3",
            800: "#fbb8cf",
            900: "#fee1eb",
            foreground: "#000",
            DEFAULT: "#f31260"
          },
          background: "#101010",
          foreground: "#ffffff",
          content1: {
            DEFAULT: "#1d1d4d",
            foreground: "#fff"
          },
          content2: {
            DEFAULT: "#27272a",
            foreground: "#fff"
          },
          content3: {
            DEFAULT: "#3f3f46",
            foreground: "#fff"
          },
          content4: {
            DEFAULT: "#030303",
            foreground: "#fff"
          },
          focus: "#006FEE",
          overlay: "#ffffff"
        }
      }
    }
  },
  darkMode: "class",
  plugins: [heroui()],
}

module.exports = config;