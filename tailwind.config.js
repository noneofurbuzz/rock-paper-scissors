/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        "barlow" : ["barlow","sans"],
        "barlow1" : ["barlow1","sans"]
      },
      screens:{
        "vs" : "350px",
        "normal" : "375px",
        "xs": "500px",
        "s" : "550px",
        "xxs" : "400px"
      },
      keyframes: {
        wiggle: {
            '0%, 100%': {
                transform: 'rotate(-5deg)',
            },
            '50%': {
                transform: 'rotate(5deg)',
            },
        }
      },
      animation: {
        wiggle: 'wiggle 0.2s infinite ease-in-out'
      },
      colors : {
        "filter" : "hsla(0, 100%, 0%,0.5)",
        "filter-1" : "hsla(237, 49%, 15%,0.5)"
      }

    },
  },
  plugins: [],
}
