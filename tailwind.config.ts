import type { Config } from "tailwindcss";
// @import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap')

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors:{
      'pink':'#EA5959',
      "whitesmoke":'#F3F3F3',
      "black":"#000000",
      "white":"#FFFFFF",
      "gray":"#D8D8D8"
    }
  },
  plugins: [],
};
export default config;
