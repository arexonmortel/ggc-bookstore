/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'primary': ['Poppins', 'sans-serif']
      },
      colors: {
        'primary-txt': '#191847',
        'secondary-txt': '#0E0E38',
        'author-txt': "#1C57EE",
        'primary-bg': '#EFF0F1',
        'footer-bg': '#191847',
        'hero-txt': '#2C3E50',
      },

    }
    
  },
  plugins: [],
}

