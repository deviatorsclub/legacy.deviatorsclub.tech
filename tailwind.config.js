/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1f2937', // dark gray for primary background
        secondary: '#4b5563', // lighter gray for secondary background
        accent: '#10b981', // green accent color
      },
    },
  },
  plugins: [],
}

