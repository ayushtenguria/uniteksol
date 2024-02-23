/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        'whiteSmoke':'#F5F4F4',
        'landingGray':'#E6E6E6',
        'fontBlack':'#333333',
        'landingBlue':'#79CFFF',
        'landingBlack':'#0E0F13',
        'appBlue':'#79CFFF',
        'appBluedark':'#498DF3'
      }
    },
  },
  plugins: [],
};
