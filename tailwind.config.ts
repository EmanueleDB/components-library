export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'serif'], // Ensure fonts with spaces have " " surrounding it.
        openSans: ['Open Sans', 'serif'], // Ensure fonts with spaces have " " surrounding it.
      },
      boxShadow: {
        custom:
          '1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px, 5px 5px 0px 0px',
      },
    },
  },
}
