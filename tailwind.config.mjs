/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        Red: "hsl(0, 78%, 62%)",
        Cyan: "hsl(180, 62%, 55%)",
        Orange: "hsl(34, 97%, 64%)",
        Blue: "hsl(212, 86%, 64%)",
        VeryDarkBlue: "hsl(234, 12%, 34%)",
        GrayishBlue: "hsl(229, 6%, 66%)",
        VeryLightGray: "hsl(0, 0%, 98%)",
      },
      gridTemplateColumns: {
        layout: "repeat(3, auto)",
      },
    },
  },
  plugins: [],
};
