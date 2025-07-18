
module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {

        'slide-in': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },

        scrollLeft: {
          '0%': {
            transform: 'translateX(0%)',
          },
          '100%': {
            transform: 'translateX(-50%)',  
          },
        },
        scrollRight: {
          '0%': {
            transform: 'translateX(-50%)',  
          },
          '100%': {
            transform: 'translateX(0%)',    
          },
        },

        

      },
      animation: {
        'slide-in': 'slide-in 1s ease-out',
        scrollleft: 'scrollLeft 30s linear infinite',
        scrollright: 'scrollRight 30s linear infinite',
        
      },
      colors: {
        customGray: '#C9D1D9',
        customBlue: '#58A6FF',
        customBlack: '#161B22',
        customEblue: '#1F6FEB',
      },
      
    },
  },
  plugins: [],
}




