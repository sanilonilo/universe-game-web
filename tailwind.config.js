/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'banner-1': "url('./src/assets/banner-3.jpg')",
        'banner-2': "url('./src/assets/banner-2.jpg')"
      }
    },
  },
  plugins: [],
}

