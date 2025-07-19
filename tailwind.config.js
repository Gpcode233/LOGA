module.exports = {
  content: [
    "./pages/*.{html,js}",
    "./index.html",
    "./components/*.{html,js}",
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Spiritual growth and life-giving community foundation
        primary: {
          50: "#E8F5E8",
          100: "#C8E6C9", // green-100
          200: "#A5D6A7", // green-200
          300: "#81C784", // green-300
          400: "#66BB6A", // green-400
          500: "#4CAF50", // green-500
          600: "#43A047", // green-600
          700: "#388E3C", // green-700
          800: "#2E7D32", // green-800
          900: "#1B5E20", // green-900
          DEFAULT: "#2E7D32", // green-800
        },
        
        // Secondary Colors - Approachable warmth for interactive elements
        secondary: {
          50: "#E8F5E8",
          100: "#C8E6C9", // green-100
          200: "#A5D6A7", // green-200
          300: "#81C784", // green-300
          400: "#66BB6A", // green-400
          500: "#4CAF50", // green-500
          DEFAULT: "#66BB6A", // green-400
        },
        
        // Accent Colors - Divine light moments and celebration highlights
        accent: {
          50: "#FFFDE7", // yellow-50
          100: "#FFF9C4", // yellow-100
          200: "#FFF59D", // yellow-200
          300: "#FFF176", // yellow-300
          400: "#FDD835", // yellow-400
          500: "#FBC02D", // yellow-600
          DEFAULT: "#FDD835", // yellow-400
        },
        
        // Background Colors
        background: "#FFFFFF", // white
        surface: "#F8F9FA", // gray-50
        
        // Text Colors
        text: {
          primary: "#1B5E20", // green-900
          secondary: "#4A4A4A", // gray-600
        },
        
        // Status Colors
        success: "#4CAF50", // green-500
        warning: "#FF9800", // orange-500
        error: "#E53935", // red-600
      },
      
      fontFamily: {
        // Headlines: Poppins - Modern approachability with spiritual dignity
        poppins: ['Poppins', 'sans-serif'],
        
        // Body: Open Sans - Exceptional readability for spiritual content
        'open-sans': ['Open Sans', 'sans-serif'],
        sans: ['Open Sans', 'sans-serif'],
        
        // Accents: Playfair Display - Elegant emphasis for scripture quotes
        accent: ['Playfair Display', 'serif'],
        playfair: ['Playfair Display', 'serif'],
      },
      
      fontSize: {
        'hero': ['3.5rem', { lineHeight: '1.1', fontWeight: '700' }],
        'hero-sm': ['2.5rem', { lineHeight: '1.2', fontWeight: '700' }],
        'section-title': ['2.25rem', { lineHeight: '1.3', fontWeight: '600' }],
        'card-title': ['1.5rem', { lineHeight: '1.4', fontWeight: '600' }],
        'scripture': ['1.125rem', { lineHeight: '1.6', fontStyle: 'italic' }],
      },
      
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
        'section': '4rem',
      },
      
      boxShadow: {
        'sanctuary': '0 2px 8px rgba(46, 125, 50, 0.1)',
        'sanctuary-lg': '0 4px 16px rgba(46, 125, 50, 0.15)',
        'sanctuary-xl': '0 8px 24px rgba(46, 125, 50, 0.2)',
        'contemplative': '0 1px 3px rgba(46, 125, 50, 0.08)',
      },
      
      borderRadius: {
        'sanctuary': '8px',
        'sanctuary-lg': '12px',
        'sanctuary-xl': '16px',
      },
      
      borderColor: {
        'sanctuary': '#E8F5E8',
        'sanctuary-light': 'rgba(46, 125, 50, 0.1)',
      },
      
      animation: {
        'fade-in': 'fadeIn 400ms ease-out',
        'slide-up': 'slideUp 400ms ease-out',
        'slide-in-left': 'slideInLeft 500ms ease-out',
        'slide-in-right': 'slideInRight 500ms ease-out',
        'scale-in': 'scaleIn 300ms ease-out',
        'contemplative': 'contemplative 600ms ease-out',
      },
      
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        contemplative: {
          '0%': { opacity: '0', transform: 'translateY(30px) scale(0.98)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
      },
      
      transitionDuration: {
        'contemplative': '300ms',
        'contemplative-slow': '400ms',
        'sanctuary': '500ms',
      },
      
      transitionTimingFunction: {
        'contemplative': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'sanctuary': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
      
      backdropBlur: {
        'sanctuary': '8px',
      },
      
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, rgba(46, 125, 50, 0.9) 0%, rgba(102, 187, 106, 0.8) 100%)',
        'text-gradient': 'linear-gradient(135deg, #2E7D32, #66BB6A)',
        'sanctuary-gradient': 'linear-gradient(to bottom, #F8F9FA, #FFFFFF)',
      },
      
      maxWidth: {
        'sanctuary': '1200px',
        'content': '800px',
        'prose': '65ch',
      },
      
      zIndex: {
        'sanctuary': '100',
        'modal': '1000',
        'tooltip': '1100',
      },
    },
  },
  plugins: [
    function({ addUtilities, theme }) {
      const newUtilities = {
        '.text-balance': {
          'text-wrap': 'balance',
        },
        '.scrollbar-hide': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
        '.sanctuary-focus': {
          '&:focus': {
            outline: 'none',
            'box-shadow': `0 0 0 3px ${theme('colors.primary.200')}`,
            'border-color': theme('colors.primary.500'),
          },
        },
      }
      addUtilities(newUtilities)
    },
  ],
}