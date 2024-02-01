/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: 'Roboto Mono, monospace',
    },
    // extending colors, font-size and height to add custom css
    extend: {
      colors: {
        pizza: '#12345',
      },
      fontSize: {
        huge: ['80rem', { lineHeight: '1' }],
      },
      // over wrote screen css of tailwind
      height: {
        screen: '100dvh',
      },
    },
  },
  plugins: [],
};
