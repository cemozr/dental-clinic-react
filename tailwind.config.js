/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        34: "139px",
      },
      colors: {
        "custom-dark-blue": "#011632",
        "custom-mid-blue": "#1376f8",
        "custom-sky-blue": "#25b4f8",
        "custom-light-blue": "#e6f6fe",
        secondary: "#ffffff",
        "custom-body-text": "#3c4959",
        success: "#17bf28",
        warning: "#ec942c",
        error: "#e52323",
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    // ...
  ],
};
