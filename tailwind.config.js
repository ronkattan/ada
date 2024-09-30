/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      // You can add your own customizations here
      colors: {
        primary: {
          light: '#3B82F6',
          DEFAULT: '#2563EB',
          dark: '#1E3A8A',
        },
      },
      spacing: {
        128: '32rem',
      },
    },
  },
  plugins: [
    // Use Tailwind's plugin functionality to add custom utilities, etc.
    require('tailwindcss/plugin')(function ({ addUtilities }) {
      const newUtilities = {
        '.text-shadow': {
          'text-shadow': '2px 2px 5px rgba(0, 0, 0, 0.4)',
        },
        '.text-shadow-none': {
          'text-shadow': 'none',
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    }),
  ],
};
