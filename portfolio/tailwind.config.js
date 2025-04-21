/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/styles/**/*.{js,ts,jsx,tsx,css}',
  ],
  theme: {
    extend: {
      colors: {
        // Fond sombre
        dark: {
          900: '#080818', // Noir profond avec nuance de bleu
          800: '#10101e', // Un peu plus clair
          700: '#181828', // Encore un peu plus clair
        },
        // Bleu électrique néon
        neon: {
          blue: '#00f0ff',
          purple: '#a200ff',
          pink: '#ff00dd',
          cyan: '#00e5ff',
        },
        // Dégradés primaires et secondaires
        primary: {
          300: '#00e5ff',
          400: '#00b8ff',
          500: '#0090ff', // Couleur principale
          600: '#0070ff',
          700: '#0055ff',
        },
        secondary: {
          300: '#f700ff',
          400: '#dc00ff',
          500: '#c500ff', // Couleur secondaire
          600: '#9600ff',
          700: '#7d00ff',
        },
        // Couleurs d'accent
        accent: {
          cyan: '#00ffe1',
          purple: '#d600ff',
          pink: '#ff007e',
          yellow: '#fff700',
        },
        // Couleurs dégradées pour glassmorphisme
        glass: {
          light: 'rgba(255, 255, 255, 0.08)',
          medium: 'rgba(255, 255, 255, 0.05)',
          dark: 'rgba(0, 0, 0, 0.3)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Roboto', 'system-ui', 'sans-serif'],
        display: ['Background', 'Orbitron', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'Consolas', 'monospace'],
      },
      boxShadow: {
        'neon-blue': '0 0 5px #00f0ff, 0 0 20px rgba(0, 240, 255, 0.3)',
        'neon-pink': '0 0 5px #ff00dd, 0 0 20px rgba(255, 0, 221, 0.3)',
        'neon-purple': '0 0 5px #a200ff, 0 0 20px rgba(162, 0, 255, 0.3)',
        'neon-sm': '0 0 2px rgba(255, 255, 255, 0.3)',
        'neon-md': '0 0 8px rgba(0, 230, 255, 0.5)',
        'neon-lg': '0 0 15px rgba(0, 230, 255, 0.5), 0 0 30px rgba(0, 230, 255, 0.3)',
        'neon-xl': '0 0 20px rgba(0, 230, 255, 0.7), 0 0 40px rgba(0, 230, 255, 0.4)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      backgroundImage: {
        'neon-gradient': 'linear-gradient(90deg, #00f0ff, #a200ff, #ff00dd)',
        'cyberpunk-gradient': 'linear-gradient(45deg, #00f0ff, #0090ff, #a200ff, #ff00dd)',
        'tech-grid': 'url("/grid.svg")',
      },
      animation: {
        'neon-pulse': 'neon-pulse 2s infinite',
        'neon-glow': 'neon-glow 2s infinite alternate',
        'text-shimmer': 'text-shimmer 2.5s linear infinite',
        'drift-x': 'drift-x 20s linear infinite',
        'drift-y': 'drift-y 15s linear infinite',
        'blob': 'blob 7s infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        'neon-pulse': {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.6 },
        },
        'neon-glow': {
          '0%': { textShadow: '0 0 5px rgba(0, 240, 255, 0.8), 0 0 10px rgba(0, 240, 255, 0.5)' },
          '100%': { textShadow: '0 0 10px rgba(0, 240, 255, 0.8), 0 0 20px rgba(0, 240, 255, 0.5), 0 0 30px rgba(0, 240, 255, 0.3)' },
        },
        'text-shimmer': {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
        'drift-x': {
          '0%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(10px)' },
          '100%': { transform: 'translateX(0)' },
        },
        'drift-y': {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(10px)' },
          '100%': { transform: 'translateY(0)' },
        },
        'blob': {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: 'translate(30px, -30px) scale(1.1)',
          },
          '66%': {
            transform: 'translate(-20px, 20px) scale(0.9)',
          },
          '100%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-15px) rotate(2deg)' },
        },
      },
      textShadow: {
        'neon': '0 0 5px #fff, 0 0 10px #fff, 0 0 15px #00f0ff, 0 0 20px #00f0ff',
        'neon-pink': '0 0 5px #fff, 0 0 10px #fff, 0 0 15px #ff00dd, 0 0 20px #ff00dd',
        'neon-sm': '0 0 2px rgba(0, 240, 255, 0.7)',
        'neon-md': '0 0 4px rgba(0, 240, 255, 0.7), 0 0 8px rgba(0, 240, 255, 0.5)',
        'neon-lg': '0 0 6px rgba(0, 240, 255, 0.7), 0 0 12px rgba(0, 240, 255, 0.5), 0 0 18px rgba(0, 240, 255, 0.3)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-shadow-neon': {
          textShadow: '0 0 5px rgba(255, 255, 255, 0.8), 0 0 10px rgba(0, 240, 255, 0.8), 0 0 15px rgba(0, 240, 255, 0.6), 0 0 20px rgba(0, 240, 255, 0.4)',
        },
        '.text-shadow-neon-pink': {
          textShadow: '0 0 5px rgba(255, 255, 255, 0.8), 0 0 10px rgba(255, 0, 221, 0.8), 0 0 15px rgba(255, 0, 221, 0.6), 0 0 20px rgba(255, 0, 221, 0.4)',
        },
        '.text-shadow-neon-sm': {
          textShadow: '0 0 2px rgba(0, 240, 255, 0.7)',
        },
        '.text-shadow-neon-md': {
          textShadow: '0 0 4px rgba(0, 240, 255, 0.7), 0 0 8px rgba(0, 240, 255, 0.5)',
        },
        '.backdrop-saturate-150': {
          backdropFilter: 'saturate(150%)',
        },
        '.animation-delay-2000': {
          animationDelay: '2s',
        },
        '.animation-delay-4000': {
          animationDelay: '4s',
        },
        '.border-glow-blue': {
          boxShadow: '0 0 5px #00f0ff, 0 0 5px #00f0ff inset',
        },
        '.border-glow-pink': {
          boxShadow: '0 0 5px #ff00dd, 0 0 5px #ff00dd inset',
        },
      };
      addUtilities(newUtilities);
    },
  ],
}