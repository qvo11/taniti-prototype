/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        darkBlue: '#093b7d',
        lightBlue: '#7C94BC',
        light: '#C8D3E2',
      }
    },
  },
  plugins: [],
};

