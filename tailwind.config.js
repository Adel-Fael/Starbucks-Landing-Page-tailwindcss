/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1220px',
    },
    extend: {
      fontSize: {
        size0: ['0.8125rem', '1.4625rem'],
        size00: ['0.875rem', '1.3125rem'],
        size1: ['0.875rem', '1.05rem'],
        size2: [' 1.375rem', '2.0625rem'],
        size3: ['1.75rem', '2.1rem'],
        size4: ['3.125rem', '3.75rem'],
        size5: ['0.875rem', '1.575rem'],
        sizeLinks: ['1.1875rem', '1.78125rem'],
       
    
      },
      colors: {
        darkGreen: '#1e3932',
        lightGreen: '#9bf5b4',
        regularGreen: '#007042',
        accentGreen: '#00754a',
        customPink100: '#fa91aa',
        customPink200: '#F06464',
        supLightGreen: '#d3e9e2',
        lightGray: '#707070',
        ColorLink: 'rgba(0,0,0,.58)',
        hoverColor100: 'rgba(0,0,0,.1)',
        hoverColor200: 'rgba(212,233,226,.33)',

      },
      width: {
        'header-w': '40vw',
        'content-w': '60vw',
      },
      maxWidth: {
        '40': '40vw',
        '60': '60vw',
      },
      boxShadow: {
        'theShadow': 'rgba(0, 0, 0, 0.1) 0px -1px 3px 0px, rgba(0, 0, 0, 0.06) 0px -2px 2px 0px, rgba(0, 0, 0, 0.07) 0px 0px 2px 0px',
      }
    },
  },
  plugins: [],
}
