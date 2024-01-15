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
          sm: '600px',
          md: '800px',
          lg: '800px',
          xl: '800px',
          '2xl': '800px',
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
