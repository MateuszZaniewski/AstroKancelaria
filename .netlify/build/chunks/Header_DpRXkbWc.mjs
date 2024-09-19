import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, a as renderComponent } from './astro/server_cRt1WtEO.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './_astro_assets_r-JeJjZ1.mjs';
/* empty css                        */

const $$Astro$1 = createAstro("https://kancelaria-paulinakomenda.netlify.app/");
const $$CtaButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CtaButton;
  const { text = "", variant = "contain" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<button${addAttribute(`${variant === "contain" ? "py-2 px-6 bg-[#B58C67] h-fit whitespace-nowrap hover:bg-[#A27350] hover:text-white active:bg-[#8B5D43] text-black" : variant === "outlined" ? "relative text-normal lg:text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#B58C67] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left border-b-2 border-black" : "border-b-2 border-black"}`, "class")}>${text}</button>`;
}, "C:/Users/mateu/Desktop/Kancelaria-PaulinaKomenda/src/ui/CtaButton.astro", void 0);

const logo = new Proxy({"src":"/_astro/logoKomenda.BLnRczZN.svg","width":298,"height":85,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/mateu/Desktop/Kancelaria-PaulinaKomenda/public/logoKomenda.svg";
							}
							
							return target[name];
						}
					});

const $$Menu = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="flex justify-between"> <div class="flex justify-end items-center"> ${renderComponent($$result, "Image", $$Image, { "src": logo, "alt": "logoKancelariaPaulinaKomenda", "class": "h-full max-h-[83px] w-[64vw] max-w-[298px] min-w-[230px] pt-[2.3vh] cursor-pointer", "loading": "eager" })} </div> <div class="lg:hidden flex items-center"> <button class="outline-none mobile-menu-close"> <svg class="w-6 h-6 hidden hamburger-icon" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"> <path d="M4 6h16M4 12h16M4 18h16"></path> </svg> <svg class="w-6 h-6 close-icon" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"> <path d="M6 18L18 6M6 6l12 12"></path> </svg> </button> </div> </div> <div class="pt-[7.5vh] sm:pt-[9vh] text-3xl sm:text-4xl sm:gap-[3.5vh] flex flex-col gap-[2.3vh] font-cinzel"> <a href="#services" class="nav-link">ZAKRES USŁUG <br class="sm:hidden"> PRAWNYCH</a> <a href="#about" class="nav-link">O MNIE</a> <a href="#opinions" class="nav-link">OPINIE</a> <a href="#blog" class="nav-link">BLOG</a> </div> <div class="pt-[6.6vh]"> <a href="#contact" class="nav-link"> <h3 class="text-3xl text-center font-cinzel sm:text-4xl sm:gap-[3.5vh]">
KONTAKT
</h3> </a> <div class="sm:max-w-[360px] sm:mx-auto flex flex-col gap-[2.3vh] pt-[1.8vh] sm:pt-[2.3vh]"> <div class="flex gap-1"> <img loading="lazy" src="IconLocation.svg" alt="Location Icon"> <span class="text-lg">ul. Sienkiewicza 55A/90, 15-002 Białystok</span> </div> <div class="flex gap-1"> <img loading="lazy" src="IconPhone.svg" alt="Phone Icon"> <a href="tel:+48508726150" class="text-lg">508 726 150</a> </div> <div class="flex gap-1"> <img loading="lazy" src="IconEmail.svg" alt="Email Icon"> <a href="mailto:adw.komenda@gmail.com" class="text-lg">adw.komenda@gmail.com</a> </div> </div> </div> <div class="pt-[7.7vh] sm:pt-[9vh]"> <div class="flex justify-center gap-9 items-center"> <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M32 16.0401C32 7.18596 24.832 0 16 0C7.168 0 0 7.18596 0 16.0401C0 23.8035 5.504 30.2677 12.8 31.7594V20.8521H9.6V16.0401H12.8V12.0301C12.8 8.93434 15.312 6.41604 18.4 6.41604H22.4V11.2281H19.2C18.32 11.2281 17.6 11.9499 17.6 12.8321V16.0401H22.4V20.8521H17.6V32C25.68 31.198 32 24.3649 32 16.0401Z" fill="black" class="hover:fill-[#B58C67]"></path> </svg> <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M9.28 0H22.72C27.84 0 32 4.16 32 9.28V22.72C32 25.1812 31.0223 27.5416 29.282 29.282C27.5416 31.0223 25.1812 32 22.72 32H9.28C4.16 32 0 27.84 0 22.72V9.28C0 6.81879 0.977712 4.45839 2.71805 2.71805C4.45839 0.977712 6.81879 0 9.28 0ZM8.96 3.2C7.43235 3.2 5.96727 3.80686 4.88707 4.88707C3.80686 5.96727 3.2 7.43235 3.2 8.96V23.04C3.2 26.224 5.776 28.8 8.96 28.8H23.04C24.5676 28.8 26.0327 28.1931 27.1129 27.1129C28.1931 26.0327 28.8 24.5676 28.8 23.04V8.96C28.8 5.776 26.224 3.2 23.04 3.2H8.96ZM24.4 5.6C24.9304 5.6 25.4391 5.81071 25.8142 6.18579C26.1893 6.56086 26.4 7.06957 26.4 7.6C26.4 8.13043 26.1893 8.63914 25.8142 9.01421C25.4391 9.38929 24.9304 9.6 24.4 9.6C23.8696 9.6 23.3609 9.38929 22.9858 9.01421C22.6107 8.63914 22.4 8.13043 22.4 7.6C22.4 7.06957 22.6107 6.56086 22.9858 6.18579C23.3609 5.81071 23.8696 5.6 24.4 5.6ZM16 8C18.1217 8 20.1566 8.84285 21.6569 10.3431C23.1571 11.8434 24 13.8783 24 16C24 18.1217 23.1571 20.1566 21.6569 21.6569C20.1566 23.1571 18.1217 24 16 24C13.8783 24 11.8434 23.1571 10.3431 21.6569C8.84285 20.1566 8 18.1217 8 16C8 13.8783 8.84285 11.8434 10.3431 10.3431C11.8434 8.84285 13.8783 8 16 8ZM16 11.2C14.727 11.2 13.5061 11.7057 12.6059 12.6059C11.7057 13.5061 11.2 14.727 11.2 16C11.2 17.273 11.7057 18.4939 12.6059 19.3941C13.5061 20.2943 14.727 20.8 16 20.8C17.273 20.8 18.4939 20.2943 19.3941 19.3941C20.2943 18.4939 20.8 17.273 20.8 16C20.8 14.727 20.2943 13.5061 19.3941 12.6059C18.4939 11.7057 17.273 11.2 16 11.2Z" fill="black" class="hover:fill-[#B58C67]"></path> </svg> <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M28.4444 0C29.3874 0 30.2918 0.374602 30.9586 1.0414C31.6254 1.70819 32 2.61256 32 3.55556V28.4444C32 29.3874 31.6254 30.2918 30.9586 30.9586C30.2918 31.6254 29.3874 32 28.4444 32H3.55556C2.61256 32 1.70819 31.6254 1.0414 30.9586C0.374602 30.2918 0 29.3874 0 28.4444V3.55556C0 2.61256 0.374602 1.70819 1.0414 1.0414C1.70819 0.374602 2.61256 0 3.55556 0H28.4444ZM27.5556 27.5556V18.1333C27.5556 16.5963 26.945 15.1221 25.8581 14.0353C24.7712 12.9484 23.2971 12.3378 21.76 12.3378C20.2489 12.3378 18.4889 13.2622 17.6356 14.6489V12.6756H12.6756V27.5556H17.6356V18.7911C17.6356 17.4222 18.7378 16.3022 20.1067 16.3022C20.7668 16.3022 21.3998 16.5644 21.8666 17.0312C22.3333 17.498 22.5956 18.131 22.5956 18.7911V27.5556H27.5556ZM6.89778 9.88445C7.68989 9.88445 8.44956 9.56978 9.00967 9.00967C9.56978 8.44956 9.88445 7.68989 9.88445 6.89778C9.88445 5.24444 8.55111 3.89333 6.89778 3.89333C6.10095 3.89333 5.33676 4.20987 4.77331 4.77331C4.20987 5.33676 3.89333 6.10095 3.89333 6.89778C3.89333 8.55111 5.24444 9.88445 6.89778 9.88445ZM9.36889 27.5556V12.6756H4.44444V27.5556H9.36889Z" fill="black" class="hover:fill-[#B58C67]"></path> </svg> </div> </div>`;
}, "C:/Users/mateu/Desktop/Kancelaria-PaulinaKomenda/src/components/Menu.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://kancelaria-paulinakomenda.netlify.app/");
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Header;
  const { animate } = Astro2.props;
  return renderTemplate(_a || (_a = __template(["", '<nav id="navbar"', ' data-astro-cid-3ef6ksr2> <div class="max-w-[1600px] mx-auto px-5 sm:px-10" data-astro-cid-3ef6ksr2> <div class="flex justify-between" data-astro-cid-3ef6ksr2> <a href="/" data-astro-cid-3ef6ksr2> <img src="/newLogo.svg" alt="logoKancelariaPaulinaKomenda" class="h-full max-h-[83px] w-full max-w-[298px] min-w-[230px] pt-[2.3vh] cursor-pointer" loading="eager" data-astro-cid-3ef6ksr2> </a> <div class="hidden lg:flex gap-12 2xl:gap-16 font-normal font-sans pt-2 items-center mix-blend-difference transition-colors" data-astro-cid-3ef6ksr2> <a href="#services" class="h-fit whitespace-nowrap font-semibold cursor-pointer nav-link hover:text-[#B58C67] active:text-[#333333] focus:border-[#533630]" aria-label="Us\u0142ugi prawne" data-astro-cid-3ef6ksr2>US\u0141UGI PRAWNE</a> <a href="#about" class="h-fit whitespace-nowrap font-semibold cursor-pointer nav-link hover:text-[#B58C67] active:text-[#333333] focus:border-[#533630]" aria-label="O mnie" data-astro-cid-3ef6ksr2>O MNIE</a> <a href="#blog" class="h-fit whitespace-nowrap font-semibold cursor-pointer nav-link hover:text-[#B58C67] active:text-[#333333] focus:border-[#533630]" aria-label="Blog" data-astro-cid-3ef6ksr2>BLOG</a> <a href="#contact" class="nav-link" aria-label="Kontakt" data-astro-cid-3ef6ksr2> ', ' </a> </div> <div class="lg:hidden flex items-center" data-astro-cid-3ef6ksr2> <button class="outline-none mobile-menu-button" data-astro-cid-3ef6ksr2> <svg class="w-6 h-6 hamburger-icon" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-3ef6ksr2> <path d="M4 6h16M4 12h16M4 18h16" data-astro-cid-3ef6ksr2></path> </svg> <svg class="w-6 h-6 hidden close-icon" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-3ef6ksr2> <path d="M6 18L18 6M6 6l12 12" data-astro-cid-3ef6ksr2></path> </svg> </button> </div> </div> </div> <!-- Mobile hamburger menu --> <div class="hidden mobile-menu absolute top-0 left-0 w-full h-screen z-40 animation-menu-slide-out" data-astro-cid-3ef6ksr2> <div class="min-h-screen bg-[#EEE5DA] px-5 pb-12" data-astro-cid-3ef6ksr2> ', ` </div> </div> </nav>  <script defer>
  document.addEventListener("DOMContentLoaded", () => {
    // Select elements
    const btn = document.querySelector(".mobile-menu-button");
    const closeBtn = document.querySelector(".mobile-menu-close");
    const menu = document.querySelector(".mobile-menu");
    const hamburgerIcon = document.querySelector(".hamburger-icon");
    const closeIcon = document.querySelector(".close-icon");
    const navLinks = document.querySelectorAll(".nav-link");

    // Open mobile menu
    btn.addEventListener("click", () => {
      menu.classList.remove("hidden", "animation-menu-slide-out");
      menu.classList.add("animation-menu-slide-in");
      hamburgerIcon.classList.add("hidden");
      closeIcon.classList.remove("hidden");

      // Disable scrolling on the body
      document.body.style.position = "fixed";
      document.body.style.overflow = "hidden";
    });

    // Close mobile menu when clicking the "X" button
    closeBtn.addEventListener("click", () => {
      menu.classList.remove("animation-menu-slide-in");
      menu.classList.add("animation-menu-slide-out");

      setTimeout(() => {
        menu.classList.add("hidden");
        // Re-enable scrolling on the body
        document.body.style.position = "";
        document.body.style.overflow = "";

        hamburgerIcon.classList.remove("hidden");
        closeIcon.classList.add("hidden");
      }, 700); // Match the duration of the slide-up animation
    });

    // Smooth scrolling and close menu on link click
    navLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault(); // Prevent default anchor link behavior

        // Get the target element by id from the href attribute
        const targetId = link.getAttribute("href").substring(1); // Remove the '#' character
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          // Close the mobile menu first
          menu.classList.remove("animation-menu-slide-in");
          menu.classList.add("animation-menu-slide-out");

          setTimeout(() => {
            menu.classList.add("hidden");
            // Re-enable scrolling on the body
            document.body.style.position = "";
            document.body.style.overflow = "";

            // Scroll to the target element
            targetElement.scrollIntoView({
              behavior: "smooth", // Smooth scrolling behavior
              block: "start", // Align the top of the element with the top of the viewport
            });
          }, 100); // Match the duration of the slide-up animation

          hamburgerIcon.classList.remove("hidden");
          closeIcon.classList.add("hidden");
        }
      });
    });
  });
<\/script>`])), maybeRenderHead(), addAttribute(`absolute z-10 w-full ${animate === true && "animate-animateNavbar invisible -z-50 -top-26 "}`, "class"), renderComponent($$result, "CtaButton", $$CtaButton, { "text": "KONTAKT", "variant": "contain", "data-astro-cid-3ef6ksr2": true }), renderComponent($$result, "Menu", $$Menu, { "data-astro-cid-3ef6ksr2": true }));
}, "C:/Users/mateu/Desktop/Kancelaria-PaulinaKomenda/src/components/Header.astro", void 0);

export { $$Header as $, $$CtaButton as a };
