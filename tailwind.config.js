/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        // 'hero': "url('./image/hero.jpg')",
      },
      fontFamily: {
        inter: ['var(--font-inter)'],
        Archivo: ['var(--font-archivo)'],
        josefin: ['var(--font-Josefin_Sans)'],
      },
    },
  },
  plugins: [],
}
