const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')

const primary = '#535DB0';

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './app/components/**/*/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary,
        bgcolor: {
          100: '#F9FAF5',
          200: '#E5E6E1'
        }
      },
    },
    keyframes: {
      fade: {
        from: { opacity: 0 },
        to: { opacity: 1 },
      },
      scaleIn: {
        '0%': {
          opacity: 0,
          transform: 'scale(0.9)',
        },
        '50%': {
          opacity: 0.3,
        },
        '100%': {
          opacity: 1,
          transform: 'scale(1)',
        },
      },
    },
    animation: {
      fade: 'fade .5s ease-in-out',
      scaleIn: 'scaleIn .35s ease-in-out',
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    plugin(({ addComponents, theme, addUtilities }) => {
      addComponents({
        '.btn-primary': {
          backgroundColor: primary,
          color: '#fff',
          borderRadius: '0.65rem',
          transition: 'background-color .3s ease-in-out',
          '&:hover': {
            backgroundColor: '#ff0009',
          },
        },

        '.text-link': {
          textUnderlineOffset: 4,
          color: 'rgba(255, 255, 255, .9)',
          transition: 'text-decoration-color .3s ease-in-out',
          textDecorationLine: 'underline',
          textDecorationColor: 'rgba(255, 255, 255, 0.2)',
          '&:hover': {
            textDecorationColor: 'rgba(255, 255, 255, 0.9)',
          },
        },

        '.air-block': {
          borderRadius: theme('borderRadius.layout'),
          backgroundColor: theme('colors.gray.950'),
          color: theme('colors.white'),
          boxShadow: theme('boxShadow.lg'),
        },
      }),
        addUtilities({
          '.text-shadow': {
            textShadow: '1px 1px rgba(0, 0, 0, 0.4)',
          },

          '.outline-border-none': {
            outline: 'none',
            border: 'none',
          },

          '.flex-center-between': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          },

          '.image-like-bg': {
            objectPosition: 'center',
            objectFit: 'cover',
            pointerEvents: 'none',
          },
        });
    }),
  ],
};
