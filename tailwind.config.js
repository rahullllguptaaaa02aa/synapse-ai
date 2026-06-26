/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        arctic: '#F1F6F4',
        forsythia: '#FFC801',
        nocturnal: '#114C5A',
        mint: '#D9E8E2',
        saffron: '#FF9932',
        noir: '#172B36',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      spacing: {
        'fluid-xs': 'clamp(0.5rem, 1vw, 0.75rem)',
        'fluid-sm': 'clamp(0.75rem, 1.5vw, 1rem)',
        'fluid-md': 'clamp(1rem, 2vw, 1.5rem)',
        'fluid-lg': 'clamp(1.5rem, 3vw, 2.5rem)',
        'fluid-xl': 'clamp(2rem, 4vw, 4rem)',
        'fluid-2xl': 'clamp(3rem, 6vw, 6rem)',
      },
      fontSize: {
        'fluid-sm': ['clamp(0.875rem, 1.5vw, 1rem)', { lineHeight: '1.5' }],
        'fluid-base': ['clamp(1rem, 1.75vw, 1.125rem)', { lineHeight: '1.6' }],
        'fluid-lg': ['clamp(1.125rem, 2vw, 1.375rem)', { lineHeight: '1.5' }],
        'fluid-xl': ['clamp(1.5rem, 3vw, 2rem)', { lineHeight: '1.25' }],
        'fluid-2xl': ['clamp(2rem, 4vw, 3rem)', { lineHeight: '1.15' }],
        'fluid-3xl': ['clamp(2.5rem, 5vw, 4rem)', { lineHeight: '1.1' }],
      },
      transitionDuration: {
        hover: '175ms',
        layout: '350ms',
        entry: '450ms',
      },
      maxWidth: {
        content: '72rem',
      },
    },
  },
  plugins: [],
};
