/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        term: {
          bg: '#0a0d14',
          surface: '#111726',
          panel: '#161f33',
          border: '#23304a',
          muted: '#62728f',
          text: '#e2e8f0',
          accent: '#00f0ff',
          green: '#00ff88',
          orange: '#ff9d00',
          purple: '#a855f7',
        }
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', 'Menlo', 'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"', 'monospace'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 20px -5px rgba(0, 240, 255, 0.3)',
        'glow-green': '0 0 20px -5px rgba(0, 255, 136, 0.3)',
        'glow-purple': '0 0 20px -5px rgba(168, 85, 247, 0.3)',
      }
    },
  },
  plugins: [],
}
