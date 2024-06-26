import type { Config } from "tailwindcss";

const defaultTheme = require("tailwindcss/defaultTheme");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontWeight: {
      thin: "100",
      extralight: "200",
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
      black: "900",
    },
    extend: {
      screens: {
        "3xl": "2560px",
      },
      colors: {
        y: {
          "50": "#fbfde8",
          "100": "#f6f9ce",
          "200": "#edf4a5",
          "300": "#ddea6c",
          "400": "#cadc3f",
          "500": "#abc121",
          "600": "#859a16",
          "700": "#657615",
          "800": "#505d17",
          "900": "#444f18",
          "950": "#242c07",
        },
        sky: {
          "50": "#eff6ff",
          "100": "#dae9ff",
          "200": "#bdd9ff",
          "300": "#90c2ff",
          "400": "#5ca1fe",
          "500": "#367cfb",
          "600": "#205cf0",
          "700": "#1743d1",
          "800": "#1a3ab3",
          "900": "#1b368d",
          "950": "#152256",
        },
        b: {
          "50": "#f2f4fb",
          "100": "#e8ebf7",
          "200": "#dfe3f3",
          "300": "#bcc3e5",
          "400": "#a0a6d9",
          "500": "#898acb",
          "600": "#7470bb",
          "700": "#645fa3",
          "800": "#524e85",
          "900": "#45446b",
          "950": "#29283e",
        },
        g: {
          "50": "#f5f7f8",
          "100": "#eceff3",
          "200": "#dde1e8",
          "300": "#c8ced9",
          "400": "#b3b9ca",
          "500": "#9ca1b8",
          "600": "#868aa5",
          "700": "#727490",
          "800": "#5e6175",
          "900": "#4f5160",
          "950": "#2e2f38",
        },
        mint: {
          "50": "#effaf7",
          "100": "#e0f5ef",
          "200": "#b5e5da",
          "300": "#84d1c3",
          "400": "#51b6a8",
          "500": "#2f9a8f",
          "600": "#1f7c74",
          "700": "#19635f",
          "800": "#164f4c",
          "900": "#13413f",
          "950": "#0a2424",
        },
      },
      fontFamily: {
        sans: ["Figtree", "var(--figtree)", ...defaultTheme.fontFamily.sans],
        serif: [
          "DM Serif Display",
          "var(--dmSerif)",
          ...defaultTheme.fontFamily.serif,
        ],
      },
    },
  },
  plugins: [require("autoprefixer")],
};
export default config;
