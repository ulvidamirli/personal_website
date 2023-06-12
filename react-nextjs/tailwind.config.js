/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: [...defaultTheme.fontFamily.sans],
        sans: [...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    // Installation: npm install @tailwindcss/aspect-ratio -D
    // https://github.com/tailwindlabs/tailwindcss-aspect-ratio
    require("@tailwindcss/typography"),
    // Installation: npm install @tailwindcss/typography -D
    // https://github.com/tailwindlabs/tailwindcss-typography
    require("@tailwindcss/forms")({
      strategy: "class",
    }),
    // Installation: npm install @tailwindcss/forms -D
    // https://github.com/tailwindlabs/tailwindcss-forms
  ],
};
