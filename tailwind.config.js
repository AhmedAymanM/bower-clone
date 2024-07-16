/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: {
        DEFAULT: '#000000',
        accent: '#223C4C',
      },
      white: {
        DEFAULT: '#FFFFFF',
        accent: '#F7F8F8',
      },
      green: '#2baf2b',
      gray: '#ccc',
      header: {
        bg: '#ffcc2f',
        text: '#543729',
      },
      blue: {
        light: '#00acee',
        DEFAULT: '#008ec4',
      },
    },
  },
  plugins: [],
}
