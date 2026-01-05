
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        fontFamily: {
      manrope: ['Manrope', 'sans-serif'],
    },
    colors: {
      mutedTeal: '#6B9797', // adjust if Figma shows a different hex
    },
    },
  },
  plugins: [],
}

























// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       fontFamily: {
//         sans: ['"Baloo Thambi 2"', "sans-serif"],
//       },
//       colors: {
//         red: "#E46356",
//         purple: "#B978B2",
//         blue: "#70CBCF",
//         yellow: "#E7E62A",
//         coffee: "#4B371C",
//         textdark: "#252525",
//       },
//     },
//   },
//   plugins: [],
// }
