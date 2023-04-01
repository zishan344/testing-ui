/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      "dark",
      "light",
      "cupcake",
      {
        mytheme: {
          primary: "#5F72BE",

          secondary: "#115e59",

          accent: "#9921E8",

          neutral: "#5F72BE",

          "base-100": "#FFFFFF",

          info: "#3ABFF8",

          success: "#36D399",

          warning: "#FBBD23",

          error: "#F87272",
        },
      },
    ],
  },
  plugins: [require("daisyui"), require("tailwind-scrollbar-hide")],
  //...
};
