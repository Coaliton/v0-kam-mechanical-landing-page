import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-montserrat)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
      },
      colors: {
        // KAM Brand Colors
        gold: {
          DEFAULT: '#D4AF37',
          light: '#E5C76B',
          dark: '#B8962E',
        },
        charcoal: '#1A1A1A',
        pitch: '#0A0A0A',
        steel: '#6B7280',
        warm: '#F5F5F0',
      },
      boxShadow: {
        'gold': '0 0 20px rgba(212, 175, 55, 0.2)',
        'gold-lg': '0 0 40px rgba(212, 175, 55, 0.3)',
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.3)',
        'elevated': '0 10px 15px -3px rgba(0, 0, 0, 0.4)',
        'lift': '0 10px 25px -5px rgba(0, 0, 0, 0.4)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 600ms ease-out forwards',
        'fade-in': 'fadeIn 500ms ease-out forwards',
        'slide-in-right': 'slideInRight 300ms ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
