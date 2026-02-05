/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        darkBlue: '#093b7d',
        dustBlue: '#28508b',
        lightBlue: '#7C94BC',
        light: '#C8D3E2',
        lightOrange: '#f6f4f0',
        charcoal: '#1f2933',
        green: '#8b857a',
        teal: '#3f7f7a'
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

