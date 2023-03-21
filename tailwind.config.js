/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [
    require ('@tailwindcss/line-clamp'),
  ],
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        primaryColor: 'hsl(311,31%,11%)',
        secondaryColor:'hsl(322,29%,22%)',
        primaryHighlight:'hsl(321,28%,41%)',
        primaryHighlightDim:'hsl(321,20%,70%)',
        secondaryHighlight:'hsl(176,87%,57%)',
      },
      boxShadow:{
          secondaryHighlightShadow:'0 0 20px 0.5px hsl(176,87%,57%)'
      
      },
      fontFamily:{
        'primary':'Fjalla One, sans-serif;',
        'secondary': 'Teko, sans-serif;',
        'patreon': 'Kanit , sans-serif;'
      },
      backgroundImage: {
        'discord': "url('/public/discord-svg.svg')",
      },
      saturate: {
        48: '.48',
      },
      hueRotate: {
        '-270': '-270deg',
        270: '270deg',
      },
    }
  }
};