/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        satu: "#FFFFFF", // Putih
        dua: "#87CEEB", // Biru Muda
        tiga: "#32CD32", // Hijau Segar
      },
    },
  },
  plugins: [],
};
