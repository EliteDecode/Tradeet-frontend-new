/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports= withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        'brand-green':'#12362a',
        'brand-yellow':'#fbfadb',
        'pressed-state-green': '#42684F',
        'hovered-state-green': '#42684F',
        'light-grey': '#D9D9D9',
        'brand-black': '#2D2D2D',
        
      },
      boxShadow: {
        table: "0px 0px 4px 0px #00000040",
      },
	    fontFamily: {
        sans: ["Montserrat", "sans-serif"],
        montserrat: ["montserrat", "sans-serif"],
        inter: ["inter", "sans-serif"],
	    },
    },
  }, 
  screens: {
		xs: "480px",
		ss: "620px",
		sm: "768px",
		md: "1060px",
		lg: "1200px",
		xl: "1700px",
	},
    
  plugins: [],
});



