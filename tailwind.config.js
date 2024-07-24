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
        'card-2': "url('./src/assets/card-2.jpg')",
        'card-3': "url('./src/assets/card-3.jpg')",
        'card-4': "url('./src/assets/card-4.jpg')",
        'card-5': "url('./src/assets/card-5.jpg')",
        'card-6': "url('./src/assets/card-6.jpg')",
        'card-7': "url('./src/assets/card-7.jpg')",
        'card-8': "url('./src/assets/card-8.jpg')",
        'card-9': "url('./src/assets/card-9.jpg')",
      }
    },
  },
  plugins: [],
}

