/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: "#09090B",
          charcoal: "#121214",
          card: "#18181B",
          cream: "#FAF8F5",
          "cream-muted": "#F3EFE6",
          "cream-dark": "#E8E2D5",
          gold: "#D4AF37",
          "gold-light": "#F2D06B",
          "gold-dark": "#9A7B1C",
          champagne: "#E6CA65",
          brown: "#2A2421",
          gray: "#71717A",
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['"Playfair Display"', 'serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #D4AF37 0%, #F2D06B 50%, #AA8423 100%)',
        'dark-gradient': 'linear-gradient(180deg, #09090B 0%, #121214 100%)',
        'cream-gradient': 'linear-gradient(180deg, #FAF8F5 0%, #F3EFE6 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slow-zoom': 'slowZoom 20s ease-in-out infinite alternate',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slowZoom: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.08)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.85' },
        }
      }
    },
  },
  plugins: [],
};
