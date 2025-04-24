/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1d4ed8', // Azul de ejemplo
        secondary: '#ef4444', // Rojo
        dark: '#242424',
        accent: '#FDB81E',
        neutralLight: '#F3F4F6',
        neutralDark: '#1F2937',
        gray: {
          100: '#f3f4f6', // Gris claro
          800: '#1f2937', // Gris oscuro
        },
      },
      spacing: {
        13: '3.25rem',
        15: '3.75rem',
      },
      fontFamily: {
        heading: ['Oswald', 'sans-serif'],
        body: ['Inter', 'system-ui'],
      },
    },
  },
  plugins: [],
};
