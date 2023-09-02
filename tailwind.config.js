/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#316FB7",
          "secondary": "#5b21b6",
          "accent": "#fde047",
          "neutral": "#241e29",
          "base-100": "#111827",
          "info": "#70a4d2",
          "success": "#059669",
          "warning": "#fcae4f",
          "error": "#b91c1c",
        },
      },
    ],
  },
}

