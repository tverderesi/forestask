module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "outline-fandango": ["0 0 1px 3px #d22f88", "0 0 0 2px #d22f88"],
      },
      fontSize: {
        "2xs": ["0.625rem", { lineHeight: ".75rem" }],
      },
      colors: {
        mantis: {
          50: "#f0f9e3",
          100: "#dcf4b6",
          200: "#c7f189",
          300: "#b1ec5c",
          400: "#9ceb35",
          500: "#85cc52",
          600: "#6dba2e",
          700: "#5ba22a",
          800: "#477b22",
          900: "#30541a",
        },
        night: {
          50: "#f3f6fe",
          100: "#e7edfe",
          200: "#d9e3fd",
          300: "#c9d8fb",
          400: "#b7c9f9",
          500: "#a2b9f7",
          600: "#8c9df5",
          700: "#7279f2",
          800: "#5355ec",
          900: "#2e2c39",
        },
        "non-photo-blue": {
          50: "#e2f6fd",
          100: "#c4e8fc",
          200: "#a4d7fc",
          300: "#7fc6fa",
          400: "#5eb7f8",
          500: "#4d5b85",
          600: "#3472cc",
          700: "#234fa3",
          800: "#163b7a",
          900: "#0a234f",
        },
        lime: {
          50: "#f6ffe0",
          100: "#edffb3",
          200: "#d5ff80",
          300: "#aefe4c",
          400: "#84fa1c",
          500: "#7cc91e",
          600: "#6ab32c",
          700: "#578b26",
          800: "#425e1f",
          900: "#2f3318",
        },
        ebony: {
          50: "#f2f3f3",
          100: "#d8dbda",
          200: "#b7bbba",
          300: "#919393",
          400: "#6e6f70",
          500: "#5d6762",
          600: "#4b5451",
          700: "#383e3e",
          800: "#262b2b",
          900: "#131717",
        },
        "green-yellow": {
          50: "#f8ffe1",
          100: "#eefebb",
          200: "#d3fe7e",
          300: "#afee4c",
          400: "#84fa1c",
          500: "#7cc91e",
          600: "#6ab32c",
          700: "#578b26",
          800: "#425e1f",
          900: "#2f3318",
        },
        "ruddy-blue": {
          50: "#d1e1ff",
          100: "#a6c1ff",
          200: "#7da0ff",
          300: "#5380ff",
          400: "#2961ff",
          500: "#0b4bec",
          600: "#093bb3",
          700: "#072a7a",
          800: "#051a41",
          900: "#020a08",
        },
        "reseda-green": {
          50: "#f0f9e8",
          100: "#d2ebc6",
          200: "#b4dda4",
          300: "#96cf82",
          400: "#7abf66",
          500: "#5fad4d",
          600: "#4e993b",
          700: "#3d7a2e",
          800: "#2c5b21",
          900: "#1c3d14",
        },
        "blue-gray": {
          50: "#f7f9fc",
          100: "#e1e6ed",
          200: "#c2c9d4",
          300: "#a3aebd",
          400: "#858eab",
          500: "#69748f",
          600: "#4e596d",
          700: "#3a4453",
          800: "#262e3b",
          900: "#131822",
        },
        "lavender-web": {
          50: "#f6f7fc",
          100: "#e2e5f1",
          200: "#c9ccdc",
          300: "#b1b5c7",
          400: "#9a9ebb",
          500: "#7d81a1",
          600: "#5e647d",
          700: "#444c5d",
          800: "#2d3341",
          900: "#171c27",
        },
        "seal-brown": {
          50: "#fdf5f1",
          100: "#fbe6e0",
          200: "#f7c8b9",
          300: "#f1a58c",
          400: "#ec8767",
          500: "#dd6b4d",
          600: "#b24e3b",
          700: "#823b2f",
          800: "#512824",
          900: "#291c1b",
        },
        "magenta-dye": {
          50: "#fbe6f0",
          100: "#f6c6df",
          200: "#ed8cb6",
          300: "#e0548d",
          400: "#d42368",
          500: "#b7154d",
          600: "#9c0e42",
          700: "#7d0b34",
          800: "#5d0524",
          900: "#3d0215",
        },
        "tyrian-purple": {
          50: "#570d4c",
          100: "#4b0129",
          200: "#41011f",
          300: "#360015",
          400: "#2c0010",
          500: "#23000b",
          600: "#1a0008",
          700: "#120005",
          800: "#0a0002",
          900: "#000000",
        },
        "rose-red": {
          50: "#f8c6cd",
          100: "#f2a1a9",
          200: "#e9707f",
          300: "#de475f",
          400: "#d22f48",
          500: "#b01c33",
          600: "#8e1223",
          700: "#6b0b19",
          800: "#410309",
          900: "#160002",
        },
        mauveine: {
          50: "#f6d5f6",
          100: "#edabed",
          200: "#d56dd5",
          300: "#bc44bc",
          400: "#9f2da1",
          500: "#831c85",
          600: "#6a1470",
          700: "#4d0e56",
          800: "#280536",
          900: "#100020",
        },
        fandango: {
          50: "#f6c5e2",
          100: "#f1a1cf",
          200: "#e970b6",
          300: "#de479d",
          400: "#d22f88",
          500: "#b11c6e",
          600: "#8f1256",
          700: "#6c0b3d",
          800: "#420327",
          900: "#180010",
        },
        "red-crayola": {
          50: "#f7c5cc",
          100: "#f2a2a9",
          200: "#e8717f",
          300: "#de485f",
          400: "#d22f48",
          500: "#b11c33",
          600: "#8f1223",
          700: "#6c0b19",
          800: "#420309",
          900: "#180002",
        },
        "dark-purple": {
          50: "#f2e1f6",
          100: "#d9b5ed",
          200: "#b87ae0",
          300: "#9951c9",
          400: "#7a3aaf",
          500: "#5f2b94",
          600: "#4a2179",
          700: "#34175e",
          800: "#1e0c42",
          900: "#070026",
        },
        vermilion: {
          50: "#fbe3e3",
          100: "#f5b7b7",
          200: "#eb7c7c",
          300: "#e04a4a",
          400: "#d71f1f",
          500: "#c31818",
          600: "#a30f0f",
          700: "#820d0d",
          800: "#600b0b",
          900: "#400909",
        },
      },
      dropShadow: {
        "3xl": "0 35px 35px rgba(0, 0, 0, 0.25)",
        "4xl": [
          "0 35px 35px rgba(0, 0, 0, 0.25)",
          "0 45px 65px rgba(0, 0, 0, 0.15)",
        ],
        night: [
          "0px 4px 3px rgba(136, 136, 136, 0.136)",
          "0px 8px 8px rgba(124, 124, 124, 0.216)",
        ],
      },
    },
  },
  plugins: [require("daisyui"), require('prettier-plugin-tailwindcss')],
  daisyui: {
    themes: ["light", "dark"],
  },
};
