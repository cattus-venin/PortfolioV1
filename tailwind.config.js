/** @type {import('tailwindcss').Config} */

import('tailwindcss').Config

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1400px',
    }
  },
  plugins: [
      require('flowbite/plugin')
  ],
}