/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
    container: {
      center: true,
    },
    colors: {
      primary: 'var(--color-primary)',
      secondary: 'var(--color-secondary)',
      negative: 'var(--color-negative)',
      positive: 'var(--color-positive)',
      'primary-background': 'var(--background-primary)',
      'secondary-background': 'var(--background-secondary)',
      'primary-text': 'var(--color-text-primary)',

    },
    extend: {
      fontFamily: {
        sans: ["Roboto", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        "2xl": [
          "7rem",
          {
            // 18px 24px
            lineHeight: "9rem",
            fontWeight: "400",
          },
        ],
        "2xl-thin": [
          "7rem",
          {
            // 18px 24px
            lineHeight: "9rem",
            fontWeight: "100",
          },
        ],
        xl: [
          "1.5rem",
          {
            // 24px 32px
            lineHeight: "2rem",
            fontWeight: "400",
          },
        ],
        l: [
          "1rem",
          {
            // 16px 24px
            lineHeight: "1.5rem",
            fontWeight: "400",
          },
        ],
        'l-light': [
          "1rem",
          {
            // 16px 24px
            lineHeight: "1.5rem",
            fontWeight: "100",
          },
        ],
        m: [
          "0.9375rem",
          {
            // 15px 20px
            lineHeight: "1.25rem",
            fontWeight: "400",
          },
        ],
        s: [
          "0.875rem",
          {
            // 14px 20px
            lineHeight: "1.25rem",
            fontWeight: "400",
          },
        ],
        xs: [
          "0.75rem",
          {
            // 12px 18px
            lineHeight: "1.125rem",
            fontWeight: "400",
          },
        ],
      },
      spacing: {
        '6xl': '3rem', // 48px
        '5xl': '2.5rem', // 40px
        '4xl': '2.25rem', // 36px
        '3xl': '2rem', // 32px
        '2xl': '1.75rem', // 28px
        xl: '1.5rem', // 24px
        lg: '1.25rem', // 20px
        m: '1rem', // 16px
        s: '0.75rem', // 12px
        xs: '0.5rem', // 8px
        '2xs': '0.25rem', // 4px
        '3xs': '0.125rem', // 2px
      },
      boxShadow: {
        "todo-container": "-2px 2px 10px 2px #b8b5b5;",
      },
      borderColor: {
        primary: 'red',
      }
    },
  },
  plugins: [],
};
