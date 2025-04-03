tailwind.config = {
    theme: {
        extend: {
          colors: {
            // Color palette
            'gray': {
              800: '#1D2939',
              700: '#2D3A50' // For borders
            },
            'blue': {
              600: '#1570EF' // Primary button color
            },
            'primary': {
              700: '#1570EF' // Matching blue-600
            },
            'white': '#FFFFFF'
          },
          fontFamily: {
            sans: ['Inter', 'sans-serif']
          },
          spacing: {
            // Custom spacing
            '70px': '70px',
            '8px': '8px',
            '6px': '6px',
            '4px': '4px',
            '3px': '3px',
            '1px': '1px',
            '0.5': '0.125rem', // h-0.5 (1px)
            // Standard Tailwind spacing
            '0': '0px',
            '1': '0.25rem',
            '2': '0.5rem',
            '3': '0.75rem',
            '4': '1rem',
            '5': '1.25rem',
            '6': '1.5rem',
            '8': '2rem',
            '10': '2.5rem',
            '12': '3rem',
            '16': '4rem',
            '20': '5rem',
            '24': '6rem',
            '32': '8rem',
            '40': '10rem',
            '48': '12rem',
            '56': '14rem',
            '64': '16rem'
          },
          fontSize: {
            'xs': '0.75rem',
            'sm': '0.875rem',
            'base': '1rem',       // 16px - nav items, topic, subheading
            'lg': '1.125rem',     // 18px
            'xl': '1.25rem',      // 20px
            '2xl': '1.5rem',      // 24px
            '3xl': '1.875rem',    // 30px
            '4xl': '2.25rem',     // 36px
            '5xl': '3rem',        // 48px
            '6xl': '4rem'         // 64px
          },
          borderRadius: {
            'none': '0',
            'sm': '0.125rem',
            'DEFAULT': '0.25rem', // rounded (4px)
            'md': '0.375rem',     // rounded-md (6px)
            'lg': '0.5rem',       // rounded-lg (8px)
            'full': '9999px'
          },
          boxShadow: {
            'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
            'DEFAULT': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
            'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
            'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
            '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            'inner': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
            'none': 'none'
          },
          zIndex: {
            '0': 0,
            '10': 10,
            '20': 20,
            '30': 30,
            '40': 40,
            '50': 50,
            'auto': 'auto'
          },
          opacity: {
            '0': '0',
            '20': '0.2',
            '40': '0.4',
            '60': '0.6',
            '80': '0.8',
            '100': '1'
          },
          transitionProperty: {
            'none': 'none',
            'all': 'all',
            'DEFAULT': 'background-color, border-color, color, fill, stroke, opacity, box-shadow, transform',
            'colors': 'background-color, border-color, color, fill, stroke',
            'opacity': 'opacity',
            'shadow': 'box-shadow',
            'transform': 'transform'
          },
          transitionDuration: {
            'DEFAULT': '300ms',
            '75': '75ms',
            '100': '100ms',
            '150': '150ms',
            '200': '200ms',
            '300': '300ms',
            '500': '500ms',
            '700': '700ms',
            '1000': '1000ms'
          },
          translate: {
            'full': '100%',
            '1/2': '50%',
            '0': '0px',
            '1': '0.25rem',
            '2': '0.5rem',
            '3': '0.75rem',
            '4': '1rem',
            '5': '1.25rem',
            '6': '1.5rem',
            '8': '2rem',
            '10': '2.5rem',
            '12': '3rem',
            '16': '4rem',
            '20': '5rem',
            '24': '6rem',
            '32': '8rem',
            '40': '10rem',
            '48': '12rem',
            '56': '14rem',
            '64': '16rem',
            'px': '1px',
            '0.5': '0.125rem',
            '1.5': '0.375rem',
            '2.5': '0.625rem',
            '3.5': '0.875rem',
            '-full': '-100%',
            '-1/2': '-50%',
            '-0': '0px',
            '-1': '-0.25rem',
            '-2': '-0.5rem',
            '-3': '-0.75rem',
            '-4': '-1rem',
            '-5': '-1.25rem',
            '-6': '-1.5rem',
            '-8': '-2rem',
            '-10': '-2.5rem',
            '-12': '-3rem',
            '-16': '-4rem',
            '-20': '-5rem',
            '-24': '-6rem',
            '-32': '-8rem',
            '-40': '-10rem',
            '-48': '-12rem',
            '-56': '-14rem',
            '-64': '-16rem',
            '-px': '-1px',
            '-0.5': '-0.125rem',
            '-1.5': '-0.375rem',
            '-2.5': '-0.625rem',
            '-3.5': '-0.875rem'
          },
          scale: {
            '0': '0',
            '50': '.5',
            '75': '.75',
            '90': '.9',
            '95': '.95',
            '100': '1',
            '105': '1.05',
            '110': '1.1',
            '125': '1.25',
            '150': '1.5'
          }
        }
      },
      variants: {
        extend: {
          opacity: ['hover'],
          transform: ['hover'],
          scale: ['hover'],
          translate: ['hover'],
          visibility: ['responsive', 'hover', 'focus'],
          display: ['responsive', 'hover', 'focus']
        }
      },
      plugins: []
}