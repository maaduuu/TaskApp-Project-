/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { screens: {
      'sm': {'max': '640px',},
      // => @media (min-width: 640px) { ... }

      'md': {'min': '768px',},
      // => @media (min-width: 768px) { ... }
    },
  },
  },
  plugins: [],
}
