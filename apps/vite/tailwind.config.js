/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{jsx,tsx}"],
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
  theme: {
    extend: {
      colors: {
        "green-yellow": {
          100: "#effbde",
          200: "#e0f7be",
          300: "#d0f49d",
          400: "#c1f07d",
          500: "#b1ec5c",
          600: "#8ebd4a",
          700: "#6a8e37",
          800: "#475e25",
          900: "#232f12",
        },
      },
    },
  },

  daisyui: {
    themes: [
      {
        ...require("daisyui/src/theming/themes"),
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          neutral: "#160200",
        },
      },
    ],
  },
};
