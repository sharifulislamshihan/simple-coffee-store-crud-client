/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily:{
        raleway: 'Raleway, sans-serif',
        rancho: 'Rancho, cursive',
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require("daisyui")
]

}

