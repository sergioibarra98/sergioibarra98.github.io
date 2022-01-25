module.exports = {
    prefix: '',
    content: [
      './src/**/*.{html,ts}'
    ],
    theme: {
      extend: {},
      fontFamily: {
        title: ['Oswald']
      }
    },
    plugins: [require('@tailwindcss/forms'),require('@tailwindcss/typography')],
};