/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#003554",

          "secondary": "#e0f2fe",

          "accent": "#ffc8dd",

          "neutral": "#f3f4f6",

          "base-100": "#6b7280",

          "info": "#06b6d4",

          "success": "#65a30d",

          "warning": "#eab308",

          "error": "#881337",
        },
      },
    ],
  },
  plugins: [require('daisyui'),
  ],
}