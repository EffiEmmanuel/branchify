/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './form/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        'branchifyBlack': "#121212",
        'blueBlack': "#1E2330",
        'branchifyPink': "#E9C0E9",
        'branchifyPinkDarker': "#CB79CB",
      },
      colors: {
        'branchifyBlack': "#121212",
        'blueBlack': "#1E2330",
        'branchifyPink': "#E9C0E9",
        'branchifyPinkDarker': "#CB79CB",
      }
    },
  },
  plugins: [],
}
