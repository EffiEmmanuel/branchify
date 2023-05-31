/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        branchifyBlack: "#121212",
        blueBlack: "#1E2330",
        branchifyPink: "#E9C0E9",
        branchifyPinkDarker: "#CB79CB",
      },
      colors: {
        branchifyBlack: "#121212",
        blueBlack: "#1E2330",
        branchifyPink: "#E9C0E9",
        branchifyPinkDarker: "#CB79CB",
      },
    },
  },
  plugins: [],
};
