/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      keyframes: {
        revealLogo: {
          "0%": {
            opacity: "0",
            transform: "translateX(-15%)",
            overflow: "hidden",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
            overflow: "auto",
          },
        },
        slideLeft: {
          "0%": {
            transform: "translateX(0)",
            backgroundColor: "#0E1F2A",
            overflow: "hidden",
          },
          "100%": {
            transform: "translateX(-100%)",
            backgroundColor: "#0E1F2A",
            overflow: "auto",
          },
        },
        revealHero: {
          "0%": {
            opacity: "0",
            transform: "translateX(100%)",
            overflow: "hidden",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)", // End at the original position
            overflow: "auto",
          },
        },
        showRestOfThePage: {
          "0%": {
            visibility: "hidden",
          },
          "100%": {
            visibility: "visible",
          },
        },
        animateNavbar: {
          "0%": {
            visibility: "hidden",
            zIndex: "-50",
            top: "-100px",
          },
          "100%": {
            visibility: "visible",
            zIndex: "50",
            top: "0px",
          },
        },
        animateHeroText: {
          "0%": {
            visibility: "hidden",
            transform: "translateX(-100%)",
          },
          "100%": {
            visibility: "visible",
            transform: "translateX(0)",
          },
        },
        animateHeroButtons: {
          "0%": {
            opacity: "0",
            transform: "translateX(-5%)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        animateNoScroll: {
          "0%": {
            overflow: "hidden",
          },
          "80%": {
            overflow: "hidden",
          },
          "100%": {
            overflow: "auto",
          },
        },
      },
      animation: {
        animateNoScroll: "animateNoScroll 9000ms ease-in forwards",
        revealLogo: "revealLogo 1200ms ease-out forwards",
        slideLeft: "slideLeft 1600ms ease-out forwards 2000ms",
        revealHero: "revealHero 1500ms ease-out forwards 2000ms",
        showRestOfThePage: "showRestOfThePage 100ms ease-out forwards 3300ms",
        animateHeroText: "animateHeroText 2000ms ease-out forwards 4500ms",
        animateNavbar: "animateNavbar 1000ms ease-out forwards 7000ms",
        animateHeroButtons:
          "animateHeroButtons 1000ms ease-out forwards 7500ms",
      },
    },
    fontFamily: {
      sans: ['"Open Sans"', "sans-serif"],
      cinzel: ["Cinzel", "sans-serif"],
    },
  },
  plugins: [],
};
