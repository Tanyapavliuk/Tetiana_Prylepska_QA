/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "640px",
      sm: "768px",
      md: "1024px",
      lg: "1200px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        sm: "1rem",
        md: "2rem",
        lg: "1rem",
      },
    },
    extend: {
      colors: { 
        white: {
          light: '#FFFFFF',
          DEFAULT: '#FFF8F8',
        },
        green: {
          DEFAULT: '#6FD7BE',
          dark: '#20756e',
          accent:'#12211C'
        },
        dark:{
          DEFAULT:'#151713', 
          dark:'#151817'
        },
        grey:{
          DEFAULT:'#363E3C'
        },
        red:'#9d344d'
      },
      gridTemplateColumns: {
        '2value': '20% 1fr',
        '3value': '20% 1fr 1fr',
        '4value': '20% 1fr 1fr 1fr',
      }, 
      boxShadow: {
        'green': '0px 2px 2px rgba(32,117,110,0.9)',
      }
    },
  },
  plugins: [],
};
