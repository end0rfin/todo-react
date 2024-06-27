/** @type {import('tailwindcss').Config} */

import defaultTheme from "tailwindcss/defaultTheme";

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
          "1.125rem",
          {
            // 18px 24px
            lineHeight: "1.5rem",
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
      boxShadow: {
        "todo-container": "-2px 2px 10px 2px #b8b5b5;",
      },
    },
  },
  plugins: [],
};
