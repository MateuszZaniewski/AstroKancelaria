/* empty css                         */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as createAstro, a as renderComponent, e as renderHead, f as renderSlot } from './astro/server_DOrRJfdF.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './_astro_assets_BZrU0wKT.mjs';
/* empty css                         */
import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';

const $$Astro$1 = createAstro();
const $$CtaButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CtaButton;
  const { text, variant } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div> <button${addAttribute(`${variant === "contain" ? "py-2 px-6 bg-[#B58C67] h-fit whitespace-nowrap" : "border-b-2 border-black"}`, "class")}>${text}</button> </div>`;
}, "C:/Users/mateu/Desktop/Kancelaria-PaulinaKomenda/src/ui/CtaButton.astro", void 0);

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`bg-[url('/t\u0142oMobile.svg')] md:bg-[url('/t\u0142oLg.svg')] lg:bg-[url('/t\u0142oLg.svg')] xl:bg-[url('/t\u0142o.svg')] min-h-[100vh] w-auto bg-cover bg-center md:bg-right-top lg:bg-right-top xl:bg-top xl:max-w-[2600px] xl:mx-auto`, "class")}> <div class="flex flex-col items-center justify-between min-h-screen xl:mr-[16vw]"> <div class="w-full px-12 md:px-0 lg:px-12 pt-[17.062vh] md:pl-[2vw] lg:w-[1000px] lg:mr-0 2xl:max-w-[2000px] 2xl:pt-60 2xl:pr-80"> <div class="flex justify-center pb-[4.7vh] max-w-[400px] mx-auto lg:mx-0 lg:max-w-[46vw] md:mx-0"> <img src="adwokatura.svg" class="lg:w-32 lg:h-32 md:w-24 md:h-24 w-[36.923vw] h-[17.062vh] max-w-[144px] md:max-w-full" alt="logo-adwokatura"> </div> <div class="flex flex-col gap-[4.7vh] text-center pb-[6.4vh] max-w-[400px] md:max-w-[400px] mx-auto lg:justify-start lg:mx-0 lg:max-w-[46vw] md:mx-0"> <h1 class="font-cinzel leading-[1.2] 2xl:text-6xl lg:text-5xl md:text-[40px] text-[30px]">
Kancelaria adwokacka
</h1> <h1 class="font-cinzel leading-[1.2] 2xl:text-6xl lg:text-5xl md:text-[40px] text-[30px]">
Adwokat <br> Paulina komenda
</h1> </div> <div class="flex flex-col items-center gap-[3.5vh] justify-center md:max-w-[400px] lg:max-w-[46vw] lg:flex-row lg:gap-12"> ${renderComponent($$result, "CtaButton", $$CtaButton, { "text": "SKONTAKTUJ SI\u0118", "variant": "contain" })} ${renderComponent($$result, "CtaButton", $$CtaButton, { "text": "US\u0141UGI PRAWNE", "variant": "outlined" })} </div> </div> <div class="flex items-end h-full sm:h-24 mt-8 md:h-16 w-[2px] md:hidden"> <div class="bg-[#B58C67] w-2 h-16"></div> </div> </div> </div>`;
}, "C:/Users/mateu/Desktop/Kancelaria-PaulinaKomenda/src/features/hero/hero.astro", void 0);

const photo = new Proxy({"src":"/_astro/persona.D8_lYgBS.svg","width":480,"height":640,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/mateu/Desktop/Kancelaria-PaulinaKomenda/public/persona.svg";
							}
							
							return target[name];
						}
					});

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="bg-[#0E1F2A] text-[#B58C67] pt-20 pb-10 lg:pb-32 md:px-[9.3vw]" id="about"> <h2 class="text-3xl font-cinzel pb-7 pl-[9.4vw] lg:pl-0 sm:pl-10 lg:text-5xl">
O MNIE
</h2> <div class="flex flex-col-reverse lg:flex-row lg:gap-12 gap-7 sm:gap-10"> <div class="max-w-[596px] sm:max-w-[800px] sm:mx-auto sm:px-[10vw] px-[5vw] lg:px-0 lg:pt-14"> <h3 class="lg:text-2xl text-normal sm:text-xl pb-5 lg:pb-10">
Nazywam się Paulina Komenda, jestem adwokatem w Izbie Adwokackiej w
        Białymstoku.
</h3> <div class="flex flex-col gap-5 text-normal sm:text-lg"> <p>
W 2018 roku ukończyłam Wydział Prawa na Uniwersytecie w Białymstoku. W
          latach 2019 - 2021 odbyłam aplikację adwokacką w Białostockiej Izbie
          Adwokackiej, w 2022 roku zdałam egzamin zawodowy i zostałam wpisana na
          listę adwokatów Izby Adwokackiej w Białymstoku.
</p> <p>
Specjalizuję się w prowadzeniu spraw z zakresu prawa rodzinnego,
          cywilnego, spadkowego i karnego. Posiadam doświadczenie w prowadzeniu
          spraw w trybie konwencji haskiej dotyczących cywilnych aspektów
          uprowadzenia dziecka za granicę.
</p> <p>
Do każdej sprawy podchodzę indywidualnie. Celem kancelarii jest
          zapewnienie kompleksowej pomocy prawnej wszystkim, którzy jej
          potrzebują, w formie i zakresie dostosowanym do sytuacji Klienta.
</p> </div> </div> <div class="pl-[9.4vw] sm:flex sm:justify-center sm:pl-0"> <div class="border-l-2 border-[#B58C67] pl-3 md:pl-5 lg:pl-[3.3vw] lg:h-fit lg:border-l-4"> ${renderComponent($$result, "Image", $$Image, { "loading": "lazy", "src": photo, "alt": "Paulina Komenda", "class": "w-[77vw] max-w-[313px] sm:max-w-[350px] min-w-[250px] md:w-[50vw] md:max-w-[500px] md:max-h-[640px]" })} </div> </div> </div> </section>`;
}, "C:/Users/mateu/Desktop/Kancelaria-PaulinaKomenda/src/features/about/about.astro", void 0);

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

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<nav class="absolute w-full" data-astro-cid-3ef6ksr2> <div class="max-w-[1600px] mx-auto px-5 sm:px-10" data-astro-cid-3ef6ksr2> <div class="flex justify-between" data-astro-cid-3ef6ksr2> <div class="flex justify-end items-center" data-astro-cid-3ef6ksr2> ${renderComponent($$result, "Image", $$Image, { "src": logo, "alt": "logoKancelariaPaulinaKomenda", "class": "h-full max-h-[83px] w-[64vw] max-w-[298px] min-w-[230px] pt-[2.3vh] cursor-pointer", "loading": "eager", "data-astro-cid-3ef6ksr2": true })} </div> <div class="hidden lg:flex gap-12 2xl:gap-16 font-normal font-sans pt-2 items-center" data-astro-cid-3ef6ksr2> <a href="#services" class="h-fit whitespace-nowrap font-semibold cursor-pointer nav-link" data-astro-cid-3ef6ksr2>USŁUGI PRAWNE</a> <a href="#about" class="h-fit whitespace-nowrap font-semibold cursor-pointer nav-link" data-astro-cid-3ef6ksr2>O MNIE</a> <a href="#blog" class="h-fit whitespace-nowrap font-semibold cursor-pointer nav-link" data-astro-cid-3ef6ksr2>BLOG</a> <a href="#contact" class="nav-link" data-astro-cid-3ef6ksr2> ${renderComponent($$result, "CtaButton", $$CtaButton, { "text": "KONTAKT", "variant": "contain", "data-astro-cid-3ef6ksr2": true })} </a> </div> <div class="lg:hidden flex items-center" data-astro-cid-3ef6ksr2> <button class="outline-none mobile-menu-button" data-astro-cid-3ef6ksr2> <svg class="w-6 h-6 hamburger-icon" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-3ef6ksr2> <path d="M4 6h16M4 12h16M4 18h16" data-astro-cid-3ef6ksr2></path> </svg> <svg class="w-6 h-6 hidden close-icon" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-3ef6ksr2> <path d="M6 18L18 6M6 6l12 12" data-astro-cid-3ef6ksr2></path> </svg> </button> </div> </div> </div> <!-- Mobile hamburger menu --> <div class="hidden mobile-menu absolute top-0 left-0 w-full h-screen z-40 animation-menu-slide-out" data-astro-cid-3ef6ksr2> <div class="min-h-screen bg-[#EEE5DA] px-5 pb-12" data-astro-cid-3ef6ksr2> <div class="flex justify-between" data-astro-cid-3ef6ksr2> <div class="flex justify-end items-center" data-astro-cid-3ef6ksr2> ${renderComponent($$result, "Image", $$Image, { "src": logo, "alt": "logoKancelariaPaulinaKomenda", "class": "h-full max-h-[83px] w-[64vw] max-w-[298px] min-w-[230px] pt-[2.3vh] cursor-pointer", "loading": "eager", "data-astro-cid-3ef6ksr2": true })} </div> <div class="lg:hidden flex items-center" data-astro-cid-3ef6ksr2> <button class="outline-none mobile-menu-close" data-astro-cid-3ef6ksr2> <svg class="w-6 h-6 hidden hamburger-icon" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-3ef6ksr2> <path d="M4 6h16M4 12h16M4 18h16" data-astro-cid-3ef6ksr2></path> </svg> <svg class="w-6 h-6 close-icon" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-3ef6ksr2> <path d="M6 18L18 6M6 6l12 12" data-astro-cid-3ef6ksr2></path> </svg> </button> </div> </div> <div class="pt-[7.5vh] sm:pt-[9vh] text-3xl sm:text-4xl sm:gap-[3.5vh] flex flex-col gap-[2.3vh] font-cinzel" data-astro-cid-3ef6ksr2> <a href="#services" class="nav-link" data-astro-cid-3ef6ksr2>ZAKRES USŁUG <br class="sm:hidden" data-astro-cid-3ef6ksr2> PRAWNYCH</a> <a href="#about" class="nav-link" data-astro-cid-3ef6ksr2>O MNIE</a> <a href="#opinions" class="nav-link" data-astro-cid-3ef6ksr2>OPINIE</a> <a href="#blog" class="nav-link" data-astro-cid-3ef6ksr2>BLOG</a> </div> <div class="pt-[6.6vh]" data-astro-cid-3ef6ksr2> <a href="#contact" class="nav-link" data-astro-cid-3ef6ksr2> <h3 class="text-3xl text-center font-cinzel sm:text-4xl sm:gap-[3.5vh]" data-astro-cid-3ef6ksr2>
KONTAKT
</h3> </a> <div class="sm:max-w-[360px] sm:mx-auto flex flex-col gap-[2.3vh] pt-[1.8vh] sm:pt-[2.3vh]" data-astro-cid-3ef6ksr2> <div class="flex gap-1" data-astro-cid-3ef6ksr2> <img loading="lazy" src="IconLocation.svg" alt="Location Icon" data-astro-cid-3ef6ksr2> <span class="text-lg" data-astro-cid-3ef6ksr2>ul. Ogrodowa 4/20, 15-011 Białystok</span> </div> <div class="flex gap-1" data-astro-cid-3ef6ksr2> <img loading="lazy" src="IconPhone.svg" alt="Phone Icon" data-astro-cid-3ef6ksr2> <span class="text-lg" data-astro-cid-3ef6ksr2>698 741 258</span> </div> <div class="flex gap-1" data-astro-cid-3ef6ksr2> <img loading="lazy" src="IconEmail.svg" alt="Email Icon" data-astro-cid-3ef6ksr2> <span class="text-lg" data-astro-cid-3ef6ksr2>kontakt@adwkomenda.pl</span> </div> </div> </div> <div class="pt-[7.7vh] sm:pt-[9vh]" data-astro-cid-3ef6ksr2> <div class="flex justify-center gap-9 items-center" data-astro-cid-3ef6ksr2> <img loading="lazy" src="/facebook.svg" alt="Facebook Icon" class="h-8 w-8 sm:h-9 sm:w-9 cursor-pointer" data-astro-cid-3ef6ksr2> <img loading="lazy" src="/instagram.svg" alt="Instagram Icon" class="h-8 w-8 sm:h-9 sm:w-9 cursor-pointer" data-astro-cid-3ef6ksr2> <img loading="lazy" src="/linkedin.svg" alt="Linkedin Icon" class="h-8 w-8 sm:h-9 sm:w-9 cursor-pointer" data-astro-cid-3ef6ksr2> </div> </div> </div> </div> </nav>  `;
}, "C:/Users/mateu/Desktop/Kancelaria-PaulinaKomenda/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const containerStyle = "flex flex-col pl-[5vw] max-w-[400px] sm:max-w-full";
  const headingStyle = "pb-4 font-cinzel text-2xl";
  const elementsStyle = "grid grid-cols-2 grid-rows-auto gap-x-10 gap-y-7 text-normal sm:flex sm:flex-col sm:gap-5 cursor-pointer";
  return renderTemplate`${maybeRenderHead()}<section class="bg-[#0E1F2A] pt-5 md:pt-14 lg:pt-20 pb-5 text-[#B58C67]"> <div class="px-[5vw] lg:px-0 lg:pl-[9.3vw] pb-16"> <h2 class="text-4xl font-cinzel">PAULINA KOMENDA</h2> <h2 class="text-2xl font-cinzel">KANCELARIA ADWOKACKA</h2> </div> <div class="flex flex-col sm:flex-row sm:flex-wrap sm:justify-start sm:gap-x-12 sm:gap-y-5 md:justify-start md:pr-2 lg:justify-center"> <!--  --> <div${addAttribute(`${containerStyle} md:order-2`, "class")}> <h3${addAttribute(`${headingStyle}`, "class")}>USŁUGI PRAWNE</h3> <div${addAttribute(`${elementsStyle}`, "class")}> <span>Prawo rodzinne</span> <span>Konwencja Haska</span> <span>Prawo spadkowe</span> <span>Prawo karne</span> <span>Prawo cywilne</span> </div> </div> <!--  --> <div${addAttribute(`${containerStyle} pt-12 sm:pt-0 md:order-3`, "class")}> <h3${addAttribute(`${headingStyle}`, "class")}>KANCELARIA</h3> <div${addAttribute(`${elementsStyle}`, "class")}> <span class="h-fit">O mnie</span> <span>Blog</span> <span>Facebook</span> <span>Instagram</span> <span>RODO</span> <span>Polityka prywatności</span> </div> </div> <!--  --> <div${addAttribute(`${containerStyle} pt-12 sm:pt-0 md:order-1`, "class")}> <h3${addAttribute(`${headingStyle}`, "class")}>KONTAKT</h3> <div class="flex flex-col gap-5 text-normal"> <span>ul. Ogrodowa 4/20 <br> 15-011 Białystok</span> <span>Pon - Pt 9:00 - 17:00</span> <span>Tel.: 698 741 258</span> <span>kontakt@adwkomenda.pl</span> <span>NIP: 123456789</span> </div> </div> <!--  --> </div> <div class="flex gap-2 lg:gap-10 items-center justify-center pt-14 pb-10 px-[5vw] lg:px-10"> <div class="grow w-auto h-[1px] bg-[#B58C67]"></div> <img loading="lazy" class="max-w-[300px] max-h-[83px]" src="/logoKomenda.svg" alt="logoKancelariaPaulinaKomenda"> <div class="grow w-auto h-[1px] bg-[#B58C67]"></div> </div> </section>`;
}, "C:/Users/mateu/Desktop/Kancelaria-PaulinaKomenda/src/components/Footer.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><!-- Preconnect to Google Fonts --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><!-- Preload Fonts --><link rel="preload" href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap" as="style" onload="this.onload=null;this.rel='stylesheet'"><link rel="preload" href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400..900&display=swap" as="style" onload="this.onload=null;this.rel='stylesheet'"><!-- Fallback if JS is disabled -->${maybeRenderHead()}<noscript><link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet"><link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400..900&display=swap" rel="stylesheet"></noscript><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> <section class="relative z-10"> ${renderComponent($$result, "Header", $$Header, {})} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})} </section> </body></html>`;
}, "C:/Users/mateu/Desktop/Kancelaria-PaulinaKomenda/src/layouts/Layout.astro", void 0);

const Background = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  useEffect(() => {
    const img = new Image();
    img.src = "/statuaMobile.svg";
    img.onload = () => setImageLoaded(true);
    if (window.innerWidth >= 640) {
      const imgLarge = new Image();
      imgLarge.src = "/statuaFull.svg";
      imgLarge.onload = () => setImageLoaded(true);
    }
  }, []);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { style: { width: "100%", minHeight: "80vh" }, children: /* @__PURE__ */ jsx(
      "div",
      {
        style: {
          minHeight: "100vh",
          backgroundPosition: "center",
          backgroundImage: `url('/statuaMobile.svg')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: -10,
          opacity: imageLoaded ? 1 : 0,
          transition: "opacity 0.5s ease-in-out"
        },
        className: "sm:bg-[url('/statuaFull.svg')] sm:bg-right-top lg:bg-top 2xl:mx-auto"
      }
    ) }),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "fixed-background",
        style: {
          display: imageLoaded ? "block" : "none"
        }
      }
    )
  ] });
};

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="bg-[#B58C67] pt-20 pb-10" id="contact"> <h2 class="text-3xl font-cinzel sm:text-4xl pb-7 lg:pb-16 px-5 sm:px-[9.3vw] lg:text-5xl">
KONTAKT
</h2> <div class="flex flex-col lg:flex-row lg:gap-[8vw] justify-between text-normal sm:text-lg lg:pr-[9.3vw]"> <div class="flex flex-col gap-[3.5vh] max-w-[365px] sm:max-w-[420px] pb-7 sm:ml-[13.8vw] md:px-0 lg:ml-[9.3vw] px-5 sm:px-0"> <h3 class="">
Zadzwoń i umów się na spotkanie w kancelarii lub opisz w mailu swoją
        sprawę.
</h3> <div class="flex gap-1 items-start"> <img loading="lazy" src="IconLocation.svg" alt="Location Icon"> <span>ul. Ogrodowa 4/20 <br> 15-011 Białystok</span> </div> <div class="flex gap-1 items-center"> <img loading="lazy" src="IconClock.svg" alt="Clock Icon"> <span>poniedziałek - piątek 9:00 - 17:00 </span> </div> <div class="flex gap-1 items-center"> <img loading="lazy" src="IconPhone.svg" alt="Phone Icon"> <span>698 741 258</span> </div> <div class="flex gap-1 items-center"> <img loading="lazy" src="IconEmail.svg" alt="Email Icon"> <span>kontakt@adwkomenda.pl</span> </div> <div class="flex gap-1 items-center"> <img loading="lazy" src="IconNIP.svg" alt="NIP Icon"> <span>NIP: 123456789</span> </div> <div class="flex gap-5 items-center"> <img loading="lazy" src="/facebook.svg" alt="Facebook Icon" class="h-8 w-8 lg:h-9 lg:w-9 cursor-pointer"> <img loading="lazy" src="/instagram.svg" alt="Instagram Icon" class="h-8 w-8 lg:h-9 lg:w-9 cursor-pointer"> <img loading="lazy" src="/linkedin.svg" alt="Linkedin Icon" class="h-8 w-8 lg:h-9 lg:w-9 cursor-pointer"> </div> </div> <div class="no-underline overflow-hidden w-full mx-auto h-[340px] sm:h-[367px] max-w-[90vw] max-h-[90vw] md:max-w-[80vw] md:max-h-[80vw] lg:max-w-[70vw] lg:h-[60vh] lg:max-h-[553px] border border-gray-700"> <div id="embed-map-canvas w-full mx-auto h-[340px] sm:h-[367px] max-w-[90vw] max-h-[90vw] md:max-w-[80vw] md:max-h-[80vw] lg:max-w-[70vw] lg:h-[60vh] lg:max-h-[553px] " class=""> <iframe class="w-full mx-auto h-[340px] sm:h-[367px] max-w-[90vw] max-h-[90vw] md:max-w-[80vw] md:max-h-[80vw] lg:max-w-[70vw] lg:h-[60vh] lg:max-h-[553px]" src="https://www.google.com/maps/embed/v1/place?q=Białystok+Sienkiewicza+55&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8" title="googlemap" loading="lazy"></iframe> </div> </div> </div> </section>`;
}, "C:/Users/mateu/Desktop/Kancelaria-PaulinaKomenda/src/features/contact/contact.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Paulina Komenda Kancelaria Adwokacka" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "Services", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "C:/Users/mateu/Desktop/Kancelaria-PaulinaKomenda/src/features/services/Services", "client:component-export": "Services" })} <div> ${renderComponent($$result2, "About", $$About, {})} ${renderComponent($$result2, "Background", Background, { "client:idle": true, "client:component-hydration": "idle", "client:component-path": "C:/Users/mateu/Desktop/Kancelaria-PaulinaKomenda/src/ui/Background", "client:component-export": "Background" })} ${renderComponent($$result2, "Reviews", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "C:/Users/mateu/Desktop/Kancelaria-PaulinaKomenda/src/features/reviews/Reviews", "client:component-export": "Reviews" })} </div> ${renderComponent($$result2, "Blog", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "C:/Users/mateu/Desktop/Kancelaria-PaulinaKomenda/src/features/blog/Blog", "client:component-export": "Blog" })} ${renderComponent($$result2, "Contact", $$Contact, {})} </main> ` })}`;
}, "C:/Users/mateu/Desktop/Kancelaria-PaulinaKomenda/src/pages/index.astro", void 0);

const $$file = "C:/Users/mateu/Desktop/Kancelaria-PaulinaKomenda/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Index as $, _page as _ };
