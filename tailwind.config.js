module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1000px',
      xl: '1440px',
    },
    colors: {
      'primary-1': 'hsl(197.4, 80%, 15%)',
      'primary-2': 'hsl(197.4, 90%, 55%)',
      'primary-3': 'hsl(197.4, 30%, 25%)',
      'primary-4': 'hsl(197.4, 30%, 35%)',
      'secondary-1': 'hsl(38.8, 100%, 55%)',
      'white': '#fff',
    },
    gridTemplateColumns: {
      'autofill-sm': 'repeat(auto-fill, minmax(170px, 1fr))',
      'autofill-lg': 'repeat(auto-fit, minmax(360px, 2fr))',
      'autofill-details': 'repeat(auto-fit, minmax(250px, 1fr))',
      'grid-sm': 'repeat(2, 2fr)',
      'grid-thumbs': 'repeat(auto-fill, minmax(80px, 1fr))',
      'grid-checkout-pg': 'repeat(5, 1fr)',
      '2': 'repeat(2, 1fr)',
    },
    keyframes: {
      wiggle: {
        '0%, 100%': { transform: 'rotate(-3deg)' },
        '50%': { transform: 'rotate(3deg)' },
      },
      zoomInOut: {
        '0%, 100%': { transform: 'scale(1)' },
        '50%': { transform: 'scale(0.8)' }
      },
      bounce: {
        '0%, 100%': { transform: 'translateY(0)' },
        '50%': { transform: 'translateY(-15px)' },
      }
    },
    animation: {
      wiggle: 'wiggle 1s ease-in-out infinite',
      zoomInOut: 'zoomInOut 1s ease-in-out infinite',
      bounce: 'bounce 1s ease-in-out infinite',
    },
    extend: {},
  },
  plugins: [],
}