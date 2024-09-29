/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    extend: {
      animation: {
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
      fontFamily: {
        sans: ['Zain'],
        serif: ["Gluten"],
        mono: ["Darumadrop One"]
      },
      colors: {
        dark_blue: require('./src/assets/pallete').dark_blue,
        deep_orange: require('./src/assets/pallete').orange,
        deep_green:  require('./src/assets/pallete').green,
        seashell: require('./src/assets/pallete').seashell,
        light_green: require('./src/assets/pallete').lightgreen,
        light_orange: require('./src/assets/pallete').lightorange,
      },
    },
  },
}

