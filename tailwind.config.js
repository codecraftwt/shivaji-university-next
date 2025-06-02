/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
     extend: {
      keyframes: {
        scrollX: {
          '0%, 100%': { transform: 'translateX(0%)' },
          '50%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'scroll-x': 'scrollX 20s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
