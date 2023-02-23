module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/colors/themes")["[data-theme=light]"],
          primary: "#c491ff",
          secondary: "#f000b8",
          tertiary: "#f57bfb",
        },
      },
    ],
  },
};
