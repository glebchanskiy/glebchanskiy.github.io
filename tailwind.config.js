/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: ["index.html", "./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        text: '#212121'
      },
      container: {
        center: true,
        screens: {
          sm: '900px',
          md: '900px',
          lg: '900px',
          xl: '900px',
          '2xl': '900px',
        },
      },
      fontFamily: {
        primary: ['"Raleway"', 'sans-serif'],
        heading: ['"Josefin Sans"', 'sans-serif']
      }
    },
  },
  plugins: [],
}
