/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'poppins': 'Poppins, Helvetica, Arial, sans-serif',
    },

    screens: {
      sm: '415px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        'primary-cyan': 'hsl(var(--color-primary-cyan))',
        'primary-dark-violet': 'hsl(var(--color-primary-dark-violet))',
        'secondary-red': 'hsl(var(--color-secondary-red))',
        'neutral-gray': 'hsl(var(--color-neutral-gray))',
        'neutral-gray-violet': 'hsl(var(--color-neutral-grayish-violet))',
        'neutral-very-dark-blue': 'hsl(var(--color-neutral-very-dark-blue))',
        'neutral-very-dark-violet': 'hsl(var(--color-neutral-very-dark-violet))',
      },

      fontSize: {
        base: ['18px', '24px'],
      },
      backgroundImage: {
        'desktop-shorten-image': "url(../../images/bg-shorten-desktop.svg)",
        'desktop-boost-image': "url(../../images/bg-boost-desktop.svg)",
        'mobile-shorten-image': "url(../../images/bg-shorten-mobile.svg)",
        'mobile-boost-image': "url(../../images/bg-boost-mobile.svg)",
      }
    },
  },
  plugins: [],
}

