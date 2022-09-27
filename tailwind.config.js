let plugin = require('tailwindcss/plugin')

const round = (num) =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, '$1')
    .replace(/\.0$/, '')
const rem = (px) => `${round(px / 16)}rem`
const em = (px, base) => `${round(px / base)}em`
const lh = (fontSize, lineHeight) => `${round(lineHeight / fontSize)}`

module.exports = {
  content: [
    'layouts/**/*.{htm,js}',
    'pages/**/*.{htm,js}',
    'pages/**/*.{htm,js}',
    'content/**/*.htm',
    'partials/**/*.{htm,js}',
    'src/**/*.js',
  ],
  theme: {
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    fontFamily: {
      'sans': "'Nunito Sans', 'sans-serif'"
    },
    extend: {
      fontSize: {
        '0': 0,
      },
      spacing: {
        'container': 'var(--padding-x)',
        'video': '56.25%',
      },
      padding: {
        '1/2': '50%',
      },
      maxWidth: {
        '1/3': '33.333%',
        'screen': '100vw',
      },
      maxHeight: {
        '3/4': '75%',
      },
      minHeight: {
        '16': rem(64),
        '18': rem(72),
        '100': rem(400),
        '150': rem(600),
      },
      colors: {
        'clr-header': 'rgb(var(--clrHeader) / 1)',
        'clr-body': 'rgb(var(--clrBody) / 1)',
        'clr-footer': 'rgb(var(--clrFooter) / 1)',
        'clr-heading': 'rgb(var(--clrHeading) / 1)',
        'clr-text': 'rgb(var(--clrText) / 1)',
        'clr-link': 'rgb(var(--clrLink) / 1)',
        'clr-cta': 'rgb(var(--clrCta) / 1)',
        'clr-selection': 'rgb(var(--clrSelection) / 1)',
        'clr-hover': 'rgb(var(--clrHover) / 1)',
        'clr-overlay': 'rgb(var(--clrOverlay) / 1)',
      },
    },
  },
  corePlugins: {
    container: false
  },
  plugins: [
    plugin(function ({ addVariant, addComponents, addUtilities, theme }) {   
      addVariant('carousel-inited', '&.carousel--inited');
      addVariant('slide-active', '&.carousel-slide-active');
      addVariant('slide-next', '&.carousel-slide-next');
      addVariant('slide-prev', '&.carousel-slide-prev');  
      addVariant('menu-open', '&.menu-open');  
      addComponents({
        '.container': {
          maxWidth: '100%',
          padding: '0 var(--padding-x)',
          '@screen sm': {
            '--padding-x': 'calc(50vw - calc(50vw - 3.125%))',
          },
          '@screen lg': {
            '--padding-x': 'calc(50vw - calc(50vw - 6.25%))',
          },
          '@screen 2xl': {
            '--padding-x': 'calc(50vw - calc(50vw - 9.375%))',
          },
        },
      });
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
