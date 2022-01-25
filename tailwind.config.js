module.exports = {
    prefix: '',
    purge: ["./src/**/*.{html,ts}"],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
      extend: {},
      fontFamily: {
        title: ['Oswald']
      }
    },
    variants: {
      width: ["responsive", "hover", "focus"],
      extend: {},
    },
    plugins: [require('@tailwindcss/forms'),require('@tailwindcss/typography')],
};