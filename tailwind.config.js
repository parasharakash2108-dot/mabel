/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        fuchsia: {
          500: '#FF2D96',
          600: '#FF2D96',
        },
        black: '#000000',
        white: '#FFFFFF',
        gray: {
          50: '#FFFFFF',
          100: '#FFFFFF',
          200: '#FFFFFF',
          300: '#FFFFFF',
          400: '#000000',
          500: '#000000',
          600: '#000000',
          700: '#000000',
          800: '#000000',
          900: '#000000',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      fontFamily: {
        'heading': ['Montserrat', 'Poppins', 'sans-serif'],
        'script': ['Great Vibes', 'Allura', 'cursive'],
        'body': ['Open Sans', 'Lato', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 1.2s ease-out',
        'scroll-left': 'scrollLeft 40s linear infinite',
        'float-elegant': 'float-elegant 12s ease-in-out infinite',
        'gradient-x': 'gradient-x 3s ease infinite',
      },
      perspective: {
        '1000': '1000px',
        '1500': '1500px',
      },
      rotate: {
        'x-2': '2deg',
        'y-3': '3deg',
        'y-5': '5deg',
        'y-12': '12deg',
      },
      scale: {
        '102': '1.02',
      },
      backdropBlur: {
        'xs': '2px',
      },
      boxShadow: {
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        '3xl': '0 35px 60px -12px rgba(0, 0, 0, 0.3)',
        '4xl': '0 45px 80px -15px rgba(0, 0, 0, 0.4)',
      },
      borderWidth: {
        '3': '3px',
      }
    },
  },
  plugins: [],
};