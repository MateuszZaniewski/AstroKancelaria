/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      keyframes: {
        revealLogo: {
          "0%": {
            opacity: "0",
            overflow: "hidden",
          },
          "100%": {
            opacity: "1",
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
            visibility: "hidden",
            transform: "translateX(100%)",
            // overflow: "hidden",
          },
          "100%": {
            visibility: "visible",
            transform: "translateX(0)", // End at the original position
            // overflow: "auto",
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
            // position: "absolute",
            zIndex: "-50",
            top: "-100px",
          },
          "100%": {
            visibility: "visible",
            // position: "fixed",
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
            overflow: "auto",
          },
          "80%": {
            overflow: "auto",
          },
          "100%": {
            overflow: "auto",
          },
        },
        showElement: {
          "0%": {
            visibility: "hidden",
          },
          "100%": {
            visibility: "visible",
          },
        },
        animateLine: {
          "0%": {
            top: "-20%",
            visibility: "visible",
          },
          "25%": {
            top: "10%",
            visibility: "visible",
          },
          "50%": {
            top: "40%",
            visibility: "visible",
          },
          "75%": {
            top: "70%",
            visibility: "visible",
          },
          "100%": {
            top: "100%",
            visibility: "visible",
          },
        },
        slideInFromRight: {
          "0%": {
            opacity: "0.5",
          },
          "100%": {
            opacity: "1",
          },
        },
      },
      animation: {
        // animateNoScroll: "animateNoScroll 9000ms ease-in forwards",
        revealLogo: "revealLogo 1000ms ease-out forwards 800ms",
        slideLeft: "slideLeft 1000ms ease-out forwards 2000ms",
        animateLine: "animateLine 1500ms linear infinite forwards",
      },
    },
    fontFamily: {
      sans: ['"Open Sans"', "sans-serif"],
      cinzel: ["Cinzel", "sans-serif"],
    },
  },
  plugins: [
    function ({ addBase }) {
      addBase({
        html: {
          scrollBehavior: "smooth",
        },
      });
    },
  ],
};
