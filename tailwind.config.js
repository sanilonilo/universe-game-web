/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundSize:{
        'grid-card-hover':'110% 110%'
      },
      backgroundImage: {
        'banner-1': "url('./src/assets/banner-1.jpg')",
        'banner-2': "url('./src/assets/banner-2.jpg')",
        'banner-3': "url('./src/assets/banner-3.jpg')",
        'card-1': "url('./src/assets/card-1.jpg')",
      }
    },
  },
  plugins: [],
}

