/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      colors: {
        primary: '#3490dc',
        secondary: '#ffed4a',
        danger: '#e3342f',
      },
      fontSize: {
        'h1': ['2.25rem', { lineHeight: '2.5rem', fontWeight: '700' }],
        'h2': ['1.875rem', { lineHeight: '2.25rem', fontWeight: '700' }],
        'code': ['1rem', { lineHeight: '1.5rem', fontWeight: '400' }],
        'li': ['1rem', { lineHeight: '1.75rem', fontWeight: '400' }],
        'blockquote': ['1.125rem', { lineHeight: '1.75rem', fontStyle: 'italic', fontWeight: '500' }],
        'bold': ['1rem', { lineHeight: '1.75rem', fontWeight: '700' }],
      },
      spacing: {
        'image': '2rem',
      },
      borderColor: {
        'blockquote': '#3490dc',
      },
      backgroundColor: {
        'blockquote': '#f1f5f9',
      },
    },
  },
  plugins: [],
}