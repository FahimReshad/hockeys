/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        backgroundImage: {
          'hero-pattern': "url('./Images/2.png')",
          'hero-pattern': "url('./Images/3.png')",
          'hero-pattern': "url('./Images/4.png.png')",
          'footer-texture': "url('/img/footer-texture.png')",
        }
      },
    },
    plugins: [],
  }