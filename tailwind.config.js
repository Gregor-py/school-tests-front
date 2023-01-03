const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin');

const primary = '#0085FF';

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './app/components/**/*/*.{js,ts,jsx,tsx}'
  ],
  variants: {
    extend: {
      opacity: ['group-hover'],
      backgroundColor: ['group-hover']
    }
  },
  theme: {
    extend: {
      colors: {
        primary,
        bgcolor: {
          100: '#ffffff',
          200: '#F7F7F7'
        },
        textcolor: {
          100: '#969696',
          200: '#585757',
          300: '#1C1C1C'
        }
      }
    },
    keyframes: {
      fade: {
        from: { opacity: 0 },
        to: { opacity: 1 }
      },
      scaleIn: {
        '0%': {
          opacity: 0,
          transform: 'scale(0.9)'
        },
        '50%': {
          opacity: 0.3
        },
        '100%': {
          opacity: 1,
          transform: 'scale(1)'
        }
      }
    },
    animation: {
      fade: 'fade .5s ease-in-out',
      scaleIn: 'scaleIn .35s ease-in-out'
    }
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
            backgroundColor: '#ff0009'
          }
        },

        '.text-link': {
          textUnderlineOffset: 4,
          color: 'rgba(255, 255, 255, .9)',
          transition: 'text-decoration-color .3s ease-in-out',
          textDecorationLine: 'underline',
          textDecorationColor: 'rgba(255, 255, 255, 0.2)',
          '&:hover': {
            textDecorationColor: 'rgba(255, 255, 255, 0.9)'
          }
        },

        '.air-block': {
          borderRadius: 8,
          boxShadow:
            '0px 1px 3px rgba(0, 0, 0, 0.1), 0px 2px 1px rgba(0, 0, 0, 0.06), 0px 1px 1px rgba(0, 0, 0, 0.08)',
          background: '#FFFFFF'
        }
      }),
        addUtilities({
          '.text-shadow': {
            textShadow: '1px 1px rgba(0, 0, 0, 0.4)'
          },

          '.outline-border-none': {
            outline: 'none',
            border: 'none'
          },

          '.flex-center-between': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          },

          '.image-like-bg': {
            objectPosition: 'center',
            objectFit: 'cover',
            pointerEvents: 'none'
          }
        });
    })
  ]
};
