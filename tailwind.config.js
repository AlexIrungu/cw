/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        // From your first palette
        'night': '#080F0F',
        'electric-indigo': '#5D2DE6',
        'burnt-umber': '#823329',
        'rose-quartz': '#A599B5',
        'ivory': '#F9FBF2',
        
        // From your second palette
        'amaranth-purple': '#B6244F',
        // night: '#080F0F', (already included above)
        // rose-quartz: '#A599B5', (already included above)
        // ivory: '#F9FBF2', (already included above)
      }
    },
  },
  plugins: [],
}