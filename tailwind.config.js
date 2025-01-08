/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily:{
        title: ["Oswald", "sans-serif"],
        body: ["Poppins"]
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}

