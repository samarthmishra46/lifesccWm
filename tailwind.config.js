/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#F5F3FF',
          100: '#EDE9FE',
          500: '#6C63FF',
          600: '#5B5AE8',
          700: '#4F46E5',
        },
        accent: {
          green: '#22C55E',
          emerald: '#10B981',
        },
        neutral: {
          light: '#F8FAFC',
          bg: '#F1F5F9',
          text: '#1F2937',
          'text-secondary': '#6B7280',
          border: '#E5E7EB',
        },
      },
      backgroundImage: {
        'gradient-soft': 'linear-gradient(135deg, #F5F3FF 0%, #F1F5F9 100%)',
        'gradient-hero': 'linear-gradient(135deg, #F5F3FF 0%, #FFFFFF 100%)',
        'gradient-cta': 'linear-gradient(135deg, #6C63FF 0%, #5B5AE8 100%)',
        'gradient-cta-hover': 'linear-gradient(135deg, #5B5AE8 0%, #4F46E5 100%)',
      },
      borderRadius: {
        'card': '16px',
        'button': '12px',
        'input': '10px',
      },
      boxShadow: {
        'soft': '0 2px 8px rgba(0, 0, 0, 0.06)',
        'soft-md': '0 4px 12px rgba(0, 0, 0, 0.08)',
        'soft-lg': '0 8px 24px rgba(0, 0, 0, 0.1)',
        'glow': '0 0 24px rgba(108, 99, 255, 0.15)',
      },
      spacing: {
        'section': '5rem',
        'section-sm': '3rem',
      },
    },
  },
  plugins: [],
};
