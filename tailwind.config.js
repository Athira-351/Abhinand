/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#4f46e5',
        'primary-dark': '#4338ca',
        accent: '#a855f7',
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: true,
  },
}

