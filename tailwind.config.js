/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#171717",
        "secondary": "#f8f8f8",
        "btn-color": "#7d66ff",
        "background": "#bdbdbd",
      },

      boxShadow: {
        "card": "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em",
      }
    },
  },
  plugins: [],
}


