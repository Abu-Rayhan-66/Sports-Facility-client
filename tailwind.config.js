/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Saira: ['saira', 'sans-serif'], 
      },
      keyframes: {
        rotateY: {
          '0%': { transform: 'rotateY(0deg)' },
          '100%': { transform: 'rotateY(180deg)' },
        },
      },
      animation: {
        rotateY: 'rotateY 1s linear forwards',
      },
        
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

