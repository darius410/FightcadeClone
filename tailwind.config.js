/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        primaryColor: 'hsl(311,31%,11%)',
        secondaryColor:'hsl(322,29%,22%)',
        primaryHighlight:'hsl(321,28%,41%)',
        secondaryHighlight:'hsl(176,87%,57%)',
      },
      boxShadow:{
          primaryHighlightShadow:'0 0 25px 8px rgb(34 197 94 )'
      
      },
      fontFamily:{
        'primary':'Fjalla One, sans-serif;',
        'secondary': 'Teko, sans-serif;',
      },
    },
  },
  plugins: [],
}