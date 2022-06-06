module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-gray': '#202226',
        'primary-violet': '#6E34FF',
        'primary-rose': '#E953C8',
        'primary-mint': '#28D6E2',
        'primary-green': '#5AD8A9',
      },
      boxShadow: {
        primary:
          '-4px -4px 15px rgba(119, 64, 255, 0.2), 4px 4px 15px rgba(110, 52, 255, 0.2), inset 2px 2px 2px rgba(83, 92, 136, 0.1)',
        footer:
          ' -12px -12px 32px #18191C, 12px 12px 32px rgba(24, 25, 28, 0.8), inset 2px 2px 2px rgba(83, 92, 136, 0.5);',
      },

      backgroundSize: {
        '300%': '300% auto',
        '100%': '100% auto',
      },

      keyframes: {
        buttonHover: {
          '0%': {
            'background-size': '500% auto',
          },

          '50%': {
            'backgrond-size': '300% auto',
          },
          '100%': {
            'backgrond-size': '100% auto',
          },
        },
        animation: {
          buttonHover: 'buttonHover 1s infinite alternate',
        },
      },
    },
  },
  plugins: [],
};
