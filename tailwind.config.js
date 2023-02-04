/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors:{
        "primary":"bg-violet-500",
        "secondary":"bg-emerald-400"
      },
      fontFamily: {
        "josefin":"Josefin Sans"
      },
    },
  },
  plugins: [],
}
