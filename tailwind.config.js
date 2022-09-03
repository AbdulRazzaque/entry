/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        // 'camel': "url('/src/images/camel.jpg')",
        'camel': "url('/src/images/camel.jpg')",
        'moon': "url('/src/images/moon.jpg')",
            }
    },
  },
  plugins: [],
}