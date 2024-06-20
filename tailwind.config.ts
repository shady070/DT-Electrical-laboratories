import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      lineHeight: {
        'extra-tight': '1.1', // Custom line height
        'extra-loose': '2.0', // Another custom line height
      },
      backgroundImage: {
        'prev': "url('/bg-img.png')",
        'gradient': "url('/glow.svg')",
        'firstproject': "url('/solar-p-img.png')",
        'supmrk': "url('/SupMrk.png')",
        'home': "url('/homeproject.png')",
        'cos': "url('/COS.png')",
        'head1': "url('/solar1.png')",
        'head2': "url('/head2.png')",
      },
      colors: {
       green: {
        DEFAULT: '#DBF146'
       },
       black: {
        DEFAULT: '#202020'
       }
      },
    },
  },
  plugins: [],
};
export default config;
